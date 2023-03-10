const mongoose = require('mongoose')

const OtaTrackSchema = new mongoose.Schema({
  picId: {
    type: String,
    require: true
  },
  otaDate: {
    type: Date,
    required: true,
    default: new Date()
  },
  espId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'ESP'
  },
  batchId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'Batch'
  },
  binVersion: {
    type: String,
    required: true,
  },
  prevBinVersion: {
    type: String,
  },
})

module.exports = mongoose.model('OtaTrack', OtaTrackSchema)
