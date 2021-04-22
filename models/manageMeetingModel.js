const mongoose = require('mongoose');

const MeetingSchema = mongoose.Schema({
    hostName: { type: String },
    participantName: { type: String },
    startTime: { type: String},
    endTime: { type: String }
});
MeetingSchema.set('timestamps',true)

module.exports = mongoose.model('meetings', MeetingSchema);