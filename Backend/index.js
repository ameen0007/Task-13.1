
const express = require("express")

const moviedata = require("./moviedata.json")

const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())


 app.get("/api/movies",(req,res)=>{
    res.json(moviedata);
 })

 app.listen(4000, () => {
    console.log("Server started on port 4000");
  });