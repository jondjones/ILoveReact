const express = require("express");
const fs = require('fs');
const path = require('path');
const app = express();
const port = 5000;

app.get("/api/", (req, res) => res.send("Hello World!"));

app.get("/api/conditions", (req, res) => {
    try {
        var filepath = path.join(__dirname, '../data/conditions.json');
        var contents = fs.readFileSync(filepath);
        var jsonContent = JSON.parse(contents);
        
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.setHeader('Content-Type', 'application/json');
        res.send(jsonContent.conditions);
    } catch (e) {
        return res.status(500).send(e);
    };
});

app.listen(port, () => console.log(`Backend app listening on port ${port}!`));

module.exports = app