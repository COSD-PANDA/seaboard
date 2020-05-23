function drawMap(){
      
      var map = L.map("map",{zoomControl:false}).setView([32.78675645, -117.12028935]);
      map.setZoom(12);
      map.addControl(L.control.zoom({position:'topright'}));
      L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
      {
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
      }).addTo(map);
      var u = 'https://cityofsandiego-admin.carto.com/api/v2/sql?q=SELECT * FROM andrellbower.public_art_locations_datasd_v1&api_key=0e5603ded008d02e844d5888e07e8f36e195fd93';
    function getGeom(callback){
      $.ajax({
        url: u,
        success: function(response){
          callback(response);
        }
      })
    }
    getGeom(function(data){
      artWork = createArt(data);
      var length = artWork.length;
      var coordsBounds = [];
      for (i=0;i<length;i++) {
        console.log(artWork[i]);
        coordsBounds.push(artWork[i].latlng);
        var facility = artWork[i].location;
        var noPieces = artWork[i].artwork.length;
        var geom = artWork[i].latlng;

        if (noPieces === 1) {
          var iconOptions = {iconSize:[10,10],html:'',className:'sm-circle'};
          var popupContent = '<div class="popup"><p><b>'+facility+'</b></p>';
          popupContent += '<p><i>'+artWork[i].artwork[0].name+'</i><br>'+artWork[i].artwork[0].artist+'</p></div>';
        } else {
          if (noPieces <= 10) {
            var iconOptions = {iconSize:[20,20],html:noPieces,className:'med-circle'};
          } else {
            var iconOptions = {iconSize:[30,30],html:noPieces,className:'big-circle'};
          }
          var popupContent = '<div class="popup"><p><b>'+facility+'</b></p>';
          artWork[i].artwork.sort(compare);
          for (j=0;j<noPieces;j++) {
            popupContent += '<p><i>'+artWork[i].artwork[j].name+'</i><br>'+artWork[i].artwork[j].artist;
            if (artWork[i].artwork[j].add_location != '') {
              popupContent += '<br>'+artWork[i].artwork[j].add_location+'</p>';
            } else {
              popupContent += '</p>';
            }
            
          }
          popupContent += '</div>';

        }

        
        var noIcon = L.divIcon(iconOptions);
        var circle = L.marker();
        circle.setLatLng(geom);
        circle.setIcon(noIcon);
          /*
          circle.setStyle({
            stroke: true,
            color: "#80e0d3",
            weight: 0.3,
            fillOpacity: 0.75,
            fillColor: "#80e0d3",
            className: "art"
          });
          */
        circle.bindPopup(popupContent).openPopup();
        circle.addTo(map);
          //map.addLayer(circle);
      }

      layerBounds = L.latLngBounds(coordsBounds);
      map.fitBounds(layerBounds);

    });
    
 }

 function compare(a,b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}

 function createArt(data) {
  var results = data.total_rows;
  var coordsUnique = [];
  var art = [];
  if (results > 0){
    for (i=0;i<results;i++){
      var latlng = L.latLng(data.rows[i].lat,data.rows[i].lng);
      var latStr = String(data.rows[i].lat);
      var lngStr = String(data.rows[i].lng);
      var latlngStr = latStr+","+lngStr;
      var coordsCheck = arrayContains(latlngStr,coordsUnique);
      var name = data.rows[i].artwork_title;
      var artist = data.rows[i].artist;
      var facility = data.rows[i].location;
      var appt = data.rows[i].status;
      
      if (appt.includes('Contact')) {
        var apptDisplay = "Yes";
      } else {
        var apptDisplay = "No"
      }

      if (facility != "") {
        
        var facility_parts = facility.split(':');
        
        var loc_details = "";
        var facility_name = facility_parts[2].trim();
        
        if (facility_parts.length > 3) {
          facility_name += '<br>'+facility_parts[3].trim();
        }

        if (facility_parts.length >= 4) {
          for (f=4;f<facility_parts.length;f++){
              loc_details += facility_parts[f].trim()
              loc_details += '<br>'
          }
        }
      }
    
      if (coordsCheck === -1) {
        coordsUnique.push(latlngStr);
        art.push({location:facility_name,latlng:latlng,artwork:[{name:name, artist:artist, appt:apptDisplay, add_location: loc_details}]});
      } else {
        art[coordsCheck].artwork.push({name:name, artist:artist, appt:apptDisplay, add_location:loc_details});
      }



    }
    
    return art;

  }
 }

 function arrayContains(n, array) {
  return (array.indexOf(n));
 }