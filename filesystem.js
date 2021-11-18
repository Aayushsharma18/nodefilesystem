const readline = require("readline");
const log = require("./log");
const fs = require("fs");
const path = require("path");
const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout,
});


// create dir
dirname = "";
var createdir = () => {

    fs.mkdir(path.join(__dirname, "dir1"), true, (err) => {
        if (err) throw err;
        console.log("Directory Created..!");
        menu();
    });

};


// remove dir
var removedir = () => {

    fs.rmdir(path.join(__dirname, "dir1"), (err) => {
        if (err) throw err;
        console.log("Directory Removed..!");
    });
    menu();
};


// file write..........

var writefile = () => {

    fs.writeFile("nodejsfile1", "Hello Node js User", function(err) {
        if (err) throw err;
        console.log("file saved!");
    });
    menu();
};


// read file.....


var readfile = () => {
    fs.readFile("nodejsfile1", (err, data) => {
        if (err) throw err;
        console.log(' ', data);
    });
    menu();
};

// delete file

var deletefile = () => {

    fs.unlink("nodejsfile1", (err) => {
        if (err) throw err;
        console.log("File Deleted...!");
    });
    menu();
};


// rename file
var renamefile = () => {

    fs.rename("nodejsfile1", "nodejsfile2", (err) => {
        if (err) throw err;
        console.log("Fie Renamed..!");

    });
    menu();
};


// append file

var appendfile = () => {
    fs.appendFile("nodejsfile1", "This is appended content", (err) => {
        if (err) throw err;
        console.log("File appended..!");
    });
    menu();
};


// update file

var updatefile = () => {
    fs.appendFile("nodejsfile1", "This is Updated content", (err) => {
        if (err) throw err;
        console.log("File appended..!");
    });
    menu();
};

// Menu
var menu = () => {
    ch = "";

    console.log('1. Create Dir');
    console.log('2. Remove Dir');
    console.log('3. Write File');
    console.log('4. Read File');
    console.log('5. Update File');
    console.log('6. Append File');
    console.log('7. Delete File');
    console.log('8. Rename File');
    console.log('9. Exit');

    rl.question("Enter choice: ", (ch) => {
        if (ch == 1) {
            createdir();
        } else if (ch == 2) {
            removedir();
        } else if (ch == 3) {
            writefile();
        } else if (ch == 4) {
            readfile();
        } else if (ch == 5) {
            updatefile()
        } else if (ch == 6) {
            appendfile();
        } else if (ch == 7) {
            deletefile();
        } else if (ch == 8) {
            renamefile();
        } else if (ch == 9) {
            console.log("Exit");
        }
    });
};
menu();