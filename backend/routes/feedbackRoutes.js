const express = require('express');
const Feedback = require('../models/Feedback');
const VisitCount = require('../models/VisitCount');
const router = express.Router();

// Create Feedback
router.post('/feedback', async (req, res) => {
    try {
        const feedback = new Feedback(req.body);
        await feedback.save();
        res.status(201).json(feedback);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Read all Feedback
router.get('/feedback', async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        res.json(feedbacks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update Feedback
router.put('/feedback/:id', async (req, res) => {
    try {
        const feedback = await Feedback.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!feedback) return res.status(404).json({ message: 'Feedback not found' });
        res.json(feedback);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete Feedback
router.delete('/feedback/:id', async (req, res) => {
    try {
        await Feedback.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Track Visitor Count
router.post('/visit', async (req, res) => {
    try {
        const visitCount = await VisitCount.findOne();
        if (visitCount) {
            visitCount.count += 1;
            await visitCount.save();
            res.json(visitCount);
        } else {
            const newVisitCount = new VisitCount();
            newVisitCount.count = 1;
            await newVisitCount.save();
            res.json(newVisitCount);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get Visitor Count
router.get('/visit', async (req, res) => {
    try {
        const visitCount = await VisitCount.findOne();
        res.json(visitCount || { count: 0 });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
