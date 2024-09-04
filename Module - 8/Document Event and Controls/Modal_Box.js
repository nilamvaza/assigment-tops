// Get modal element
const modal = document.getElementById('myModal');

// Get open modal button
const openModalBtn = document.getElementById('openModal');

// Get close button
const closeModalBtn = document.querySelector('.close');

// Open modal
openModalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

// Close modal
closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close modal if clicked outside of modal content
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
