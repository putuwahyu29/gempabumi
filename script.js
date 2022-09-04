$.ajax({
  url: 'ajax.php',
  type: 'GET',
  data: {
    method: "ajax_request"
  },
  success: function (result) {
    console.log(JSON.parse(result))
    displayGempaBumi(JSON.parse(result)['Infogempa']['gempa']);
  }
})

function displayGempaBumi(x) {
  let img = document.getElementsByTagName("img")[0];
  img.src = 'https://data.bmkg.go.id/DataMKG/TEWS/' + x['Shakemap'];
  let cardTitle = document.getElementsByClassName("card-title")[0];
  cardTitle.innerHTML = x['Wilayah'];
  let cardTextTanggal = document.getElementsByClassName("card-text")[0];
  cardTextTanggal.innerHTML = 'Tanggal : ' + x['Tanggal'];
  let cardTextJam = document.getElementsByClassName("card-text")[1];
  cardTextJam.innerHTML = 'Jam : ' + x['Jam'];
  let cardTextKoordinat = document.getElementsByClassName("card-text")[2];
  cardTextKoordinat.innerHTML = 'Koordinat : ' + x['Coordinates'];
  let cardTextLintang = document.getElementsByClassName("card-text")[3];
  cardTextLintang.innerHTML = 'Lintang : ' + x['Lintang'];
  let cardTextBujur = document.getElementsByClassName("card-text")[4];
  cardTextBujur.innerHTML = 'Bujur : ' + x['Bujur'];
  let cardTextMagnitude = document.getElementsByClassName("card-text")[5];
  cardTextMagnitude.innerHTML = 'Magnitude : ' + x['Magnitude'];
  let cardTextKedalaman = document.getElementsByClassName("card-text")[6];
  cardTextKedalaman.innerHTML = 'Kedalaman : ' + x['Kedalaman'];
  let cardTextWilayah = document.getElementsByClassName("card-text")[7];
  cardTextWilayah.innerHTML = 'Wilayah : ' + x['Wilayah'];
  let cardTextPotensi = document.getElementsByClassName("card-text")[8];
  cardTextPotensi.innerHTML = 'Potensi : ' + x['Potensi'];
  let cardTextDirasakan = document.getElementsByClassName("card-text")[9];
  cardTextDirasakan.innerHTML = 'Dirasakan : ' + x['Dirasakan'];

}