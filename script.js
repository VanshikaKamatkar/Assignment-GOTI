document.addEventListener('DOMContentLoaded', () => {
    console.log('Kilangi Store Loaded');

    // Placeholder: If we need to toggle the announcement bar or cycle text later
    const announcementBar = document.querySelector('.announcement-bar');
    
    // Example interaction (Optional): 
    // Add a class if the user scrolls down to potentially hide it
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Logic for sticky header or hiding announcement bar can go here
        }
    });
});

// Sticky Header Logic
const header = document.querySelector('.main-header');
const announcementBar = document.querySelector('.announcement-bar');

window.addEventListener('scroll', () => {
    // If we scroll past the announcement bar height (approx 40px)
    if (window.scrollY > 40) {
        header.classList.add('sticky');
        // Optional: Hide announcement bar by adding a class if desired
    } else {
        header.classList.remove('sticky');
    }
});

// Animation: Reveal elements on scroll
const observerOptions = {
    threshold: 0.15, // Trigger when 15% of the element is visible
    rootMargin: "0px 0px -50px 0px" // Offset slightly for smoother effect
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Run animation only once
        }
    });
}, observerOptions);

// Target all elements with the 'reveal-on-scroll' class
document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    observer.observe(el);
});

// --- STAGGERED ANIMATION FOR COLLECTION ---
document.addEventListener('DOMContentLoaded', () => {
    
    const collectionGrid = document.querySelector('.collection-grid');
    
    if (collectionGrid) {
        const observerOptions = {
            threshold: 0.2, // Trigger when 20% of the grid is visible
            rootMargin: "0px"
        };

        const collectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Get all the individual items
                    const items = entry.target.querySelectorAll('.collection-item');
                    
                    // Loop through them and add the class with a delay
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('visible');
                        }, index * 100); // 100ms delay x index (0ms, 100ms, 200ms...)
                    });

                    // Stop observing once triggered
                    collectionObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        collectionObserver.observe(collectionGrid);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    
    // Select the section
    const bestsellerSection = document.querySelector('.bestseller-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the section is visible in the viewport
            if (entry.isIntersecting) {
                // Add the class that triggers the CSS animation
                bestsellerSection.classList.add('animate');
                // Stop observing (so it doesn't animate again when scrolling up)
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 }); // Trigger when 20% of section is visible

    if (bestsellerSection) {
        observer.observe(bestsellerSection);
    }
});