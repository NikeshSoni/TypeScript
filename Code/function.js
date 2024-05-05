"use strict";
// Bad Code of function 
// function calCulate(value) {
//         return value + 6
// value.toUppercase()
// }
Object.defineProperty(exports, "__esModule", { value: true });
// calCulate(4) // when we hover it its any mean not defind type of this function
// calCulate("4")  its work
function calCulate(value) {
    return value + 6;
}
calCulate(4);
// ===========================
// 2nd function 
function changeString(params) {
    return params.toUpperCase();
}
changeString("nikesh");
// ===========================
// 3nd function 
function userInformation(email, name, isPaid) {
}
userInformation('Nikesh', 'harry@gmail.com', false);
// ===========================
// 4nd function
// how to call default value of the function 
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("nikki", 'harry@gmail.com');
// 5 function  =================
// its working properly 
function changeVal(value) {
    return 'hello';
}
var dataChange = changeVal(5);
function changeVal1(value) {
    return value + 2;
    //    only call number in this function 
    // return 'hello'
}

var dataChange1 = changeVal1(5);
// function 6 =============
// function name(params:number){
//     if (params > 10) {
//         return true
//     }
//     return "false 200 ok "
// }
// name(20)
var mainArrow = function (s) {
    return " ";
};
// const heros = [1, 2 , 3 ]
var heros = ["iranMan", "thor", 'SpiderMan'];
heros.map(function (hero) {
    return "hii its here ".concat(hero);
});

// when we hover on the ( hero ) show the type without decleration
function consleError(errorMassage) {
    console.log(errorMassage);
    // return 'hiii'  error of this 
}
// void type is not return any thing 


function handleError(errorMassage) {
    console.log(errorMassage);
    throw new Error(errorMassage);
}
// return 'hiii'  error of this 
// Some functions never return a value:
