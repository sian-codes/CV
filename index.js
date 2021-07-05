const path = require('path'); // Needed to serve a static asset
const express = require('express'); //imports express so it can be used
const app = express(); //calls express function, creats new app and assigns to the app const

app.use(express.static(path.join(__dirname, 'public')))  //


app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
}); // GET request to homepage, as an engine isn't being used Render method can't be used so the HTML file will be sent to the client instead

app.listen(3000, () => {
    console.log('Application listening on port 3000!');
}); // Starts the server on a port
