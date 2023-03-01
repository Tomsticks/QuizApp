const question = localStorage.getItem('selectedQuestion');
const nextBtn = document.querySelector('.next')
const submitBtn = document.querySelector('.submit')

let currentQuestion = 0
let questions;
let totalQuestions
let wrongAnswerCount = 0
let score = 0
function getQuestion() {
    fetch(`../questions/${question}.json`)
        .then(response => {
        return response.json()
        })
        .then(result => {
            console.log(result)
            questions = result
            totalQuestions = result.length
            generateTemplate(questions[currentQuestion])
        })
}

// function generateQuestion() {
//     let question = questions[currentQuestion]
//     console.log(question)
// }
function checkCorrectAnswer(curQuestion){
    const selectedOption = document.querySelector('input[name="option"]:checked').value
    if (curQuestion.answer === selectedOption) {
        
        score++
    } else {
        wrongAnswerCount++
    }
}

nextBtn.addEventListener('click', () => {
    checkCorrectAnswer(questions[currentQuestion])
    currentQuestion += 1
    if (currentQuestion === totalQuestions - 1) {
        nextBtn.classList.add('hidden')
        submitBtn.classList.remove('hidden')
    }
    generateTemplate(questions[currentQuestion])

})

submitBtn.addEventListener('click', () => {
    checkCorrectAnswer(questions[currentQuestion])
    localStorage.setItem('results', JSON.stringify({ score: score, wrongAnswerCount: wrongAnswerCount }))

    location.href = '../pages/result.html'
})

function generateTemplate(question) {
   const template =`
        <p class="question">${question.question}</p>

        ${question.options.map(option => {
            return `
                <label for="">
                ${option}<input type="radio" name="option" id="" value=${option} class="option">
                </label>
            `
        })}`
        document.querySelector('.questionContainer').innerHTML = template
}

getQuestion()
generateQuestion()