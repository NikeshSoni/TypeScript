type userData1 = {

   readonly _id: string,
            name:string,
            email:string,
            isActive: boolean,

            // working with the (?)
            creditCard?:number

            // not working
            // creditCard:number 
}

// readonly we whant to change esey to that

function createUserMain(u:userData1) {
    
}

let myUser:userData1 = {
    _id:"123",
    name:"string",
    email:"nikki.com",
    isActive: true,
    

} 

myUser.email = "nikes21harry@gmail.com";

// not working this becouse of (readonly key word)

// myUser._id = "hiii" 


type cardNumber = {
    cardNumber:'string'
}

type cardDate = {
    cardDate: string
}

type cardDeatial = cardDate & cardNumber & {
    cvv:number
}


// array start =================

const superHero: string[] =  [];
const superHeroPower: number[] =  [];
const heroNumbers: Array<number>[] =  [];


superHero.push("spideman");
superHeroPower.push(21);
// heroNumbers.push

type data = {
    name:string,
    isActive: boolean
}

const allUsers:data[] = [];

allUsers.push({name:'', isActive:true})

const mlModelType: number[][] = [
    [22,33,44,]
]

//  union ==================

let score:number | string | boolean  = 33 

score = "55"
score = 55

type unionValue = {
    name:string,
    id:number 
}

type admin = {
    userName:string,
    id:number 
}

let nikesh: admin | unionValue = {
    name:"nikesh",
    id:21
}

nikesh = {userName:"nikki", id:12};

function dbId(id:number | string) {

    // id.toUppercase()  not work 

    if (typeof id === "string") {
        id.toLowerCase()
    }else {
        alert("the Number")
    }

    // console.log(`hii db id is ${id}`);
}

dbId(211)
dbId("211")


//  array

const numberArray: number[] = [1,2,3,4] 
const stringArray: string[] = ['1','2','3','4'];

// const dataArray: number[] | string[] = [1,2,3,'4'] // not allow

const dataArray: (number | string)[] = [1,2,3,'4'] // work 

const anyDataArray: (number | string | boolean)[] = [1,2,3,'4', true] // work 

// litral type of assigment

let pi:3.14 = 3.14;

// pi = 12.5 // not work

let seatAllotment: "aisal" | "middle" | "window" 

seatAllotment = "middle"
// seatAllotment = "nikesh"  // error odf the this 







