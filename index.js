// console.log("Welcome Node")

// const rk = require('os')

// console.log(rk.hostname());
// console.log(rk.cpus());
// console.log(rk.homedir());
// console.log(rk.freemem());

//-------------------------------------

// const fs = require("fs");

// fs.writeFile("sample.txt", "This is Rk friends", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

//----------------------------------------

// try {
//   fs.appendFileSync("sample1.txt", "This is appendend ", "utf8");
// } catch (error) {
//   console.log(error);
// }

//-----------------------------------------

//! HTTP PACKAGES

// const http = require("http");
// const port = 8000;
// let students = [
//   {
//     Name: "RuthishKumar",
//     Age: "23",
//     "email":"rk@gmail.com"
//   }
// ]

//? http Package in Json File

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {
//     "Content-Type": "application/json",
//   })
//   res.end(JSON.stringify(students))
// });

// server.listen(port,()=>{console.log(port)
// })

//* Http Package in Html File

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//       "Content-Type": "text/html",
//     })
//     res.end(`<h1>hiii</h1>`)
//   });

//   server.listen(port,()=>{console.log(port)
//   })

//------------------------------------------------------

//! Using Retrive File from index.html

const http = require("http");
const port = 8000;
const fs = require("fs");

const server = http.createServer((req, res) => {
  let data = fs.readFileSync("index.html", "utf8");
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(data)})

  server.listen(port,()=>console.log(`App Running ${port}`))

  //-----------------------------------------------------------
