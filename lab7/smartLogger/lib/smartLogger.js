function smartLogger(devEnv) {
    this.devEnv = devEnv;
};


smartLogger.prototype.log = function smartLog(m) {
    if (this.devEnv === 1) {
        console.log(`[dev log]: ${m}`);
    }
}


// function foo(x) {
//     // let x = 1
//     console.log(x);
// }

// function bar() {
//     console.log(x);
// }

