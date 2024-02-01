function calculator(a, b, o){
    switch(o){
        case '+': console.log(a+b);
                    break;
        case '-': console.log(a-b);
                    break;
        case '*': console.log(a*b);
                    break;
        case '/': console.log(a/b);
                    break;
        default: console.log("Invalid Operator");
                break;
    }
}

calculator(5, 6, '+');


let dayOfWeek = "Monday";
switch (dayOfWeek) {
 case "Sunday":
   console.log("Today is Sunday!");
   break;
 case "Monday":
   console.log("Today is Monday!");
   break;
 case "Thursday":
   console.log("It's Thursday!");
   break;
 default:
    console.log("I don't know what day it is...");
}