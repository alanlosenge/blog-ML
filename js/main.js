let currentSlide = 0; // Start with the first slide
const slides = document.querySelectorAll('.slide'); // Get all slide elements

// Function to display the current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

// Show the initial slide
showSlide(currentSlide);

// Next slide functionality
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Move to the next slide or loop back to start
    showSlide(currentSlide);
}

// Previous slide functionality
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Move to the previous slide or loop to the end
    showSlide(currentSlide);
}

// Attach click events to buttons
document.getElementById('nextButton').addEventListener('click', nextSlide);
document.getElementById('prevButton').addEventListener('click', prevSlide);
