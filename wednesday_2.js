//Perform a search and replace the sentence using the arguments provided and return the new sentence.

//The first argument is the sentence to perform the search and replace on.
//The second argument is the word that you will be replacing (before).
//The third argument is what you will be replacing the second argument with (after).
//NOTE: Preserve the case of the original word when you are replacing it.
let str="A quick brown fox jumped over the lazy dog";


//For example, if you mean to replace the word "Book" with the word "dog", it should be replaced with "Dog"
let new_arr=[];
function replace(str,before,after){
     let string_arr=str.split(' ');
     //console.log(srting_arr.length);
     console.log("hhh"+string_arr);

    for(let i=0;i<string_arr.length;i++)
    
    {
       new_arr.push(string_arr[i]);
       if(new_arr[i]== before)
       {
        new_arr[i]=after;

       }

    }
    console.log("original sentence"+ " - " +str);

    console.log("new sentence"+ " - " + new_arr.join(" "));
    //for(i=0;<srting_arr.length();i++){

    }



replace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")