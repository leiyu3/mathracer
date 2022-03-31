let score = document.getElementById("score");
let timer = document.getElementById("time");
let question = document.getElementById("question");
let answer = document.getElementById("answer");
let feedback = document.getElementById("feedback");
let xy = genQuestion();
let point = 0;
let question_quantity = '∞';
let lastTime, ms;
ms = 0;
timer.textContent = "0:00";


let numberList = [1,2];

function permutate(numbers)
{
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

questionList = shuffle(permutate(numberList));

score.textContent = point + '/' + questionList.length;


function update(time)
{
    if (lastTime != null)
    {
        const delta = time - lastTime;
        ms += delta;
        timer.textContent = millisToMinutesAndSeconds(ms);
    }

    lastTime = time;
    window.requestAnimationFrame(update);
}



answer.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
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
    xy = genQuestion();
}

function genQuestion()
{
    // Generate 2 number from 0 to 9;
    let x = Math.floor(Math.random() * 9) + 1;
    let y = Math.floor(Math.random() * 9) + 1;

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
