describe('matchers', () => {
  it('match numbers', () => {
    const v = 1 + 1
    expect(v).toEqual(2)
  })

  describe('string', () => {
    it('match strings', () => {
      expect('hello').toEqual('hello')
    })

    it('match regular expression', () => {
      expect('juntao').toMatch(/\w+/)
    })

    it('match numbers', () => {
      expect('185-3345-3343').toMatch(/^\d{3}-\d{4}-\d{4}$/)
      expect('1853-3345-3343').not.toMatch(/^\d{3}-\d{4}-\d{4}$/)
    })

    it('string contains', () => {
      const givenName = expect.stringContaining('Juntao')
      expect('Juntao Qiu').toEqual(givenName)
    })
  })

  describe('object', () => {
    it('match object', () => {
      const user = {
        name: 'Juntao',
        address: 'Xian, Shaanxi, China'
      }
  
      expect(user.name).toBeDefined()
      expect(user.age).not.toBeDefined()
    })
  
    it('object matching', () => {
      const user = {
        name: 'Juntao',
        address: 'Xian, Shaanxi, China'
      }

      const fetched = {
        name: 'Juntao',
        email: 'juntao.qiu@gmail.com',
        address: 'Xian, Shaanxi, China'
      }

      expect(fetched).not.toEqual(user)
      expect(fetched).toEqual(expect.objectContaining(user))
    })
  })
  
  describe('array', () => {
    const users = ['Juntao', 'Abruzzi', 'Alex']
    
    it('match arrays', () => {
      expect(users).toContainEqual('Juntao')
      expect(users).toContain(users[0])
  
      expect(users).toHaveLength(3)
      expect(users.length).toBeGreaterThan(2)
    })

    it('array containing', () => {
      const usetSet = expect.arrayContaining(['Juntao', 'Abruzzi'])
      expect(users).toEqual(usetSet)
    })
  })


  describe('bring them together', () => {
    const user = {
      name: 'Juntao Qiu',
      address: 'Xian, Shaanxi, China',
      projects: [
        { name: 'ThoughtWorks University' },
        { name: 'ThoughtWorks Core Buiness Beach'}
      ]
    }

    const matcher = expect.objectContaining({
      name: expect.stringContaining('Juntao'),
      projects: expect.arrayContaining([
        { name: expect.stringContaining('ThoughtWorks') }
      ])
    })

    expect(user).toEqual(matcher)
  })
})