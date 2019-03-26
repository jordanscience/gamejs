alert("Bienvenue sur le site de Rachel")
var numberA = 0;
var numberB = 0
const timeout = 5000
var score = 0
var gameoverTime = null
const secondsGame = 30

// Image 
document.getElementById("myBtn").addEventListener("click", function()
{
    document.getElementById('bigpic').style.display='block';
    console.log("button clicked !")

});

// Question

document.getElementById('play').addEventListener("click", function () {
        score = 0;
        undisplayTimesout();
        document.getElementById('game').style.display='block';
        displayCountdown(secondsGame);
        askQuestion()
        setTimeout(displayTimesOut, secondsGame*1000);
        document.getElementById('score').innerText = "Score: " + score.toString()
        changeTextButton(); 

});

function askQuestion()
{
    numberA = generateNumber(2, 10);
    numberB = generateNumber(2, 10);
    document.getElementById('question').innerText = 'Question: ' + numberA.toString() + '*' + numberB.toString();
}



function generateNumber(borneInf, borneSup) {
    console.log('Generating number with ' + borneInf + ' and ' + borneSup);
    var number =Math.floor(Math.random() * (+borneSup - +borneInf)) + +borneInf; 
    console.log('Number generated ' + number);
    return number
}

function updateScoreHtml(score)
{
    document.getElementById('score').innerText = "Score: " + score.toString()
}

function checkAnswer() {
    let reponse = document.getElementById("reponse").value;
    if (reponse == numberA * numberB)
    {
        score += 10
    }
    else{
        score -=5
    }
    updateScoreHtml(score)
    console.log('Reponse ' + reponse);
    askQuestion();
    
}

function changeTextButton () 
{
    document.getElementById('play').innerText = "Rejouer"
}

function displayTimesOut () 
{
    document.getElementById('timesout').style.display='block';
    document.getElementById('game').style.display='none';
}

function displayCountdown(seconds)

{   
document.getElementById('countdown').style.display='block'
document.getElementById("countdown").textContent = seconds + ' secondes'
var countdown = setInterval(function() {
    seconds--;
    document.getElementById("countdown").textContent = seconds + ' secondes';
    if (seconds <= 0) 
        {
            clearInterval(countdown)
            document.getElementById("countdown").textContent = '';
        };
}, 1000);}

function undisplayTimesout()
{
    document.getElementById('timesout').style.display='none';

}

