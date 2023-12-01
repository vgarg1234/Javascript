<<<<<<< HEAD
let pr =new Promise((resolve, reject) => {
    setTimeout(()=>{
        //  let data = "promise resolve data";
        //  resolve(data);
        let err = "new error";
        reject(err);
    },5000)
})

// console.log(pr);

pr
    .then((x)=>{
        console.log(x);
    })
    .catch((a)=>{
        console.log(a);
    })
=======
let pr =new Promise((resolve, reject) => {
    setTimeout(()=>{
        //  let data = "promise resolve data";
        //  resolve(data);
        let err = "new error";
        reject(err);
    },5000)
})

// console.log(pr);

pr
    .then((x)=>{
        console.log(x);
    })
    .catch((a)=>{
        console.log(a);
    })
>>>>>>> bf7a196afbed9c990510321662ed26e8a51785cd
