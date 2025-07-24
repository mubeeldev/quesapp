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

const questionElement = document.querySelector(".question");
const answerButtonsElement = document.querySelector(".answers-btn");
const nextButton = document.querySelector(".next-btn");
let currentQuestionIndex = 0;
let score = 0;
function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton,innerText = "Next";
    showQuestion();
}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerText = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.classList.add("fw-bold");    
    
        button.classList.add("answer-btn");
        button.classList.add("btn-outline-primary");
        answerButtonsElement.appendChild(button);

        if(answer.correct) {
            button.dataset.correct = answer.correct;

        }
        button.addEventListener("click", selectAnswer)

    });
}
function resetState() {
    nextButton.classList.add("d-none");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}
function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct=== "true";
    if (isCorrect) {
        selectedButton.classList.add("btn-success");
        selectedButton.classList.remove("btn-outline-primary");
        score++;
    } else {
        selectedButton.classList.add("btn-danger");
        selectedButton.classList.remove("btn-outline-primary");
    }

    Array.from(answerButtonsElement.children).forEach(button => {
        if( button.dataset.correct === "true") {
            button.classList.add("btn-success");
            button.classList.remove("btn-outline-primary");
        }
        button.disabled = true;
        button.classList.add("Disabled");
        
    });
    nextButton.classList.remove("d-none");
    // nextButton.style.display = "block";
}
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        questionElement.innerText = `You scored ${score} out of ${questions.length}`;
        nextButton.classList.add("d-none");
        nextButton.style.display = "none";
        answerButtonsElement.innerHTML = '';
        const restartButton = document.createElement("button");
        restartButton.innerText = "Restart";
        restartButton.classList.add("btn");
        restartButton.classList.add("btn-primary");
        restartButton.classList.add("fw-bold");

        restartButton.addEventListener("click", startGame);
        answerButtonsElement.appendChild(restartButton);
        questionElement.classList.add("text-center");   

}})
startGame();