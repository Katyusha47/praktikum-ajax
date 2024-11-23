<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']); // Mencegah XSS
    echo "Halo, " . $name . "! Selamat datang di AJAX.";
} else {
    echo "Permintaan tidak valid.";
}
