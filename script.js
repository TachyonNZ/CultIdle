var exponentialRate = 15; //Higher is less extreme increase in price
var productExponentialRate = 50;

var timer = setInterval(main, 30);
var timer2 = setInterval(retractDevotion, 2000);

var devotion = new Decimal(0.0);
var devotionAdd = new Decimal(0.0);
var maxdevotions = 24;
// -----------------------

metrics = {
    
    devotion : {amount: 0, baseCost: 0, clickValue: 1, fps: 0, mult: 1, idle: 0}
	
}

// -----------------------

function Devote(){
    
    devotionCounter = document.getElementById('devotion-counter');

    if (devotionAdd < maxdevotions){
        
        devotionAdd = devotionAdd.add(metrics.devotion.clickValue);
        
        
        
        for(i = 0; i <= devotionAdd; i++){
            if (i == devotionAdd){
                for(k = 0; k < metrics.devotion.clickValue; k++)
                {
                    var counter = document.createElement('div');
                    
                    counter.classList.add('devotionPip');
                    counter.classList.add('slideIn');
                    
                    devotionCounter.insertBefore(counter, devotionCounter.childNodes[0]);
                }
            }
        }        
        
    } 
}

function retractDevotion(){
    
    devotionCounter = document.getElementById('devotion-counter');
    
    if (devotionAdd > 0){
        
        counter = devotionCounter.lastChild
        
        counter.classList.remove('slideIn');
        counter.classList.add('slideOut');
        counter.style.webkitAnimationName = 'slideOut';
               
        setTimeout(killChild, 1900);       

    }
    
}

function killChild(){
    
    devotionAdd = devotionAdd.subtract(1)
    devotionCounter.removeChild(counter)
    
}

function round(labelValue, decimals=3, fixedTo=3){
    
    
	return Math.round(labelValue);
    //return labelValue.toExponential(3);
   
}


function main() {	

	metrics.devotion.amount += (devotionAdd / 800) * metrics.devotion.mult
	document.getElementById("tracker-devotion").innerHTML = round(metrics.devotion.amount);
	
}
