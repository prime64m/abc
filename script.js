// Fixed responses for specific names
const fixedResponses = {
    alex: { count: 69, comment: "Nice... very nice indeed", emoji: "😏" },
    priya: { count: 0, comment: "Innocent AF", emoji: "😇" },
    rahul: { count: 100, comment: "Legendary status achieved", emoji: "🔥" }
};

// Array of funny/flirty comments
const comments = [
    { comment: "Certified Lover", emoji: "💘" },
    { comment: "Heart Breaker Alert", emoji: "💔" },
    { comment: "Smooth Operator", emoji: "😎" },
    { comment: "Love Machine", emoji: "💕" },
    { comment: "Player Status", emoji: "🎯" },
    { comment: "Hopeless Romantic", emoji: "🌹" },
    { comment: "Flirt Master", emoji: "😘" },
    { comment: "Innocent Angel", emoji: "😇" },
    { comment: "Charming AF", emoji: "✨" },
    { comment: "Total Heartthrob", emoji: "❤️‍🔥" },
    { comment: "Sweet & Spicy", emoji: "🌶️" },
    { comment: "Love Guru", emoji: "🧘‍♀️" },
    { comment: "Relationship Goals", emoji: "💑" },
    { comment: "Pure Fire", emoji: "🔥" },
    { comment: "Stealing Hearts", emoji: "💖" }
];

// DOM elements
const nameForm = document.getElementById('nameForm');
const nameInput = document.getElementById('nameInput');
const resultContainer = document.getElementById('resultContainer');
const resultName = document.getElementById('resultName');
const resultCount = document.getElementById('resultCount');
const resultComment = document.getElementById('resultComment');
const tryAgainBtn = document.getElementById('tryAgainBtn');

// Generate body count function
function generateBodyCount(inputName) {
    const normalizedName = inputName.toLowerCase().trim();
    
    // Check for fixed responses
    if (fixedResponses[normalizedName]) {
        const fixed = fixedResponses[normalizedName];
        return {
            name: inputName,
            count: fixed.count,
            comment: fixed.comment,
            emoji: fixed.emoji
        };
    }

    // Generate random count and comment for other names
    const count = Math.floor(Math.random() * 101);
    let selectedComment = comments[Math.floor(Math.random() * comments.length)];
    
    // Adjust comment based on count ranges
    if (count === 0) {
        selectedComment = { comment: "Innocent AF", emoji: "😇" };
    } else if (count >= 80) {
        selectedComment = { comment: "Legendary Status", emoji: "🔥" };
    } else if (count >= 50) {
        selectedComment = { comment: "Certified Lover", emoji: "💘" };
    } else if (count >= 20) {
        selectedComment = { comment: "Smooth Operator", emoji: "😎" };
    }

    return {
        name: inputName,
        count,
        comment: selectedComment.comment,
        emoji: selectedComment.emoji
    };
}

// Handle form submission
function handleSubmit(e) {
    e.preventDefault();
    
    const name = nameInput.value.trim();
    
    if (!name) {
        // Shake animation for empty input
        nameInput.classList.add('shake');
        setTimeout(() => nameInput.classList.remove('shake'), 500);
        return;
    }

    const result = generateBodyCount(name);
    
    // Hide form and show result
    nameForm.style.display = 'none';
    
    // Small delay for dramatic effect
    setTimeout(() => {
        displayResult(result);
    }, 300);
}

// Display result function
function displayResult(result) {
    resultName.textContent = `${result.name}'s Body Count:`;
    resultCount.textContent = result.count;
    resultComment.textContent = `${result.comment} ${result.emoji}`;
    
    resultContainer.classList.remove('hidden');
    resultContainer.classList.add('bounce-in');
    
    // Remove animation class after animation completes
    setTimeout(() => {
        resultContainer.classList.remove('bounce-in');
    }, 600);
}

// Reset detector function
function resetDetector() {
    nameInput.value = '';
    nameForm.style.display = 'block';
    resultContainer.classList.add('hidden');
    resultContainer.classList.remove('bounce-in');
    nameInput.focus();
}

// Event listeners
nameForm.addEventListener('submit', handleSubmit);
tryAgainBtn.addEventListener('click', resetDetector);

// Focus input on page load
window.addEventListener('load', () => {
    nameInput.focus();
});