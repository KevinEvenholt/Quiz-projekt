let questions = [
    {
        type: "bool",
        question: "Är Nessie vit?",
         
        correctAnswer: true
    },
    {
        type: "bool",
        question: "Är nessie blå?",
        answers: ["sant", "falskt",],
        correctAnswer: ""
    },
    {
        type: "bool",
        question: "Är nessie grön?",
        answers: ["sant", "falskt"],
        correctAnswer: ""
    },
    {
        type: "bool",
        question: "Är nessie svart?",
        answers: ["sant", "falskt"],
        correctAnswer: ""
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

questions.forEach((question, i) => {
    
    let h2 = document.createElement("h2");
    h2.innerHTML = `${question.question}`;
    quiz.append(h2)
    
    if(question.type === "multiple") {
       question.answers.forEach((answer, i) => {
            let label = document.createElement("label");
            label.innerHTML = `${answer}`;
            let answerVar = document.createElement("input");
            answerVar.type = 'radio';
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
        trueButton.name = 'trueAnswer' + i;
        falseButton.type = 'radio';
        falseButton.name = 'falseAnswer' + i;
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

//Exempel
// questions.forEach((question, i) => {
//   let answers = question.answers;
//   if(question.type == "multiple") {
//     answers.forEach((answer, i) => {
//       //Lägg till button
//     }
//   } else if(question.type == "multiple") {
//     //Lägg till två buttons
//   } else if(question.type == "checkboxes") {
//     answers.forEach((answer, i) => {
//       //Lägg till checkboxes
//     }
//   }
    });