// script.js
document.addEventListener('DOMContentLoaded', function() {
    const img = document.getElementById('follow-img');
    const target = document.getElementById('hover-target');

    target.addEventListener('mouseenter', function() {
        img.style.display = 'block'; // Show image when mouse enters the target area
    });

    target.addEventListener('mouseleave', function() {
        img.style.display = 'none'; // Hide image when mouse leaves the target area
    });

    target.addEventListener('mousemove', function(e) {
        const x = e.clientX;
        const y = e.clientY;
        img.style.left = x + 10 + 'px'; // Offset by 10px to not hide the cursor
        img.style.top = y + 10 + 'px';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const imageElement = document.getElementById('hoverImage');
    const images = [
        'me.png',
        'me2.png',
    ];
    let currentIndex = 0;

    imageElement.addEventListener('mouseover', function () {
        currentIndex = (currentIndex + 1) % images.length; // Cycle through images
        imageElement.src = images[currentIndex];
    });
});