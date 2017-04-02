
function convert () {
  let country1 = document.getElementById('counter_code_one').value.toUpperCase()
  let country2 = document.getElementById('counter_code_two').value.toUpperCase()
  let amount = document.getElementById('value').value
  const url = 'https://api.fixer.io/latest?base='
  fetch(`${url}${country1}`)
.then((res) => res.json())
.then((data) => {
  let rate = data.rates[`${country2}`]
  let result = rate * amount
  document.getElementsByClassName('result')[0].innerHTML = `${amount} ${country1} is equal to ${result} ${country2}`
})
}
