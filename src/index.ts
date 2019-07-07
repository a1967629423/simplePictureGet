import * as http from 'http'
const myApp = http.createServer((req,res)=>{
    res.writeHead(200);
    res.end('Hello')
});

myApp.listen(9996,'localhost')