/**
 * http module contain a function called as createserver
 * this create server  function takes a callback as the input
 * now insidethe callback we  get two arguements 
 * ->request --> this arguement contains all the details about
 * ->response-->this arguement contains functions using which we can prepare the response
 * createserver function returns us a server object about incoming request
 * 
 */
const http = require('http');
const PORT = 3000;

const server = http.createServer(function exec(request, response) {
//   response.writeHead(200, { 'Content-Type': 'text/plain' });
  console.log(request.method, "hello")
  console.log(request.url)
  //if(request.url='/home')
  // {
  //   response.end("welcome to home")
  // }
  response.end('Hello, World!');
});
// server.on('/', (req,res)=>{
//     res.json({
//         success : true
//     })
// })

server.listen(PORT, function process() {
  console.log("Server started on port", PORT);
});
