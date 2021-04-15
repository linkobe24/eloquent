function reverseArray(array){
    let newArray = [];
    for(let item in array){
        newArray.unshift(array[item]);
    }
    return newArray;
}

function reverseArrayInPlace(array){
    let halfway = Math.floor((array.length)/2);
    for(let i = 0; i < halfway; i++){
        let temp = array[i];
        let temp2 = array[array.length-1-i];
        array[i] = temp2;
        array[array.length-1-i] = temp;
    }
    return array;

}

