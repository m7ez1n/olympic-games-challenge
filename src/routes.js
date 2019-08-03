const express = require('express')

const routes = express.Router()

const PlayerController = require('./app/controllers/PlayerController')
const CompetitionController = require('./app/controllers/CompetitionController')

routes.get('/competitions', CompetitionController.index)
routes.get('/competitions/:id', CompetitionController.show)
routes.post('/competitions', CompetitionController.store)
routes.put('/competitions/:id', CompetitionController.update)
routes.delete('/competitions/:id', CompetitionController.destroy)

routes.post('/player', PlayerController.store)

module.exports = routes
