const mongoose = require('mongoose');

const visitCountSchema = new mongoose.Schema({
    count: { type: Number, default: 0 }
});

module.exports = mongoose.model('VisitCount', visitCountSchema);
