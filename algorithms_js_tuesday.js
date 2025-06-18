//1. Addition

//Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5. To solve this task you might want to use the modulus operator.
var sum=0;
for(i=200;i<=2700;i++){
if((i%3 || i%5) && !(i%3 && i%5)){
    sum +=i;
   
}
} console.log("sum of no"+sum);

//2. Shift the Values

//Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front. When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].
const array =[2,1,6,4,-7]
const reversedArray = []

for(let i = array.length - 1; i >= 0; i--) {
  const valueAtIndex = array[i]

  reversedArray.push(valueAtIndex)
}

console.log(reversedArray)
// [4, 3, 2, 1]//y=x.reverse();
//console.log("reverse arra"+y);

//3. FizzBuzz
//Create an algorithm that inserts the numbers from 1 to 135 into an array, while replacing the values that are divisible by 3 with the word "Fizz", the numbers that are divisible by 5 with the word "Buzz", and the numbers that are divisible with 3 and 5 with the word "FizzBuzz".
//let arr=[];
//console.log(arr);

//for(let j=1;j<=135;j++)
//{
   // if((j%3==0)&&(arr[j]%5==0))
   //{
      //  arr[j]="fizz";
        
        
    //}
    //else if(j%5==0){
       // arr[j]="buzz";
        
   // }
    //else if (j%3==0){
       // arr[j]="fizz buzz";
         
        
   // }

    
   // else{
   //   arr[j]=j;
   // }
//}
//console.log(arr);

//4. Fibonacci
//For a Fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.
//A Fibonacci sequence is an infinite series of numbers that is created by adding the last two numbers in the series. A series would start with the numbers 0 and 1 in place, followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.
 
let num1 = 0;
let num2 = 1;
let num3 =num1+num2;
let n=50;


console.log(num1+'\n'+num2);
    for (i = 3; i <= 10; i++) {
    console.log(num3);
    num1= num2;
    num2 = num3;
    num3=num1+num2;
  }

//5. Remove the Negative

//Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1].
    
x=[1,-2,-4,1];
for(i=0;i<=x.length;i++){
    if(x[i]<0){
        var a=x[i];
        delete x[i];
        console.log(x);


    }

}

//6. Communist Censorship

//Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], replace every letter of the word Program with *, so the output would be ['Man', 'I','Love','The','Matrix','*******']. Then make your algorithm work for any word of your choice

x = ['Man', 'I','Love','The','Matrix','Program'];
for(i=0;i<x.length;i++){

if(x[i]==='Program')
    {
        x[i]="******"
    }

}console.log(x);


