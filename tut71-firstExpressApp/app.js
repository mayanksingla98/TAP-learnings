const express = require("express");

const app = express();
const port = 80;

// For serving static files
app.use('/static', express.static('static'))

// Set the template engine as pug
app.set('view engine', 'pug')

// Set the views directory
app.set('views', './views')
 
// Our pug demo endpoint
app.get("/dummy", (req, res)=>{ 
    res.status(200).render('dummy', { title: 'Using PUG', message: 'This is my first Template Engine' })
});
 
app.get("/", (req, res)=>{ 
    res.status(200).send("This is homepage of my first express app");
});

app.get("/about", (req, res)=>{
    res.send("This is about page of my first express app");
});

app.post("/about", (req, res)=>{
    res.send("This is a post request on ABOUT page of my first express app");
});
app.get("/this", (req, res)=>{
    res.status(404).send("This page is not found on my website");
});

app.listen(port, ()=>{
    console.log(`The application is running on port ${port}`);
});
