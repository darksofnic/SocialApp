const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 8000;                  //Save the port number where your server will be listening
const indexRouter = require('./controllers/route');

app.use(express.static(__dirname + '/public'));
app.use('/', indexRouter);
app.use(express.json());
app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`);
});



