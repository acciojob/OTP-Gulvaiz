//your JS code here. If required.
 const inputFields = document.querySelectorAll('.code');

    inputFields.forEach((input, index) => {
        input.addEventListener('input', (event) => {
            const value = event.target.value;
            if (value) {
                if (index < inputFields.length - 1) {
                    inputFields[index + 1].focus();
                }
            }
        });

        input.addEventListener('keydown', (event) => {
            if (event.key === 'Backspace') {
                if (input.value === '') {
                    if (index > 0) {
                        inputFields[index - 1].focus();
                    }
                } else {
                    input.value = '';
                }
            }
        });

        // Ensuring focus styles for testing
        input.addEventListener('focus', () => {
            input.classList.add('focused');
        });

        input.addEventListener('blur', () => {
            input.classList.remove('focused');
        });
    });
    