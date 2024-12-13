const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const subject = document.querySelector('.subject');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const tryAgainBtn = document.querySelector('.tryAgain-btn');
const goHomeBtn = document.querySelector('.goHome-btn');
const closeBtn = document.querySelector('.close-btn');
const cseBtn = document.querySelector('.cse-btn');
const engBtn = document.querySelector('.english-btn');
const sciBtn = document.querySelector('.science-btn');
const mathBtn = document.querySelector('.math-btn');
let x=0;

startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}

continueBtn.onclick = ()=> {
    subject.classList.add('active');
    popupInfo.classList.remove('active');
    
}
cseBtn.onclick = () => {
    quizSection.classList.add('active');
    subject.classList.remove('active');
    quizBox.classList.add('active');
    main.classList.remove('active');
    x=1;
    showQuestions(1,0);
    questionCounter(1);
    headerScore();
    startQuizTimer()
}
engBtn.onclick = () => {
    quizSection.classList.add('active');
    subject.classList.remove('active');
    quizBox.classList.add('active');
    main.classList.remove('active');
    x=2;
    showQuestions(2,0);
    questionCounter(1);
    headerScore();
    startQuizTimer()
}
sciBtn.onclick = () => {
    quizSection.classList.add('active');
    subject.classList.remove('active');
    quizBox.classList.add('active');
    main.classList.remove('active');
    x=3;
    showQuestions(3,0);
    questionCounter(1);
    headerScore();
    startQuizTimer()
}
mathBtn.onclick = () => {
    quizSection.classList.add('active');
    subject.classList.remove('active');
    quizBox.classList.add('active');
    main.classList.remove('active');
    x=4;
    showQuestions(4,0);
    questionCounter(1);
    headerScore();
    startQuizTimer()
}
closeBtn.onclick = () => {
    quizSection.classList.remove('active');
    resetQuizTimer();
    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
}

tryAgainBtn.onclick = () => {
    quizBox.classList.add('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    showQuestions(x,questionCount);
    questionCounter(questionNumb);

    headerScore();

}

goHomeBtn.onclick = () => {
    quizSection.classList.remove('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    showQuestions(x,questionCount);
    questionCounter(questionNumb);

}

let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

const nextBtn = document.querySelector('.next-btn');

nextBtn.onclick = () => {
    if (questionCount < 15 - 1) {
    questionCount++;
    showQuestions(x,questionCount);

    questionNumb++;
    questionCounter(questionNumb);

    nextBtn.classList.remove('active');
}
    else {
        showResultBox();
    }
}  

const optionList =document.querySelector('.option-list');

function showQuestions(x,index) {
    const questionText = document.querySelector('.question-text');
    let optionTag = 0;
    if (x==1) {
        questionText.textContent = `${cse[index].numb}. ${cse[index].question}`;

        optionTag = `<div class="option"><span>${cse[index].options[0]}</span></div>
            <div class="option"><span>${cse[index].options[1]}</span></div>
            <div class="option"><span>${cse[index].options[2]}</span></div>
            <div class="option"><span>${cse[index].options[3]}</span></div>`
    }
    else if (x==2) {
        questionText.textContent = `${english[index].numb}. ${english[index].question}`;

        optionTag = `<div class="option"><span>${english[index].options[0]}</span></div>
            <div class="option"><span>${english[index].options[1]}</span></div>
            <div class="option"><span>${english[index].options[2]}</span></div>
            <div class="option"><span>${english[index].options[3]}</span></div>`
    }
    else if (x==3) {
        questionText.textContent = `${science[index].numb}. ${science[index].question}`;

        optionTag = `<div class="option"><span>${science[index].options[0]}</span></div>
            <div class="option"><span>${science[index].options[1]}</span></div>
            <div class="option"><span>${science[index].options[2]}</span></div>
            <div class="option"><span>${science[index].options[3]}</span></div>`
    }
    else if (x==4) {
        questionText.textContent = `${maths[index].numb}. ${maths[index].question}`;

        optionTag = `<div class="option"><span>${maths[index].options[0]}</span></div>
            <div class="option"><span>${maths[index].options[1]}</span></div>
            <div class="option"><span>${maths[index].options[2]}</span></div>
            <div class="option"><span>${maths[index].options[3]}</span></div>`
    }
        
    optionList.innerHTML = optionTag;

    const option = document.querySelectorAll('.option');
    for (let i=0; i<option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(x,this)');
    }
}

function optionSelected(x,answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = 0;
    let allOptions = optionList.children.length;
    if (x==1) {
        correctAnswer = cse[questionCount].answer;
    }
    else if (x==2) {
        correctAnswer = english[questionCount].answer;
    }
    else if (x==3) {
        correctAnswer = science[questionCount].answer;
    }
    else if (x==4) {
        correctAnswer = maths[questionCount].answer;
    }
    if (userAnswer == correctAnswer) {
        answer.classList.add('correct');
        userScore += 1;
        headerScore();
}
    else {
        answer.classList.add('incorrect');

        for (let i = 0; i < allOptions; i++) {
           if(optionList.children[i].textContent == correctAnswer) {
              optionList.children[i].setAttribute('class','option correct');
           }
        }
    }    

    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add('disabled');
    }

    nextBtn.classList.add('active');
}

function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${15} Questions`;
}

function headerScore() {
    const headerScoreText = document.querySelector('.header-score');
    headerScoreText.textContent = `Score: ${userScore} / ${15}`;
}

function showResultBox() {
    quizBox.classList.remove('active');
    resultBox.classList.add('active');

    const scoreText = document.querySelector('.score-text');
    scoreText.textContent = `Your Score ${userScore} out of ${15}`;

    const circularProgress = document.querySelector('.circular-progress');
    const progressValue = document.querySelector('.progress-value');
    let progressStartValue = -1;
    let progressEndValue = (userScore / 15) * 100;
    let speed = 20;

    let progress = setInterval(() => {
        progressStartValue++;
        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#c40094 ${progressStartValue * 3.6}deg, rgba(255, 255, 255, .1) 0deg)`;
        if (progressStartValue >= progressEndValue) {
            clearInterval(progress);
        }
    }, speed);


}
// Define the duration of the quiz timer in milliseconds
const quizDuration = 120000; // 0 seconds

// Start the quiz timer when the quiz begins
let quizTimer = setTimeout(() => {
    // Execute this code when the timer runs out
    // Close the quiz
    showResultBox(); // or any other function to end the quiz
}, quizDuration);

// Function to reset the quiz timer
function resetQuizTimer() {
    clearTimeout(quizTimer); // Clear the existing timer
    quizTimer = setTimeout(() => {
        // Execute this code when the timer runs out
        // Close the quiz
        showResultBox(); // or any other function to end the quiz
    }, quizDuration);
}
// Inside the startQuizTimer() function
function startQuizTimer() {
    let timeLeft = quizDuration / 1000; // Convert milliseconds to seconds
    const timerDisplay = document.getElementById('timer');
    let timer0 = 0;
    let timer1 = 0;

    quizTimer = setInterval(() => {
        timeLeft--;
        timer0 = Math.floor(timeLeft / 60); // Calculate minutes
        timer1 = timeLeft % 60; // Calculate seconds
        if (timeLeft < 0) {
            // Execute this code when the timer runs out
            // Close the quiz or show the result box
            showResultBox(); // or any other function to end the quiz
            clearInterval(quizTimer); // Stop the timer
            resetQuizTimer();
        } else {
            // Update the timer display
            timerDisplay.textContent = ` ${timer0} : ${timer1}`;
        }
    }, 1000); // Update the timer display every second
    //resetQuizTimer(); // Reset the quiz timer
}

