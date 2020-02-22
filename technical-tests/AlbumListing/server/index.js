const express = require("express");
const fs = require('fs').promises;
const path = require('path');
const app = express();
const port = 5000;

app.get("/api/songs", async (req, res) => {
    try {
        var filepath = path.join(__dirname, '../public/data.json');

        // Use async to ensure non-blocking requests
        const file = await fs.readFile(filepath, 'utf8');
        var jsonContent = JSON.parse(file);
        
        // Prevent CORS
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        res.setHeader('Content-Type', 'application/json');
        res.send(jsonContent);
    } catch (e) {
        return res.status(500).send(e);
    };
});

app.listen(port, () => console.log(`Backend app listening on port ${port}!`));

module.exports = app