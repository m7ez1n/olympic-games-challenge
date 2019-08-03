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
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

CompetitionSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Competition', CompetitionSchema)
