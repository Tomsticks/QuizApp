const question = localStorage.getItem('selectedQuestion');
console.log(question);
const nextBtn = document.querySelector('.next')

let currentQuestion = 0
let questions;
let totalQuestions;
let score = 0;
let wrongAnswerCount = 0;



function getQuestion() {
    fetch(`../question/${question}.json`)
        .then(response => {
        return response.json()
        })
        .then(result => {
            // console.log(result)
            totalQuestions = result.length
            questions = result
            generateTemplate(questions[currentQuestion])
        })
}

const submitBtn = document.querySelector('.submit')

submitBtn.addEventListener('click',()=>{
    checkCorrectAnswer(questions[currentQuestion])
    localStorage.setItem('result' ,JSON.stringify({score:score,wrongAnswerCount:wrongAnswerCount}))
    location.replace('../html folder/result.html')
})


nextBtn.addEventListener('click', () => {
    checkCorrectAnswer(questions[currentQuestion])
    currentQuestion += 1
    if(currentQuestion === totalQuestions - 1){
        nextBtn.classList.add('hidden')
        submitBtn.classList.remove('hidden')
    }
    generateTemplate(questions[currentQuestion])
})

function checkCorrectAnswer(currentQuestion){
    const selectedOption = document.querySelector('input[name="option"]:checked').value

    if (currentQuestion.answer === selectedOption){
        score+=10
    }
    else{
        wrongAnswerCount++
    }
}

function generateTemplate(question) {
    console.log(question);
    console.log(question.option);
   const template =`
        <p class="question">${question.questions}</p>
        ${question.option.map(option => {
            console.log(option);
            return `
                
                <label for=${option}>
                    <input type="radio" name="option" id=${option} value=${option}>${option}
                </label>
            `

        }).join("")}`
        document.querySelector('.questionContainer').innerHTML = template
}

getQuestion()


function countdown( elementName, minutes, seconds )
{
    var element, endTime, hours, mins, msLeft, time;
    function twoDigits( n )
    
    {return (n <= 9 ? "0" + n : n);}

    element = document.getElementById( elementName );
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();


    function updateTimer()
    {
        msLeft = endTime - (+new Date);

        if(msLeft < 300000){
            element.style.border = '2px solid red'
        }


        if ( msLeft < 1000 ) {
            element.innerHTML = "Time is up!";
            
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }
}

countdown( "ten-countdown", 6, 0 );


// let classActive = document.querySelector('label')
//  function activeLink() {
//     classActive.classList.add('active')
//  }
 
// classActive.forEach((btn)=>{
//    btn.addEventListener('click', activeLink)
// })