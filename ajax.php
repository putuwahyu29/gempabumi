<?php
if (isset($_GET['method'])) {
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, "https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json");
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  $output = curl_exec($ch);
  echo $output;
  curl_close($ch);
}
