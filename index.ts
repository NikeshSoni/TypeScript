let getting: string  = "Hello ! Nikesh";
console.log(getting);

getting.toLowerCase();

// number

// bad code 
// let userId: number = 2112;

// good code 
let userId = 2112;
userId.toFixed()

//  boolean 

let condition: boolean = false;

// dont us ANY ----------

// TypeScript also has a special type, any, 
// that you can use whenever you
// don’t want a particular value to cause typechecking errors

// its not a String , boolean 
// its a marker in the type script 
//  tern of the type checking value

// let hero; bad code 
// good code 


// noImplicitAny
// When you don’t specify a type, and TypeScript can’t 
// infer it from context, the compiler will typically default to any.

// You usually want to avoid this, though, because any 
// isn’t type-checked. Use the compiler flag 
// noImplicitAny to flag any implicit any as an error.

let hero:string;

function gethero() {
    return "Thor"
    // return true // bad code when we call api he give eshu 
}

hero = gethero() // bad case 

// when is such sichvation are we dont know TCS 
// can not find out the what value of come up 
// later in the future its put was any kind a get away doing the think.. 
// haping up here 
