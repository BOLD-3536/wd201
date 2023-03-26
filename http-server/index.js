const http = require("http");
const fs = require("fs");
const args = require("minimist")(process.argv);
let homec = "";
let proc1 = "";
let repc1 = "";

fs.readFile("home.html", (errors, home) => {
  if (errors) {
    throw errors;
  }
  else{
    homec = home;
  }
  
});

fs.readFile("project.html", (errors, project) => {
  if (errors) {
    throw errors;
  }
  proc1 = project;
});

fs.readFile("registration.html", (errors, registration) => {
  if (errors) {
    throw errors;
  }
  repc1 = registration;
});
fs.readFile("/index.js",(err,data)=>{
  if (err) throw err;
  rs=data.toString();
})

http
  .createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(proc1);
        response.end();
        break;
      case "/registration":
        response.write(repc1);
        response.end();
        break;
      default:
        response.write(homec);
        response.end();
        break;
    }
  })
  .listen(args.port);
