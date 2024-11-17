// Constants
const VERCEL_API_URL = 'https://vercel.com/rogys-projects-ea43f3ec/email-api/J3yQbE1q8vi4kd6LjdhoFdiz21Fo/api/send-email';

// Notification function
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = message;
    
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notif => notif.remove());
    
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Form submission handler
function initializeFormHandler() {
    const form = document.querySelector('.contact-form');
    if (!form) {
        console.error('Contact form not found');
        return;
    }

    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const submitBtn = this.querySelector('.submit-btn');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = 'Sending...';
        submitBtn.disabled = true;

        try {
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!email || !message) {
                throw new Error('Please fill in all fields');
            }

            const response = await window.fetch(VERCEL_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, message }),
            });

            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            showNotification('Message sent successfully!', 'success');
            this.reset();

        } catch (error) {
            console.error('Error:', error);
            showNotification(error.message || 'Failed to send message. Please try again.', 'error');

        } finally {
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        }
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializeFormHandler);