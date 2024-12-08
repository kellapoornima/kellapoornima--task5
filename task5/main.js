// JavaScript for Carousel Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Function to show the current slide
function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    // Remove active class from all slides
    slides.forEach(slide => slide.classList.remove('active'));

    // Add active class to the current slide
    slides[currentSlide].classList.add('active');

    // Move the carousel to the current slide using transform
    const carouselSlides = document.querySelector('.carousel-slides');
    carouselSlides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Function to move carousel on button click
function moveCarousel(direction) {
    showSlide(currentSlide + direction);
}

// Initially show the first slide
showSlide(currentSlide);



// JavaScript to handle button interaction and page navigation
document.getElementById("exploreBtn").addEventListener("click", function() {
    window.location.href = "japan_explore.html"; // Redirect to another page
});