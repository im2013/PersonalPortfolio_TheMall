const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3001; // Choose any available port number

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


app.get('/aboutme.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'aboutme.html'));
});

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'css', 'index.css'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});