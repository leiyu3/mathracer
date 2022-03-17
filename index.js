let score = document.getElementById("score");
let time = document.getElementById("time");
let question = document.getElementById("question");
let answer = document.getElementById("answer");
let feedback = document.getElementById("feedback");

answer.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        checkAnswer(e);
    }
});


function checkAnswer(ans)
{
    answer = ans.target.value;
    if (answer == 8)
    {
        feedback.innerHTML = "Correct!";
    }
    else 
    {
        feedback.innerHTML = "Incorrect!";
    }
    ans.target.value = NaN;
}