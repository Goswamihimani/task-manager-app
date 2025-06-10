<?php
require 'db.php';
$data = json_decode(file_get_contents("php://input"));
$id = $data->id ?? 0;
$stmt = $pdo->prepare("DELETE FROM tasks WHERE id = ?");
$stmt->execute([$id]);
?>
