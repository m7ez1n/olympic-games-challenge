const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const CompetitionSchema = new mongoose.Schema({
  competicao: {
    type: String,
    required: true
  },
  atleta: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  unidade: {
    type: String,
    required: true
  },
  open: {
    type: Boolean,
    required: true
  }
})

CompetitionSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Competition', CompetitionSchema)
