const quizDataBase = [
    {
        question: "What is the official language of Canada?",
        answer_a: "Spanish",
        answer_b: "English",
        answer_c: "Chinese",
        answer_d: "Japanese",
        correct: "b"
    },
    {
        question: "What is the programming language for front end development?",
        answer_a: "Javascript",
        answer_b: "Java",
        answer_c: "Python",
        answer_d: "C++",
        correct: "a"
    },
    {
        question: "Toronto is the city of country: ",
        answer_a: "Vietnam",
        answer_b: "USA",
        answer_c: "Canada",
        answer_d: "China",
        correct: "c"
    },
    {
        question: "What football club did Messi play for in 2016?",
        answer_a: "Barcelona",
        answer_b: "Real Madrid",
        answer_c: "Chelsea",
        answer_d: "PSG",
        correct: "a"
    }, {
        question: "Who is the president of USA in 2018?",
        answer_a: "Donald Trump",
        answer_b: "Tran Trung Hai",
        answer_c: "Joe Biden",
        answer_d: "Obama",
        correct: "a"
    }

]

const question = document.getElementById("question")
const answers = document.querySelectorAll(".answer")
const answer_a = document.getElementById("answer_a")
const answer_b = document.getElementById("answer_b")
const answer_c = document.getElementById("answer_c")
const answer_d = document.getElementById("answer_d")
const submitBtn = document.getElementById("submitBtn")
const quiz = document.getElementById("quiz")

let position = 0;
let score = 0;

loadQuestion()

function loadQuestion() {


    question.innerHTML = quizDataBase[position].question;
    answer_a.innerHTML = quizDataBase[position].answer_a;
    answer_b.innerHTML = quizDataBase[position].answer_b;
    answer_c.innerHTML = quizDataBase[position].answer_c;
    answer_d.innerHTML = quizDataBase[position].answer_d;

}

function isSelected() {
    let result = false;
    answers.forEach(answer => {
        if (answer.checked === true) {
            result = true;
        }
    })

    return result;
}

submitBtn.addEventListener("click", () => {

    if(position < quizDataBase.length){
        if (isSelected()) {
            let userAnswer;
            answers.forEach(answer => {
                if (answer.checked === true) {
                    userAnswer = answer.id;
                }
            })
            if (userAnswer === quizDataBase[position].correct) {
                score ++;
            }
            answers.forEach(answer => {
                if (answer.checked === true) {
                    answer.checked = false;
                }
            })
            position ++;
            if(position < quizDataBase.length){
                loadQuestion();
            }
            
        } else {
            alert("You need to choose 1 option")
        }
    }
    if(position === quizDataBase.length){
        quiz.innerHTML = `<h2>Your Score is ${score}/${quizDataBase.length}</h2> 
                    <button class="button2" onclick="location.reload()">Try It Again</button>
        `;
    }

})