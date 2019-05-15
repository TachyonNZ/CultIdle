function unhideMetric(resource){
    
    var path = "label-"+resource;
    document.getElementById(path).classList.remove('hidden');
    
}

var achievements = {

    doctrineUnlocked : {unlocked: false, trigger: resourceMapping.doctrine, amount: 1, effect:"unhideMetric", effector:'doctrine'},
    preachUnlocked : {unlocked: false, trigger: resourceMapping.followers, amount: 1, effect:"unhideMetric", effector:'followers'}

}

function searchAchieves(){
    
    for (cheev in achievements){
        
        if (achievements[cheev].trigger.amount >= achievements[cheev].amount){
            
            switch (achievements[cheev].effect){
                case "unhideMetric":
                    unhideMetric(achievements[cheev].effector);
                    achievements[cheev].unlocked = true;
                    break;               
                
                case "none":
                    break;
                
            }
            cheev.effect;
            
        }
        
        if (achievements[cheev].unlocked){unhideMetric(achievements[cheev].effector)}
        
    }
    
}