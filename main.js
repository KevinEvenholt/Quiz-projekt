let questions = [
    {
        type: "bool",
        question: "Är Nessie vit?",
         
        correctAnswer: true
    },
    {
        type: "bool",
        question: "Är nessie blå?",
        correctAnswer: false
    },
    {
        type: "bool",
        question: "Är nessie grön?",
        correctAnswer: false
    },
    {
        type: "bool",
        question: "Är nessie svart?",
        correctAnswer: false
    },
    {
        type: "multiple",
        question: "Vilken färg är nessie?",
        answers: ["blå", "svart", "brunt", "brun/vit"],
        correctAnswer: "brun/vit"
    },
    {
        type: "multiple",
        question: "Vad är nessie för slags djur?",
        answers: ["elephant", "orm", "hund", "lemur"],
        correctAnswer: "hund"
    },
    {
        type: "multiple",
        question: "Är nessie köttätare?",
        answers: ["sant", "falskt", "både och", "allätare"],
        correctAnswer: "allätare"
    },
    {
        type: "multiple",
        question: "Ness nessie ness ness?",
        answers: ["sant", "falskt", "ja", "nej"],
        correctAnswer: "sant"
    },
    {
        type: "checkboxes",
        question: "klicka i fler än 1",
        answers: ["sant", "falskt", "kanske sant", "inte sant"],
        correctAnswer: ["sant", "falskt"]
    },
    {
        type: "checkboxes",
        question: "woof",
        answers: ["sant", "falskt", "kanske sant", "inte sant"],
        correctAnswer: ["sant", "kanske sant"]
    },
]

let darkMode = document.querySelector("#toggledarkMode");
let toggle = document.querySelector("#toggle");

toggle.addEventListener("click", () => {
    
    if(darkMode.className === "whiteMode") {
        document.getElementById("toggledarkMode").className = "darkMode";
    }else if(darkMode.className === "darkMode") {
        document.getElementById("toggledarkMode").className = "whiteMode";
    }
})


let quiz = document.querySelector("#quiz")
let resultBtn = document.querySelector("#results")
let resutlsDiv = document.querySelector("#resultsDiv")
let resulth2 = document.querySelector("#h2Result")


questions.forEach((question, i) => {
    
    let h2 = document.createElement("h2");
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
        //Loopa igenom alla frågor, en i taget, och kolla om dess icheckade svar är korrekt
        questions.forEach((question, i) => {
            if(question.type === "bool" || question.type === "multiple") {
                let button = document.querySelector(`[name='answer${i}']:checked`);
                let selectedAnswer = button.value;
                if(selectedAnswer === question.correctAnswer.toString()) {
                    numCorrect++;
                }
            } else {
                const answers = document.querySelectorAll(`[name='answer${i}']:checked`);
                const selectedAnswers = Array.from(answers);   
                if(selectedAnswers.every(element => question.answers.includes(element.value))) {
                    numCorrect++;
                }
            }

        //hämta alla icheckade svar, kolla deras value - Om de är correct, lägg till ett poäng.

        
        
    });
    resulth2.innerHTML = numCorrect + 'out of' + questions.length;
}

    
    resultBtn.addEventListener("click", showResults);