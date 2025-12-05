import express from "express";
const app = express();
app.get("/",(req,res)=>{
    res.send("hello from home page")
})
app.listen(7008, () => {
    console.log("server running at port 7008");
});
 