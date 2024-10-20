const quiz = [
    {
        no : 1,
        question : "What's the capital of Australia?",
        options : [ "Sydney" , "Melbourne" , "Canberra" , "Brisbane"],
        correctans : "Canberra",
    }
    ,
    {
        no : 2,
        question : "Who wrote the play Hamlet?",
        options : [ "Charles Dickens" , "William Shakespeare" , "Jane Austen" , "Mark Twain"],
        correctans : "William Shakespeare",
    }
    ,
    {
        no : 3,
        question : "What’s the chemical symbol for gold?",
        options : [ "Au" , "Ag" , "Fe" , "Pb"],
        correctans : "Au",
    }
]
let questionno = 0;
let correctAnswerCount = 0;


const startbtn = document.querySelector("#start-quiz");
const quizform = document.querySelector("#quiz-form");
const quizquestion = document.querySelector("#quiz-question");
const nextbtn = document.querySelector("#submit");
const optionone = document.querySelector("#optionone");
const optiontwo = document.querySelector("#optiontwo");
const optionthree = document.querySelector("#optionthree");
const optionfour = document.querySelector("#optionfour");
const optiononelabel = document.querySelector("#optiononelabel");
const optiontwolabel = document.querySelector("#optiontwolabel");
const optionthreelabel = document.querySelector("#optionthreelabel");
const optionfourlabel = document.querySelector("#optionfourlabel");
const quizbody = document.querySelector("#quiz-body"); 
const quizcompletehtml = document.querySelector("#quizcompletehtml"); 
const totalquestionhtml = document.querySelector("#totalquestionhtml"); 
const correctanswerhtml = document.querySelector("#correctanswerhtml"); 

const questionDisplay = (questionno) => {
    quizquestion.innerText = quiz[questionno].question;
    optionone.value = quiz[questionno].options[0];
    optiontwo.value = quiz[questionno].options[1];
    optionthree.value = quiz[questionno].options[2];
    optionfour.value = quiz[questionno].options[3];
    
    optiononelabel.innerText = quiz[questionno].options[0];
    optiontwolabel.innerText = quiz[questionno].options[1];
    optionthreelabel.innerText = quiz[questionno].options[2];
    optionfourlabel.innerText = quiz[questionno].options[3];
};


startbtn.addEventListener(
    "click" ,
    () => {
        quizform.classList.toggle("hidden");
        quizquestion.classList.toggle("hidden");
        quizcompletehtml.classList.toggle("hidden");
        startbtn.style.display = "none";
        questionDisplay(questionno);
    }
);

const quizComplete = () => {

    quizcompletehtml.classList.remove("hidden");
    totalquestionhtml.innerText = `Total Question: ${quiz.length}`;
    correctanswerhtml.innerText = `Correct Answer: ${correctAnswerCount}`;
    questionno = 0;
    correctAnswerCount = 0;
    quizform.classList.add("hidden");
    quizquestion.classList.add("hidden");
    startbtn.style.display = "block";
    startbtn.innerText = "Start Quiz Again";
}

quizform.addEventListener(
    "submit",
    (event) => {
        event.preventDefault();
        const selectedOption = document.querySelector('input[name="option"]:checked');
        if(selectedOption){
            if(selectedOption.value === quiz[questionno].correctans ){
                    correctAnswerCount++
                };
            if(questionno !== quiz.length - 1){
                questionno++;
                questionDisplay(questionno);
            }
            else{
                quizComplete();
            }
        }
            
       
        

    }
);
console.log(quiz.length);