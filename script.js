document.addEventListener('DOMContentLoaded', () => {
    console.log('Kilangi Store Loaded');

    const announcementBar = document.querySelector('.announcement-bar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
        }
    });
});

const header = document.querySelector('.main-header');
const announcementBar = document.querySelector('.announcement-bar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

const observerOptions = {
    threshold: 0.15, 
    rootMargin: "0px 0px -50px 0px" 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    observer.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
    
    const collectionGrid = document.querySelector('.collection-grid');
    
    if (collectionGrid) {
        const observerOptions = {
            threshold: 0.2, 
            rootMargin: "0px"
        };

        const collectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const items = entry.target.querySelectorAll('.collection-item');
                    
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('visible');
                        }, index * 100); 
                    });

                    collectionObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        collectionObserver.observe(collectionGrid);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    
    const bestsellerSection = document.querySelector('.bestseller-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                bestsellerSection.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    if (bestsellerSection) {
        observer.observe(bestsellerSection);
    }
});