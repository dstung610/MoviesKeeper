const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors')
const {queryKeeper, insertKeeper, deleteKeeper} = require('./mongodbConnection');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, 'build')))
app.use(cors())

app.get('/ping', (req, res) => {    
    return connectDB().catch(console.dir).then(res.send('pong'))
})

app.post('/addKeeper', (req, res) => {
    console.log(req.body);
    var keeper = {
        name : req.body.name,
        poster : req.body.poster ? req.body.poster : "",
        rate : req.body.rate,
        yourRate : parseInt(req.body.yourRate),
        watched : req.body.watched ? req.body.watched : false,
        favorite : req.body.favorite ? req.body.favorite : false,
        review : req.body.review,
        genre : req.body.genre,
        refLink : req.body.refLink ? req.body.refLink : "",
        dateAdded : new Date(Date.now())
    }
    
    insertKeeper(keeper).then((err, data) => {
        console.log(data.json());
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).send(data)
    });
})

app.get('/queryKeepers', (req, res) => {    
    queryKeeper().then((data) => {
        var result = data;
        console.log(result);
        res.send(result);
    });
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(8080)
console.log("Server listening at port 8080")