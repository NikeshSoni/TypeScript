let nameOf : number ;

interface userStart {
    readonly _dbId:number,
    email:string,
    userId:number,
    googleId?:string,
    // startTrayal: () => string // pass like method 
    startTrayal(): string,
    getCoupon(couponName:string , value:number):number
     // last was number becose of this is a type of the getCoupon

    //  when we add  ( ? ) on this its not compulcery 
}

interface userStart {
    githubToken:string    
}

interface Admin extends userStart {
        role: "admin" | "ta" | "learner"
}

// const nikesh:userStart = { its work properly

const nikesh:Admin = {

    _dbId:21,
    email:"nikesh21nikki",
    userId:2112,
    startTrayal: () => {
        return "Hey i am Here"
    },
    getCoupon: (name:"Nikesh" , off:21) => {
        return 10
    },
    githubToken:"nikesh21soni/github.io",
    role:"admin",
} 
nikesh.email = 'nikesh8080@gmail.com'

// nikesh._dbId = 12  // not change for this 

// we can use re open this after we add some extra information 


