



let yeniSatir = "\r\n";
let bakiye = 1000;

let metin = "1-Bakiye Goruntuleme " +yeniSatir
+"2-Para Cekme" +yeniSatir
+"3-Para Yatirma" +yeniSatir
+"4-Cikis" + yeniSatir
+"Lutfen bir deger giriniz."

//alert (metin);

let secim = prompt(metin);

switch(secim) {
    case "1":
        alert("Bakiyeniz : " + bakiye)
        break;

    case "2" :
        let cekilecekTutar = Number(prompt("Cekmek istediginiz tutari giriniz: "));
        if(cekilecekTutar < bakiye) {
            // basarilidir.
            bakiye = bakiye - cekilecekTutar;
            alert("Kalan bakiye: " + bakiye)
        }  else {
           alert("Bakiyenizden fazla para cekemezsiniz" + yeniSatir
           +"Bakiyeniz : " + bakiye + " " + "Cekilecek Tutar: " + cekilecekTutar);
        }
        break;
    case "3" :
        let yatirilacakTutar =   Number(prompt("Yatirmak istediginiz tutari giriniz: "));   
        bakiye = bakiye + cekilecekTutar;
        alert("Guncel Bakiyeniz : " + bakiye);
        break;
    
    case "4" :
        alert("Sistemden cikis yapilmistir...");
        break;

    default :
        alert("Lutfen 1 ile 4 arasinda bir secim yapiniz !")

    


}
