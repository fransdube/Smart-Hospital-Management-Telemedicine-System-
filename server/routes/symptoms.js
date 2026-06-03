const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { symptoms } = req.body;
    let diagnosis = "Mild Condition";
    let urgency = "Low";
    let recommendation = "Rest and drink plenty of fluids.";

    if (!symptoms) {
        return res.status(400).json({ message: "Symptoms are required." });
    }

    const symptomsLower = symptoms.toLowerCase();

    if (symptomsLower.includes('chest pain') || symptomsLower.includes('shortness of breath')) {
        diagnosis = "Possible Cardiac Issue or Severe Respiratory Issue";
        urgency = "High";
        recommendation = "Seek emergency medical attention immediately.";
    } else if (symptomsLower.includes('fever') && symptomsLower.includes('cough')) {
        diagnosis = "Possible Respiratory Infection (e.g., Flu or COVID-19)";
        urgency = "Medium";
        recommendation = "Isolate, rest, monitor symptoms, and consult a doctor if it worsens.";
    } else if (symptomsLower.includes('headache') && symptomsLower.includes('nausea')) {
        diagnosis = "Possible Migraine or Viral Infection";
        urgency = "Medium";
        recommendation = "Rest in a dark room, stay hydrated. Consult a doctor if persistent.";
    }

    res.json({
        diagnosis,
        urgency,
        recommendation,
        note: "This is a local AI mock based on simple rules and not a substitute for professional medical advice."
    });
});

module.exports = router;
