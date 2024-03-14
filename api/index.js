const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const jwt = require('jsonwebtoken');
const cors = require('cors');


dotenv.config();
mongoose.connect(process.env.MONGO_URL, (err) => {
    if (err) throw err;
});
const jwtSecret = process.env.JWT_SECRET_KEY;

const app = express();
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
}))


app.get('/test', (req, res) => {
    res.json('test ok');
});


app.post('/register', async (req, res) => {
    const {username, password} = req.body;
    try {
        const createdUser = await User.create({username, password});
        jwt.sign({userId:createdUser, id}, jwtSecret, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token).status(201).json({
                _id: createdUser._id,
            });
        });
    } catch(err) {
        if (err) throw err;
    }

});

app.listen(4040);










// N6qu8CPVGltJsvZo


// mongodb+srv://mernchat:<password>@cluster0.9cd5ogo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0