var exponentialRate = 15; //Higher is less extreme increase in price
var productExponentialRate = 50;

var timer = setInterval(main, 30);
var timer2 = setInterval(retractDevotion, 1000);

var maxdevotions = 24;



// -----------------------

function Devote(){
    
    devotionCounter = document.getElementById('devotion-counter');

    resourceMapping.devotion.amount += 1
    
    if (devotionAdd < maxdevotions){
        
        devotionAdd += resourceMapping.devotion.clickValue;
        
        
        
        for(i = 0; i <= devotionAdd; i++){
            if (i == devotionAdd){
                for(k = 0; k < resourceMapping.devotion.clickValue; k++)
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
    
    devotionAdd -= 1
    devotionCounter.removeChild(counter)
    
}

function round(labelValue, decimals=3, fixedTo=3){
    
    
	return Math.round(labelValue);
    //return labelValue.toExponential(3);
   
}

function addResource(resource,amount=1,fixed=true){
    
    if (fixed){
        if (figureFixedCost(resourceMapping[resource].baseCost,resourceMapping[resource],resourceMapping[resource].costResource,amount)){
            resourceMapping[resourceMapping[resource].costResource].amount -= resourceMapping[resource].baseCost;
            resourceMapping[resource].amount += amount;
        
        }  
    }    
    
}


function figureFixedCost(cost,resource,req,amount=1){
    
    var totalCost = cost * amount
    if (resourceMapping[resource.costResource].amount >= resource.baseCost){
        return true;
    }
    return false;
    
}

for (r in resourceMapping){	
        colourLabels(resourceMapping[r]);	
    }

function main() {	

    resourceMapping.devotion.amount += ((devotionAdd / 200) * resourceMapping.devotion.mult)
    document.getElementById("tracker-devotion").innerHTML = round(resourceMapping.devotion.amount);


    for (res in resourceMapping){
        try { //sorry
            res.amount += (resourceMapping[res].fps * resourceMapping[res].mult);
            document.getElementById("tracker-"+resourceMapping[res].name.toLowerCase()).innerHTML = round(resourceMapping[res].amount);
        }
        catch {}
    }

    searchAchieves();
	
	
	
}
