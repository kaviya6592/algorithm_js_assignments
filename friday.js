//friday excercise:
//Having an array of numbers, write an algorithm that will return the 3rd highest number in the array. Your algorithm should do only one iteration of the array (just one for/while loop).
const max_val_arr=[];
let arr1= [3, 4, 1, 5, 9, 2, 6, 5];
let arr = [3, 4, 1, 5, 9, 2, 6, 5];
//find max1 value
const max1 = Math.max(...arr);
//(...), is used to expand iterable elements 
//console.log(max1); // Output: 9
max_val_arr.push(max1);
//console.log(max_val_arr);

//remove max 1 value ffrom array
arr=arr.filter(item => item!== max1)
//console.log('dddd'+arr);

//find max2 value
const max2 = Math.max(...arr);
//console.log("max2"+max2);
max_val_arr.push(max2);
//console.log(max_val_arr);

//remove max 2 value ffrom array
arr=arr.filter(item => item!== max2)
//console.log('dddd'+arr);

//find max3 value
const max3 = Math.max(...arr);
//console.log("max3"+max2);
max_val_arr.push(max3);
//console.log(max_val_arr);

//remove max 3 value ffrom array
arr=arr.filter(item => item!== max3)
//console.log('eeee'+arr);
console.log(arr1);
for (i=0;i<1;i++){
let third_highest_no= Math.min(...max_val_arr)
console.log("third highest no in array "+" "+third_highest_no);

}











