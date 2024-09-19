// Function to enable or disable the submit button
function validateForm() {
    const wordUsed = document.getElementById("cWUD").value;
    const money = document.getElementById("money").value;
    const submitButton = document.getElementById("submitButton");

    // Enable the button if both fields are filled
    if (wordUsed.trim() !== "" && money.trim() !== "") {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}
