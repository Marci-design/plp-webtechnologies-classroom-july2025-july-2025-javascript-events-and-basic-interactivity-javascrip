
// Accordion functionality

const questions = document.querySelectorAll('.faq-question');

    questions.forEach(question => {
      question.addEventListener('click', () => {
        // Close all open answers first
        questions.forEach(q => {
          q.classList.remove('active');
          q.nextElementSibling.style.display = 'none';
        });

        // Open the clicked one
        question.classList.add('active');
        question.nextElementSibling.style.display = 'block';
      });
    });

// Counter functionality
let count = 0;
const counterButton = document.getElementById('counterButton');
const counterDisplay = document.getElementById('counter');

counterButton.addEventListener('click', () => {
  count++;
  counterDisplay.textContent = count;
}); 

// Light/Dark mode toggle functionality
const toggleModeButton = document.getElementById('toggleMode');
const body = document.body; 
toggleModeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
}
);

// Form submission handling
const contactForm = document.querySelector('form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent actual form submission
    alert('Thank you for contacting us! We will get back to you shortly.');
    contactForm.reset(); // Reset the form fields
});


