const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")

let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}

function displayNextQuestion() {
  resetState()
  
  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }

  $questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
}

function resetState() {
  while($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct")
    totalCorrect++
  } else {
    document.body.classList.add("incorrect") 
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })
  
  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}

function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)
  
  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "Você realmente conhece Minecraft!"
      break
    case (performance >= 70):
      message = "Esta quase la"
      break
    case (performance >= 50):
      message = "Falta jogar um pouco do jogo ainda"
      break
    default:
      message = "Você ja chegou a baixar o jogo?"
  }

  $questionsContainer.innerHTML = 
  `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Refazer teste
    </button>
  `
}


const questions = [
  {
    question: "Qual o nome do mob em que você tem que matar pra zerar o Minecraft?",
    answers: [
      { text: "Warden", correct: false },
      { text: "Wither", correct: false },
      { text: "EnderDragon", correct: true },
      { text: "Enderman", correct: false }
    ]
  },
  {
    question: "Quem criou o minecraft?",
    answers: [
      { text: "Notch", correct: true },
      { text: "Herobrine", correct: false },
      { text: "Steve", correct: false },
      { text: "Mojang", correct: false }
    ]
  },
  {
    question: "Em qual ano foi lancado o minecraft?",
    answers: [
      { text: '2009', correct: true },
      { text: '2014', correct: false },
      { text: '2010', correct: false },
      { text: "2012", correct: false }
    ]
  },
  {
    question: 'Qual a melhor armadura do minecraft?',
    answers: [
      { text: "Diamante", correct: false },
      { text: "Netherite", correct: true },
      { text: "Ferro", correct: false },
      { text: "Ouro", correct: false },
    ]
  },
  {
    question: 'Qual o nome da dimensao em que você nasce?',
    answers: [
      { text: 'Nether', correct: false },
      { text: 'Overworld', correct: true },
      { text: 'The end', correct: false },
      { text: 'EndCity', correct: false }
    ]
  },
  {
    question: 'Quais os personagens pricipais?',
    answers: [
      { text: 'wither e zumbi', correct: false },
      { text: 'Steve e alex', correct: true },
      { text: 'Creeper e ender dragon', correct: false },
      { text: 'Notch e Jab', correct: false }
    ]
  },
  {
    question: 'Em que país foi criado o jogo Minecraft??',
    answers: [
      { text: 'Brasil', correct: false },
      { text: 'Alemanha', correct: false },
      { text: 'Japão', correct: false },
      { text: 'Suécia', correct: true },
    ]
  },
  {
    question: 'Quando o Minecraft fez 10 anos?',
    answers: [
      { text: '2009', correct: false },
      { text: '2020', correct: false },
      { text: '2018', correct: false },
      { text: '2019', correct: true },
    ]
  },
  {
    question: 'Quantos minérios existem no Minecraft do overword e do nether?',
    answers: [
      { text: '12', correct: false },
      { text: '6', correct: false },
      { text: '10', correct: false },
      { text: '9', correct: true },
    ]
  },
  {
    question: 'Quantos corações existem no Minecraft?',
    answers: [
      { text: '8', correct: false },
      { text: '10', correct: true },
      { text: '12', correct: false },
      { text: '6', correct: false },
    ]
  },
]