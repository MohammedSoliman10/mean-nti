const fs = require('fs');

let command = process.argv[2];
let name = process.argv[3];

if (command == "component") {

    fs.mkdirSync( name);

    fs.writeFileSync(name + "/" + name + ".ts", "export class " + name + " {\n\n}");
    fs.writeFileSync(name +"/" + name + ".html", "<p>" + name + " works!</p>");
    fs.writeFileSync(name +"/" + name +".css", "");

    console.log(name + " component created");

}    else {
    console.log("try again ");
}