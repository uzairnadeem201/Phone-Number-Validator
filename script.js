document.getElementById('check-btn').addEventListener('click', function () {
    const userInput = document.getElementById('user-input').value;
    const resultDiv = document.getElementById('results-div');

    // Regular expressions for valid phone numbers
    const validPatterns = [
        /^1?\s?\d{3}-\d{3}-\d{4}$/,             // 1 555-555-5555 or 555-555-5555
        /^1?\s?\(\d{3}\)\s?\d{3}-\d{4}$/,       // 1 (555) 555-5555 or (555)555-5555
        /^1?\s?\d{3}\s\d{3}\s\d{4}$/,           // 1 555 555 5555 or 555 555 5555
        /^\d{10}$/                              // 5555555555
    ];

    // Function to check if input matches any valid pattern
    function isValidPhoneNumber(input) {
        return validPatterns.some(pattern => pattern.test(input));
    }

    // Validate the input
    if (!userInput) {
        alert("Please provide a phone number");
    } else if (isValidPhoneNumber(userInput)) {
        resultDiv.innerHTML += `Valid US number: ${userInput} <br>`;
    } else {
        resultDiv.innerHTML += `Invalid US number: ${userInput}\n`;
    }
});

document.getElementById('clear-btn').addEventListener('click', function () {
    document.getElementById('results-div').textContent = '';
    document.getElementById('user-input').value = '';
});