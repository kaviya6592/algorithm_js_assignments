//1. Print 1 - 135

//Write a program using JavaScript that will print all the numbers from 1 to 135.//

for(let i=0;i<135;i++){
    console.log(i);
}
//2.2. Print Odd Numbers 1 - 135

//Write a program using JavaScript that will print all the odd numbers from 1 to 135.

for (let i = 1; i < 135; i++) {
    if (i % 2 !== 0) {
    console.log(i + " is odd");
}
}
//3.3. Sum of Printed Numbers
let s = 0;
for (let i = 1; i < 135; i++) {
    s +=i;
    console.log(`Sum: ${s}`);
}

//4. Print the elements of an array

const x= [1,4,2,12];
for (let i = 0; i < x.length; i++) {
    console.log(x[i]);
}

//5. Find Max value in array
const x1= [2,-3,-1];
let max=0;
for(let i=0;i<x1.length;i++){
    if(x1[i]>max){
        max=x1[i];
    }
        
 }
 console.log(max);


//6. Get Average

//Given an array X, write a program that will return the average value of all elements in the array. For example, for array X = [2,1,3] your output should be 2.
let avg=0;
const X = [2,1,3];
for(let i=0;i<X.length;i++){
avg +=X[i];

}
console.log(avg);
//7. Eliminate the Negatives

//Given an array X, write a program that will remove all negative numbers and replace them with a 0. For example, for array X = [2,-1,4,-3] the output of your program should be [2,0,4,0]
const a = [2,-1,4,-3];
for(let i=0;i<a.length;i++){
    if(a[i]<0){
        a[i]=0;

    }
}
console.log(a);

//8.8. Number to String

//Write a program that takes an array of numbers and turns the negative values into strings.

const a1 = [2,-1,4,-3];
for(let i=0;i<a1.length;i++){
    if(a1[i]<0){
        a1[i]='turning';

    }
}
console.log(a1);