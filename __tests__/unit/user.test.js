const request = require('supertest')
const server = require('../../src/server')

const { Player } = require('../../src/app/models/Player')

describe('Player', () => {
  it('should create new player', async () => {
    const player = await Player.create({
      name: 'Mateus',
      age: '18',
      nationality: 'Brasil'
    })

    const response = await request(server)
      .post('players')
      .send(player)

    expect(response.status).toBe(200)
  })
})
