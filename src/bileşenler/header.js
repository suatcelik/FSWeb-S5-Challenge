const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
  const div = document.createElement("div");
  div.classList.add("header");

  const h1 = document.createElement("h1");
  h1.textContent = baslik;

  const dateSpan = document.createElement("span");
  dateSpan.classList.add("date");
  dateSpan.textContent = tarih;

  const tempSpan = document.createElement("span");
  tempSpan.classList.add("temp");
  tempSpan.textContent = yazi;

  div.appendChild(h1);
  div.appendChild(dateSpan);
  div.appendChild(tempSpan);

  return div;
};

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //
  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
};

const header = Header("Başlık", "Tarih", "Açıklama");

// Verilen seçiciyle eşleşen DOM öğesini seçin
const targetElement = document.querySelector(secici);

// Eğer seçiciyle eşleşen bir öğe bulunursa, header'ı ekleyin
if (targetElement) {
  targetElement.appendChild(header);
} else {
  console.error(
    `Belirtilen seçici (${secici}) ile eşleşen bir DOM öğesi bulunamadı.`
  );
}

export { Header, headerEkleyici };
