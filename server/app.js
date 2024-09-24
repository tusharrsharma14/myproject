const dotenv = require('dotenv');
const express = require('express');
const app = express();

dotenv.config({path : './config.env'});
require('./db/conn');
const port = process.env.PORT;

const Message = require('./models/msgSchema');

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.get('/', (req, res)=>{
    res.send("Hello World");
})

app.post('/message', async (req, res)=>{
    try {
        // Get body or Data
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const email = req.body.email;
        const message = req.body.message;

        const sendMsg = new Message({
            firstname : firstname,
            lastname:lastname,
            email : email,
            message : message
        });

        // Save Method is Used to Create User or Insert User
        // But Before Saving or Inserting, Password will Hash 
        // Because of Hashing. After Hash, It will save to DB
        const created = await sendMsg.save();
        console.log(created);
        res.status(200).send("Sent");

    } catch (error) {
        res.status(400).send(error)
    }
})

// Run Server 
app.listen(port, ()=>{
    console.log("Server is Listening")
})

