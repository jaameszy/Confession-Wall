// script.js

// Function to create floating sparkles
function createSparkles() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    document.body.appendChild(sparkle);

    // Random position
    sparkle.style.left = Math.random() * window.innerWidth + 'px';
    sparkle.style.animationDuration = Math.random() * 2 + 1 + 's';

    // Remove sparkle after animation
    sparkle.addEventListener('animationend', () => {
        sparkle.remove();
    });
}

// Call createSparkles at set intervals
setInterval(createSparkles, 500);

// Function to animate sticky notes with staggered fade-in effects
function animateStickyNotes() {
    const notes = document.querySelectorAll('.sticky-note');
    notes.forEach((note, index) => {
        note.style.animationDelay = index * 0.5 + 's';
        note.classList.add('fade-in');
    });
}

// Call animateStickyNotes when document is ready
document.addEventListener('DOMContentLoaded', animateStickyNotes);

// Function to handle modal for hidden messages
function handleModal() {
    const modal = document.getElementById('messageModal');
    const btn = document.getElementById('showMessageButton');
    const close = document.getElementsByClassName('close')[0];

    btn.onclick = function() {
        modal.style.display = 'block';
    };

    close.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
}

// Call handleModal when document is ready
document.addEventListener('DOMContentLoaded', handleModal);