<!DOCTYPE html>
<html>
<head>

</head>
<body>
TEST
<?php

$score = intval($_GET['score']);
$playerName = $_GET['name'];

if ($score <= 0) {
    echo "Lahchouma, c'est quoi ce score? Il ne sera pas sauvegardé";
  }
else
{
$servername = "localhost";
$username = "id9042628_jordan";
$password = "rachel";
$dbname = "id9042628_score";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$sql = "INSERT INTO score (name, score) 
SELECT * FROM (SELECT '$playerName', '$score') AS tmp
WHERE NOT EXISTS (
    SELECT name FROM score WHERE (name = '$playerName' and score='$score')
) LIMIT 1;";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
}
?>
</body>
</html>