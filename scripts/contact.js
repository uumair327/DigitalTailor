document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const responseMessage = document.getElementById('response-message');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;

        try {
            const response = await fetch('/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (response.ok) {
                responseMessage.textContent = 'Email sent successfully';
                responseMessage.style.color = 'green';
            } else {
                responseMessage.textContent = 'Error sending email';
                responseMessage.style.color = 'red';
            }
        } catch (error) {
            console.error('Error:', error);
            responseMessage.textContent = 'Error sending email';
            responseMessage.style.color = 'red';
        }
    });
});
