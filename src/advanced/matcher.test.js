describe('matchers', () => {
  it('match numbers', () => {
    const v = 1 + 1
    expect(v).toEqual(2)
  })

  describe('string', () => {

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
})