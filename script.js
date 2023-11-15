let questions = [
    {
        "question": "Welcher Tag ist heute?",
        "answer_1": "Sonntag",
        "answer_2": "Montag",
        "answer_3": "Dienstag",
        "answer_4": "Mittwoch",
        "correctAnswer": 3

    },
    {
        "question": "Wer schrieb die bekannte Novelle „Der Schimmelreiter?",
        "answer_1": "Theodor Storm",
        "answer_2": "Johann Wolfgang von Gorthe",
        "answer_3": "Ludwig van Beethoven",
        "answer_4": "Lady Gaga",
        "correctAnswer": 1

    },
    {
        "question": "Mit wie vielen Figuren startet ein Schachspiel??",
        "answer_1": "40",
        "answer_2": "36",
        "answer_3": "32",
        "answer_4": "38",
        "correctAnswer": 3

    },
    {
        "question": "Welcher Tag ist heute?",
        "answer_1": "Sonntag",
        "answer_2": "Montag",
        "answer_3": "Dienstag",
        "answer_4": "Mittwoch",
        "correctAnswer": 3

    },
    {
        "question": "Welcher Tag ist heute?",
        "answer_1": "Sonntag",
        "answer_2": "Montag",
        "answer_3": "Dienstag",
        "answer_4": "Mittwoch",
        "correctAnswer": 3

    },
    {
        "question": "Welcher Tag ist heute?",
        "answer_1": "Sonntag",
        "answer_2": "Montag",
        "answer_3": "Dienstag",
        "answer_4": "Mittwoch",
        "correctAnswer": 3

    },
    {
        "question": "Welcher Tag ist heute?",
        "answer_1": "Sonntag",
        "answer_2": "Montag",
        "answer_3": "Dienstag",
        "answer_4": "Mittwoch",
        "correctAnswer": 3

    }
];

let currentQuestion = 0;

function renderPage(){
    document.getElementById("absoluteQuestions").innerHTML = questions.length;
    showQuestions();
}

function showQuestions(){
    let question = questions[currentQuestion]
    document.getElementById("question").innerHTML = question["question"];
    document.getElementById("answer_1").innerHTML = question["answer_1"];
    document.getElementById("answer_2").innerHTML = question["answer_2"];
    document.getElementById("answer_3").innerHTML = question["answer_3"];
    document.getElementById("answer_4").innerHTML = question["answer_4"];

}

function answer(index){
    let answer = questions[currentQuestion]['correctAnswer'];
    if(index == `answer_${answer}`)
        {
            console.log("yes");
            document.getElementById(`${index}`).classList.add("correctAnswer");
        }
    else{
        console.log("false");
        document.getElementById(`${index}`).classList.add("wrongAnswer");
        document.getElementById(`answer_${answer}`).classList.add("correctAnswer");
    }
}