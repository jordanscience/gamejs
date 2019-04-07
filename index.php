<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="stylesheet" href="style/mysheet.css">

<h1 class="title">Ceci est le nouveau site de Rachel, la reine des maths...</h1>
<p class="regle"><br />Regle du jeu : <br />
    <br />

Le jeu dure 30 secondes. <br />
<br />
Bonne réponse --> 10 points<br />
Mauvaise réponse --> - 5 points<br />
<br />
Bonne chance !</p>
<div id="mytable"></div>

<p><button type="button" id='myBtn'>Appuie ici pour une surprise</button>
<img id="bigpic" src="images/fun.jpeg" style="display:none;"/></p>



<p><button type="button" id='play'>Lancer le jeu !</button></p>

<p id='notavailable'></p>

<form id=game style="display:none;" onsubmit="return false">
    <p id='question'></p>
    <input type="text" id="reponse" onfocus="this.value=''"><br>
    <h1>
    <input class='ok' type="button" value="C'est mon dernier mot" id='submit' onclick="checkAnswer()"><br></h1>

    <p></p>

</form>

<h1 id="timesout" style="display:none;">Temps écoulé</h1>

<h1 id="score"></h1>


<span id="countdown" style="display:none;"><span> secondes!


<script src="scripts/myjs.js"> </script>
<script src="scripts/connect.js"> </script>

