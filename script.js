const fixedResponses = {
    alok: { count: 0, comment: "Nice... very nice indeed", emoji: "😏" },
    priya: { count: 0, comment: "Innocent AF", emoji: "😇" },
    priyanshu: { count: 0, comment: "Innocent AF", emoji: "🔥" },
    diksha: { count: 0, comment: "Quiet but wild energy", emoji: "🌶️" },
    nigam: { count: 0, comment: "Low-key legend", emoji: "🧢" },
    munni: { count: 0, comment: "Too pure for this world", emoji: "🕊️" },
    lalit: { count: 0, comment: "Certified bro material", emoji: "🤝" },
    chirag: { count: 0, comment: "Sleeper flirt", emoji: "😶‍🌫️" },
    anjali: { count: 0, comment: "koi pasand nahi krta", emoji: "🍫" },
    swati: { count: 0, comment: "Total softie", emoji: "🧸" },
    sakshi: { count: 8, comment: "certified whore", emoji: "😇" },
    varun: { count: 0, comment: "pron dekhta hai", emoji: "🧊" },
    mangi: { count: 0, comment: "Vibe supplier", emoji: "📡" },
    tushar: { count: 0, comment: "Not-so-innocent?", emoji: "😅" },
    janhavi: { count: 2, comment: "galat rah par", emoji: "🌼" },
    harsh: { count: 0, comment: "Silent but deadly", emoji: "💣" },
    prajjwal: { count: 0, comment: "Golden retriever energy", emoji: "🐶" },
    vedansh: { count: 0, comment: "looks maxing and voice maxing me lga h", emoji: "🌊" },
    sudheer: { count: 0, comment: "kisi ke pyar me pagal", emoji: "🧥" },
    abhinav: { count: 0, comment: "sutta aur mutthi par jeevit", emoji: "🧠" },
    niranjan: { count: 0, comment: "khada nahi hota", emoji: "🕵️‍♂️" },
    aditya: { count: 0, comment: "apni jat wali ke sath karega", emoji: "🧊" },
    pratham: { count: 0, comment: "pure din mutthi", emoji: "🛡️" }
};


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


const nameForm = document.getElementById('nameForm');
const nameInput = document.getElementById('nameInput');
const resultContainer = document.getElementById('resultContainer');
const resultName = document.getElementById('resultName');
const resultCount = document.getElementById('resultCount');
const resultComment = document.getElementById('resultComment');
const tryAgainBtn = document.getElementById('tryAgainBtn');


function generateBodyCount(inputName) {
    const normalizedName = inputName.toLowerCase().trim();
    
    
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
    const count = Math.floor(Math.random() * 10);
    let selectedComment = comments[Math.floor(Math.random() * comments.length)];
    
    // Adjust comment based on count ranges
    if (count === 0) {
        selectedComment = { comment: "Innocent AF", emoji: "😇" };
    } else if (count >= 8) {
        selectedComment = { comment: "Legendary Status", emoji: "🔥" };
    } else if (count >= 5) {
        selectedComment = { comment: "Certified Lover", emoji: "💘" };
    } else if (count >= 2) {
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