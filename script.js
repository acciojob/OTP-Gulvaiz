const inputFields = document.querySelectorAll(“.code”);

inputFields.forEach((input, index) => {
input.addEventListener(“input”, () => {
if (input.value !== “” && index < inputFields.length - 1) {
input.classList.remove(“focused”);
inputFields[index + 1].classList.add(“focused”);
inputFields[index + 1].focus();
}
});

input.addEventListener(“keydown”, (event) => {
if (event.key === “Backspace” && input.value === “” && index > 0) {
input.classList.remove(“focused”);
inputFields[index - 1].classList.add(“focused”);
inputFields[index - 1].focus();
}
});
});
document.getElementById("code-1").focus();