// RESOURCES //

var devotionAmt = 0;
var devotionAdd = 0;

// -----------------------

var resourceMapping = {
	devotion : {
        name : "Devotion",
        color : "gold",
        amount: devotionAmt,
        baseCost: 0,
        clickValue: 1,
        fps: 0,
        mult: 1,
        idle: 0
    },
	doctrine : {
        name : "Doctrine",
        color : "cyan",
        baseCost : 100,
        amount: 0,
        costResource: "devotion",
        clickValue: 1,
        fps: 0,
        mult: 1,
        idle: 0
    },
	followers : {
        name : "Followers",
        color : "green",
        amount: 0,
        baseCost : 5,
        costResource: "doctrine",
        clickValue: 1,
        fps: 0,
        mult: 1,
        idle: 0
    },
	prisoners : {
        name : "Prisoners",
        color : "blue",
        amount: 0,
        costResource: "devotion",
        clickValue: 1,
        fps: 0,
        mult: 1,
        idle: 0        
    },
	property : {
        name : "Property",
        color : "grey",
        amount: 0,
        costResource: "devotion",
        clickValue: 1,
        fps: 0,
        mult: 1,
        idle: 0
    }
};


function colourLabels(resource){
	var path = "label-"+resource.name.toLowerCase()
	var str = document.getElementById(path).innerText;
	if (str.toLowerCase().indexOf(path) > -1) {
		str = str.replace(resource.name, '<span style="color:'+resource.color+';">'+resource.name+'</span>');  
	}
	document.getElementById(path).firstElementChild.innerHTML = str.replace(resource.name, '<span style="color:'+resource.color+';">'+resource.name+'</span>');		
}


