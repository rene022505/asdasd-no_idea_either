<?php

$conn = new mysqli("localhost", "root", "", "testing");
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$stmt = $conn->prepare("INSERT INTO test (Name, Age) VALUES (?, ?)");
$stmt->bind_param("si", $name, $age);

$name = $_POST["name"];
$age = (int) $_POST["age"];
$stmt->execute();

echo json_encode($_POST);