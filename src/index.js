const express = require("express");
const bodyParser = require("body-parser");

// require('dotenv').config()  
const { PORT }=require('./config/ServerConfig');
const CityRepository = require('./repository/city-repository');

const setupAndStartServer = async()=>{

    //create the express object
    const app = express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    
    app.use('/api',ApiRoutes);
    
    app.listen(PORT,async ()=>{
        console.log(`server started at ${PORT}`);
    });
}

setupAndStartServer();