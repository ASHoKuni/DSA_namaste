// Find the second largest number in array

function secondLargest(arr){
    let secondlargest = -Infinity;
    let largest = -Infinity;
    
    if(arr.length < 2){
        return;
    }
    
    for(let i=0;i<arr.length ; i++){
        if(arr[i]>largest){
            secondlargest = largest;
            largest = arr[i] 
        }else if(arr[i] > secondlargest && arr[i] !== largest){
            secondlargest = arr[i];
        }
    }
    return secondlargest;
    
}
let arr  = [-2,-4,0,1,3,-2,-3]

console.log(secondLargest(arr));

