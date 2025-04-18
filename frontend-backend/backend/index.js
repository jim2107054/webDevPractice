import express from 'express';
let app = express();
let port = 3000;

app.get('/', (req, res) => {
  res.json({name: "Jim", age: 30});
});

app.listen(port , (req,res)=>{
    console.log(`Server is running on port ${port}`);
})