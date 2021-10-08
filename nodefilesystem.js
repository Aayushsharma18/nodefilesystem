const readline = require("readline");
const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout,
});
const fs = require("fs");

rl.question("Enter your name: ", function(ans) {
    console.log("Hello " + ans);
    rl.close();
});