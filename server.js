//import dependencies
const express = require('express');
const dotenv = require('dotenv')



//create instance of express app
const app = express();


//default root route 
app.get('/', (req, res) => {
    res.send("Wanderlust application is live!")
})




//declare variable from secrets.env or assign 3000
dotenv.config({path: 'secrets.env'})
const Port = process.env.PORT || 3000
//start backend http server
app.listen(Port, () => {
    console.log(`app is running on http://localhost:${Port}/`);
})