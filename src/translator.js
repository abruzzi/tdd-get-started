import {dict, placeholder} from './constants'

const convert = (c) => {
  return dict[c] || placeholder
}

const translate = (input) => {
  const items = input.split('')
  return items.reduce((accumulator, current) => {
    const { status, effort } = convert(current)
    accumulator[status] = (accumulator[status] || 0) + effort
    return accumulator
  }, {})
}

export { translate }