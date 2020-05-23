function copyDatasetLink() {
	var linkInput = this.getElementsByTagName('textarea');
	linkInput[0].focus()
	linkInput[0].select();
	document.execCommand("copy");
	//link.select();
	//document.execCommand("copy");
	//console.log(link.value);
}