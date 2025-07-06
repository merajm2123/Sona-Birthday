document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements (unchanged)
    const balloonBtn = document.getElementById('balloon-btn');
    const confettiBtn = document.getElementById('confetti-btn');
    const simulateBtn = document.getElementById('simulate-btn');
    const quizBtn = document.getElementById('quiz-btn');
    const messageBtn = document.getElementById('message-btn');
    const musicBtn = document.getElementById('music-btn');
    const closeMessageBtn = document.getElementById('close-message');
    const closeQuizBtn = document.getElementById('close-quiz');
    const messageDisplay = document.getElementById('message-display');
    const displayedMessage = document.getElementById('displayed-message');
    const quizContainer = document.getElementById('quiz-container');
    const quizQuestions = document.getElementById('quiz-questions');
    const quizResults = document.getElementById('quiz-results');
    const balloonsContainer = document.querySelector('.balloons-container');
    const bgMusic = document.getElementById('bg-music');
    
    // Updated Special Message (single message now)
    const specialMessages = [
        `Happy Birthday, meri Jaan Sona,

Aaj ke din duniya thodi aur khoobsurat ho gayi —
kyunki aap paida hui thi... meri zindagi banne ke liye.

Main chahoon toh hazaar lafzon mein aapko wish kar sakta hoon,
lekin jo aapke liye mehsoos karta hoon…
wo kisi zabaan, kisi alfaaz mein nahi aata.

Aaj main aapse door hoon, lekin har heartbeat mein sirf aapka naam hai.
Har dua, har khayal, sirf aapka saath maangta hai.

💫 Aap sirf meri Sona nahi hain…
Aap meri rooh ka sukoon, meri har khushi ki wajah,
aur meri muskurahat ki asli wajah hain.

Aur haan…
"Isme AI ka istemal kiya gaya hai, lekin jazbaat sirf mere hain." 😊

Happy Birthday, Sona ❤️`
    ];
    
    // Updated Quiz Questions
    const quizData = [
        {
            question: "What's Sona's favorite color combination?",
            options: ["Red & Yellow", "White & Black", "Grey & Pink", "Blue & Purple"],
            answer: "White & Black"
        },
        {
            question: "What's Sona's favorite sweet?",
            options: ["Kaju Katli", "Gulab Jamun", "Jalebi", "Ras Madhuri"],
            answer: "Ras Madhuri"
        },
        {
            question: "What's Sona's favorite fruit?",
            options: ["Apple", "Banana", "Orange", "Mango"],
            answer: "Apple"
        },
        {
            question: "What does Sona love the most?",
            options: ["Vegetables", "Pets", "Flours", "Perfumes"],
            answer: "Flours"
        },
        {
            question: "What's Sona's favorite flower?",
            options: ["Lotus", "Rose", "Lily", "Sunflower"],
            answer: "Rose"
        }
    ];
    
    // Initialize variables
    let balloons = [];
    let quizScore = 0;
    let currentQuestion = 0;
    
    // Create Balloons (but don't show them yet)
    function createBalloons() {
        const colors = ['#ff9ff3', '#feca57', '#ff6b6b', '#48dbfb', '#1dd1a1'];
        
        for (let i = 0; i < 20; i++) {
            const balloon = document.createElement('div');
            balloon.classList.add('balloon');
            balloon.style.left = `${Math.random() * 100}%`;
            balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
            balloon.style.animationDuration = `${5 + Math.random() * 10}s`;
            
            balloon.addEventListener('click', () => {
                balloon.classList.add('popped');
                setTimeout(() => {
                    balloon.remove();
                }, 400);
            });
            
            balloonsContainer.appendChild(balloon);
            balloons.push(balloon);
        }
    }
    
    // Release Balloons
    function releaseBalloons() {
        balloons.forEach((balloon, index) => {
            setTimeout(() => {
                balloon.classList.add('flying');
            }, index * 200);
        });
        
        // Reset balloons after they fly away
        setTimeout(() => {
            balloonsContainer.innerHTML = '';
            balloons = [];
            createBalloons();
        }, 10000);
    }
    
    // Confetti Effect
    function startConfetti() {
        const canvas = document.getElementById('confetti-canvas');
        const confetti = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const colors = ['#ff9ff3', '#feca57', '#ff6b6b', '#48dbfb', '#1dd1a1'];
        const confettiPieces = [];
        
        for (let i = 0; i < 150; i++) {
            confettiPieces.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height - canvas.height,
                size: Math.random() * 10 + 5,
                color: colors[Math.floor(Math.random() * colors.length)],
                speed: Math.random() * 3 + 2,
                angle: Math.random() * 360,
                spin: Math.random() * 10 - 5
            });
        }
        
        function drawConfetti() {
            confetti.clearRect(0, 0, canvas.width, canvas.height);
            
            confettiPieces.forEach((piece, index) => {
                confetti.fillStyle = piece.color;
                confetti.beginPath();
                confetti.arc(piece.x, piece.y, piece.size, 0, Math.PI * 2);
                confetti.fill();
                
                piece.y += piece.speed;
                piece.angle += piece.spin;
                
                if (piece.y > canvas.height) {
                    confettiPieces.splice(index, 1);
                }
            });
            
            if (confettiPieces.length > 0) {
                requestAnimationFrame(drawConfetti);
            }
        }
        
        drawConfetti();
    }
    
    // Simulate Birthday
    function simulateBirthday() {
        // Show message
        showMessage("Let's simulate your perfect birthday celebration!");
        
        // Sequence of events
        setTimeout(() => {
            releaseBalloons();
        }, 1500);
        
        setTimeout(() => {
            startConfetti();
        }, 3000);
        
        setTimeout(() => {
            showMessage("Imagine all your friends are here celebrating with you!");
        }, 4500);
        
        setTimeout(() => {
            startConfetti();
        }, 7000);
        
        setTimeout(() => {
            showMessage("Make a wish and blow out the candles!");
        }, 9000);
        
        setTimeout(() => {
            showMessage("Happy Birthday Sona! 🎉🎂");
        }, 12000);
    }
    
    // Show Special Message
    function showMessage(message) {
        displayedMessage.textContent = message;
        messageDisplay.classList.remove('hidden');
    }
    
    // Load Quiz
    function loadQuiz() {
        quizContainer.classList.remove('hidden');
        quizQuestions.innerHTML = '';
        quizResults.classList.add('hidden');
        quizScore = 0;
        currentQuestion = 0;
        
        showQuestion();
    }
    
    // Show Quiz Question
    function showQuestion() {
        if (currentQuestion >= quizData.length) {
            showQuizResults();
            return;
        }
        
        const question = quizData[currentQuestion];
        const questionElement = document.createElement('div');
        questionElement.classList.add('quiz-question');
        
        questionElement.innerHTML = `
            <p>${question.question}</p>
            <div class="quiz-options">
                ${question.options.map(option => 
                    `<div class="quiz-option" data-answer="${option}">${option}</div>`
                ).join('')}
            </div>
        `;
        
        quizQuestions.innerHTML = '';
        quizQuestions.appendChild(questionElement);
        
        // Add event listeners to options
        const options = document.querySelectorAll('.quiz-option');
        options.forEach(option => {
            option.addEventListener('click', () => {
                checkAnswer(option.dataset.answer, question.answer);
            });
        });
    }
    
    // Check Quiz Answer
    function checkAnswer(selected, correct) {
        const options = document.querySelectorAll('.quiz-option');
        
        options.forEach(option => {
            option.style.pointerEvents = 'none'; // Disable further clicks
            
            if (option.dataset.answer === correct) {
                option.classList.add('correct');
            } else if (option.dataset.answer === selected && selected !== correct) {
                option.classList.add('incorrect');
            }
        });
        
        if (selected === correct) {
            quizScore++;
        }
        
        setTimeout(() => {
            currentQuestion++;
            showQuestion();
        }, 1500);
    }
    
    // Show Quiz Results
    function showQuizResults() {
        quizQuestions.innerHTML = '';
        quizResults.classList.remove('hidden');
        quizResults.innerHTML = `
            <h4>Quiz Complete!</h4>
            <p>You scored ${quizScore} out of ${quizData.length}!</p>
            <p>${quizScore === quizData.length ? 'Perfect! You know Sona well!' : 
               quizScore >= quizData.length/2 ? 'Good job! You know Sona pretty well!' : 
               'Keep learning about Sona!'}</p>
        `;
    }
    
    // Event Listeners
    balloonBtn.addEventListener('click', releaseBalloons);
    confettiBtn.addEventListener('click', startConfetti);
    simulateBtn.addEventListener('click', simulateBirthday);
    quizBtn.addEventListener('click', loadQuiz);
    messageBtn.addEventListener('click', () => {
        const randomMessage = specialMessages[Math.floor(Math.random() * specialMessages.length)];
        showMessage(randomMessage);
    });
    closeMessageBtn.addEventListener('click', () => {
        messageDisplay.classList.add('hidden');
    });
    closeQuizBtn.addEventListener('click', () => {
        quizContainer.classList.add('hidden');
    });
    musicBtn.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicBtn.innerHTML = '<i class="fas fa-volume-up"></i> Music On';
        } else {
            bgMusic.pause();
            musicBtn.innerHTML = '<i class="fas fa-volume-mute"></i> Music Off';
        }
    });
    
    // Initialize
    createBalloons();
    
    // Try to autoplay music (may be blocked by browser)
    document.addEventListener('click', function musicInit() {
        bgMusic.volume = 0.3;
        bgMusic.play().catch(e => console.log("Autoplay prevented:", e));
        document.removeEventListener('click', musicInit);
    });
});
