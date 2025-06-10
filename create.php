<?php
require 'db.php';
$data = json_decode(file_get_contents("php://input"));
$task = $data->task ?? '';
if ($task !== '') {
    $stmt = $pdo->prepare("INSERT INTO tasks (task, completed) VALUES (?, 0)");
    $stmt->execute([$task]);
}
?>
