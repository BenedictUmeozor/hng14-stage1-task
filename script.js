// Update timestamp with current time in milliseconds
function updateTimestamp() {
    const timestampElement = document.querySelector('[data-testid="test-user-time"]');
    if (timestampElement) {
        const currentTime = Date.now();
        timestampElement.textContent = `${currentTime}ms`;
        timestampElement.setAttribute('datetime', new Date(currentTime).toISOString());
    }
}

// Initialize timestamp on page load
updateTimestamp();

// Update timestamp every second for live updates
setInterval(updateTimestamp, 1000);

// Keyboard navigation enhancement
document.addEventListener('DOMContentLoaded', () => {
    // Add focus-visible polyfill behavior for better keyboard navigation
    const focusableElements = document.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
    
    focusableElements.forEach(element => {
        element.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                element.classList.add('keyboard-activated');
            }
        });
        
        element.addEventListener('blur', () => {
            element.classList.remove('keyboard-activated');
        });
    });

    // Announce profile card loaded for screen readers
    const profileCard = document.querySelector('[data-testid="test-profile-card"]');
    if (profileCard) {
        profileCard.setAttribute('aria-label', 'Profile card loaded and ready');
    }

    // Add skip link for accessibility
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'sr-only';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 100;
    `;
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '0';
    });
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    document.body.insertBefore(skipLink, document.body.firstChild);
});

// Handle image loading errors gracefully
const avatarImage = document.querySelector('[data-testid="test-user-avatar"]');
if (avatarImage) {
    avatarImage.addEventListener('error', () => {
        // Fallback to a placeholder if image fails to load
        avatarImage.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23ffcc00" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="120" text-anchor="middle" dy=".3em" fill="%231a1a1a" font-family="monospace"%3EAR%3C/text%3E%3C/svg%3E';
        avatarImage.alt = 'Profile photo placeholder with initials AR';
    });
}

// Add animation observer for performance
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    const animatedElements = document.querySelectorAll('.card-header, .bio-section, .social-section, .lists-container');
    animatedElements.forEach(el => observer.observe(el));
}

// Log accessibility info for developers
console.log('♿ Accessibility Features:');
console.log('✓ Semantic HTML structure');
console.log('✓ ARIA labels and live regions');
console.log('✓ Keyboard navigation support');
console.log('✓ Focus-visible indicators');
console.log('✓ Screen reader announcements');
console.log('✓ Reduced motion support');
console.log('✓ High contrast mode support');
console.log('✓ All interactive elements are keyboard accessible');
