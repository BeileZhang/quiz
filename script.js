const questions = [
  { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: 1, explanation: "2 + 2 equals 4." },
  { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "London"], answer: 2, explanation: "The capital of France is Paris." },
  // Add more questions here...
];

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswers = [];

function startQuiz() {
  document.getElementById("startBtn").classList.add("hidden");
  document.querySelector(".quiz-content").classList.remove("hidden");
  loadQuestion();
}

function loadQuestion() {
  if (currentQuestionIndex < questions.length) {
    const questionObj = questions[currentQuestionIndex];
    document.getElementById("question").textContent = questionObj.question;
    const optionsButtons = document.querySelectorAll(".option");
    optionsButtons.forEach((button, index) => {
      button.textContent = questionObj.options[index];
    });
    document.getElementById("progressText").textContent = `${currentQuestionIndex + 1}/10`;
    document.getElementById("progressBar").style.width = `${((currentQuestionIndex + 1) / 10) * 100}%`;
  } else {
    endQuiz();
  }
}

function submitAnswer(optionIndex) {
  const questionObj = questions[currentQuestionIndex];
  const correct = optionIndex === questionObj.answer;
  const feedback = document.getElementById("feedback");
  if (correct) {
    score++;
    feedback.textContent = "Correct!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = `Incorrect! Correct answer: ${questionObj.options[questionObj.answer]}. Explanation: ${questionObj.explanation}`;
    feedback.style.color = "red";
  }
  selectedAnswers.push({ question: questionObj.question, selectedOption: questionObj.options[optionIndex], correct });
  document.getElementById("nextBtn").disabled = false;
}

function nextQuestion() {
  currentQuestionIndex++;
  document.getElementById("feedback").textContent = "";
  document.getElementById("nextBtn").disabled = true;
  loadQuestion();
}

function endQuiz() {
  document.querySelector(".quiz-content").classList.add("hidden");
  const resultsContainer = document.getElementById("results");
  document.getElementById("score").textContent = score;
  const summary = selectedAnswers.map((item, index) => {
    return `<div><strong>Question ${index + 1}:</strong> ${item.question} <br> <strong>Your Answer:</strong> ${item.selectedOption} <br> <strong>Correct:</strong> ${item.correct ? 'Yes' : 'No'}</div>`;
  }).join('');
  document.getElementById("answerSummary").innerHTML = summary;
  resultsContainer.classList.remove("hidden");
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  selectedAnswers = [];
  document.getElementById("results").classList.add("hidden");
  startQuiz();
}
