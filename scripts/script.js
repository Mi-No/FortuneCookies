const fortunes = [
    "A journey of a thousand miles begins with a single step.",
    "Fortune favors the bold.",
    "You will have a great day!",
    "Good things come to those who wait.",
    "The best is yet to come."
];

function generateFortune() {
    const fortuneContainer = document.getElementById("fortune-container");
    const fortuneText = document.getElementById("fortune-text");
    const crackSound = document.getElementById("crack-sound");

    // Play the fortune cookie crack sound
    crackSound.play();

    // Randomly select a fortune from the array
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const randomFortune = fortunes[randomIndex];
    
    // Display the selected fortune
    fortuneText.innerText = randomFortune;
}
