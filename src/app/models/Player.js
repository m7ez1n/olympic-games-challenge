const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const PlayerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  nationality: {
    type: String,
    required: true
  }
})

PlayerSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Player', PlayerSchema)
