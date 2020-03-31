


const operations = ['+', '-', '/', '*']
let total = 0

const calculate = (calculationSteps) => {
  if (operations.some(element => calculationSteps.includes(element)) === false) {
    return NaN
  }

  calculationSteps = calculationSteps.filter(element => element != '')
  for (let i = 0; i < calculationSteps.length; i++) {
    if (calculationSteps[i] === null) {
      calculationSteps[i] = 0
    }
  }
  let firstValue = calculationSteps[0]
  let secondValue = calculationSteps[2]
  let operand = calculationSteps[1]

  switch (operand) {
    case '+':
      total = parseInt(firstValue) + parseInt(secondValue)

      return total
    case '-':
      total = parseInt(firstValue) - parseInt(secondValue)

      return total
    case '*':
      total = parseInt(firstValue) * parseInt(secondValue)

      return total
    case '/':
      total = parseInt(firstValue) / parseInt(secondValue)

      return total
  }
}




module.exports = calculate
