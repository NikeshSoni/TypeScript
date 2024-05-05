// Bad Code of function 
// function calCulate(value) {
//         return value + 6
// value.toUppercase()
// }

// calCulate(4) // when we hover it its any mean not defind type of this function
// calCulate("4")  its work


function calCulate(value:number) {
    return value + 6
}

calCulate(4) 



// ===========================
// 2nd function 

function changeString(params: string) {
    return params.toUpperCase()
}

changeString("nikesh")

export {} // solve the error for some times

// ===========================
// 3nd function 

function userInformation(email:string , name:string , isPaid:boolean) {
    
}

userInformation('Nikesh' , 'harry@gmail.com' , false)


// ===========================
// 4nd function

// how to call default value of the function 

let loginUser = ( name:string, email:string, isPaid:boolean = false ) => {

}

loginUser("nikki" , 'harry@gmail.com' )


// 5 function  =================

// its working properly 
function changeVal(value:number) {
    return 'hello'
}

let dataChange = changeVal(5);


function changeVal1(value:number):number {
   return value + 2
//    only call number in this function 
    // return 'hello'
}

let dataChange1 = changeVal1(5);


// function 6 =============

// function name(params:number){
//     if (params > 10) {
//         return true
//     }

//     return "false 200 ok "
// }

// name(20)


const mainArrow = (s:string):string => {
     return " "
}



// const heros = [1, 2 , 3 ]
const heros = ["iranMan", "thor" , 'SpiderMan' ]

heros.map( (hero):string => {
      return `hii its here ${hero}`
})

// when we hover on the ( hero ) show the type without decleration


function consleError(errorMassage:string): void {
    console.log(errorMassage);
    
    // return 'hiii'  error of this 
}

// void type is not return any thing 



function handleError(errorMassage:string): never {
    console.log(errorMassage);
    throw new Error(errorMassage);
}
    // return 'hiii'  error of this 

// Some functions never return a value: