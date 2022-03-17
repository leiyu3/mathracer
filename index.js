let score = document.getElementById("score");
let time = document.getElementById("time");
let question = document.getElementById("question");
let answer = document.getElementById("answer");
let feedback = document.getElementById("feedback");
let xy = genQuestion();

answer.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        checkAnswer();
    }
});


function checkAnswer()
{
    if (answer.value == xy[0] * xy[1])
    {
        feedback.innerHTML = "Correct!";
    }
    else 
    {
        feedback.innerHTML = "Incorrect!";
    }
    answer.value = NaN;
    xy = genQuestion();
}

function genQuestion()
{
    // Generate 2 number from 0 to 9;
    let x = Math.floor(Math.random() * 9) + 1;
    let y = Math.floor(Math.random() * 9) + 1;

    question.innerHTML = x + "*" + y;
    return [x,y];
}

