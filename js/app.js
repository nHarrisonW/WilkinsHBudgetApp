// Retrieve the necessary HTML elements
const totalBudgetEl = document.getElementById('totalBudget');
const yourMoneyEl = document.getElementById('yourMoney');
const updateBudgetBtn = document.getElementById('updateBudget');
const inputBox = document.querySelector('.val-box');

// Set the initial value of the total budget
let totalBudget = 0;

// Add an event listener to the "Update Budget" button
updateBudgetBtn.addEventListener('click', function() {
  // Retrieve the user's input from the input box
  const inputVal = parseFloat(inputBox.value);

  // Update the HTML element's text with the new total budget
  totalBudget = inputVal;
  totalBudgetEl.textContent = `Total Budget: $${totalBudget}`;

  // Update the available money text in the HTML element
  yourMoneyEl.textContent = `Available: $${inputVal}`;

  // Clear the input box
  inputBox.value = '';
});
