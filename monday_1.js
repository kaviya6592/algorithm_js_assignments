//Monday: Largest Number in Arrays
//Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

//Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
function largestOfFour(arr) {
  let final_arr=[];
  for (i=0; i< arr.length; i++)
        {
           final_arr.push(arr[i][0])
           //arr[i][0]-[4,5,1000,3]
             // console.log(arr[i]);
                 for (j=0;j<arr[i].length;j++)
            //console.log("hh"+arr[j]);
               {
                 if(final_arr[i]<arr[i][j])//arr[i]=4 arr[0]arrr[0]=4
                     {
                     final_arr[i]=arr[i][j];
                     }
        
                }


         }  
return final_arr;//return biggest value of each sub array
}
let array=largestOfFour[[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
console.log(largestOfFour(array));

//retrun only biggest value from array
//const matrix = [[2,56,10,14,422,3242],[20,34,55,100,33,422],[23,12,14,26,203,233]];
//const maximum = Math.max(...matrix.flat())
//console.log(maximum);
