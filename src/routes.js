const express = require('express')

const routes = express.Router()

const CompetitionController = require('./app/controllers/CompetitionController')

routes.get('/competitions', CompetitionController.index)
routes.get('/competitions/:id', CompetitionController.show)
routes.post('/competitions', CompetitionController.store)
routes.put('/competitions/:id', CompetitionController.update)
routes.delete('/competitions/:id', CompetitionController.destroy)

module.exports = routes
