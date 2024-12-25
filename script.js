function revealSurprise() {
    const lid = document.querySelector('.lid');
    const ribbon = document.querySelector('.ribbon');
    const box = document.querySelector('.box');

    // Make the lid, ribbon, and box fall
    lid.style.transform = 'translateY(350px)';
    lid.style.transition = 'transform 1s ease-in-out';
    
    ribbon.style.transform = 'translateY(350px)';
    ribbon.style.transition = 'transform 1s ease-in-out';
    
    box.style.transform = 'translateY(350px)';
    box.style.transition = 'transform 1s ease-in-out';

    // Reveal the photo and message after the box falls
    setTimeout(() => {
        const photoContainer = document.getElementById('photo-container');
        const message = document.getElementById('surprise-message');
        photoContainer.style.display = 'block';
        message.style.display = 'block';

        // Play the birthday song
        const song = document.getElementById("birthdaySong");
        song.play();

        // Start continuous animations
        startContinuousAnimations();
    }, 1000);
}

function startContinuousAnimations() {
    // Start falling bubbles
    setInterval(() => {
        createFallingBubble();
    }, 500); // Create a bubble every 500ms

    // Start falling sparkles
    setInterval(() => {
        createFallingSparkle();
    }, 300); // Create a sparkle every 300ms
}

function createFallingBubble() {
    const bubbleContainer = document.querySelector('.bubble-container') || createContainer('bubble-container');

    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.left = Math.random() * 100 + 'vw';
    bubble.style.animationDuration = Math.random() * 3 + 4 + 's';
    bubble.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 80%)`;

    bubbleContainer.appendChild(bubble);

    setTimeout(() => bubble.remove(), 7000); // Remove after animation ends
}

function createFallingSparkle() {
    const sparkleContainer = document.querySelector('.sparkle-container') || createContainer('sparkle-container');

    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.animationDuration = Math.random() * 3 + 2 + 's';

    sparkleContainer.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 5000); // Remove after animation ends
}

function createContainer(className) {
    const container = document.createElement('div');
    container.classList.add(className);
    document.body.appendChild(container);
    return container;
  // Add pointing animation to the emoji on page load
document.addEventListener('DOMContentLoaded', () => {
    const emoji = document.querySelector('.pointing-emoji');
    emoji.style.display = 'block'; // Ensure the emoji is visible    
 });   
    // Remove pointing emoji and surprise box after the box is clicked
document.querySelector('.box').addEventListener('click', () => {
    const emoji = document.querySelector('.pointing-emoji');
    const box = document.querySelector('.box');
    
    // Make the emoji disappear
    emoji.style.display = 'none'; 
    
    // Make the box disappear
    box.style.display = 'none'; 

});

}


        

