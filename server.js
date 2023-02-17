
// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8000;

app.listen(port, () =>
    console.log(`Server Running On: http://localhost:${port}`));

// Require Express to run server and router.

// *Post data by the http://localhost:4800/postData
app.post('/addWeather', (req,res) => {
    const{newDate,temp,feelings} = req.body;
    projectData.date=newDate;
    projectData.temp=temp;
    projectData.feelings=feelings; 
    res.end();   
    });

// *Get all data by the http://localhost:4800/postAll
app.get('/getWeather' , (request, response) =>{
    response.send(projectData).status(200).end();
    projectData ={};
});

