import {translate} from './translator'

describe('translator', () => {
	it('translate d to half dev day', () => {
		expect(translate('d')).toEqual({'Dev': 0.5})
	})

	it('translate D to one dev day', () => {
		expect(translate('D')).toEqual({'Dev': 1.0})
	})

	it('translate dD to one and a half dev day', () => {
		expect(translate('dD')).toEqual({'Dev': 1.5})
	})

	it('translate q to half qa day', () => {
		expect(translate('q')).toEqual({'QA': 0.5})
	})

	it('translate qQ to half qa day', () => {
		expect(translate('qQ')).toEqual({'QA': 1.5})
	})
})