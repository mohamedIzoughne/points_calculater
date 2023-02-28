// Select Elements

const subjectRows = document.querySelectorAll('.row:not(.header)')
const submitBtn = document.querySelector('.submit-btn')
const resultContainer = document.querySelector('.result')
const resultEl = resultContainer.querySelector('span')

const subjectsCount = subjectRows.length
let result = 0
let coefficientsValue = 0
let finalResult

submitBtn.addEventListener('click', () => getFinalResult())

function getFinalResult() {
  subjectRows.forEach((row) => {
    const grade = +row.querySelector('.grade').value
    const coefficient = +row.querySelector('.coefficient').value
    coefficientsValue += coefficient
    result += grade * coefficient
  })
  finalResult = result / coefficientsValue
  resultContainer.classList.add('show')
  resultEl.innerText = `: ${round(finalResult)}`

  // restart
  result = 0
  coefficientsValue = 0
  window.scrollTo(0, document.body.scrollHeight)
}

function round(number) {
  const integer = number.toString().split('.')[0]
  const fraction = number.toString().split('.')[1]

  if (fraction) {
    return `${integer}.${fraction.slice(0, 2)}`
  } else {
    return number
  }
}
