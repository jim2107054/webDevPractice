import express from 'express';
const app = express();//call express. here app is an instance of express

//middleware
//middleware should write after the app and before the routes. otherwise it will gives error. because order matter a lot.
app.use(express.json());//to parse json data


const port = 5000;//port number

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to the home page</h1>")
})

app.get("/about",(req,res)=>{
    res.end("<p>about page, tell me about yourself. Hi I'm Jim</p>")
})

// app.post("/",(req,res)=>{
//     let {name,roll,dept} = req.body;
//     console.log(name,roll,dept);
//     // const name = req.body.name;
//     // const roll = req.body.roll;
//     // const dept = req.body.dept;
//     // console.log(name,roll,dept);
//     res.send(`<h1>Received Data</h1><p>Name: ${name}</p><p>Roll: ${roll}</p><p>Department: ${dept}</p>`);
//     // res.send("Post request to the home page")
//     console.log(req.body);
// })


const users = [
    {
      "id": 1,
      "name": "Alice Johnson",
      "department": "HR",
      "position": "HR Manager",
      "email": "alice.johnson@example.com"
    },
    {
      "id": 2,
      "name": "Bob Smith",
      "department": "IT",
      "position": "Software Engineer",
      "email": "bob.smith@example.com"
    },
    {
      "id": 3,
      "name": "Carol Davis",
      "department": "Finance",
      "position": "Accountant",
      "email": "carol.davis@example.com"
    },
    {
      "id": 4,
      "name": "David Wilson",
      "department": "Marketing",
      "position": "Marketing Lead",
      "email": "david.wilson@example.com"
    },
    {
      "id": 5,
      "name": "Eva Martinez",
      "department": "Operations",
      "position": "Operations Manager",
      "email": "eva.martinez@example.com"
    }
]

app.get("/user",(req,res)=>{
    res.json(users);
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})


app.get("/user/:id",(req,res)=>{
    let id = req.params.id;
    let user = users.find((e) => e.id == id); // Use the find method to locate the user by id
    if(!user){
        return res.status(404).json({message: "User not found"});
    }
    res.json(user);
});
 





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