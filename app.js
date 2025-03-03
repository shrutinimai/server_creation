const express = require('express');
const app = express();

const PORT = 3200;

const addUserMiddleware=((req,res,next)=>{
    req.user="Guest";
    next();
});
app.use("/welcome", addUserMiddleware);


app.get("/welcome",(req,res)=>{
    res.send(`<h1>welcome, ${req.user}!</h1>`);
})


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
    });
