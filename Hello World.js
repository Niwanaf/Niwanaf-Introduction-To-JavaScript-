console.log("Hello, World!");
//console.log merupakan kode bawaan JavaScript untuk menampilkan pesan ke konsol
//tanda("") menandakan bahwa pesan yang ingin ditampilkan merupakan sebuah string atau teks

//Expression dan statement
5;// Baris kode ini adalah expression karena interpreter akan membaca kode ini dan menampilkan angka 5
2+3;// baris kode ini juga merupakan expression

//statement
var yourName;
let yourAge;
const numberOfDays; // declaration statement

//Expression merupakan kode yang menghasilkan nilai
//Statement menunjukan aksi yang dilakukan

//Comment
//comment merupakan sebuah komentar dan tidak akan dieksekusi
//Tanda comment adalah (//) untuk satu baris dan (/*...*/)untuk beberapa baris

//Variable
// Pendeklarasian variabel ada let dan const
let lastname;//declaration statement
lastname = "Skywalker"; // Bisa menggunakan sama dengan atau assignment expression

console.log(lastname);
/*output Skywlaker*/

//bisa juga seperti ini
let lastName = "Skywalker";
console.log(lastName);
/*output Skywalker*/

let fullName = let lastName; // error karena let lastName adalah sebuah statement untuk deklarasi variabel. statement tidak bisa berada di posisi expression
let fullName = (lastName = "Skywalker");// tidak akan error karena dia expression
let fullName = "Luke" + "Skywalker";// ini juga tidak error karena termasuk expression
/*variabel itu :  - harus dimulai dengan huruf atau underscore
                  - dapat terdiri dari huruf, angka dan undersore tidak boleh mengandung spasi dan special character
                 */
//const tidak dapat diubah nilainya
const z = 100;
console.log(z);
z = 200;
console.log(z);
/*output typeerror*/
