/**
 * Created by akk on 1/22/14.
 */

var http=require('http');
var server=http.createServer();
server.on('request',function(req,res){
   res.writeHead(200,{'Content-Type':'text/plain'});
    res.end("Hello world from node\n");
    console.log('requesting are coming');
});

server.listen(3000);
console.log('Server is running at http://localhost:3000');