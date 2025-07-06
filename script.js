:root {
    --primary-color: #ff6b6b;
    --secondary-color: #ff8e8e;
    --accent-color: #ff4757;
    --text-color: #2f3542;
    --light-text: #f1f2f6;
    --bg-gradient: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
    --message-box-color: #ffebee;
    --quiz-box-color: #e8eaf6;
    --container-color: #ffffff;
    --message-border: #ffcdd2;
    --quiz-border: #c5cae9;
    --correct-color: #81c784;
    --incorrect-color: #ff8a65;
    --box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    background: var(--bg-gradient);
    height: 100vh;
    overflow: hidden;
    color: var(--text-color);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.container {
    position: relative;
    z-index: 10;
    width: 90%;
    max-width: 800px;
    padding: 2rem;
    background: var(--container-color);
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    border: 1px solid #f5f5f5;
}

.header {
    margin-bottom: 2rem;
    transform: translateY(-20px);
}

.title {
    font-family: 'Dancing Script', cursive;
    font-size: 3.5rem;
    margin-bottom: 0.5rem;
    color: var(--accent-color);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.name {
    color: var(--primary-color);
    font-weight: bold;
}

.subtitle {
    font-size: 1.2rem;
    color: var(--text-color);
    opacity: 0.8;
}

.interactive-section {
    margin: 2rem 0;
}

.button-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
}

.action-btn {
    background: var(--accent-color) !important;
    color: white;
    border: none;
    padding: 12px 25px;
    font-size: 1rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 4px 8px rgba(255, 71, 87, 0.3);
}

.action-btn:hover {
    background: #ff2d4d !important;
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.action-btn:active {
    transform: translateY(1px);
}

.message-box {
    background: linear-gradient(to bottom right, #ffebee, #ffcdd2);
    padding: 2rem;
    border-radius: 15px;
    margin: 1rem auto;
    max-width: 600px;
    box-shadow: var(--box-shadow);
    position: relative;
    border: 2px solid var(--message-border);
}

.message-box p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: var(--text-color);
}

.quiz-box {
    background: linear-gradient(to bottom right, #e8eaf6, #c5cae9);
    padding: 2rem;
    border-radius: 15px;
    margin: 1rem auto;
    max-width: 600px;
    box-shadow: var(--box-shadow);
    position: relative;
    border: 2px solid var(--quiz-border);
}

.quiz-box h3 {
    margin-bottom: 1.5rem;
    color: var(--primary-color);
}

.quiz-question {
    margin-bottom: 1rem;
    text-align: left;
}

.quiz-question p {
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.quiz-options {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.quiz-option {
    padding: 0.5rem 1rem;
    background: #f5f5f5;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
}

.quiz-option:hover {
    background: #e0e0e0 !important;
    transform: translateY(-2px);
}

.quiz-option.correct {
    background: var(--correct-color) !important;
    color: white;
}

.quiz-option.incorrect {
    background: var(--incorrect-color) !important;
    color: white;
}

#quiz-results {
    margin-top: 1.5rem;
    font-size: 1.2rem;
    font-weight: bold;
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    color: var(--text-color);
    opacity: 0.7;
    transition: all 0.2s;
}

.close-btn:hover {
    opacity: 1;
    transform: scale(1.1);
}

.balloon {
    position: absolute;
    width: 60px;
    height: 70px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    transform: translateY(100vh);
    box-shadow: inset -5px -5px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.5s ease-out, opacity 0.5s;
}

.balloon:before {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 25px;
    width: 4px;
    height: 12px;
    background: rgba(0, 0, 0, 0.1);
}

.balloon.popped {
    animation: pop 0.4s forwards;
}

@keyframes pop {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.2); opacity: 0.8; }
    100% { transform: scale(0); opacity: 0; }
}

.balloon.flying {
    opacity: 1;
    animation: float 8s ease-in-out forwards;
}

@keyframes float {
    0% { transform: translateY(100vh) rotate(0deg); }
    100% { transform: translateY(-100px) rotate(360deg); }
}

.music-controls {
    margin-top: 2rem;
}

.music-btn {
    background: var(--secondary-color);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    gap: 8px;
}

.music-btn:hover {
    background: var(--accent-color);
}

.hidden {
    display: none !important;
}

#confetti-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
}

@media (max-width: 768px) {
    .title {
        font-size: 2.5rem;
    }
    
    .button-group {
        flex-direction: column;
    }
    
    .action-btn {
        width: 100%;
        justify-content: center;
    }
}
