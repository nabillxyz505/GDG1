console.log("---tiket masuk tempat wisata---");

let pengunjung = [
    {nama: "Nabil", umur: 18},
    {nama: "Anto", umur: 51},
    {nama: "Budi", umur: 10}
];

let hargatiket = 50000;

for (let i = 0; i < pengunjung.length; i++) {
    let nama = pengunjung[i].nama;
    let umur = pengunjung[i].umur;
    let pesan = "";

    // percabangan
    if (umur < 5){
        pesan = "Free tiket masuk untuk balita";
    } else if (umur <= 12){
        pesan = "Diskon 50% untuk anak-anak: " + (hargatiket * 0.5);
    } else if (umur >= 60){
        pesan = "Diskon 30% untuk lansia: " + (hargatiket * 0.7);
    } else {
        pesan = "Harga normal: " + hargatiket;
    }

    // menampilkan tiket
    console.log("\nNama:", nama);
    console.log("Umur:", umur + " tahun");
    console.log("Keterangan:", pesan);
}
