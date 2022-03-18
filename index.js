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
timer.innerHTML = "0:00";
score.innerHTML = point + '/' + question_quantity;

function update(time)
{
    if (lastTime != null)
    {
        const delta = time - lastTime;
        ms += delta;
        timer.innerHTML = millisToMinutesAndSeconds(ms);
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

while (ture)
{
    startTime = new Date();
    endTime = new Date();
    timeDiff = endTime - startTime;

}



function checkAnswer()
{
    if (answer.value == xy[0] * xy[1])
    {
        feedback.innerHTML = "Correct!";
        point += 1;
    }
    else 
    {
        feedback.innerHTML = "Incorrect!";
    }
    score.innerHTML = point + '/' + question_quantity;
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

function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return (
        seconds == 60 ?
        (minutes+1) + ":00" :
        minutes + ":" + (seconds < 10 ? "0" : "") + seconds
      );
  }
