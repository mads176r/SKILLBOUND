const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();
const db = require('./db');
const tournamentsRouter = require('./routes/tournament');

app.get("/hej", (req, res) => {
    res.json({ hej: "fwadaw" });
});

// Test route to check the database connection
app.get('/test-database', (req, res) => {
    db.query('SELECT 1', (error) => {
        if (error) {
            res.status(500).json({ message: 'Database connection error' });
        } else {
            res.json({ message: 'Database connection successful' });
        }
    });
});

app.use('/tournaments', tournamentsRouter);


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
