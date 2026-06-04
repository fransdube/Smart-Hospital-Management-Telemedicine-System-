const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all invoices
router.get('/', (req, res) => {
    try {
        const invoices = db.prepare('SELECT * FROM billing').all();
        res.json(invoices);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching invoices', error: error.message });
    }
});

// Create new invoice
router.post('/', (req, res) => {
    const { amount, description, status, date } = req.body;
    try {
        const insert = db.prepare("INSERT INTO billing (amount, description, status, date) VALUES (?, ?, ?, ?)");
        const insertResult = insert.run(amount, description, status || 'pending', date || new Date().toISOString());
        res.status(201).json({ message: 'Invoice created', id: insertResult.lastInsertRowid });
    } catch (error) {
        res.status(500).json({ message: 'Error creating invoice', error: error.message });
    }
});

// Mark as paid
router.put('/:id/pay', (req, res) => {
    const { id } = req.params;
    try {
        const update = db.prepare("UPDATE billing SET status = 'paid' WHERE id = ?");
        const updateResult = update.run(id);
        if (updateResult.changes === 0) {
            return res.status(404).json({ message: 'Invoice not found' });
        }
        res.json({ message: 'Invoice marked as paid' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating invoice', error: error.message });
    }
});

module.exports = router;
