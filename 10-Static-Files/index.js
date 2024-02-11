const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.get('/styles/style.css', (req, res) => {
    res.sendFile('/styles/style.css')
})

app.listen(5000, () => {
    console.log("server is running on PORT:5000");
})