//Install express server
const express = require('express');
const app = express();

// serve onlt the static files from the dist directory
app.use(express.static(__dirname + '/dist'));

// start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8000);
