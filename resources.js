// RESOURCES //

var devotionAmt = new Decimal(0.0);
var devotionAdd = new Decimal(0.0);

// -----------------------

var metrics = {    
    devotion : {amount: devotionAmt, baseCost: 0, clickValue: 1, fps: 0, mult: 1, idle: 0}
	
}

var resourceMapping = {
	devotion : { name : "Devotion", color : "gold"},
	doctrine : { name : "Doctrine",	color : "cyan"},
	followers : { name : "Followers", color : "green"},
	prisoners : { name : "Prisoners", color : "blue" },
	property : { name : "Property",	color : "ochre"	}
};


function colourLabels(resource){
	var path = "label-"+resource.name.toLowerCase()
	var str = document.getElementById(path).innerText;		
	if (str.toLowerCase().indexOf(path) > -1) {
		str = str.replace(/resource.name/ig, '<span style="color:red;">'+resource.name+'</span>');  
	}
	document.getElementById(path).innerHTML = str;		
}

for (r in resourceMapping){	
	colourLabels(resourceMapping[r]);	
}
