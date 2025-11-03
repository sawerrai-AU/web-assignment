// When the button is clicked, show a message
document.getElementById("clickButton").addEventListener("click", function() {
    const message = document.getElementById("message");
    message.textContent = "Hello! You clicked the button.";
    message.style.color = "#007bff";
});
