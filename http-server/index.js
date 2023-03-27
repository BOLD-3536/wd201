const http = require("http");
const fs = require("fs");
const argv = require("minimist")(process.argv.slice(2));
let homec = "";
let proc1 = "";
let repc1 = "";

fs.readFile("home.html", (errors, home) => {
  if (errors) {
    throw errors;
  }
    homec = home;
  
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
//fs.readFile("/index.js",(err,data)=>{
//  if (err) throw err;
//  rs=data.toString();
//})

const server=http
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
  });
  const port = argv.port || 9000;
  server.listen(port, ()=>{
    console.log('port no. ${port}');
  });
