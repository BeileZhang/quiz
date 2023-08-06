const questions = [
    {
        question: "Who are the authors of 'Artificial Intelligence: A Modern Approach'?",
        options: ["Alan Turing and John McCarthy", "Stuart Russell and Peter Norvig", "Marvin Minsky and Seymour Papert", "Ray Kurzweil and Elon Musk"],
        correct: 1,
        explanation: "The book 'Artificial Intelligence: A Modern Approach' is authored by Stuart Russell and Peter Norvig."
    },

    {
        question: "Which one of the following is NOT a classical search problem?",
        options: ["Eight puzzle", "Travelling Salesman Problem", "Tower of Hanoi", "Neural network training"],
        correct: 3,
        explanation: "Neural network training is not a classical search problem. It is an optimization problem in machine learning."
    },

    {
        question: "In terms of AI, what does the acronym 'ANN' stand for?",
        options: ["Artificial Neural Notation", "Advanced Natural Notation", "Artificial Natural Network", "Artificial Neural Network"],
        correct: 3,
        explanation: "In AI, 'ANN' stands for 'Artificial Neural Network', which is inspired by the structure and functional aspects of biological neural networks."
    },

    {
        question: "Which of the following is a type of supervised learning algorithm?",
        options: ["Clustering", "Association rule", "Decision Tree", "Dimensionality reduction"],
        correct: 2,
        explanation: "Decision Tree is a type of supervised learning algorithm used for both classification and regression tasks."
    },

    {
        question: "In AI, the 'Turing Test' is used to determine what?",
        options: ["The efficiency of an algorithm", "The speed of computation", "If a machine can exhibit human-like intelligence", "If a machine can solve mathematical problems"],
        correct: 2,
        explanation: "The 'Turing Test', proposed by Alan Turing, is used to determine if a machine can exhibit human-like intelligence."
    },

    {
        question: "Which one is a knowledge representation formalism in AI?",
        options: ["Genetic algorithm", "Backpropagation", "Frame", "Support Vector Machine"],
        correct: 2,
        explanation: "Frames are a type of knowledge representation formalism used to represent objects, concepts, or situations in AI."
    },

    {
        question: "Bayesian networks are particularly used for which kind of reasoning?",
        options: ["Deductive", "Inductive", "Abductive", "Probabilistic"],
        correct: 3,
        explanation: "Bayesian networks are used for probabilistic reasoning to infer the probability of a hypothesis."
    },
    {
        question: "Which section would most likely discuss the basic definitions and origins of AI?",
        options: ["The State of the Art", "The Foundations of Artificial Intelligence", "Risks and Benefits of AI", "Intelligent Agents"],
        correct: 1,
        explanation: "The 'The Foundations of Artificial Intelligence' section would most likely discuss the basic definitions and origins of AI."
    },

    {
        question: "In which section can one learn about the behavior and structure of AI systems?",
        options: ["Introduction", "Intelligent Agents", "Solving Problems by Searching", "Logical Agents"],
        correct: 1,
        explanation: "The 'Intelligent Agents' section delves into the behavior and structure of AI systems."
    },

    {
        question: "If you wanted to study algorithms specifically designed for problems where the solution requires a sequence of decisions, which section would be most relevant?",
        options: ["Adversarial Search and Games", "Automated Planning", "Solving Problems by Searching", "First-Order Logic"],
        correct: 1,
        explanation: "The 'Adversarial Search and Games' section focuses on algorithms for problems requiring sequential decisions."
    },

    {
        question: "Which section dives into probabilistic models over a period?",
        options: ["Quantifying Uncertainty", "Probabilistic Reasoning", "Probabilistic Reasoning over Time", "Making Simple Decisions"],
        correct: 2,
        explanation: "The 'Probabilistic Reasoning over Time' section deals with probabilistic models considered over a duration."
    },

    {
        question: "Where would you find information on the ethical considerations of AI?",
        options: ["The Future of AI", "The State of the Art", "Philosophy, Ethics, and Safety of AI", "The History of Artificial Intelligence"],
        correct: 2,
        explanation: "The 'Philosophy, Ethics, and Safety of AI' section discusses ethical considerations related to AI."
    },

    {
        question: "Which section is most likely to cover Neural Networks and their variants in depth?",
        options: ["Learning from Examples", "Deep Learning", "Reinforcement Learning", "Learning Probabilistic Models"],
        correct: 1,
        explanation: "The 'Deep Learning' section covers Neural Networks and their various forms."
    },

    {
        question: "If a researcher is interested in studying how AI can understand and generate human languages, which section should they refer to?",
        options: ["Computer Vision", "Reinforcement Learning", "Natural Language Processing", "Robotics"],
        correct: 2,
        explanation: "The 'Natural Language Processing' section delves into how AI can understand and generate human languages."
    },

    {
        question: "Which section is most suitable for someone interested in AI's applications in physical machines that can move and act?",
        options: ["Computer Vision", "Robotics", "Deep Learning for Natural Language Processing", "Logical Agents"],
        correct: 1,
        explanation: "The 'Robotics' section focuses on AI's applications in physical machines that can move and act."
    },

    {
        question: "Where would you go to explore the potential future directions and architectures for AI?",
        options: ["The State of the Art", "The History of Artificial Intelligence", "The Future of AI", "Intelligent Agents"],
        correct: 2,
        explanation: "The 'The Future of AI' section discusses potential future directions and architectures for AI."
    },

    {
        question: "Which section primarily focuses on logic-based methods for representing knowledge in AI?",
        options: ["Logical Agents", "First-Order Logic", "Inference in First-Order Logic", "All of the above"],
        correct: 3,
        explanation: "All the options 'Logical Agents', 'First-Order Logic', and 'Inference in First-Order Logic' focus on logic-based methods for representing knowledge in AI."
    },
    {
        question: "Which section would provide insights into algorithms that don't have any prior knowledge about the solution?",
        options: ["Informed (Heuristic) Search Strategies", "Uninformed Search Strategies", "Local Search and Optimization Problems", "Heuristic Functions"],
        correct: 1,
        explanation: "The 'Uninformed Search Strategies' section covers algorithms that don't have prior knowledge about the solution."
    },

    {
        question: "In which section can one learn about uncertainties over time and models like Hidden Markov Models?",
        options: ["Probabilistic Reasoning", "Quantifying Uncertainty", "Probabilistic Programming", "Probabilistic Reasoning over Time"],
        correct: 3,
        explanation: "The 'Probabilistic Reasoning over Time' section delves into uncertainties over time and models like Hidden Markov Models."
    },

    {
        question: "Which section would be relevant if you wanted to study how to make decisions in environments where multiple agents are present and could have conflicting goals?",
        options: ["Making Simple Decisions", "Making Complex Decisions", "Multiagent Decision Making", "Automated Planning"],
        correct: 2,
        explanation: "The 'Multiagent Decision Making' section focuses on decision-making in multi-agent environments."
    },

    {
        question: "If you're looking to understand models where the world is not fully observable and actions are uncertain, which section should you study?",
        options: ["Search with Nondeterministic Actions", "Search in Partially Observable Environments", "Search in Continuous Spaces", "Search Algorithms"],
        correct: 1,
        explanation: "The 'Search with Nondeterministic Actions' section deals with environments where actions are uncertain and the world isn't fully observable."
    },

    {
        question: "Where can you learn about the categorization of objects and events in the world using AI?",
        options: ["Inference in First-Order Logic", "Knowledge Representation", "Quantifying Uncertainty", "Automated Planning"],
        correct: 1,
        explanation: "The 'Knowledge Representation' section discusses how AI categorizes objects and events in the world."
    },

    {
        question: "Which section is primarily focused on using neural networks for understanding and generating sequences of text?",
        options: ["Learning from Examples", "Reinforcement Learning", "Natural Language Processing", "Deep Learning for Natural Language Processing"],
        correct: 3,
        explanation: "The 'Deep Learning for Natural Language Processing' section is focused on using neural networks for understanding and generating sequences of text."
    },

    {
        question: "If you're keen on understanding how AI systems perceive and interact with the 3D world, which section should you refer to?",
        options: ["Computer Vision", "The 3D World", "Robotics", "Reinforcement Learning in Robotics"],
        correct: 0,
        explanation: "The 'Computer Vision' section delves into how AI systems perceive the 3D world."
    },

    {
        question: "Where would you study the philosophical considerations regarding whether machines can genuinely think?",
        options: ["The State of the Art", "The Limits of AI", "Can Machines Really Think?", "Logical Agents"],
        correct: 2,
        explanation: "The 'Can Machines Really Think?' section discusses philosophical considerations about machine cognition."
    },

    {
        question: "Which section provides insights into the building blocks and potential blueprints for future AI systems?",
        options: ["AI Components", "Intelligent Agents", "The History of Artificial Intelligence", "The State of the Art"],
        correct: 0,
        explanation: "The 'AI Components' section discusses the building blocks and potential blueprints for future AI systems."
    },

    {
        question: "Where can you understand the basics of reasoning under uncertainty using Bayesian principles?",
        options: ["Probabilistic Reasoning", "Bayes Rule and Its Use", "Probabilistic Programming", "Quantifying Uncertainty"],
        correct: 1,
        explanation: "The 'Bayes Rule and Its Use' section provides basics of reasoning under uncertainty using Bayesian principles."
    }
    ,
    {
        question: "Which logic type serves as the basis for many knowledge-based systems due to its ability to handle predicates and quantifiers?",
        options: ["Propositional Logic", "First-Order Logic", "Temporal Logic", "Fuzzy Logic"],
        correct: 1,
        explanation: "First-Order Logic incorporates predicates and quantifiers, making it a foundational logic type for many knowledge-based systems."
    },

    {
        question: "In adversarial search scenarios, like chess or go, which method involves maximizing the utility for the current player and minimizing the utility for the opponent?",
        options: ["Monte Carlo Tree Search", "Heuristic Alpha-beta Tree Search", "Depth-First Search", "Greedy Search"],
        correct: 1,
        explanation: "Heuristic Alpha-beta Tree Search is used in adversarial search scenarios to maximize the utility for the current player and minimize the utility for the opponent."
    },

    {
        question: "Which term refers to a set of variables and constraints that specify allowable combinations of values?",
        options: ["Local Search", "Backtracking", "Constraint Satisfaction Problem", "Propositional Logic"],
        correct: 2,
        explanation: "A Constraint Satisfaction Problem (CSP) consists of a set of variables and constraints that detail allowable combinations of values."
    },

    {
        question: "Hidden Markov Models and Kalman Filters are particularly useful in which domain?",
        options: ["Inference in static models", "Knowledge representation", "Probabilistic reasoning over time", "Deep learning"],
        correct: 2,
        explanation: "Hidden Markov Models and Kalman Filters are used for probabilistic reasoning over time."
    },

    {
        question: "Which model is particularly known for representing word semantics in a dense vector format, capturing semantic relationships between words?",
        options: ["Convolutional Neural Networks", "Recurrent Neural Networks", "Word Embeddings", "Sequence-to-Sequence Models"],
        correct: 2,
        explanation: "Word Embeddings represent word semantics in dense vector formats and capture semantic relationships between words."
    },

    {
        question: "Which method in Reinforcement Learning involves learning optimal policies by observing a skilled agent without explicit knowledge of the reward function?",
        options: ["Active Reinforcement Learning", "Policy Search", "Apprenticeship Learning", "Passive Reinforcement Learning"],
        correct: 2,
        explanation: "Apprenticeship Learning involves learning from observing a skilled agent without explicit knowledge of the reward function."
    },

    {
        question: "In the context of Natural Language Processing, what task involves breaking down a sentence into its constituent parts like subjects, verbs, and objects?",
        options: ["Parsing", "Word Embedding", "Language Modeling", "Sequence Prediction"],
        correct: 0,
        explanation: "Parsing involves breaking down a sentence into its constituent parts."
    },

    {
        question: "When discussing the ethical implications of AI, what concept examines the moral consequences of decisions made by artificial systems?",
        options: ["Machine Learning Bias", "The Turing Test", "Utility Theory", "The Ethics of AI"],
        correct: 3,
        explanation: "The 'Ethics of AI' section would examine the moral consequences of decisions made by artificial systems."
    },

    {
        question: "Which AI domain primarily focuses on creating machines that can visually interpret the world around them?",
        options: ["Robotics", "Computer Vision", "Natural Language Processing", "Reinforcement Learning"],
        correct: 1,
        explanation: "Computer Vision focuses on creating machines that can visually interpret the world."
    },

    {
        question: "Which AI component is primarily responsible for movement, coordination, and interaction with physical environments?",
        options: ["Deep Learning Models", "Natural Language Processors", "Robot Hardware", "Knowledge Bases"],
        correct: 2,
        explanation: "Robot Hardware is responsible for movement, coordination, and interaction with physical environments."
    }，

];

let currentQuestion = 0;
let score = 0;
let answers = [];
let timerInterval;
const timePerQuestion = 30;

function startTimer() {
  let time = timePerQuestion;
  clearInterval(timerInterval);
  document.getElementById("timer").innerText = `Time Left: ${time}`;
  timerInterval = setInterval(() => {
    time--;
    document.getElementById("timer").innerText = `Time Left: ${time}`;
    if (time <= 0) {
      clearInterval(timerInterval);
      submitAnswer(-1);
    }
  }, 1000);
}

function displayQuestion() {
  document.getElementById("question").innerText = questions[currentQuestion].question;
  let options = document.querySelectorAll(".option");
  options.forEach((option, index) => {
    option.innerText = questions[currentQuestion].options[index];
  });
  startTimer();
}

function submitAnswer(selectedIndex) {
  answers.push({
    question: questions[currentQuestion].question,
    userAnswer: selectedIndex,
    correctAnswer: questions[currentQuestion].correct
  });

  if (selectedIndex === questions[currentQuestion].correct) {
    score++;
    document.getElementById("feedback").innerText = "Correct!";
  } else {
    document.getElementById("feedback").innerText = "Wrong! " + questions[currentQuestion].explanation;
  }

  document.getElementById("nextBtn").disabled = false;
  clearInterval(timerInterval);
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
    document.getElementById("feedback").innerText = "";
    document.getElementById("nextBtn").disabled = true;
    updateProgressBar();
  } else {
    displayResults();
  }
}

function updateProgressBar() {
  const progressBar = document.getElementById("progressBar");
  progressBar.style.width = ((currentQuestion + 1) / questions.length) * 100 + "%";
}

function displayResults() {
  document.querySelector(".quiz-container").classList.add("hidden");
  document.getElementById("results").classList.remove("hidden");
  document.getElementById("score").innerText = score;
  displayAnswerSummary();
  localStorage.setItem('quizAnswers', JSON.stringify(answers));
}

function displayAnswerSummary() {
  let summaryHtml = "";
  answers.forEach((answer, index) => {
    summaryHtml += `<div>
      ${index + 1}. ${answer.question}
      <br/>Your Answer: ${questions[index].options[answer.userAnswer] || "Not Answered"}
      <br/>Correct Answer: ${questions[index].options[answer.correctAnswer]}
      <hr/>
    </div>`;
  });
  document.getElementById("answerSummary").innerHTML = summaryHtml;
}

function restartQuiz() {
  score = 0;
  answers = [];
  currentQuestion = 0;
  document.querySelector(".quiz-container").classList.remove("hidden");
  document.getElementById("results").classList.add("hidden");
  displayQuestion();
}

// Initial load
displayQuestion();

// If you want to load previous answers on page load
const storedAnswers = JSON.parse(localStorage.getItem('quizAnswers'));
if (storedAnswers) {
  answers = storedAnswers;
}

