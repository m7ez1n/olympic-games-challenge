const Player = require('../models/Player')

class PlayerController {
  async index (req, res) {
    const players = await Player.paginate(
      {},
      {
        page: req.query.page || 1,
        limit: 10,
        sort: 'age'
      }
    )

    return res.json(players)
  }

  async show (req, res) {
    const { name } = req.body

    const player = await Player.findOne({ name })

    return res.json(player)
  }

  async store (req, res) {
    const player = await Player.create(req.body)

    return res.json(player)
  }

  async update (req, res) {
    const player = await Player.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })

    return res.json(player)
  }

  async destroy (req, res) {
    await Player.findByIdAndDelete(req.params.id)

    return res.send()
  }
}

module.exports = new PlayerController()
