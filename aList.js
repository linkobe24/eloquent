let list = {
    value: 3,
    length: 0,
    next :{
        value: 5,
        length: 1,
        next:{
            value: 7,
            length: 2,
            next:null
        }
    }
};

let array = [1, 2 ,3];

function arrayToList(array){
    let list = null;
    let len = array.length-1;
    for(let i = array.length - 1; i >= 0 ; i--){
        list = {value : array[i],
                length: len,
                next : list};
        len--;
    }
    return list;
}

function listToArray(list){
    let array = [];
    for(let node = list; node; node = node.next){
        array.push(node.value);
    } 
    return array;
}

// //different version of listToArray
// function listToArray(list){
//     let array = [];
//     while(list){
//         array.push(list.value);
//         list = list.next;
//     }
//     return array;
// }


function prepend(element, list){
    let newList = {value: element,
                   next : list}
    return newList;
}

function nth(list, number){
  if(number == list.length){
      return list.value;
  }else if(list.next){
      return nth(list.next, number);
  }
};

// //different version of nth without length
// function nth(list, number){
//     if(!list){
//         return undefined;
//     }else if(number == 0){
//         return list.value;
//     }else{
//         return nth(list, number - 1);
//     }
// };

console.log(nth(list, 2))

