<?php
require 'db.php';
$data = json_decode(file_get_contents("php://input"));
$id = $data->id ?? 0;
$stmt = $pdo->prepare("UPDATE tasks SET completed = 1 WHERE id = ?");
$stmt->execute([$id]);
?>
