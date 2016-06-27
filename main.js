
//load express module
var express = require("express");

// create an instance of express appln
var app = express();
//process command line params
// -p port
// -d dir
var port = 3000;
var staticDir = __dirname +"/public";
var i =2;

while ( i < process.argv.length) {
    switch (process.argv[i]) {
        case "-v":
            console.info("version :%d",version);
            break;
        case "-p":
            i = i + 1;
            port = process.argv[i];
            break;
        case "-d":
            i = i + 1;
            staticDir = __dirname + process.argv[i];
            break;

        default:

    }//end switch
    i += 1;
}//end while

// ask app to use dirname for static file
// use public dir for static files
app.use(express.static(staticDir));

// console.info("__dirname: %s", __dirname);
console.info("Directory:" + staticDir);
// set a port
    app.set("port", port || 3000);

// start the server on port
app.listen(
    app.get("port"),
    function(){
        console.info("%s started on port %d", process.argv[1], app.get("port"));
    }
);