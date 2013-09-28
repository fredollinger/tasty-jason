#!/usr/bin/php

<?php
$bk=file_get_contents("data/fredollinger.json");
$json=json_decode($bk);
#$json=$bk;
echo var_dump($json);
?>
