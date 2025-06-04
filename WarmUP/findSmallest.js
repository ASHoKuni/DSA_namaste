// find smalllest number in array of list 
function findSmallest(arr){
    let smallest = arr[0];
    
    for(let i=0; i< arr.length; i++){
        if(arr[i] < smallest){
            smallest = arr [i];
        }
    }
    return smallest;
}

let arr  = [-2,-4,0,1,3,-2,-3]
console.log(findSmallest(arr));




