const http = require('http');

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
   if (req.url === '/') {
     res.statusCode = 200
     res.setHeader('Content-Type','text/plain')
     res.end("Hello This is Pranav Mandale")
   } 
   else if (req.url === '/pranav-developer') {
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    res.end("This is Pranav Mandale backend developer")
  }
  else {
    res.statusCode = 404
     res.setHeader('Content-Type','text/plain')
     res.end("404 page not found")
  }
})

server.listen(port, hostname,() => {
    console.log(`server is listening on port http://${hostname}:${port}`)
})
