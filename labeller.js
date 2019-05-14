function colourLabels(){
	var text = document.getElementById("Doctrine");
	var str = text.innerHTML;

	if (str.toLowerCase().indexOf("Doctrine") > -1) {
	str = str.replace(/Doctrine/ig, '<span style="color:red;">Doctrine</span>');  
	}
	document.getElementById("Doctrine").innerHTML = str;
}