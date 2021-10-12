const readline = require("readline");
const log = require("./log");

const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout,
});

const fs = require("fs");
var filename = "";
var content = "";

// file create..........
var createfile = () => {
    console.log("create your file");

    rl.question("Enter file name: ", (fileans) => {
        filename = fileans + ".txt";

        rl.question("start writing: ", (contentans) => {

            content = contentans;

            fs.appendFile(filename, content, function(err) {
                if (err) throw err;
                console.log('file saved!');
                console.log("hello");
            });
        });
    });


};
createfile();

// read file.....

var readfilename = "";

var readfile = () => {
    rl.question("Enter file name: ", (rfile) => {
        readfilename = rfile;
        if (filename == readfilename) {
            fs.readFile('readfilename', (err, data) => {
                console.log(' ', data);
            });

        } else {
            console.log('File does not exist..!');
        }
    });
};
exports.filewizard = () => {
    return createfile();
    return readfile();
    // writefile();
    // updatefile();
    // deletefile();
    // renamefile();
};