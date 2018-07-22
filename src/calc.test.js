var add = require('./calc.js')

describe('calculator', function() {
	it('add two numbers', function() {
		expect(add(1, 2)).toEqual(3)
	})
})