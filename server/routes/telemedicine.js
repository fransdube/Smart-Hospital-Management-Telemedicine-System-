const express = require('express');
const router = express.Router();

router.post('/room', (req, res) => {
    const { appointment_id } = req.body;

    // In a real app this would call Jitsi API, here we just return a mock URL
    const roomId = appointment_id ? `room_${appointment_id}` : `room_${Math.floor(Math.random() * 1000000)}`;
    const roomUrl = `https://meet.jit.si/${roomId}`;

    res.json({
        room_url: roomUrl,
        room_id: roomId
    });
});

module.exports = router;
