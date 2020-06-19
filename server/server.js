var express = require('express');
var cors = require('cors');
const { toJson } = require('unsplash-js');
const Unsplash = require('unsplash-js').default;
var app = express();

global.fetch = require('node-fetch');

app.use(cors());


const unsplash = new Unsplash({ accessKey: "EEEgGplDzD_rhmIum7skhws-rfIQKW9_4ULGSUqj1vE" });

//set up the routes for the hosmus

app.get('/api/photos', (req, res) => {
    //make a api req
    unsplash.photos.listPhotos(1,20,"computers").then(toJson).then(photos => {
        //return photos to browser
        return res.json(photos);
    })
})


app.listen(8080);