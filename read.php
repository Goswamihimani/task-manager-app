<?php
require 'db.php';
$stmt = $pdo->query("SELECT * FROM tasks");
echo json_encode($stmt->fetchAll());
?>
