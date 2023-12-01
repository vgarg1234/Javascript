<<<<<<< HEAD
let arr = [
    {firstName:'narendra',lastName:'Modi',age:68},
    {firstName:'Donald',lastName:'Trump',age:76},
    {firstName:'Prshant',lastName:'Tambu',age:24},
    {firstName:'animesh',lastName:'raj',age:68}
];

// op= [' narendra Modi', 'Donald Trump','Prshant Tambu','animesh raj']

let op = arr.map((item)=>{
   return item.firstName +" " +item.lastName;
})

=======
let arr = [
    {firstName:'narendra',lastName:'Modi',age:68},
    {firstName:'Donald',lastName:'Trump',age:76},
    {firstName:'Prshant',lastName:'Tambu',age:24},
    {firstName:'animesh',lastName:'raj',age:68}
];

// op= [' narendra Modi', 'Donald Trump','Prshant Tambu','animesh raj']

let op = arr.map((item)=>{
   return item.firstName +" " +item.lastName;
})

>>>>>>> bf7a196afbed9c990510321662ed26e8a51785cd
console.log(op);