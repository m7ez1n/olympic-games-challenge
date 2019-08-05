const Competition = require('../models/Competition')

class CompetitionController {
  // CRUD da competição
  // Listagem
  async index (req, res) {
    const competitions = await Competition.paginate(
      {},
      {
        page: req.query.page || 1,
        limit: 5,
        sort: '-createAt'
      }
    )

    return res.json(competitions)
  }

  // Listagem de uma competição só
  async show (req, res) {
    const competition = await Competition.findById(req.params.id)

    return res.json(competition)
  }

  // Criação de um novo jogador
  async store (req, res) {
    const competition = await Competition.create(req.body)

    return res.json(competition)
  }

  // Update em um jogador
  async update (req, res) {
    const competition = await Competition.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    )

    return res.json(competition)
  }

  // Deletar algum jogador
  async destroy (req, res) {
    await Competition.findByIdAndDelete(req.params.id)

    return res.send()
  }
}

module.exports = new CompetitionController()
