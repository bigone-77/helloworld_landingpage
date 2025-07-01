/* Custom scroll logic removed to use native CSS scroll snapping for better performance and reliability. */

document.addEventListener('DOMContentLoaded', function() {
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;

    if (isDesktop) {
        const sections = Array.from(document.querySelectorAll('body > section, footer'));
        let currentSectionIndex = 0;
        let isScrolling = false;
        const scrollDuration = 1000; // Animation duration in ms

        // Easing function for smooth animation
        function easeInOutCubic(t) {
            return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        }

        function smoothScrollTo(targetY) {
            const startY = window.scrollY;
            const distance = targetY - startY;
            let startTime = null;

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const progress = Math.min(timeElapsed / scrollDuration, 1);
                const easedProgress = easeInOutCubic(progress);

                window.scrollTo(0, startY + distance * easedProgress);

                if (timeElapsed < scrollDuration) {
                    requestAnimationFrame(animation);
                } else {
                    // Update current section index after scroll completes
                    const endY = window.scrollY;
                    for (let i = 0; i < sections.length; i++) {
                        if (sections[i].offsetTop <= endY + window.innerHeight / 2) {
                            currentSectionIndex = i;
                        }
                    }
                    isScrolling = false;
                }
            }

            isScrolling = true;
            requestAnimationFrame(animation);
        }

        window.addEventListener('wheel', (event) => {
            if (isScrolling) {
                event.preventDefault();
                return;
            }

            const currentSection = sections[currentSectionIndex];
            const sectionIsTallerThanViewport = currentSection.offsetHeight > window.innerHeight;

            const scrollDirection = event.deltaY > 0 ? 'down' : 'up';

            if (sectionIsTallerThanViewport) {
                const scrollPos = window.scrollY;
                const sectionTop = currentSection.offsetTop;
                const sectionBottom = sectionTop + currentSection.offsetHeight;

                // Check if we are at the very top or bottom of the overflowing section
                const isAtSectionTop = scrollPos <= sectionTop + 1;
                const isAtSectionBottom = scrollPos + window.innerHeight >= sectionBottom - 1;

                if (scrollDirection === 'down' && !isAtSectionBottom) {
                    return; // Allow native scroll down within the section
                }
                if (scrollDirection === 'up' && !isAtSectionTop) {
                    return; // Allow native scroll up within the section
                }
            }
            
            event.preventDefault();

            let nextSectionIndex = currentSectionIndex;
            if (scrollDirection === 'down' && currentSectionIndex < sections.length - 1) {
                nextSectionIndex++;
            } else if (scrollDirection === 'up' && currentSectionIndex > 0) {
                nextSectionIndex--;
            }

            if (nextSectionIndex !== currentSectionIndex) {
                 smoothScrollTo(sections[nextSectionIndex].offsetTop);
            }

        }, { passive: false });
    }

    // Scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    const elementsToAnimate = document.querySelectorAll('.hero, .card, .full-width-section, .feature, footer');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

    // Email copy functionality
    const emailLinks = document.querySelectorAll('.email-link');
    emailLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const email = this.dataset.email;

            navigator.clipboard.writeText(email).then(() => {
                showToast('Email copied!', event);
            }).catch(err => {
                console.error('Failed to copy email: ', err);
                showToast('Oops! Couldn\'t copy email.', event);
            });
        });
    });

    function showToast(message, event) {
        // Remove any existing toasts
        const existingToast = document.querySelector('.toast-message');
        if (existingToast) {
            existingToast.remove();
        }

        const toast = document.createElement('div');
        toast.className = 'toast-message';
        toast.textContent = message;

        // Position toast near cursor
        toast.style.top = `${event.pageY}px`;
        toast.style.left = `${event.pageX}px`;
        
        document.body.appendChild(toast);

        // Animate in
        setTimeout(() => {
            toast.classList.add('show');
        }, 10); // small delay to allow CSS transition

        // Animate out and remove
        setTimeout(() => {
            toast.classList.remove('show');
            toast.addEventListener('transitionend', () => {
                toast.remove();
            });
        }, 2000); // show for 2 seconds
    }
});

// Add some CSS for the animations
const style = document.createElement('style');
style.textContent = `
    .hero, .card, .full-width-section, .feature, footer {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    .hero.visible, .card.visible, .full-width-section.visible, .feature.visible, footer.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style); 