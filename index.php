<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="stylesheet" href="style/mysheet.css">
<body>

<audio controls autoplay id='audio'>
<source src="music/starwars.ogg" type="audio/ogg">
<source src="music/starwars.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

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

<p><button type="button" id='myBtn' class='button'>Appuie ici pour une surprise</button>
<img id="bigpic" src="images/fun.jpeg" style="display:none;"/></p>



<p><button type="button" id='play' class='button1'>Lancer le jeu !</button></p>

<p id='notavailable'></p>

<form id=game style="display:none;" onsubmit="return false">
    <p id='question'></p>
    <input type="text" id="reponse" onfocus="this.value=''" autocomplete="off"><br>
    <h1>
    <input class='button' type="button" value="C'est mon dernier mot" id='submit' onclick="checkAnswer()"><br></h1>

    <p></p>

</form>

<h1 id="timesout" style="display:none;">Temps écoulé</h1>

<h1 id="score"></h1>


<span id="countdown" style="display:none;"><span> secondes!


<script src="scripts/myjs.js"> </script>
<script src="scripts/connect.js"> </script>
</body>
