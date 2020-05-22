function searchSubmit(){

  var summaryInclude=60;
  var fuseOptions = {
    shouldSort: true,
    includeMatches: true,
    threshold: 0.0,
    tokenize:true,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 3,
    keys: [
      {name:"title",weight:0.8},
      {name:"contents",weight:0.5},
      {name:"tags",weight:0.3},
      {name:"categories",weight:0.3}
    ]
  };

  var searchTerm = document.getElementById("search-query").value;
  var pages = loadDatasets(function(response) {
  // Parse JSON string into object
    var actual_JSON = JSON.parse(response);
    var fuse = new Fuse(actual_JSON, fuseOptions);
    var result = fuse.search(searchTerm);
    console.log({"matches":result})
    if(result.length > 0){
      populateResults(result,searchTerm);
    } else {
      var resultList = document.getElementById("search-results-list");
      resultList.innerHTML = '<li class="list-group-item">No results found</li>';
    }
  });

}

function loadDatasets(callback) {   
    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'index.json', true);
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }

function populateResults(result,term){
  var len = result.length;
  if(len > 5) {
    return_results = 5;
  } else {
    return_results = len
  }
  var output = '';
  for (var i=0; i < return_results; i++) {
    var templateDefinition = $('#search-result-template').html();
    var contents = result[i].item.contents;
    output += render(templateDefinition,{key:i,title:result[i].item.title,link:result[i].item.permalink});
  }
  var resultBox = document.getElementById("search-results");
  var resultList = document.getElementById("search-results-list");
  resultList.innerHTML = output;
  //$('.dropdown-toggle').dropdown();
  markResults(term);
}

function markResults(term) {

  var markInstance = new Mark(document.getElementById("search-results"));
  var keyword = term;
  markInstance.unmark({
    done: function(){
      markInstance.mark(keyword);
    }
  });

}


function render(templateString, data) {
  var conditionalMatches,conditionalPattern,copy;
  conditionalPattern = /\$\{\s*isset ([a-zA-Z]*) \s*\}(.*)\$\{\s*end\s*}/g;
  //since loop below depends on re.lastInxdex, we use a copy to capture any manipulations whilst inside the loop
  copy = templateString;
  while ((conditionalMatches = conditionalPattern.exec(templateString)) !== null) {
    if(data[conditionalMatches[1]]){
      //valid key, remove conditionals, leave contents.
      copy = copy.replace(conditionalMatches[0],conditionalMatches[2]);
    }else{
      //not valid, remove entire section
      copy = copy.replace(conditionalMatches[0],'');
    }
  }
  templateString = copy;
  //now any conditionals removed we can do simple substitution
  var key, find, re;
  for (key in data) {
    find = '\\$\\{\\s*' + key + '\\s*\\}';
    re = new RegExp(find, 'g');
    templateString = templateString.replace(re, data[key]);
  }
  console.log(templateString);
  return templateString;
}