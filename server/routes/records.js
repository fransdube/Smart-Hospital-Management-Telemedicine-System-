const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all medical records
router.get('/', (req, res) => {
    try {
        const records = db.prepare(`
            SELECT m.*, p.name as patient_name, d.name as doctor_name
            FROM medical_records m
            LEFT JOIN users p ON m.patient_id = p.id
            LEFT JOIN users d ON m.doctor_id = d.id
        `).all();
        res.json(records);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching medical records', error: error.message });
    }
});

// Create medical record
router.post('/', (req, res) => {
    const { patient_id, doctor_id, diagnosis, prescription, notes } = req.body;
    try {
        const insert = db.prepare("INSERT INTO medical_records (patient_id, doctor_id, diagnosis, prescription, notes) VALUES (?, ?, ?, ?, ?)");
        const result = insert.run(patient_id, doctor_id, diagnosis, prescription, notes);
        res.status(201).json({ message: 'Record created', id: result.lastInsertRowid });
    } catch (error) {
        res.status(500).json({ message: 'Error creating record', error: error.message });
    }
});

module.exports = router;
