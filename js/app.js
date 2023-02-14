// Retrieve the necessary HTML elements
const totalBudgetEl = document.getElementById('totalBudget');
const yourMoneyEl = document.getElementById('yourMoney');
const updateBudgetBtn = document.getElementById('updateBudget');
const inputBox = document.querySelector('.val-box');


// Set the initial value of the total budget
let totalBudget = 0;
// Add an event listener to the "Update Budget" button
updateBudgetBtn.addEventListener('click', function () {
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



const addExpenseBtn = document.getElementById("addExpense");

addExpenseBtn.addEventListener("click", function () {
    const newDescription = document.getElementById("newDescription").value;
    const newValue = document.getElementById("newValue").value;
    // create a new expense box
    const expenseBox = document.createElement("div");
    expenseBox.classList.add("d-flex", "expense-box", "col-12");

    const deleteBox = document.createElement("a");
    deleteBox.id = "deleteBox";
    deleteBox.textContent = "❌";

    const expenseCost = document.createElement("p");
    expenseCost.id = "expenseCost";
    expenseCost.textContent = "$" + newValue;

    const expenseDescription = document.createElement("p");
    expenseDescription.id = "expenseDescription";
    expenseDescription.textContent = newDescription;

    expenseBox.appendChild(deleteBox);
    expenseBox.appendChild(expenseCost);
    expenseBox.appendChild(expenseDescription);

    const container = document.querySelector(".container");
    container.appendChild(expenseBox);

    document.getElementById("newDescription").value = "";
    document.getElementById("newValue").value = "";

    // Subtract the new expense value from yourMoney
    const yourMoneyEl = document.getElementById('yourMoney');
    let yourMoney = parseFloat(yourMoneyEl.textContent.split('$')[1]);
    yourMoney -= newValue;
    yourMoneyEl.textContent = `Available: $${yourMoney.toFixed(2)}`;

    const deleteButtons = document.querySelectorAll("#deleteBox");

    deleteButtons.forEach((button) => {
        button.addEventListener("click", () => {
            button.parentElement.remove();
        });
    });
});


// Deleting boxes
const deleteButtons = document.querySelectorAll("#deleteBox");

deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
        button.parentElement.remove();
    });
});