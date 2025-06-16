//Monday: Game of 3s
//We want to play a "Game of 3s". Here's how you play it:

//First, you pick a random number. Then, repeatedly do the following:

//If the number is divisible by 3, divide it by 3.
//If it's not, either add 1 or subtract 1 (to make it divisible by 3), then divide it by 3.
//The game stops when you reach "1".



//Challenge Description
//The input is a single number: the number at which the game starts. Write a program that plays the 3s game, and outputs a valid sequence of steps you need to take to get to 1. Each step should be output as the number you start at, followed by either -1 or 1 (if you are adding/subtracting 1 before dividing), or 0 (if you are just dividing). The last line should simply be 1.



//Input Description
//The input is a single number: the number at which the game starts.

//gameOfThree(100);

//Output Description
//The output is a list of valid steps that must be taken to play the game. Each step is represented by the number you start at, followed by either -1 or 1 (if you are adding/subtracting 1 before dividing), or 0 (if you are just dividing). The last line should simply be 1.

//OUTPUT:
//100 -1
//33 0
//11 1
//4 -1
//1
//

function game_of_three(num){

while(num>1){
    if(num%3 ===0){
        console.log(num,0)
        num=num/3
    }
    else if(num%3==1){
        console.log(num,-1)
        num -=-1;
        num/=3
        num=~~num;
    }
    else
    {
        console.log(num,+1)
        num +=1;
        num/=3
        num=~~num;
    }
    

}

return num;


}
console.log(game_of_three(100))