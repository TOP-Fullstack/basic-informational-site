const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url == "/") {
    fs.readFile("./index.html", (err, html) => {
      if (err) {
        throw err;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(html);
      return res.end();
    });
  } else if (url == `/about`) {
    fs.readFile("./about.html", (err, html) => {
      if (err) {
        throw err;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(html);
      return res.end();
    });
  } else if (url == "/contact-me") {
    fs.readFile("./contact-me.html", (err, html) => {
      if (err) {
        throw err;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(html);
      return res.end();
    });
  } else {
    fs.readFile("./404.html", (err, html) => {
      if (err) {
        throw err;
      }
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write(html);
      return res.end();
    });
  }
});

server.listen(8080);
