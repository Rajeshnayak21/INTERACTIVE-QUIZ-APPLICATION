const questions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
    correct: "New Delhi"
  },
  {
    question: "Which is the largest planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correct: "Jupiter"
  },
  {
    question: "Who wrote 'Ramayana'?",
    options: ["Kalidasa", "Valmiki", "Tulsidas", "Kabir"],
    correct: "Valmiki"
  }
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');

function loadQuestion() {
  const current = questions[currentIndex];
  questionEl.innerText = current.question;
  optionsEl.innerHTML = "";

  current.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.className = "option";
    btn.onclick = () => checkAnswer(btn, current.correct);
    optionsEl.appendChild(btn);
  });

  nextBtn.style.display = "none";
}

function checkAnswer(button, correct) {
  const options = document.querySelectorAll('.option');
  options.forEach(opt => {
    opt.disabled = true;
    if (opt.innerText === correct) {
      opt.classList.add("correct");
    }
  });

  if (button.innerText === correct) {
    score++;
  } else {
    button.classList.add("wrong");
  }

  nextBtn.style.display = "block";
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  questionEl.innerText = 'Quiz Completed! 🎉\nYour Score: ${score}/${questions.length}';
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
}

loadQuestion();