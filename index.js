function isNumericValue(value) {
  return !isNaN(value) && value !== ''
}

function isValidItem(value) {
  const operators = ['+', '-', '*', '/']

  return isNumericValue(value) || operators.includes(value)
}

function performCalculation(items) {
  switch (items[1]) {
    case '+':
      return Number(items[0]) + Number(items[2])
    case '-':
      return Number(items[0]) - Number(items[2])
    case '*':
      return Number(items[0]) * Number(items[2])
    case '/':
      return Number(items[0]) / Number(items[2])
    default:
      return NaN
  }
}

function calculate(incoming) {
  let calculationItems = []

  incoming.forEach((item) => {
    if (isValidItem(item)) {
      calculationItems.push(item)
    }
  })

  if (calculationItems.length !== 3) return NaN

  return performCalculation(calculationItems)
}

module.exports = calculate
