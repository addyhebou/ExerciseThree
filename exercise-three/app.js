const express = require('express'); //returns function object?
const app = express();// returns an object, creates an instance of the package Express
// const anotherApp = express(), makes anothers app
const port = 4000;

app.get('/', (req, res) => (res.send('<h1>Wassup yall</h1><p>Hi, Im Paul, ya know?</p>')))
// .get indicates that it is a child of app
// function being called
const indexRoute = require('./routes/index.js')
const aboutRoute = require('./routes/about.js')


app.use("/", indexRoute);
app.use("/about", aboutRoute);
app.use("/static", express.static('public'))
app.listen(port, () => console.log('Your program is now running...'))
// function being called