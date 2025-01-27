const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000; // Choose any available port number

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle incoming GET requests
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'index.html'));
});

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'index.html'));
});

app.get('/conceptart.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'conceptart.html'));
});

app.get('/project.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'project.html'));
});



app.get('/aboutme.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'aboutme.html'));
});

app.get('/demo.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'demo.html'));
});

app.get('/bugreporting.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'bugreporting.html'));
});

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'css', 'index.css'));
});

app.get('/plantSimulator_index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'plantSimulator_index.html'));
});

app.get('/theMall_index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'theMall_index.html'));
});

app.get('/thisWebsite_index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'thisWebsite_index.html'));
});

app.get('/asteroidAvoid_index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'asteroidAvoid_index.html'));
});

app.use('/theMall_posts', express.static(path.join(__dirname, 'public', 'html', 'theMall_posts')));
app.use('/plantSim_posts', express.static(path.join(__dirname, 'public', 'html', 'plantSim_posts')));
app.use('/asteroidA_posts', express.static(path.join(__dirname, 'public', 'html', 'asteroidA_posts')));
app.use('/thisWebsite_posts', express.static(path.join(__dirname, 'public', 'html', 'thisWebsite_posts')));

app.use('/images', express.static(path.join(__dirname, 'public', 'images')));
app.use('/html', express.static(path.join(__dirname, 'public', 'html')));
app.use('/css', express.static(path.join(__dirname, 'public', 'css')));

// Start the server
// app.listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
// });

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });