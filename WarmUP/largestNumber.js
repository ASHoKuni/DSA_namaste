// find the largest number 
function largestNumber(arr){
    
    let largest = -Infinity;
    
    if(arr.length < 1){
        return 
    }
    
    for(let i=0; i < arr.length ; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    return largest;
}

// let arr  = [-2,-4,0,1,3,-2,-3]
console.log(largestNumber(arr));
