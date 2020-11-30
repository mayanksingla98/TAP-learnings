const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/users")

const app = express();
const url = "mongodb://localhost/mayanKart";
const port = 80;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.on("open", () => {
    console.log("***** We Are Connected *****");
});

app.use(express.json());
app.use('/users',userRoute)

app.listen(port, ()=>{
    console.log(`The application is running on port ${port}`);
});
