var exponentialRate = 15; //Higher is less extreme increase in price
var productExponentialRate = 50;

var timer = setInterval(main, 30);
var timer2 = setInterval(retractDevotion, 1000);

var maxdevotions = 24;



// -----------------------

function Devote(){
    
    devotionCounter = document.getElementById('devotion-counter');

    if (devotionAdd < maxdevotions){
        
        devotionAdd = devotionAdd.add(metrics.devotion.clickValue);
        metrics.devotion.amount =  metrics.devotion.amount.add(1)
        
        
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
               
        setTimeout(killChild, 900);       

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
	metrics.devotion.amount =  metrics.devotion.amount.add((devotionAdd / 500) * metrics.devotion.mult)
	//document.getElementById("tracker-devotion").innerHTML = round(metrics.devotion.amount);
	//colourLabels();
	
}
