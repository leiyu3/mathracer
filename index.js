// select elements from html
let score = document.getElementById("score");
let timer = document.getElementById("time");
let question = document.getElementById("question");
let answer = document.getElementById("answer");
let feedback = document.getElementById("feedback");

let mode = 0;
let point = 0;

let lastTime, ms;
ms = 0;
timer.textContent = "0:00";
let numberList = [1,2,3,4,5,6,7,8,9];

let questionList = shuffle(permutate(numberList));
let xy = genQuestion();

let question_quantity = '';
if (mode == 0)
{
    question_quantity = questionList.length + 1;
}
else if (mode == 1)
{
    question_quantity = '∞';
}

score.textContent = point + '/' + question_quantity;


function update(time)
{
    // Updates the game state
    if (lastTime != null)
    {
        const delta = time - lastTime;
        ms += delta;
        timer.textContent = millisToMinutesAndSeconds(ms);
    }

    if (mode != 99)
    {
        lastTime = time;
        window.requestAnimationFrame(update);
    }
}

answer.addEventListener("keydown", function (e) {
    //checks whether the pressed key is "Enter"
    console.log("Message: " + e.key);
    if (e.key === "Enter") {  
        checkAnswer();
        if (lastTime == null)
        {
            window.requestAnimationFrame(update);
        }
    }
});

function checkAnswer()
{
    if (answer.value == xy[0] * xy[1])
    {
        feedback.textContent = "Correct!";
        point += 1;
    }
    else 
    {
        feedback.textContent = "Incorrect!";
    }
    score.textContent = point + '/' + question_quantity;
    answer.value = NaN;
    if (questionList.length == 0)
    {
        feedback.textContent = "Completed " + point + '/' + question_quantity + " questions in " + millisToMinutesAndSeconds(ms) + "!";
        mode = 99;
        answer.disabled = true;
        return;
    }
    xy = genQuestion();
}

function genQuestion()
{
    // Generate 2 number from 0 to 9;
    let x = 0;
    let y = 0;
    if (mode == 0)
    {
        x = questionList[0][0];
        y = questionList[0][1];
        questionList.shift();
    }
    else if (mode == 1)
    {
        x = Math.floor(Math.random() * 9) + 1;
        y = Math.floor(Math.random() * 9) + 1;
    }

    question.textContent = x + "×" + y;
    return [x,y];

}

function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return (
        seconds == 60 ?
        (minutes+1) + ":00" :
        minutes + ":" + (seconds < 10 ? "0" : "") + seconds
      );
  }

function permutate(numbers)
{
    // Generate permutations of a list
    let questions = [];

    for (let i = 1; i < numbers.length + 1; i++)
    {
        for (let j = i; j < numbers.length + 1; j++)
        {
            questions.push([i,j]);
        }
    }
    return questions;
}

function shuffle(list)
{
    // Shuffles a list
    let newList = [];
    let n = list.length;
    while (n)
    {
        i = Math.floor(Math.random() * list.length);
        if (i in list)
        {
            newList.push(list[i]);
            delete list[i];
            n--;
        }
    }
    return newList;
}