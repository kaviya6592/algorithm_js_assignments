//Friday: Sum All Odd Fibonacci
//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

//The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5, and 8.

//For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
let num1=0;
let num2=1;
let num3=num1+num2;
let arr=[];


function sumFibs(num) {
    
    console.log(num1+'\n'+num2 );
    for (i=2;i<num;i++)
    {
        console.log(num3);
        num1=num2;
        num2=num3;
        num3=num1+num2;
        
   // Loop through the array elements and store the sum in the sum variable
   if (num3 %2 !== 0)
        {
          arr.push(num3);
            
        }
    //console.log("ggg"+arr);
  
    }
    
 let sum=0;

 for(j=0;j<arr.length;j++)
 {
 sum=sum+arr[j];
 }
 console.log("sum of odd values in fib series"  + " -- " + sum)  
       



  
}
sumFibs(10);
