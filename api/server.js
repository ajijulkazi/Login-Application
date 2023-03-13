const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const User = require ('./models/User.js');
const port = process.env.PORT || 5000;

const app = express();

const salt = bcrypt.genSaltSync(10);
const secret = 'khfksfkfjkerfyukfksrwerueayf';


app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());

mongoose.connect('mongodb+srv://login:TeQ9Lp7pQ5Z7ViIk@cluster0.ydlgr9k.mongodb.net/?retryWrites=true&w=majority')
db = mongoose.connection;

db.once('open', function () {
console.log('Connected to database!');
});
db.on('error', console.error.bind(console, 'Error:'));

 app.get('/test', (req, res) =>{
    res.json('test ok');
});

app.post('/register', async(req, res) => {
    const {username, email, phone, country, password} = req.body;
       try {
        const userDoc = await User.create({
            username,
            email,
            phone,
            country,
            password:bcrypt.hashSync(password,salt),

        })
        res.json(userDoc);
       }
        catch(e) {
            res.status(400).json(); //`unable register due to ${e.message}`
        }
});

app.post('/login', async (req, res) =>{
    //console.log("request-body :", req.body)
    const {username, password} = req.body;
    const userDoc = await User.findOne({username});
    console.log(userDoc);
    console.log(userDoc.password);
    const passOk = bcrypt.compareSync(password, userDoc.password);
    console.log(passOk);
    if(passOk){
        jwt.sign({username,id:userDoc._id}, secret, {}, (err,token) => {
            if(err) throw err;
            res.cookie('token', token).json({
                id:userDoc._id,
                username,
            });
            //res.status(200).json(token);
        });
    } else {
        res.status(400).json('wrong credentials');
    }
});

app.get('/register', async (req, res) => {
    const allUser = await User.find();
    res.json(allUser);
});

 app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
