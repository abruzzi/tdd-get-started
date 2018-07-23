const convert = (c) => {
  switch (c) {
    case 'd':
      return 0.5
    case 'D':
      return 1.0
    default:
      return 0.0
  }
}

const translate = (input) => {
  const items = input.split('')
  return items.reduce((accumulator, current) => {
    accumulator += convert(current)
    return accumulator
  }, 0)
}

export { translate }