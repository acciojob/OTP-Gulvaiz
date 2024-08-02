const inputFields = document.querySelectorAll(".code");

// Handle input event
inputFields.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (input.value !== "" && index < inputFields.length - 1) {
      input.classList.remove("focused"); // Remove focus class from the current input
      inputFields[index + 1].classList.add("focused"); // Add focus class to the next input
      inputFields[index + 1].focus(); // Focus the next input
    }
  });
});

// Handle backspace event
inputFields.forEach((input, index) => {
  input.addEventListener("keydown", (event) => {
    if (event.key === "Backspace" && input.value === "" && index > 0) {
      input.classList.remove("focused"); // Remove focus class from the current input
      inputFields[index - 1].classList.add("focused"); // Add focus class to the previous input
      inputFields[index - 1].focus(); // Focus the previous input
    }
  });
});


