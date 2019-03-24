alert("Bienvenue sur le site de Rachel")
var numberA = 0;
var numberB = 0
const timeout = 5000
var score = 0
var gameoverTime = null
var numberOfQuestion = 5

// Image 
document.getElementById("myBtn").addEventListener("click", function()
{
    document.getElementById('bigpic').style.display='block';
    console.log("button clicked !")

});

// Question

document.getElementById('play').addEventListener("click", function () {

    document.getElementById('gameover').style.display='none';
    document.getElementById('game').style.display='block';
    numberA = generateNumber(2, 10);
    numberB = generateNumber(2, 10);
    console.log("numberA: " + numberA);
    console.log("numberB: " + numberB);
    console.log(numberA * numberB);
    document.getElementById('question').innerText = 'Question: ' + numberA.toString() + '*' + numberB.toString();
    console.log("play button clicked !");
    displayCountdown(5)
    gameoverTime = window.setTimeout(displayGameOver, timeout)
});




function generateNumber(borneInf, borneSup) {
    console.log('Generating number with ' + borneInf + ' and ' + borneSup);
    var number =Math.floor(Math.random() * (+borneSup - +borneInf)) + +borneInf; 
    console.log('Number generated ' + number);
    return number
}

function afficherReponse() {
    let reponse = document.getElementById("reponse").value;
    console.log("Number to check " + (numberA * numberB).toString());
    clearTimeout(gameoverTime);
    console.log(gameoverTime);
    if (reponse == numberA * numberB)
    {
        alert("Bravo !")
        score += 10
    }
    else{
        alert('Essaye encore !')
        score -=5
    }
    console.log('Reponse ' + reponse);
    changeTextButton(); 
    
}

function changeTextButton () 
{
    document.getElementById('play').innerText = "Rejouer"
    
    numberA = generateNumber(2, 10);
    numberB = generateNumber(2, 10);
    console.log("numberA: " + numberA);
    console.log("numberB: " + numberB);
    console.log(numberA * numberB);
    document.getElementById('question').innerText = 'Question: ' + numberA.toString() + '*' + numberB.toString();

}

function displayGameOver () 
{
    document.getElementById('gameover').style.display='block';
    document.getElementById('game').style.display='none';
}

function displayCountdown(seconds)

{   document.getElementById('countdown').style.display='block'
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
