alert("Bienvenue sur le site de Rachel")
var numberA = 0;
var numberB = 0
const timeout = 5000
var score = 0
var playerName = 'Tuni'
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
        $("#comment").text = ''
        if (playerName == 'Tuni')
        {
            playerName = prompt("Entre ton nom:", "Tuni");
        }
        
        undisplayTimesout();
        document.getElementById('game').style.display='block';
        displayCountdown(secondsGame);
        askQuestion()
        setTimeout(displayTimesOutAndSaveScore, secondsGame*1000);
        document.getElementById('score').innerText = "Score: " + score.toString();
        changeTextButton(); 

});

function saveScore(name, score)

{
    console.log("savescore_hidden.php?name=" + name + "&score=" + score);
    $.get("savescore_hidden.php?name=" + name + "&score=" + score);
}

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
    $('#game')[0].reset(); // We remove the input value
    askQuestion();
    return false
}

function changeTextButton () 
{
    document.getElementById('play').innerText = "Rejouer"
}

function displayTimesOutAndSaveScore () 
{
    document.getElementById('timesout').style.display='block';
    document.getElementById('game').style.display='none';
    saveScore(playerName, score.toString());
    if (score <=0)
    {
    $("#comment").text("Lahchouma, c'est quoi ce score? Il ne sera pas sauvegardé");
}
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

$("#game").bind('keyup', function(event){ 
    console.log("event.keyCode: " + event.keyCode)
    if(event.keyCode == 13){ 
      event.preventDefault();
      event.stopPropagation();
      $("#submit").click(); 
      return false
    }


  });
// Display table score
