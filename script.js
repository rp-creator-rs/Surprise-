function revealSurprise() {
    const lid = document.querySelector('.lid');
    lid.style.transform = 'translateY(-150px)';
    lid.style.transition = 'transform 1s ease-in-out';

    const photoContainer = document.getElementById('photo-container');
    const message = document.getElementById('surprise-message');
    const button = document.getElementById('playSongButton');

    // Reveal elements
    photoContainer.style.display = 'block';
    message.style.display = 'block';
    button.style.display = 'none'; // Hide the button since the song plays automatically

    // Play the birthday song
    const song = document.getElementById("birthdaySong");
    song.play();

    // Launch confetti
    launchConfetti();
}

function launchConfetti() {
    const confettiContainer = document.getElementById('confetti-container');

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

        confettiContainer.appendChild(confetti);

        setTimeout(() => confetti.remove(), 5000);
    }
}
