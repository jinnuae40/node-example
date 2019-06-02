const callbackEX = function (a,b, callback) {
    const res = a + b
    callback(res)
}
callbackEX(1, 2, function(res) {
    console.log(res)
})