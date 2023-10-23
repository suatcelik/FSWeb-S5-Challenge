const Tablar = (konu) => {
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //
  const divTopics = document.createElement("div");
  divTopics.classList.add("topics");

  konu.forEach((konuAdi) => {
    const divTab = document.createElement("div");
    divTab.classList.add("tab");
    divTab.textContent = konuAdi;

    divTopics.appendChild(divTab);
  });

  return divTopics;
};

const tabEkleyici = (secici) => {
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  fetch("http://localhost:5001/api/konular")
    .then((response) => response.json())
    .then((data) => {
      const konular = data.konular;

      const tablarElement = Tablar(konular);

      const hedefElement = document.querySelector(secici);
      if (hedefElement) {
        hedefElement.appendChild(tablarElement);
      } else {
        console.error("Hedef element bulunamadı.");
      }
    })
    .catch((error) => console.error("API isteği başarısız:", error));
};

export { Tablar, tabEkleyici };
