
// escaping string (' \" \\ \n \r \t \b \f)
let data1 = 'Rakha berkata "apa kabar?"';
console.log(data1);

let data2 = 'Rakha berkata \t"apa kabar?"';
console.log(data2);

let data3 = "Reyvan menjawab \"Baik\"";
console.log(data3);

let data4 = 'Rakha berkata \n"apa kabar?"';
console.log(data4);


// literal string
let namaDepan = "Rakha";
let namaBelakang = "Adhitya";
let umur = 10;
let namaLengkap = namaDepan + " " + namaBelakang + " " + "umur" + " " + umur + " " + "tahun";
console.log(namaLengkap);

let biodata = `${namaDepan} ${namaBelakang} umur ${umur} tahun`;
console.log(biodata);