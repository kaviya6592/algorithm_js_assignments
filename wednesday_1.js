//Wednesday : Title Case a Sentence
//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lowercase.

//For the purpose of this exercise, you should also capitalize on connecting words like "the" and "of".

//For this algorithm, you can use the split() method.

let arr=[];
let final_arr1=[];
let arr_to_text;
let arr3;
let final_result;

function titleCase(sententce){
   let arr = sententce.split(" ");
   for(i=0;i<arr.length;i++){
    console.log(arr[i]);
  
        arr[i]= arr[i].charAt(0).toUpperCase()
          + arr[i].slice(1).toLowerCase()
          

       }return arr.join(' ')
       
}


console.log(titleCase("sHoRt AnD sToUt") )
