// Part 1: Event Handling
// Toggle light/dark mode

const modeToggle = document.getElementById('modeToggle');
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Part 2: Building Interactive Elements
// Counter functionality
let count = 0;
const incrementBtn = document.getElementById('incrementBtn');
const counterValue = document.getElementById('counterValue');

incrementBtn.addEventListener('click', () => {
    count++;
    counterValue.textContent = count= $('count');
});

// FAQ collapsible functionality
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.classList.toggle('hidden');
    });
});

// Part 3: Form Validation
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation logic
    if (name === '' || email === '' || password === '') {
        formFeedback.textContent = 'All fields are required.';
        formFeedback.style.color = 'red';
        return;
    }

    // Email validation using regex
    const emailPattern = /^[^ ]+@[^ ]+.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        formFeedback.textContent = 'Please enter a valid email address.';
        formFeedback.style.color = 'red';
        return;
    }

    formFeedback.textContent = 'Form submitted successfully!';
    formFeedback.style.color = 'green';
});
