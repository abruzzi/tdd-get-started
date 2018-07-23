const convert = (c) => {
  switch (c) {
    case 'd':
      return {
        status: 'Dev',
        effort: 0.5
      }
    case 'D':
      return {
        status: 'Dev',
        effort: 1.0
      }
    case 'q':
      return {
        status: 'QA',
        effort: 0.5
      }
    case 'Q':
      return {
        status: 'QA',
        effort: 1.0
      }
    default:
      return {
        status: 'Unknown',
        effort: 0.0
      }
  }
}

const translate = (input) => {
  const items = input.split('')
  return items.reduce((accumulator, current) => {
    const {status, effort} = convert(current)
    accumulator[status] = (accumulator[status] || 0) + effort
    return accumulator
  }, {})
}

export { translate }