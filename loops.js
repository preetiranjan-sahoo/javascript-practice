//if else
// let temp = 19;
// if(temp > 30){
//     console.log("It's hot");
// }else if(temp >20 && temp <30){
//     console.log("It's warm");
// }else{
//     console.log("It's cold");
// }

// let age = 19;
// let isCitizen = true;
// let isRegistered = true;
// if(age >= 18){
//     if(isCitizen ){
//         if(isRegistered){
//             console.log("You can vote");
//         }else{
//             console.log("You are not registered");
//         }
//     }else{
//         console.log("You are not a citizen");
//     }
// }else{
//     console.log("You are not eligible to vote");
// }

// let num=34;
// if(num % 2 === 0){
//     console.log("Number is even");
// }else{
//     console.log("Number is odd");
// }

// let num = 12;
// if(num == 0){
//     console.log("Number is zero");
// }else if(num>0){
//     console.log("Number is positive");
// }else{
//     console.log("Number is negative");
// }

// let myName = "banty";
// if(myName == "banty"){
//     myName = "bablu"
// }
// console.log(myName);



//switch case
// let day = "monday";

// switch(day){
//     case "monday":
//         console.log("Today is monday");
//         break;
//     case "tuesday":
//          console.log("Today is tuesday");
//          break;
//     case "wednesday":
//           console.log("Today is wednesday");
//          break;
//     default:"out of day";
// }

// let areaOfShape = "rectangle";
// let a=5;
// let b=10;
// var result;
// switch(areaOfShape){
//     case "circle":
//         result = Math.PI * a * a;
//         console.log(result);
//         break;
//     case "rectangle":
//         result = b * a;
//         console.log(result);
//         break;      
//     case "square":
//         result = a * a;
//         console.log(result);
//         break;

//         default:
//             console.log("Invalid shape");
// }



//do-while loop
// var n=1;
// do{
//     console.log(n);
//     n++;
//     }while(n<=10);


// while loop

// let userNum=prompt("guess the number ");
// while(userNum != gameNum){
//     userNum=prompt("wrong, guess again");
// }
// console.log("game over");

// let n=1;
// while(n<=10){
//     console.log('5 * '+ n + ' = ' + 5*n);
//     n++;
// }


//for loop

// for(let i=1;i<=5;i++){
// let gameNum=20;
//     console.log("banty");
// }
// console.log("loop hsa ended");

//calculate the sum of number from 1 to 10 using a for loop
// let sum=0;
// for(let i=1;i<=10;i++){
//     sum+=i;
// }
// console.log(sum);

// check if a year is leap year using for loop
//let year=2022;
//for(let i=1;i<=year;i++){
    // if(year%4==0 && year%100!=0){
    //     console.log("is a leap year");
    //     }else{
    //         console.log("is not a leap year");
    //     }
// }


//star pattern using for loop
// *
// * *
// * * *
// * * * *
// let n=4;
// for(let i=1;i<=n;i++){
//     let str="* ".repeat(i);
//     console.log(str);
//     } 

// for(var i=1;i<=4;i++){
//     var pattern = "";
//     for(var j=1; j<=i;j++){
//         pattern = pattern + "*";
//     }
//     console.log(pattern);
// }