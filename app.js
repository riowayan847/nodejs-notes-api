const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());

// Serve frontend
app.use(express.static('public'));

let notes = [];

// GET all notes
app.get('/notes', (req, res) => {
    res.status(200).json({
        success: true,
        data: notes
    });
});

// POST new note
app.post('/notes', (req, res) => {
    const { text } = req.body;

    // Basic validation
    if (!text || text.trim() === '') {
        return res.status(400).json({
            success: false,
            message: 'Note text is required'
        });
    }

    const newNote = {
        id: Date.now(),
        text: text
    };

    notes.push(newNote);

    res.status(201).json({
        success: true,
        message: 'Note added successfully',
        data: newNote
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});