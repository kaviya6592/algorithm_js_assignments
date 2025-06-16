//Tuesday: Magic Squares
//A 3x3 magic square is a 3x3 grid of the numbers 1-9 such that each row, column, and major diagonal adds up to 15. Here's an example:

//<code>
//8 1 6
//3 5 7
//4 9 2
//</code>
//The major diagonals in this example are 8 + 5 + 2 and 6 + 5 + 4.

//Write a function that, given a grid containing the numbers 1-9, determines whether it's a magic square. Use whatever format you want for the grid, such as a 2-dimensional array, or a 1-dimensional array of length 9, or a function that takes 9 arguments. You do not need to parse the grid from the program's input, but you can if you want to. You don't need to check that each of the 9 numbers appears in the grid: assume this to be true.



//Example inputs/outputs

//<code>[8, 1, 6, 3, 5, 7, 4, 9, 2] => true
//[2, 7, 6, 9, 5, 1, 4, 3, 8] => true
//[3, 5, 7, 8, 1, 6, 4, 9, 2] => false
//[8, 1, 6, 7, 5, 3, 4, 9, 2] => false
//</code><div>
//</div>
function magic_square(arr){


 let val1=arr[0] +arr[4] +arr[8];
 let val2=arr[2]+arr[4]+arr[6];
 console.log(val1,val2);   
 
 if(val1==val2){
    return true;
     }
    else{
      return false;
    }
}
let arr_1=[8, 1, 6, 
        3, 5, 7, 
        4, 9, 2]
 console.log(magic_square(arr_1)) ;      
 
//two dimenstional array

let mat = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

console.log(mat[0][1]);
console.log(mat[2][0]);
