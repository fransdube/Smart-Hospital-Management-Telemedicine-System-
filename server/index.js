const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// API Routes
const authRoutes = require('./routes/auth');
const appointmentRoutes = require('./routes/appointments');
const recordRoutes = require('./routes/records');
const symptomRoutes = require('./routes/symptoms');
const telemedicineRoutes = require('./routes/telemedicine');

app.use('/api/auth', authRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/records', recordRoutes);
app.use('/api/symptoms', symptomRoutes);
app.use('/api/telemedicine', telemedicineRoutes);

app.get('/api/health', (req, res) => {
    res.json({ status: 'OK' });
});

// Serve static frontend in production
const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));

// Catch-all route for React client-side routing
app.get(/^(?!\/api).*$/, (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

const PORT = process.env.PORT || 10000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}.`);
});
