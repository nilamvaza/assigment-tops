document.getElementById('myForm').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Clear previous errors
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('ageError').textContent = '';

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = document.getElementById('age').value.trim();

    let isValid = true;

    // Validate name
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    }

    // Validate email
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    } else if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Email is invalid.';
        isValid = false;
    }

    // Validate age
    if (age === '') {
        document.getElementById('ageError').textContent = 'Age is required.';
        isValid = false;
    } else if (age < 1 || age > 120) {
        document.getElementById('ageError').textContent = 'Age must be between 1 and 120.';
        isValid = false;
    }

    // If all fields are valid, you can submit the form or perform other actions
    if (isValid) {
        alert('Form submitted successfully!');
        // You can add form submission logic here, such as sending data to a server
    }
});

function validateEmail(email) {
    // Simple email validation regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
