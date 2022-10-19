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
        correctAnswer: "sant"
    },
    {
        type: "checkboxes",
        question: "woof",
        answers: ["sant", "falskt", "kanske sant", "inte sant"],
        correctAnswer: "sant"
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
    
    if(question.type === "multiple") {
       question.answers.forEach((answer, x, correctAnswer) => {
            let label = document.createElement("label");
            label.innerHTML = `${answer}`;
            let answerVar = document.createElement("input");
            //Om answer === correctAnswer i din question, lägg value till "correct" annars "wrong"
            if(answer === correctAnswer){
                answerVar.value = "correct";
            }else {
                answerVar.value = "wrong";
            }
            answerVar.type = 'radio';
            answerVar.className = 'answer';
            answerVar.name = 'answer' +i;
            quiz.append(answerVar, label);
        });
    }
    else if (question.type === "bool") {
        let trueButton = document.createElement("input")
        let trueLabel = document.createElement("label")
        let falseButton = document.createElement("input")
        let falseLabel = document.createElement("label")
        trueLabel.innerHTML = `True`;
        falseLabel.innerHTML = `False`;
        trueButton.type = 'radio';
        trueButton.name = 'true' + i;
        trueButton.value = 'true';
        falseButton.type = 'radio';
        falseButton.name = 'true' + i;
        falseButton.value = 'false';
        quiz.append(trueLabel, trueButton, falseLabel ,falseButton)

    } else if(question.type === "checkboxes") {
    question.answers.forEach((answer, i) => {
        let label1 = document.createElement("label");
        label1.innerHTML = `${answer}`;
        let check = document.createElement("input");
        check.type = 'checkbox';
        
      quiz.append(label1, check)
    });
  }


    });
    
    function showResults(question, quiz, resutlsDiv) {
        let answerConteiner = document.querySelectorAll(".answer");
        let numCorrect = 0;
        let userAnswer = "";
        //Loopa igenom alla frågor, en i taget, och kolla om dess icheckade svar är korrekt
        questions.forEach((question, i) => {
        //    userAnswer = (answerConteiner[i].querySelector('[name:answer'+i+']:checked')||{}).value;
        let selectedAnswer = document.querySelector(`[name:'answer'${i}]:checked`).value;
        //hämta alla icheckade svar, kolla deras value - Om de är correct, lägg till ett poäng.

        if(selectedAnswer === correctAnswer) {
            numCorrect++;
        }
        
        resulth2.innerHTML = numCorrect + 'out of' + questions.length;
    });
}

    
    resultBtn.addEventListener("click", showResults);