    
var DOMStrings = {
    question: document.querySelector('.question'),
    buttonOne: document.querySelector('.buttonOne'),
    buttonTwo: document.querySelector('.buttonTwo'),
    buttonThree: document.querySelector('.buttonThree'),
    nextButton: document.querySelector('.nextButton'),
    btn: document.querySelector('.btn'),
    result: document.querySelector('.result'),
    counter: document.querySelector('.score-counter'),
    score: document.querySelector('.score')
}

var Question = function (question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswers = correctAnswer;
}

var questionOne = new Question('What is my favourite 1975 song?', ['you', 'pressure', 'robbers'],0);
var questionTwo = new Question('What is my favourite Lil Peep song?', ['Awful Things',  'Benz Truck', 'Save That Shit'], 1);
var questionThree = new Question('What is my favourite tøp song?', ['Car Radio', 'Ride', 'Guns For Hands'], 2);
var score = 0;
var questions = [questionOne, questionTwo, questionThree];

DOMStrings.nextButton.addEventListener('click', function(){
   
    
    var question = DOMStrings.question.textContent;
    
    if (DOMStrings.nextButton.textContent === 'Start') {
        score = 0
    }
    
    if (question === "This is where the question will appear.") {
        DOMStrings.nextButton.textContent = 'Next';
        questionOne.displayA()
        console.log('yes')
    } else if(question === questionOne.question) {
        questionTwo.displayA()   
    } else if(question === questionTwo.question) {
        questionThree.displayA()
        console.log('2')
        DOMStrings.nextButton.textContent = "Fin";
    } else if(question === questionThree.question) {
        DOMStrings.question.textContent = `you scored`
        DOMStrings.score.textContent = score;
        console.log('3')
    }

    DOMStrings.buttonOne.style.backgroundColor = "lightgrey"
    DOMStrings.buttonTwo.style.backgroundColor = "lightgrey"
    DOMStrings.buttonThree.style.backgroundColor = "lightgrey"
});

Question.prototype.displayA = function(){
    DOMStrings.buttonOne.textContent = this.answers[0];
    DOMStrings.buttonTwo.textContent = this.answers[1];
    DOMStrings.buttonThree.textContent = this.answers[2];
    DOMStrings.question.textContent = this.question
}

function correct(){
        score++
        console.log(score);
        DOMStrings.result.textContent = "Correct, Press Next";
        DOMStrings.score.textContent = score
        console.log('correct');
}

function wrong(){
        score--
        console.log(score);
        DOMStrings.score.textContent = score
        DOMStrings.result.textContent = "Wrong, try again";
        console.log('wrong')  
}

function correctAns(val){
    var content = DOMStrings.question.textContent;
    if (content === questionOne.question && val === questionOne.correctAnswers){
       correct(); 
    } else if (content === questionTwo.question && val === questionTwo.correctAnswers){
       correct();
    } else if (content === questionThree.question && val === questionThree.correctAnswers){
        correct();
    } else {
        wrong();
    } 
}

DOMStrings.buttonOne.addEventListener('click', function(){
    var val = parseInt(DOMStrings.buttonOne.value);
    correctAns(val);
});

DOMStrings.buttonTwo.addEventListener('click', function(){
    var val = parseInt(DOMStrings.buttonTwo.value);
    correctAns(val);
});

DOMStrings.buttonThree.addEventListener('click', function(){
    var val = parseInt(DOMStrings.buttonThree.value);
    correctAns(val);
});