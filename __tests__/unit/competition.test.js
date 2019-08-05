const request = require('supertest')
const server = require('../../src/server')

const { Competition } = require('../../src/app/models/Competition')

describe('Player', () => {
  it('should create new player', async () => {
    const competition = await Competition.create({
      competicao: 'Nado semifinal',
      atleta: 'Daniel',
      value: '70.43',
      unidade: 'm',
      open: false
    })

    const response = await request(server)
      .post('competitions')
      .send(competition)

    expect(response.status).toBe(200)
  })
})
