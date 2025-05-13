document.getElementById("budgetForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form input values
    const title = document.getElementById("title").value;
    const budget = parseFloat(document.getElementById("budget").value);
    const spent = parseFloat(document.getElementById("spent").value);

    // Calculate percentage spent
    const percentage = (spent / budget) * 100;

    // Create a new budget entry
    const newEntry = document.createElement("div");
    newEntry.classList.add("budget-entry");
    newEntry.innerHTML = `
        <p><strong>Title:</strong> ${title}</p>
        <p><strong>Budget:</strong> $${budget}</p>
        <p><strong>Spent:</strong> $${spent}</p>
        <div class="progress-container">
            <div class="progress-bar" style="width: ${Math.min(percentage, 100)}%; background-color: ${percentage > 100 ? 'red' : 'green'};">
                ${percentage.toFixed(2)}%
            </div>
        </div>
    `;

    // Append to output section
    document.getElementById("output").appendChild(newEntry);

    // Clear form fields after submission
    document.getElementById("budgetForm").reset();
});