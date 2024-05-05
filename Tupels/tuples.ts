const tuplesData: (string | number)[] = ["nikesh" , 12] 
// const tuplesData: (string | number)[] = ["nikesh" , 12] 

let mainUser: [string , boolean , number];

// mainUser = [ true ,"Nikki", 21]  // false order of data

mainUser = [ "Nikki", true , 21];

// let rgb:[number,number,number] = [21,11,13 , 55] // wrong why
let rgb:[number,number,number] = [21,11,13]


type userdata = [number , string];

const newUser: userdata = [2112, "harry" ]

newUser[1] = "hello";

// newUser.push(false)

const testArray:[number, string] = [10, 'test']; // It's been edited.
// testArray.push(true);


// Enums are one of the few features TypeScript has which is not 
// a type-level extension of JavaScript.

// Enums allow a developer to define a set of named constants. 
// Using enums can make it easier to document intent, or create a set of distinct cases.
//  TypeScript provides both numeric and string-based enums.


// const h = 21
// const i = true 
// const t = "nikki"
// its fine but not a good line of a code 

enum seatChoice {
        AISLE = 21,
        MIDDLE = "12",
        WINDOW = 8,
        FoURTH = '11'
}

//  when we Hover on this its a set as default value = 0
const hcSeat = seatChoice.AISLE



// const enum seatChoice {
//     AISLE = 21,
//     MIDDLE = "12",
//     WINDOW = 8,
//     FoURTH = '11'
// }

// //  when we Hover on this its a set as default value = 0
// const hcSeat = seatChoice.AISLE

// output is here

// const hcSeat = 21 /* seatChoice.AISLE */;
