let questions = [
    {
        type: "bool",
        question: "Sebastian Vettel is a 4th time world champion?",
         
        correctAnswer: true
    },
    {
        type: "bool",
        question: "Jenson Button has never had a poduim at his home race?",
        correctAnswer: true
    },
    {
        type: "bool",
        question: "David Coulthard won the 2006 Monaco GP?",
        correctAnswer: false
    },
    {
        type: "bool",
        question: "Red Bull Racing holds the world record for fastest ever pit stop?",
        correctAnswer: true
    },
    {
        type: "multiple",
        question: "Who was the first mexican driver to get a podium in mexico?",
        answers: ["Ricardo Rodríguez", "Pedro Rodríguez", "Sergio Perez", "Moisés Solana"],
        correctAnswer: "Sergio Perez"
    },
    {
        type: "multiple",
        question: "Which team did Red Bull takeover in 2004 ahead of their debut year in 2005?",
        answers: ["Lotus F1", "Jaguar Racing", "BMW Sauber", "Super Aguri"],
        correctAnswer: "Jaguar Racing"
    },
    {
        type: "multiple",
        question: "Who was Red Bulls first team principal?",
        answers: ["Christian Horner", "Toto Wolf", "Mattia Binotto", "Günther Steiner"],
        correctAnswer: "Christian Horner"
    },
    {
        type: "multiple",
        question: "Who is Red Bulls current engine supplier?",
        answers: ["Mercedes", "Ferrari", "Renault", "Honda"],
        correctAnswer: "Honda"
    },
    {
        type: "checkboxes",
        question: "Which Red Bull drivers have won World titles?",
        answers: ["Daniel Riccardo", "Max Verstappen", "Mark Webber", "Sebastian Vettel"],
        correctAnswer: ["Max Verstappen", "Sebastian Vettel"]
    },
    {
        type: "checkboxes",
        question: "Is Max Verstappen a two time world champion?",
        answers: ["Yes", "No", "Yes but its controversial", "Yes but not really"],
        correctAnswer: ["Yes", "Yes but its controversial", "Yes but not really"]
    },
]

let darkMode = document.querySelector("#toggledarkMode");
let toggle = document.querySelector("#icon");

toggle.addEventListener("click", () => {
    
    if(darkMode.className === "whiteMode") {
        document.getElementById("toggledarkMode").className = "darkMode";
        
    }else if(darkMode.className === "darkMode") {
        document.getElementById("toggledarkMode").className = "whiteMode";
    }
});

let quiz = document.querySelector("#quiz");
let resultBtn = document.querySelector("#results");
let resutlsDiv = document.querySelector("#resultsDiv");
let resulth2 = document.querySelector("#h2Result");

questions.forEach((question, i) => {
    
    let h2 = document.createElement("h2");
    h2.className = 'title' +i;
    h2.innerHTML = `${question.question}`;
    quiz.append(h2)
    
    if(question.type === "multiple" || question.type ==="checkboxes") {
       question.answers.forEach((answer) => {
            let label = document.createElement("label");
            label.innerHTML = `${answer}`;
            let answerVar = document.createElement("input");
            answerVar.value = `${answer}`;
            if(question.type ==="multiple"){
                answerVar.type = 'radio';   
            } else {
                answerVar.type = 'checkbox';
            }
            answerVar.name = 'answer' +i;
            quiz.append(answerVar, label);
        });
    } else {
        let trueButton = document.createElement("input")
        let trueLabel = document.createElement("label")
        let falseButton = document.createElement("input")
        let falseLabel = document.createElement("label")
        trueLabel.innerHTML = `True`;
        falseLabel.innerHTML = `False`;
        trueButton.type = 'radio';
        trueButton.name = 'answer' + i;
        trueButton.value = 'true';
        falseButton.type = 'radio';
        falseButton.name = 'answer' + i;
        falseButton.value = 'false';
        quiz.append(trueLabel, trueButton, falseLabel ,falseButton)
    }
    });
    
    function showResults() {
        let numCorrect = 0;
        questions.forEach((question, i) => {
            let title = document.querySelector(`.title${i}`);
            if(question.type === "bool" || question.type === "multiple") {
                let button = document.querySelector(`[name='answer${i}']:checked`);
                let selectedAnswer = button.value;
                if(selectedAnswer === question.correctAnswer.toString()) {
                    numCorrect++;
                    title.style.color = '#006400';
                } else{
                    title.style.color = '#8B0000';
                }
            } else {
                let answers = document.querySelectorAll(`input[type='checkbox'][name='answer${i}']:checked`);
                let answerList = [];
                answers.forEach((box) => {
                answerList.push(box.value);

            });
                if(answerList.length === question.correctAnswer.length && answerList.every(el => question.correctAnswer.includes(el))) {
                    console.log(answerList);
                            console.log(question.correctAnswer);
                            console.log("correct answer");
                    numCorrect++;
                    title.style.color = '#006400';
                } else {
                    title.style.color = '#8B0000';
                }   
            }
    });

    let summary = numCorrect + ' out of ' + questions.length + '(' + numCorrect + 0 + '%' + ')';
    if(numCorrect >= questions.length * 0.75) {
            resulth2.innerHTML = summary;
            resulth2.style.color = 'green';
        } else if (numCorrect >= questions.length * 0.5) {
            resulth2.innerHTML = summary;
            resulth2.style.color = "orange";
        } else {
            resulth2.innerHTML = summary;
            resulth2.style.color = 'red';
        }   
}
resultBtn.addEventListener("click", showResults);
