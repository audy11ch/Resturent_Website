// filepath: Restaurant_Website/Restaurant_Website/src/js/script.js
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const menu = document.getElementById('menu');

    menuButton.addEventListener('click', function() {
        menu.classList.toggle('active');
    });

    const reservationForm = document.getElementById('reservation-form');
    reservationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(reservationForm);
        const data = Object.fromEntries(formData.entries());
        console.log('Reservation Data:', data);
        alert('Reservation submitted! We will contact you soon.');
        reservationForm.reset();
    });
});