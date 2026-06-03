const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all appointments
router.get('/', (req, res) => {
    try {
        const appointments = db.prepare(`
            SELECT a.*, p.name as patient_name, d.name as doctor_name
            FROM appointments a
            LEFT JOIN users p ON a.patient_id = p.id
            LEFT JOIN users d ON a.doctor_id = d.id
        `).all();
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching appointments', error: error.message });
    }
});

// Create appointment
router.post('/', (req, res) => {
    const { patient_id, doctor_id, date, time, reason } = req.body;
    try {
        const insert = db.prepare("INSERT INTO appointments (patient_id, doctor_id, date, time, reason) VALUES (?, ?, ?, ?, ?)");
        const result = insert.run(patient_id, doctor_id, date, time, reason);
        res.status(201).json({ message: 'Appointment created', id: result.lastInsertRowid });
    } catch (error) {
        res.status(500).json({ message: 'Error creating appointment', error: error.message });
    }
});

module.exports = router;
