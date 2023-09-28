const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

//MongoDB connection
mongoose.connect('mongodb://localhost:27017/test', { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
});

const db = mongoose.connection;

db.on('error',(error) => console.log("MongoDB connection error",error));
db.once('open',() => console.log("Connected to MongoDB"));


//Middleware
app.use(bodyParser.urlencoded({ extended: false }));

//define a mongoDB schema and model for the form data
const formSchema = mongoose.model('FormData',{
      message: String,
});

//Routes
app.get('/',(req,res) => {
      //Render an HTML form
      res.send(`
            <form action="/submit" method="POST">
                  <input type="text" name="message" placeholder="Enter a message">
                  <button type="submit">Submit</button>
            </form>
      `);
});

app.post('/submit',(req,res) => {
      const{message} = req.body;

      //Create a new instance of the FormData model
      const formData = new formSchema({
            message
      });

      //Save submitted data to MongoDB
      formData.save((err)=>{
            if(err){
                  console.log('Error saving form data: ',err);
                  res.send("Error saving to database");
            }else{
                  console.log("Form Data saved susccessfully");
                  res.send("Form Data saved susccessfully");
            }
      });
});

//Start the server
app.listen(port,() => {
      console.log(`Server is  running on port ${port}`)
});


