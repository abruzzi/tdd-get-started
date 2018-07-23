import {translate} from './translator'

describe('translator', () => {
	it('translate d to half dev day', () => {
		expect(translate('d')).toEqual(0.5)
	})
})