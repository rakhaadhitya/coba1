// variabel dengan let
let nama = "Rakha";
console.log(nama);

// kita ubah nilai variabel nama
nama = "Rakha Adhitya";
console.log(nama);

// variabel dengan var
var namaDepan = "Reyvan";
console.log(namaDepan);

// kita ubah nilai variabel namaDepan
namaDepan = "Reyvan Arbie";
console.log(namaDepan);


// kelakuan dari let
let namaBelakang = "Adhitya";
{
    let namaBelakang = "Arbie";
    console.log(namaBelakang);
}
console.log(namaBelakang);


// kelakuan dari var
var namaTengah = "Keren";
{
    var namaTengah = "Gokil";
    console.log(namaTengah);
}
console.log(namaTengah);

// variabel dengan const
const TTL = "10 Mei 2005";
console.log(TTL);
//const TTL = "11 Mei 2005"; ini tidak bisa