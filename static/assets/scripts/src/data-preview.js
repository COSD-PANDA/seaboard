function getDataPreview(urlPreview){
  let callURL = urlPreview;
  let targetNode = document.getElementById('dataPreview');

 loadDataJSON(callURL,function(response) {
    let actual_JSON = JSON.parse(response);
    var tableHeaders = Object.keys(actual_JSON[0]);
    var tableHTML = '<table class="table table-sm table-bordered"><thead><tr>';
    for (var header=0;header<tableHeaders.length;header++) {
      tableHTML += '<th>'+tableHeaders[header]+'</th>';
    }
    tableHTML += '</tr></thead><tbody>';
    for (let row=0;row<actual_JSON.length;row++) {
      var rowValues = Object.values(actual_JSON[row]);
      var rowHTML = '<tr>';
      for (let field=0;field<rowValues.length;field++) {
        rowHTML += '<td>'+rowValues[field]+'</td>';
      }
      rowHTML += '</tr>';
      tableHTML += rowHTML;
    }
    tableHTML += '</tbody></table>';
    targetNode.innerHTML = tableHTML;
  });

}

function getDataDates(id) {
  const callURL = "https://raw.githubusercontent.com/COSD-PANDA/data-inventory/master/data.json";
  let dataID = id.toLowerCase();
  let targetNode = document.getElementById('dateModified');

  loadDataJSON(callURL,function(response) {

    let actual_JSON = JSON.parse(response);
    let datasets_JSON = actual_JSON.dataset;
    let dateMod;

    for (let row=0;row<datasets_JSON.length;row++) {

      let rowTitle = datasets_JSON[row].title;
      let rowTitleLC = rowTitle.toLowerCase();
      console.log(rowTitleLC === dataID);

      if (rowTitleLC === dataID) {
        dateMod = datasets_JSON[row].modified;
      }
    }

    if (dateMod) {
      targetNode.innerHTML = dateMod;
    } else {
      console.log("Match could not be found");
    }

  });


}

function loadDataJSON(callURL,callback) {
    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', callURL, true);
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
}

function togglePreviewButtons(button){
  const previewButtons = document.getElementsByClassName("preview-button");
  let itemsProcessed = 0
  Array.from(previewButtons).forEach((item, index, array) => {
      if (item.hasAttribute("disabled")) {
        item.removeAttribute("disabled");
      }
      itemsProcessed++;
      if(itemsProcessed === array.length) {
        button.setAttribute("disabled","");
      }
  });
  
}

function copyDatasetLink() {
  var linkInput = this.getElementsByTagName('textarea');
  linkInput[0].focus()
  linkInput[0].select();
  document.execCommand("copy");
  //link.select();
  //document.execCommand("copy");
  //console.log(link.value);
}