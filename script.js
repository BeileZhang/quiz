const questions = [
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: 1,
    explanation: "2 plus 2 is 4."
  },
  // ... 其他问题和答案
];

let usedQuestionsIndexes = [];
let currentQuestionIndex;
let score = 0;
let currentQuestionCount = 0;
const MAX_QUESTIONS = 10;
let timer;

document.addEventListener("DOMContentLoaded", function() {
  displayQuestion();
});

function getRandomQuestionIndex() {
  let index;
  do {
    index = Math.floor(Math.random() * questions.length);
  } while (usedQuestionsIndexes.includes(index) && usedQuestionsIndexes.length < questions.length);
  usedQuestionsIndexes.push(index);
  return index;
}

function startTimer() {
  let timeLeft = 30; // 30 seconds for each question
  document.getElementById("timer").innerText = `Time Left: ${timeLeft}s`;
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = `Time Left: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      displayFeedback(false);
    }
  }, 1000);
}

function displayQuestion() {
  if (currentQuestionCount < MAX_QUESTIONS) {
    currentQuestionIndex = getRandomQuestionIndex();
    document.getElementById("question").innerText = questions[currentQuestionIndex].question;
    let options = document.querySelectorAll(".option");
    options.forEach((option, index) => {
      option.innerText = questions[currentQuestionIndex].options[index];
      option.onclick = () => checkAnswer(index);
    });
    currentQuestionCount++;
    updateProgressBar();
    startTimer();
  } else {
    displayResults();
  }
}

function checkAnswer(selectedIndex) {
  clearInterval(timer);
  let correctIndex = questions[currentQuestionIndex].answer;
  if (selectedIndex === correctIndex) {
    score++;
    displayFeedback(true);
  } else {
    displayFeedback(false, questions[currentQuestionIndex].explanation);
  }
}

function displayFeedback(isCorrect, explanation = "") {
  let feedbackElement = document.getElementById("feedback");
  feedbackElement.innerText = isCorrect ? "Correct!" : `Wrong! Correct Answer: ${explanation}`;
  setTimeout(displayQuestion, 2000);
}

function updateProgressBar() {
  let progressBar = document.querySelector(".progress-bar");
  let percentage = (currentQuestionCount / MAX_QUESTIONS) * 100;
  progressBar.style.width = `${percentage}%`;
}

function displayResults() {
  let resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = `<h2>Your Score: ${score} / ${MAX_QUESTIONS}</h2>`;
  usedQuestionsIndexes.forEach(index => {
    resultsContainer.innerHTML += `<p>${questions[index].question} - ${questions[index].options[questions[index].answer]}</p>`;
  });
  resultsContainer.innerHTML += '<button onclick="restartQuiz()">Restart Quiz</button>';
}

function restartQuiz() {
  score = 0;
  currentQuestionCount = 0;
  usedQuestionsIndexes = [];
  document.getElementById("results").innerHTML = "";
  displayQuestion();
}

// Storing the scores locally
localStorage.setItem("quizScores", JSON.stringify({ lastScore: score, bestScore: Math.max(score, (JSON.parse(localStorage.getItem("quizScores")) || {}).bestScore || 0) }));
