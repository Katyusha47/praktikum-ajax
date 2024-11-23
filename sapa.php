<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']); 

    if (empty($name)) {
        echo "<span class='text-danger'>Masukkan Nama Anda!</span>";
    } else {
        echo "Halo, " . $name . "! Selamat datang di AJAX!";
    }
} else {
    echo "<span class='text-danger'>Permintaan tidak valid.</span>";
}
