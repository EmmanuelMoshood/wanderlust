//import dependencies
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser')



//create instance of express app
const app = express();

//log every request
app.use(morgan('tiny'))

//parse every request through body-parser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set('view engione', 'ejs')

//if ejs files were in a different folder
// app.set('views', path.resolve(__dirname, "views/ejs"))



//load assets to server
app.use('/css', express.static(path.resolve(__dirname, "asset/css")))
app.use('/img', express.static(path.resolve(__dirname, "asset/img")))
app.use('/js', express.static(path.resolve(__dirname, "asset/js")))

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