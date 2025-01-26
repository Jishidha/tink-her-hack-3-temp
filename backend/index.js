const mongoose = require('mongoose');
const express = require("express")

const app = express()

// const mongoURI = 'mongodb+srv://amruthau:amruthadevika1676@cluster0.mongodb.net/nomado?retryWrites=true&w=majority';
// const mongoURI = 'mongodb://127.0.0.1:27017/nomado';
// mongodb://<db_username>:<db_password>@cluster1-shard-00-00.kdaja.mongodb.net:27017,cluster1-shard-00-01.kdaja.mongodb.net:27017,cluster1-shard-00-02.kdaja.mongodb.net:27017/?ssl=true&replicaSet=atlas-9ft3cm-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster1
const mongoURI = "mongodb+srv://amruthau:amruthadevika1676@cluster1.kdaja.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1"

mongoose.connect(mongoURI)
  .then(() => {
    app.listen(5000, () => {
        console.log("Server is running on port 5000")
    })
    console.log('MongoDB connected')
  })
  .catch(err => console.log('MongoDB connection error:', err));


