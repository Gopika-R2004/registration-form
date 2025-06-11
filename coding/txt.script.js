document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registerForm');
    const colors = document.querySelectorAll('.color');
    const successMsg = document.querySelector('.success-msg');

    // Color theme switching
    colors.forEach(color => {
        color.addEventListener('click', function() {
            document.body.className = this.dataset.color;
        });
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulate form processing
        setTimeout(() => {
            successMsg.classList.remove('hidden');
            form.reset();
            
            // Hide success message after 3 seconds
            setTimeout(() => {
                successMsg.classList.add('hidden');
            }, 3000);
        }, 1000);
    });
});