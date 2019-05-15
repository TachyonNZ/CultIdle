var exponentialRate = 15; //Higher is less extreme increase in price
var productExponentialRate = 50;

var tickspeed = 50

var timer = setInterval(main, tickspeed);
var timer2 = setInterval(retractDevotion, 1000);

var maxdevotions = 24;
var devotionDivide = 69;


// -----------------------

function Devote(){
    
    
    if (resourceMapping.devotion.limit > resourceMapping.devotion.amount){
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
            if (resourceMapping[resource].limit > resourceMapping[resource].amount){
                
                resourceMapping[resourceMapping[resource].costResource].amount -= resourceMapping[resource].baseCost;
                resourceMapping[resource].amount += amount;
                
            }
        
        }  
    }    
    
}

function checkLimits(){
    
    for (res in resourceMapping){
        
        if (resourceMapping[res].amount > resourceMapping[res].limit){
            resourceMapping[res].amount = resourceMapping[res].limit;
            document.getElementById("limit-"+res).classList.add('limit-hit');
            document.getElementById("limit-"+res).classList.remove('limit');
        }
        else {
            document.getElementById("limit-"+res).classList.add('limit');
            document.getElementById("limit-"+res).classList.remove('limit-hit');
        }
    }
    
}

function pushLimits(){
    
    for (res in resourceMapping){
        
        document.getElementById("limit-"+res).innerHTML = "/ "+round(resourceMapping[res].limit);
        
    }
    
}
function pushPersec(){
    var target = "";
    var persecMaps = {}

    for (res in resourceMapping){
        persecMaps[res] = {perTick:0}
    }
    
    persecMaps["devotion"].perTick += ((devotionAdd / devotionDivide) * resourceMapping.devotion.mult)
    
    for (map in persecMaps){
        for (res in resourceMapping){
            if (resourceMapping[res].creates !== undefined){
                persecMaps[resourceMapping[res].creates].perTick += (resourceMapping[res].createsPerTick * resourceMapping[res].createsPerTickMult * resourceMapping[res].amount)
            }
            
        }
        try{
        document.getElementById("persec-"+map).innerHTML = "+ " + ((persecMaps[map].perTick * (1000 / tickspeed)).toFixed(2));
        }catch{}
    }


    return persecMaps;
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

    if (resourceMapping.devotion.amount < resourceMapping.devotion.limit){
        resourceMapping.devotion.amount += ((devotionAdd / devotionDivide) * resourceMapping.devotion.mult)
        document.getElementById("tracker-devotion").innerHTML = round(resourceMapping.devotion.amount);
    }
    checkLimits();
    pushLimits();
    persecs = pushPersec();

    for (res in persecs){
        try { //sorry
            resourceMapping[res].amount += (persecs[res].perTick);
            document.getElementById("tracker-"+resourceMapping[res].name.toLowerCase()).innerHTML = round(resourceMapping[res].amount);
        }
        catch {}
    }
    
    checkLimits();
    pushLimits();
    
    searchAchieves();
	
	
	
}
