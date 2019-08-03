const Player = require('../models/Player')

class PlayerController {
  async store (req, res) {
    const player = await Player.create(req.body)

    return res.json(player)
  }
}

module.exports = new PlayerController()
