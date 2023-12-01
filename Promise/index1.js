<<<<<<< HEAD
function check(kalmineAaoge){
    let pr = new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(kalmineAaoge){
                let data = "to main tujhe party dunga!!"
                resolve(data);
            }
            else{
                let err = "koi hai hi nhi kise party du ";
                reject(err);
            }
        },5000)
    })

    return pr;
}

check(false)
    .then((a)=>console.log(a))
=======
function check(kalmineAaoge){
    let pr = new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(kalmineAaoge){
                let data = "to main tujhe party dunga!!"
                resolve(data);
            }
            else{
                let err = "koi hai hi nhi kise party du ";
                reject(err);
            }
        },5000)
    })

    return pr;
}

check(false)
    .then((a)=>console.log(a))
>>>>>>> bf7a196afbed9c990510321662ed26e8a51785cd
    .catch((a)=>console.log(a));