//Tuesday: Find the longest Word in a String
//Return the length of the longest word in the provided sentence.

//Your response should be a number. For these algorithms, you are allowed to use the split() method.



//findLongestWord("The quick brown fox jumped over the lazy dog")  // should return a number.
//findLongestWord("The quick brown fox jumped over the lazy dog"). // should return 6.
//findLongestWord("May the force be with you")  // should return 5.
let arr1=[];
let arr_val;
let index_of_word;
let longest_word;
function findLongestWord(word){
   let  new_word= word.split(" ");
   console.log(new_word);
    for(let i=0;i<new_word.length;i++)
    
    {
       console.log(new_word[i]+new_word.length);
       arr1.push(new_word[i].length);
       
      
    }
     
    console.log("gGgg"+arr1);
    let arr_val=Math.max(...arr1);
    console.log('hhh'+arr_val);
    let index_of_word=arr1.indexOf(arr_val);
    console.log("ooo"+index_of_word);
    let longest_word= new_word[index_of_word];
    console.log(longest_word);
}



findLongestWord("May the force be with you")




//easy way
function findLongestWord1(word1){
    let arr = word1.split(" ")
    let word_arr=arr[0];
    for(let i = 0 ; i<arr.length;i++){
        if(word_arr.length<arr[i].length){
            word_arr = arr[i];
        }
        
    }
    console.log(word_arr)
}
findLongestWord1("The quick brown fox jumped over the lazy dog")  // should return a number.
