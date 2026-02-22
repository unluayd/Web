alert("Merhaba, dünya!");

const cevap = confirm("Devam etmek istiyor musunuz?");

if (cevap) {
    const isim = prompt("Adınızı giriniz:");
    console.log("Merhaba, " + isim + "!");
}

const cevap2 = prompt("Lütfen bir sayı giriniz:");
const sayi = parseFloat(cevap2);
if (!isNaN(sayi)) {
    console.log("Girdiğiniz sayı: " + sayi);
} else {
    console.log("Geçerli bir sayı girmediniz.");
}

let value;

value = window.location.href;
console.log("Current URL: " + value);
value = window.location.host;
console.log("Host: " + value);
value = window.location.pathname;
console.log("Pathname: " + value);
value = window.location.protocol;
console.log("Protocol: " + value);
value = window.location.search;
console.log("Search: " + value);

if (confirm("Sayfayı yenilemek istiyor musunuz?")) {
    window.location.reload();
}else {
    console.log("Sayfa yenilenmedi.");
}
