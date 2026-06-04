const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all prescriptions
router.get('/', (req, res) => {
    try {
        const prescriptions = db.prepare('SELECT * FROM pharmacy_prescriptions').all();
        res.json(prescriptions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching prescriptions', error: error.message });
    }
});

// Create new prescription
router.post('/', (req, res) => {
    const { medication, doctor, status, date } = req.body;
    try {
        const insert = db.prepare("INSERT INTO pharmacy_prescriptions (medication, doctor, status, date) VALUES (?, ?, ?, ?)");
        const result = insert.run(medication, doctor, status || 'Processing', date || new Date().toISOString());
        res.status(201).json({ message: 'Prescription created', id: result.lastInsertRowid });
    } catch (error) {
        res.status(500).json({ message: 'Error creating prescription', error: error.message });
    }
});

// Update status to Dispensed
router.put('/:id/dispense', (req, res) => {
    const { id } = req.params;
    try {
        const update = db.prepare("UPDATE pharmacy_prescriptions SET status = 'Dispensed' WHERE id = ?");
        const result = update.run(id);
        if (result.changes === 0) {
            return res.status(404).json({ message: 'Prescription not found' });
        }
        res.json({ message: 'Prescription dispensed' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating prescription', error: error.message });
    }
});

module.exports = router;
