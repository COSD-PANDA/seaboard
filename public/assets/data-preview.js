function getDataPreview(urlPreview){
  console.log(urlPreview);
  let callURL = urlPreview;
  let targetNode = document.getElementById('dataPreview');

 loadDataJSON(callURL,function(response) {
    var actual_JSON = JSON.parse(response);
    var tableHeaders = Object.keys(actual_JSON[0]);
    var tableHTML = '<table class="table table-sm table-bordered"><thead><tr>';
    for (var header=0;header<tableHeaders.length;header++) {
      tableHTML += '<th>'+tableHeaders[header]+'</th>';
    }
    tableHTML += '</tr></thead><tbody>';
    for (var row=0;row<actual_JSON.length;row++) {
      var rowValues = Object.values(actual_JSON[row]);
      var rowHTML = '<tr>';
      for (var field=0;field<rowValues.length;field++) {
        rowHTML += '<td>'+rowValues[field]+'</td>';
      }
      rowHTML += '</tr>';
      tableHTML += rowHTML;
    }
    tableHTML += '</tbody></table>';
    targetNode.innerHTML = tableHTML;
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