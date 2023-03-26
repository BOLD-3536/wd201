const http = require("http");
const fs = require("fs");
const args = require("minimist")(process.argv.slice(2));
let homecn = "";
let projecn = "";
let regcn = "";
let rs="";

fs.readFile("home.html", (error, home) => {
  if (error) {
    throw error;
  }
  homecn = home;
    
});

fs.readFile("project.html", (error, project) => {
  if (error) {
    throw error;
  }
  projecn = project;
});

fs.readFile("registration.html", (error, registration) => {
  if (error) {
    throw error;
  }
  regcn = registration;
});
fs.readFile("script.js",(error,data)=>{
  if (error) throw error;
  rs=data;
})

http
  .createServer((request, response) => {
    let url = request.url;
    response.writeHead(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(projecn);
        response.end();
        break;
      case "/registration":
        response.write(regcn);
        response.end();
        break;
      case "/script.js":
            response.write(rs);
            response.end();
            break;
      default:
        response.write(homecn);
        response.end();
        break;
    }
  })
  .listen(args.port);
