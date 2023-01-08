const express = require('express') 
// This is a function that allows us to create the express application.
const app = express();
// Create our express app
// We can then create an actual HTTP endpoint with one function

const fortunes = require('./data/fortunes.json');
const port = 3000;

app.get('/fortunes',(req,res) => {
    console.log ('requesting fortunes');

    // Now we need to use Send object (which is available on res) to send some data
    // to the web, to be displayed
    // res.send('requesting fortunes');
    res.json(fortunes);
});
// call get method on this app object
// fortunes in the endpoint

app.listen(port,() => {console.log(`Listening on ${port}`)});
// The first parameter will be automatically attached to localhost, so it will be localhost:${port}