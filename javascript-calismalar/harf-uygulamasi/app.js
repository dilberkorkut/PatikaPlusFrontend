let metin = "Suanda Istanbulda bur kahvecide oturup Javascript calisiyorum.";

let harf = prompt("Harfi giriniz");

let sonuc = bul(harf);
alert("Harf Sayisi : " + sonuc);

function bul(harf) {
    let toplam = 0;
    for(let i=0; i<metin.length; i++) {
        if (metin.charAt(i)===harf) {
            toplam+=1;
        }
    }
    return toplam;
}