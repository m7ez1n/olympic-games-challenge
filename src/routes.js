const express = require('express')

const routes = express.Router()

const PlayerController = require('./app/controllers/PlayerController')
const CompetitionController = require('./app/controllers/CompetitionController')

// CRUD de Competição
routes.get('/competitions', CompetitionController.index)
routes.get('/competitions/:id', CompetitionController.show)
routes.post('/competitions', CompetitionController.store)
routes.put('/competitions/:id', CompetitionController.update)
routes.delete('/competitions/:id', CompetitionController.destroy)

// CRUD de Players
routes.get('/players', PlayerController.index)
routes.get('/players/:name', PlayerController.show)
routes.post('/players', PlayerController.store)
routes.put('/players/:id', PlayerController.update)
routes.delete('/players/:id', PlayerController.destroy)

module.exports = routes
