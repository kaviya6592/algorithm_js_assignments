//Wednesday: Factorialize!
//Declare a function factorialize(n) that takes an integer n as input and returns the factorial of the provided integer.

//If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

//Factorials are often represented with the shorthand notation n!

//For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
let fact=1;
for(i=1;i<5;i++){
    fact=fact * (i+1);
}console.log(fact);

//Thursday: Palindrome Checker
//Declare a function isPalindrome(str) that takes a string as an input.

//Return true if the given string is a palindrome. Otherwise, return false.

//A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

function palindrome(string){
    let str=string.split(" ");

}
let string="tyumam";
//let str=string.split(" ").join(' ').toLowerCase();

//split makes output ['mam'],0=mam
//join function output: mam

var splitString = string.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
arr_length=reverseArray.length;

//console.log("yyyyyy"+reverseArray);
//for(i=0;i<arr_length;i++){
    //console.log(reverseArray[i]);
   //console.log(arr_length);
   // console.log(reverseArray[i]);
   //console.log(reverseArray[arr_length-1]);
    if(reverseArray === splitString){
   // p =p-1;
    //console.log("palindrome");
    }else
   {
   //console.log("not palindrome");
   }

//final palindrome code
   function isPalindrome(str) {
    let rev = str.split("").reverse().join("");

    if (rev == str) {
    return rev +"palindrome";
    }
    return rev+"not palindrome";

}

let str1 = "racecar";

let str3 = "Rama";

console.log(isPalindrome(str1));

console.log(isPalindrome(str3));

