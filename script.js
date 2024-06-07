function scheduleAppointment(trainerName) {
    // Logique pour afficher un formulaire de prise de rendez-vous personnalisé
    const contactForm = document.getElementById('contactForm');
    const formTitle = document.createElement('h3');
    formTitle.innerText = `Thank you for choosing ${trainerName}`;
    contactForm.prepend(formTitle);
    document.getElementById('firstName').focus();
}

// Gérer l'envoi du formulaire de contact
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your appointment request has been submitted.');
});
function scheduleAppointment(trainerName) {
    // Show the form section and scroll to it
    document.getElementById('contactForm').style.display = 'block';
    document.getElementById('contact').scrollIntoView();
    
    // Set the trainer name in the form
    const formTitle = document.createElement('h3');
    formTitle.innerText = `Thank you for choosing ${trainerName}`;
    document.getElementById('contactForm').prepend(formTitle);
    document.getElementById('firstName').focus();
    
    // Save the trainer name for confirmation
    document.getElementById('trainerName').innerText = trainerName;
    document.getElementById('trainerName2').innerText = trainerName;
}

// Handle form submission and show the confirmation section
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get user email from the form
    const userEmail = document.getElementById('email').value;
    document.getElementById('userEmail').innerText = userEmail;
    
    // Hide the form and show the confirmation section
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('confirmation').style.display = 'block';
    document.getElementById('confirmation').scrollIntoView();
});

function bookAnotherAppointment() {
    // Hide the confirmation section and reset the form
    document.getElementById('confirmation').style.display = 'none';
    document.getElementById('contactForm').reset();
    
    // Show the experts section
    document.getElementById('experts').scrollIntoView();
}

