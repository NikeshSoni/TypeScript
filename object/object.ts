const obj = {
    name:'nikesh',
    email:'nikesh2100@gmail.com',
    isActive: true
}

// function createUser({name:string , isPaid:boolean}) {
    
// }

// createUser({name:'nikki', isPaid: false})


function createCource():{name:string , isPaid:number} {
    return {name:"Typescript" , isPaid:499}
}



//  there is a bad syntax of the object 

// when naver we whant a extra information in the 
//  function

function createUser({name:string , isPaid:boolean}) {
    
}

// its a error
// createUser({name:'nikki', isPaid: false , email: 'harry21@gmail.com'})

// stark overflow in this behaviour 
createUser({name:'nikki', isPaid: false , })



//  good beheviour of the code

function goodUser({name:string , isPaid:boolean}) {
    
}

let userInformation = {name:'nikki', isPaid: false , email: 'harry21@gmail.com'}


goodUser(userInformation)



// 8 - type aliases (in object file)


type userData = {
    name:string,
    email:string,
    isActive: boolean
}

type ID = number | string;

type myString = string;

function getUser(user : userData): userData {
    return {name:"", email:"", isActive: true}
}

getUser({name:"", email:"", isActive: true})
