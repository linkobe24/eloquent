function range(start, end, step = 1){
    let array = [];
    if(step > 0){
        for (let i = start; i <= end; i += step ){
            array.push(i);
        }  
    }else{
        for(let i = start; i >= end; i += step){
            array.push(i);
        }
    }  
    return array;
}


function sum(array){
    let sumOfArray = 0;
    for(let num in array){
        sumOfArray += array[num];
    }
    return sumOfArray;
}

