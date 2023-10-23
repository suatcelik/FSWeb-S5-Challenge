const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //

  const { anabaslik, yazarFoto, yazarAdi } = makale;

  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  const headlineDiv = document.createElement("div");
  headlineDiv.classList.add("headline");
  headlineDiv.textContent = anabaslik;

  const authorDiv = document.createElement("div");
  authorDiv.classList.add("author");

  const imgContainerDiv = document.createElement("div");
  imgContainerDiv.classList.add("img-container");

  const imgElement = document.createElement("img");
  imgElement.src = yazarFoto;

  const spanElement = document.createElement("span");
  spanElement.textContent = `${yazarAdi} tarafından`;

  imgContainerDiv.appendChild(imgElement);
  authorDiv.appendChild(imgContainerDiv);
  authorDiv.appendChild(spanElement);

  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);

  cardDiv.addEventListener("click", () => {
    console.log(anabaslik);
  });

  return cardDiv;
};

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  // API'den makale verilerini al
  fetch("http://localhost:5001/api/makaleler")
    .then((response) => response.json())
    .then((data) => {
      const makaleler = data.makaleler;

      makaleler.forEach((makale) => {
        const cardElement = Card(makale);

        const hedefElement = document.querySelector(secici);
        if (hedefElement) {
          hedefElement.appendChild(cardElement);
        } else {
          console.error("Hedef element bulunamadı.");
        }
      });
    })
    .catch((error) => console.error("API isteği başarısız:", error));
};

export { Card, cardEkleyici };
