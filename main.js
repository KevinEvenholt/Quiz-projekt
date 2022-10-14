let questions = [
    {
        num: 1,
        question: "lorem",
        answers: {
            a: "",
            b: "",

        },
        correctAnswer: ""
    },
    {
        num: 2,
        question: "lorem",
        answers: {
            a: "",
            b: "",

        },
        correctAnswer: ""
    },
    {
        num: 3,
        question: "lorem",
        answers: {
            a: "",
            b: "",

        },
        correctAnswer: ""
    },
    {
        num: 4,
        question: "lorem",
        answers: {
            a: "",
            b: "",

        },
        correctAnswer: ""
    },
    {
        num: 5,
        question: "lorem",
        answers: {
            a: "",
            b: "",

        },
        correctAnswer: ""
    },
    {
        num: 6,
        question: "lorem",
        answers: {
            a: "",
            b: "",

        },
        correctAnswer: ""
    },
    {
        num: 7,
        question: "lorem",
        answers: {
            a: "",
            b: "",

        },
        correctAnswer: ""
    },
    {
        num: 8,
        question: "lorem",
        answers: {
            a: "",
            b: "",

        },
        correctAnswer: ""
    },
    {
        num: 9,
        question: "lorem",
        answers: {
            a: "",
            b: "",

        },
        correctAnswer: ""
    },
    {
        num: 10,
        question: "lorem",
        answers: {
            a: "",
            b: "",

        },
        correctAnswer: ""
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

let div = document.querySelector("#quiz")
questions.forEach((question) => {
    let h2 = document.createElement("h2");
    let p = document.createElement("p")
    let answer1 = document.createElement("input");
    let answer2 = document.createElement("input");
    answer1.type = 'radio';
    answer1.name = 'answer';
    answer2.type = 'radio';
    answer2.name = 'answer';
    p.innerHTML = `${question.question}`
    h2.innerHTML = `Fråga ${question.num}`

    div.append(h2, p, answer1, answer2)
    
})