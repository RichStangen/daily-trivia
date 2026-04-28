let questions = typeof QUESTIONS !== 'undefined' ? QUESTIONS : [];
let currentViewingDate = new Date();
const today = new Date();
let selectedOption = null;
let isAnswered = false;

// DOM Elements
const dateDisplay = document.getElementById('date-display');
const questionText = document.getElementById('question-text');
const optionsGrid = document.getElementById('options-grid');
const confirmBtn = document.getElementById('confirm-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function init() {
    if (questions.length === 0) {
        questionText.innerText = 'No questions loaded.';
        return;
    }
    renderQuestion(today);
}

const START_DATE = new Date(2026, 2, 30); // March 30, 2026 (Month is 0-indexed)

function getQuestionForDate(date) {
    // Standardize both to midnight
    const d1 = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const d2 = new Date(START_DATE.getFullYear(), START_DATE.getMonth(), START_DATE.getDate());
    
    // Calculate days since start
    const diffTime = d1 - d2;
    const dayIndex = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (dayIndex < 0) return null;
    
    const questionIndex = dayIndex % questions.length;
    return questions[questionIndex];
}

function formatDate(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function renderQuestion(date) {
    currentViewingDate = new Date(date);
    const question = getQuestionForDate(date);
    
    // Update UI
    dateDisplay.innerText = formatDate(date);
    
    if (!question) {
        questionText.innerText = 'Please come back on March 30th for our first trivia!';
        optionsGrid.innerHTML = '';
        confirmBtn.style.display = 'none';
        
        // Navigation rules
        prevBtn.disabled = true;
        nextBtn.disabled = date.toDateString() === today.toDateString();
        return;
    }
    
    // Restore defaults for normal trivia
    confirmBtn.style.display = 'flex';
    questionText.innerText = question.question;
    optionsGrid.innerHTML = '';
    selectedOption = null;
    isAnswered = false;
    confirmBtn.disabled = true;
    confirmBtn.innerText = 'Confirm Answer';
    
    // Check if it's future or today
    const isToday = date.toDateString() === today.toDateString();
    nextBtn.disabled = isToday;
    
    // Prevent going back before start date
    prevBtn.disabled = date.toDateString() === START_DATE.toDateString();

    question.options.forEach((opt, index) => {
        const div = document.createElement('div');
        div.className = 'option fade-in';
        div.style.animationDelay = `${index * 0.1}s`;
        div.innerHTML = `
            <div class="option-marker">${String.fromCharCode(65 + index)}</div>
            <span>${opt}</span>
        `;
        div.onclick = () => selectOption(index, div);
        optionsGrid.appendChild(div);
    });
}

function selectOption(index, element) {
    if (isAnswered) return;
    
    // Clear previous selection
    const options = document.querySelectorAll('.option');
    options.forEach(opt => opt.classList.remove('selected'));
    
    // Set new selection
    selectedOption = index;
    element.classList.add('selected');
    confirmBtn.disabled = false;
}

function confirmAnswer() {
    if (selectedOption === null || isAnswered) return;
    
    isAnswered = true;
    const question = getQuestionForDate(currentViewingDate);
    const options = document.querySelectorAll('.option');
    
    options.forEach((opt, index) => {
        opt.classList.add('disabled');
        if (index === question.answer) {
            opt.classList.add('correct');
        } else if (index === selectedOption) {
            opt.classList.add('incorrect');
        }
    });

    if (selectedOption === question.answer) {
        triggerConfetti();
        confirmBtn.innerText = 'Correct! Good Job';
    } else {
        confirmBtn.innerText = 'Incorrect... Try Tomorrow';
    }
    confirmBtn.disabled = true;
}

function triggerConfetti() {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
}

// Nav actions
prevBtn.onclick = () => {
    const prev = new Date(currentViewingDate);
    prev.setDate(prev.getDate() - 1);
    renderQuestion(prev);
};

nextBtn.onclick = () => {
    const next = new Date(currentViewingDate);
    next.setDate(next.getDate() + 1);
    if (next <= today) {
        renderQuestion(next);
    }
};

confirmBtn.onclick = confirmAnswer;

// Start
init();
