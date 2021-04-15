function deepEqual(val1, val2){
    if(val1 === val2){
        return true;
    }
    if(val1 == null || typeof val1 != "object" ||
       val2 == null || typeof val2 != "object"){
           return false;
    }
    
    let keysA = Object.keys(val1);
    let keysB = Object.keys(val2);

    if(keysA.length != keysB.length){
        return false;
    }

    for(let key of keysA){
        if(!keysB.includes(key) || !deepEqual(val1[key], val2[key])){
            return false
        }
    }

    return true;
}