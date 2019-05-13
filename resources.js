// RESOURCES //

var resourceMapping = {

	devotion : { name : "Devotion", color : "gold"},
	doctrine : { name : "Doctrine",	color : "cyan"},
	followers : { name : "Followers", color : "green"},
	prisoners : { name : "Prisoners", color : "blue" },
	property : { name : "Property",	color : "ochre"	}

};

function colourLabels(resource){
	console.log(resource)
	console.log("label-"+resource.name.toLowerCase())
	console.log(document)
	var text = document.getElementById(resource.name.toLowerCase()).innerText;

	if (str.toLowerCase().indexOf(resource.name) > -1) {
	str = str.replace(/resource.name/ig, '<span style="color:red;">'+resource.name+'</span>');  
	}
	document.getElementById("label-"+resource).innerHTML = str;
}

for (var resource in resourceMapping){
	
	colourLabels(resourceMapping[resource]);
	
}