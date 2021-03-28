//Console.log(Untuk menampilkan value di console browser)
console.log('Wachid Muslih')

//alert (untuk menampilkan pesan)
alert('Ini alert brow')

//document.getElementById (untuk mengambil elemen html bedasarkan id) dan membertika value ke dalam elemen html tersebut
//value ke dalam elemen html tersebut

document.getElementById("nama").innerHTML= "Wachid Muslih"

document.getElementById("nama").style.color = 'red'

//contoh operasi matematika menggunakan variabel
let angka1 = 1

let angka2 = 2

let hasil = angka1 + angka2

console.log(hasil)

//function dalam javascript
function hai(){
    console.log('Ini funtion bro');
}


//document.addEventListener ( untuk memberikan event tertentu pada element)
//seleksi element dengan id nama
let nama = document.getElementById('nama');

//menambahkan event listener
nama.addEventListener("click", function nama(){
    console.log('Ini nama')
    alert('Ini nama')
});

//Date() untuk mengambil tanggal saat ini
Date()

//mendapatkan tanggal hari ini
let tanggal = new Date();
document.getElementById("tanggal").innerHTML = tanggal;