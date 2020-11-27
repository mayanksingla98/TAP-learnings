const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mayanKart", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log("***** We Are Connected *****");
});

const usersSchema = new mongoose.Schema({
    name: String,
    employee_id: Number,
    age: Number
});

usersSchema.methods.speak = function () {
    const greeting = this.name && this.employee_id
      ? `My name is ${this.name} and employee ID is ${this.employee_id}`
      : "I don't have a name or employee ID";
    console.log(greeting);
  }

const User = mongoose.model("User", usersSchema);

const mayank = new User({ name: 'Mayank' , employee_id: 809});
// mayank.speak();

mayank.save(function (err, mayank) {
    if (err) return console.error(err);
    // mayank.speak();
});

User.find({name: 'Mayank'},function (err, user) {
    if (err) return console.error(err);
    console.log(user);
})
