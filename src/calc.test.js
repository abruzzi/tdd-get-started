import {add} from './calc'

describe('calculator', () => {
	it('add two numbers', () => {
		expect(add(1, 2)).toEqual(3)
	})
})