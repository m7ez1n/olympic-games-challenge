const Competition = require('../models/Competition')

class CompetitionController {
  // CRUD da competição
  // Listagem
  async index (req, res) {
    const competitions = await Competition.paginate(
      {},
      {
        page: req.query.page || 1,
        limit: 6,
        sort: '-createAt'
      }
    )

    return res.json(competitions)
  }

  // Listagem de um jogador só
  async show (req, res) {
    const competition = Competition.findById(req.params.id)

    return res.json(competition)
  }

  // Criação de um novo jogador
  async store (req, res) {}

  // Update em um jogador
  async update (req, res) {}

  // Deletar algum jogador
  async destroy (req, res) {}
}

module.exports = new CompetitionController()
