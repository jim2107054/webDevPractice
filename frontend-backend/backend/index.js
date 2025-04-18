import express from 'express';
import cors from 'cors'; // Importing CORS middleware
let app = express();
let port = 3000;

// Middleware to parse JSON bodies
app.use(cors());// Enable CORS for all routes

app.get('/', (req, res) => {
  res.json({name: "Jim", age: 30});
});

app.listen(port , (req,res)=>{
    console.log(`Server is running on port ${port}`);
})