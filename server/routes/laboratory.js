const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all tests
router.get('/', (req, res) => {
    try {
        const tests = db.prepare('SELECT * FROM laboratory_tests').all();
        res.json(tests);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tests', error: error.message });
    }
});

// Request new test
router.post('/', (req, res) => {
    const { test, status, result, date } = req.body;
    try {
        const insert = db.prepare("INSERT INTO laboratory_tests (test, status, result, date) VALUES (?, ?, ?, ?)");
        const insertResult = insert.run(test, status || 'Pending', result || '-', date || new Date().toISOString());
        res.status(201).json({ message: 'Test created', id: insertResult.lastInsertRowid });
    } catch (error) {
        res.status(500).json({ message: 'Error creating test', error: error.message });
    }
});

// Update test status and result
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { status, result } = req.body;
    try {
        const update = db.prepare("UPDATE laboratory_tests SET status = ?, result = ? WHERE id = ?");
        const updateResult = update.run(status, result, id);
        if (updateResult.changes === 0) {
            return res.status(404).json({ message: 'Test not found' });
        }
        res.json({ message: 'Test updated' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating test', error: error.message });
    }
});

module.exports = router;
