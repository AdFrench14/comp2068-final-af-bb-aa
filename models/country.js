// We will need our mongoose library
const mongoose = require(`mongoose`);

// Our schema
const CountrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  population: {
    type: Number,
    required: false
  },
  export: {
    type: String,
    enum: ['AGRICULTURE', 'WATER', 'MINERALS', 'RARE MATERIALS', 'LUMBER'],
    default: 'AGRICULTURE'
  }
}, {
    timestamps: true
  });

// Exporting our Country model
module.exports = mongoose.model('Country', CountrySchema);