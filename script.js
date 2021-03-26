// Sets variables to default value (0).
let diameter = 0
let area = 0
let circumference = 0

// Connects JavaScript to HTML button.
document.getElementById('button').addEventListener('click', calculate)

// Determines what the function does when activated.
function calculate () {
  // Takes the value of the diameter input box and stores it as an integer.
  diameter = document.getElementById('d').value
  diameter = parseInt(diameter)
  // Uses the formula to calculate the area and displays it on the screen.
  area = Math.PI * ((diameter / 2) * (diameter / 2))
  document.getElementById('areaanswer').innerHTML = area
  // Uses the formula to calculate the circumference and displays it on the screen.
  circumference = 2 * Math.PI * (diameter / 2)
  document.getElementById('circumferenceanswer').innerHTML = circumference
}
