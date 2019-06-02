const p = new Promise((resolve, reject) => {
    let a = 1 + 1/0
    if (a == 3) {
        resolve("Success")
    } else {
        reject("Failed")
    }
})

p.then((message) => {
    console.log('from then : ' + message)
}).catch((message) => {
    console.log('from catch : ' + message)
})

const p1 = new Promise((resolve, reject) => {
    resolve('p1')
})
const p2 = new Promise((resolve, reject) => {
    resolve('p2')
})
const p3 = new Promise((resolve, reject) => {
    resolve('p3')
})

Promise.all([
    p1,p2,p3
]).then((messages) => {
    console.log(messages)
})

const promise1 = function(param){
    return new Promise(function(resolve,reject){
        if(param){
            resolve("바보");
        }
        else{
            reject("아닌데");
        }
    });
}

promise1(true).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});