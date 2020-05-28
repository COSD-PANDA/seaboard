function getRandomColor(colors){
	let no = colors.length
	let randomNumber = Math.floor(Math.random() * no);
    console.log(colors[randomNumber]);
    return colors[randomNumber]
}

function setNewColors(colors){
	let contentDiv = document.getElementById("dpJumbotronContent");
	let bgDiv = document.getElementById("dpJumbotron");
	contentDiv.style.color = colors[0];
	bgDiv.style.backgroundColor = colors[1];
}

function activateSearch(e){
	let currentWidth = e.style.maxWidth;
	console.log(currentWidth);
	e.style.maxWidth = "100%";
	e.style.textDecoration = "none";
	e.style.borderBottom = "2px solid black";
	e.setAttribute("placeholder","");
	document.getElementById("searchSubmit").setAttribute("class","");
}

function deActivateSearch(e,ddState){
	// Check that dropdown is NOT shown
	if (ddState === false){
		// If showing, hide it
		$('#searchSubmit').dropdown('toggle');
	}
	e.style.maxWidth = "";
	e.style.textDecoration = "";
	e.style.borderBottom = "";
	e.setAttribute("placeholder","Search");
	e.value = ""
	document.getElementById("searchSubmit").setAttribute("class","invisible search-submit-invisible");
}