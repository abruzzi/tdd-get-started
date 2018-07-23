import {translate} from './translator'

describe('translator', () => {
	it('translate d to half dev day', () => {
		expect(translate('d')).toEqual(0.5)
	})

	it('translate D to one dev day', () => {
		expect(translate('D')).toEqual(1.0)
	})

	it('translate dd to one dev day', () => {
		expect(translate('dD')).toEqual(1.5)
	})
})