// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Use body parser
app.use(bodyParser.json());

// Store comments
const comments = [];

// Create comment
app.post('/comments', (req, res) => {
    const comment = req.body.comment;
    comments.push(comment);
    res.json({ comment });
});

// Get comments
app.get('/comments', (req, res) => {
    res.json({ comments });
});

// Start web server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});