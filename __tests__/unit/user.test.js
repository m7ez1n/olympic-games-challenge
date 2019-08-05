const { Player } = require('../../src/app/models/Player')

describe('Player', () => {
  it('should create new player', async () => {
    const player = await Player.create({
      name: 'Mateus',
      age: '18',
      nationality: 'Brasil'
    })

    expect(player).toBe(true)
  })
})
