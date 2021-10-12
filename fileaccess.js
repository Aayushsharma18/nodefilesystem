// import filesys from "./filesystem";
const filewizard = require("filewizard");
const readline = require("readline");
const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout,
});


while (ch != 7) {
    console.log('1. Create File');
    console.log('2. Read File');
    console.log('3. Write File');
    console.log('4. Update File');
    console.log('5. Delete File');
    console.log('6. Rename File');
    console.log('7. Exit');
    rl.question("Enter choice: ", (ch) => {
        return ch;
    });

}