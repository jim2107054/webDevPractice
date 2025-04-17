import http from 'http';

const port = 5000;

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("<h1>Welcome to the home page</h1>")
    }
    else if(req.url === '/about'){
        res.end("<h1>About Page.</h1>")
    }
    else{
        res.end("<h1>404 Page Not Found</h1>");
    }
})

server.listen(port);