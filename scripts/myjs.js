alert("Bienvenue sur le site de Rachel")
var numberA = 0;
var numberB = 0


document.getElementById("myBtn").addEventListener("click", function()
{
    document.getElementById('bigpic').style.display='block';
    console.log("button clicked !")

});

document.getElementById('play').addEventListener("click", function () {
    document.getElementById('game').style.display='block';
    numberA = generateNumber(2, 10);
    numberB = generateNumber(2, 10);
    console.log("numberA: " + numberA);
    console.log("numberB: " + numberB);
    console.log(numberA * numberB);
    document.getElementById('question').innerText = 'Question: ' + numberA.toString() + '*' + numberB.toString();
    console.log("play button clicked !");

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
    if (reponse == numberA * numberB)
    {
        alert("Bravo !")
    }
    else{
        alert('Essaye encore !')
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