const readline = require("readline");
const log = require("./log");

const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout,
});

const fs = require("fs");
var filename = "";
var content = "";

var createfile = () => {
    console.log("create your file");

    rl.quetion("Enter file name: ", (fileans) => {
        filename = fileansans + ".txt";

        rl.quetion("start writing: ", (contentans) => {

            content = contentansans;

            fs.appendFile(filename, content, function(err) {
                if (err) throw err;
                console.log('file saved!');
                console.log();
            });
        });
    });


};
createfile();