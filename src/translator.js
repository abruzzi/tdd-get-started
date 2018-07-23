const translate = (input) => {
	const items = input.split('')
	let sum = 0
	items.forEach((item) => {
		sum += (item === 'd') ? 0.5 : 1.0
	})
	return sum
}

export {translate}