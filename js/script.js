const questions = [
  {
    question: "¿Dónde fue su primera cita?",
    answers: [
      { text: "En el cine", correct: true },
      { text: "En un restaurante", correct: false },
      { text: "En un parque", correct: false }
    ]
  },
  {
    question: "¿Qué mascota tienen juntos?",
    answers: [
      { text: "Un perro", correct: true },
      { text: "Un gato", correct: false },
      { text: "Un conejo", correct: false }
    ]
  },
  {
    question: "¿Como se llama su perrijo?",
    answers: [
      { text: "Duki", correct: false },
      { text: "Pupi", correct: false },
      { text: "Duko", correct: true }
    ]
  },
  {
    question: "¿Quien es fanatico de las comedias romanticas?",
    answers: [
      { text: "Abi", correct: false },
      { text: "Gonza", correct: true },
    ]
  },
  {
    question: "¿En qué lugar le pidio compromiso Gonza a Abi <3 ?",
    answers: [
      { text: "Rosedal de Palermo", correct: false },
      { text: "Jardin japones", correct: true },
      { text: "En su casa", correct: false }
    ]
  },
  {
    question: "La actividad favorita de Abi es:",
    answers: [
      { text: "Salir de joda", correct: false },
      { text: "Ver series y comer ramen", correct: true },
      { text: "Hacer deporte", correct: false }
    ]
  },
  {
    question: "La actividad favorita de Gonza es:",
    answers: [
      { text: "Jugar a la pelota", correct: true },
      { text: "Jugar a la pelota", correct: true },
      { text: "Jugar a la pelota", correct: true }
    ]
  },
  {
    question: "¿Cuál es el destino para su luna de miel?",
    answers: [
      { text: "Misiones y Brasil", correct: false },
      { text: "Mendoza y Chile", correct: false },
      { text: "Bariloche y Brasil", correct: true }
    ]
  }
];

let currentQuestionIndex = 0;
let score = 0;
const nextBtn = document.getElementById("next-btn");

function showQuestion(question) {
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = `<h2>${question.question}</h2>`;

  question.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add('answer-btn');

    // Manejar tanto 'click' como 'touchstart'
    button.addEventListener('click', () => selectAnswer(button, answer.correct));
    button.addEventListener('touchstart', () => selectAnswer(button, answer.correct));

    questionContainer.appendChild(button);
  });
}

function selectAnswer(button, correct) {
  const buttons = document.querySelectorAll('.answer-btn');
  buttons.forEach(btn => btn.disabled = true); // Deshabilitar los botones después de la respuesta

  if (correct) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
  }

  // Forzar la actualización visual
  setTimeout(() => {
    buttons.forEach(btn => {
      btn.style.pointerEvents = "none"; // Asegurar que no se pueda interactuar con ellos nuevamente
    });
  }, 100);

  nextBtn.style.display = 'block'; // Mostrar botón "Siguiente"
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
  } else {
    showScore();
  }
}

function resetState() {
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = "";  // Limpiar las respuestas anteriores
  nextBtn.style.display = 'none'; // Ocultar el botón "Siguiente"

  // Reiniciar todos los estilos y eventos de los botones
  const buttons = document.querySelectorAll('.answer-btn');
  buttons.forEach(button => {
    button.disabled = false;
    button.classList.remove('correct', 'wrong');
  });
}

function showScore() {
  const scoreContainer = document.getElementById("score-container");
  scoreContainer.innerHTML = `<h2>¡Terminaste! Obtuviste ${score} de ${questions.length} puntos.</h2>`;
}

// Iniciar el juego
document.addEventListener("DOMContentLoaded", () => {
  showQuestion(questions[currentQuestionIndex]);
});
