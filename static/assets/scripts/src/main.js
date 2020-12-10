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