 // --- Part 2: Interactive Elements ---

        // 1. Dark Mode Toggle
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        const html = document.documentElement;

        darkModeToggle.addEventListener('change', () => {
            if (darkModeToggle.checked) {
                html.classList.remove('light');
                html.classList.add('dark');
            } else {
                html.classList.remove('dark');
                html.classList.add('light');
            }
        });

        // 2. Simple Counter
        const counterDisplay = document.getElementById('counter-display');
        const incrementBtn = document.getElementById('increment-btn');
        const decrementBtn = document.getElementById('decrement-btn');
        let count = 0;

        incrementBtn.addEventListener('click', () => {
            count++;
            counterDisplay.textContent = count;
        });

        decrementBtn.addEventListener('click', () => {
            count--;
            counterDisplay.textContent = count;
        });

        // 3. Collapsible FAQ
        const faqToggle = document.querySelector('.faq-toggle');
        const faqContent = document.querySelector('.faq-content');
        const plusIcon = document.querySelector('.plus-icon');

        faqToggle.addEventListener('click', () => {
            const isHidden = faqContent.classList.toggle('hidden');
            plusIcon.textContent = isHidden ? '+' : '−';
        });


        // --- Part 3: Form Validation ---

        const contactForm = document.getElementById('contact-form');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const passwordError = document.getElementById('password-error');
        const formSuccess = document.getElementById('form-success');

        // Regex for a simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Function to set error state for an input field
        function setError(element, message) {
            element.textContent = message;
            element.previousElementSibling.classList.add('border-red-500', 'focus:ring-red-500');
            element.previousElementSibling.classList.remove('focus:ring-blue-500');
        }

        // Function to clear error state for an input field
        function clearError(element) {
            element.textContent = '';
            element.previousElementSibling.classList.remove('border-red-500', 'focus:ring-red-500');
            element.previousElementSibling.classList.add('focus:ring-blue-500');
        }

        contactForm.addEventListener('submit', (event) => {
            // Prevent the default form submission
            event.preventDefault();

            let isValid = true;

            // Clear all previous error messages and success message
            clearError(nameError);
            clearError(emailError);
            clearError(passwordError);
            formSuccess.classList.add('hidden');

            // Name validation
            if (nameInput.value.trim() === '') {
                setError(nameError, 'Name is required.');
                isValid = false;
            }

            // Email validation
            if (emailInput.value.trim() === '') {
                setError(emailError, 'Email is required.');
                isValid = false;
            } else if (!emailRegex.test(emailInput.value)) {
                setError(emailError, 'Please enter a valid email.');
                isValid = false;
            }

            // Password validation
            if (passwordInput.value.length < 8) {
                setError(passwordError, 'Password must be at least 8 characters.');
                isValid = false;
            }

            // If the form is valid, show a success message
            if (isValid) {
                formSuccess.classList.remove('hidden');
                contactForm.reset();
            }
        });
