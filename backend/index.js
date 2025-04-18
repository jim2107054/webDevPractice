import express from 'express';
const app = express();//call express. here app is an instance of express

const port = 5000;//port number

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to the home page</h1>")
})

app.get("/about",(req,res)=>{
    res.end("<p>about page, tell me about yourself. Hi I'm Jim</p>")
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})



 





// import http from 'http';

// const port = 5000;

// const server = http.createServer((req,res)=>{
//     if(req.url === '/'){
//         res.end("<h1>Welcome to the home page</h1>")
//     }
//     else if(req.url === '/about'){
//         res.end("<h1>About Page.</h1>")
//     }
//     else{
//         res.end("<h1>404 Page Not Found</h1>");
//     }
// })

// server.listen(port);