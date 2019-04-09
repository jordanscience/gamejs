<!DOCTYPE html>
<html>
<head>
<style>
table {
    width: 100%;
    border-collapse: collapse;
}

table, td, th {
    border: 1px solid black;
    padding: 5px;
}

th {text-align: left;}
</style>
</head>
<body>
<?php
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

$sql = "SELECT * FROM score ORDER BY score DESC LIMIT 20;";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    echo "<table>
    <tr>
    <th>Nom</th>
    <th>Score</th>
    </tr>";

    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<tr>";
        echo "<td>" . $row['name'] . "</td>";
        echo "<td>" . $row['score'] . "</td>";
        echo "</tr>";
    
}
echo "</table>";

} else {
    echo "0 results";
}
$conn->close();
?>
</body>
</html>