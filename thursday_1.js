//Thursday: Sum All Numbers in a Range
//We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.


function sumAll(arr) {
    let sum=0;
    for(i=Math.min(...arr);i<=Math.max(...arr);i++){
        sum +=i;
    }
    return sum
        
}     

        //if(arr[i]<arr[i+1]){
            
         //   let incerement=arr[i]+1;
            //arr1.push(incerement)
        //}
  

console.log(sumAll([5, 10]));




