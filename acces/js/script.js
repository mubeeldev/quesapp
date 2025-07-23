const questions = [
    {
        question : "What is the capital city of Ghana ?",
        answer : [
            {text : "Kumasi" , correct :"false"},
            {text : "Tamale" , correct :"false"},
            {text : "Accra" , correct :"true"},
            {text : "non of them" , correct :"false"}
        ]

    },
    {
        question : "Who is the wife of mubeel?",
        answer : [
            {text : "Hafsat" , correct :"false"},
            {text : "Amal" , correct :"false"},
            {text : "Salsabeel" , correct :"true"},
            {text : "yumma" , correct :"false"}
        ]

    },
    {
        question : "identify the one that is true about goals ?",
        answer : [
            {text : "bright" , correct :"false"},
            {text : "constant" , correct :"false"},
            {text : "different" , correct :"false"},
            {text : "from the basis for sound planning" , correct :"true"}
        ]

    },
    {
        question : "the things individuals want to achieve in life are called?",
        answer : [
            {text : "goals" , correct :"true"},
            {text : "materials" , correct :"false"},
            {text : "value" , correct :"false"},
            {text : "want" , correct :"false"}
        ]

    },
    {
        question : "which software will be best in designing a flyer ?",
        answer : [
            {text : "microsoft power point" , correct :"false"},
            {text : "Adobe photoshop" , correct :"true"},
            {text : "microsoft excel" , correct :"false"},
            {text : "VLC media player" , correct :"false"}
        ]

    },
    {
        question : "what is the main purpose of RAM in a computer system ?",
        answer : [
            {text : "store permanent data" , correct :"false"},
            {text : "execute network protocols" , correct :"false"},
            {text : "temporarily hold data for quick access" , correct :"true"},
            {text : "display graphics" , correct :"false"}
        ]

    },
    {
        question : "what is the primary function of system software ?",
        answer : [
            {text : "manage computer hardware" , correct :"true"},
            {text : "create graphics " , correct :"false"},
            {text : "help users to create graphics" , correct :"false"},
            {text : "helps users to play games" , correct :"false"}
        ]

    },
    {
        question : "what is microsoft excel mainly used for ?",
        answer : [
            {text : "editing photos" , correct :"false"},
            {text : "writing CODE" , correct :"false"},
            {text : "browsing the web" , correct :"false"},
            {text : "creating spreadsheets" , correct :"true"}
        ]

    },


];
const questionElement = document.querySelector('.display-Question');
const answerButtonsElement = document.querySelector('.answers-btn');
const nextButton = document.querySelector('.next-btn');

let currentQuestionIndex = 0;
let score = 0;



function startGame() {
    // currentQuestionIndex = 0;
    // score = 0;
    nextButton.classList.add('hide');
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex].question;
    const currentAnswers = questions[currentQuestionIndex].answer;
    renderQuestion(currentQuestion, currentAnswers) ;
}

function renderQuestion(currentQuestion, currentAnswers) {
    questionElement.innerHTML = currentQuestion;
    answerButtonsElement.innerHTML = ""; // Clear previous buttons

    currentAnswers.forEach(answer => {
        const button = document.createElement("button");
        button.classList.add("answer-btn");
        button.innerText = answer.text;
        button.addEventListener("click", function() {
            isCorrect(answer, button);
        });
        answerButtonsElement.appendChild(button);
    });
}

function isCorrect(answer, answerBtn) {
    nextButton.style.display = "block";

    const allBtn = document.querySelectorAll('.answer-btn');
    allBtn.forEach((btn) => {
        btn.disabled = true;
        
        // if(btn)
        // btn.classList.add('disabled');
        // Highlight the correct answer
    });
    if (answer.correct !== "true"){
        answerBtn.classList.add('incorrect');

    } else{
        answerBtn.classList.add('correct');
        let ca = answerBtn.dataset.correct = answer.correct;
        score++;
        console.log(score);
    
    };




}

nextButton.addEventListener('click', ()=>{
    currentQuestionIndex +=1;
    console.log(currentQuestionIndex); startGame();
    

})
startGame();
