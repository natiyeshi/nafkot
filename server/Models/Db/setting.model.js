const mongoose = require('mongoose');

const settingSchema = new mongoose.Schema({
  currency: {
    type: Number,
    required: true,
  },
});

const Setting = mongoose.model('Setting', settingSchema);

module.exports = Setting;