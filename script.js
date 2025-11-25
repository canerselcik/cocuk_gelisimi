// ===============================
// 1) SORU LİSTESİ
// ===============================
const questions = [
  "Çocuğum ekran kapatıldığında huzursuzluk gösterir.",
  "Ekran bittikten sonra ağlama veya öfke nöbeti yaşar.",
  "Ekran süresi bittiğinde uyum sağlamakta zorlanır.",
  "Ekranı kapatınca alternatif aktivitelerle ilgilenmekte zorlanır.",
  "Çocuğum günde 1 saatten fazla ekran karşısında vakit geçirir.",
  "Ekran süresini kendi başına durdurmakta zorlanır.",
  "Yemek yerken veya uykuya geçerken ekran kullanır.",
  "Ağlama veya kriz durumlarında sakinleştirme aracı olarak ekran kullanılır.",
  "Ekran sonrası uykuya dalması zorlaşır.",
  "Ekran kullanılan günlerde çocuğum daha sinirli olur.",
  "Ekran süresi arttığında çocuğumun dikkatini toplaması zorlaşır.",
  "Ekran kullanımının ardından iletişim isteği azalır.",
  "Çocuğum fiziksel oyun yerine ekranı tercih eder.",
  "Ekran olmadığı zaman sık sık ‘sıkıldım’ der.",
  "Ekran kullanımının çocuğun sosyal etkileşimlerini azalttığını düşünüyorum.",
  "İzlediği içeriklerin yaşına uygun olmadığını fark ediyorum.",
  "İçerikleri her zaman kontrol etmekte zorlanıyorum.",
  "Çocuğum hızlı ve uyarıcı içerikleri izlemeyi tercih ediyor.",
  "Ekran süresi için tutarlı bir sınır uygulamakta zorlanıyorum.",
  "Çocuğumun ekran kullanımını yönetmek günlük yaşamda beni zorlayabiliyor."
];

// ===============================
// 2) RİSK SEVİYELERİ TANIMI
// ===============================
const riskLevels = [
  {
    min: 0,
    max: 20,
    badge: "🟢 0–20 Puan: Risksiz Bölge – Sağlıklı Kullanım",
    cssClass: "risk-green",
    description:
      "Çocuğunuzun dijital ekran kullanımına bağlı davranışsal riskleri oldukça düşüktür. Rutinleriniz, sınırlarınız ve çocuğunuzun günlük oyun–iletişim dengesi genel olarak sağlıklıdır.",
    advice: [
      "Günlük ekran süresinin 30–45 dakikayı aşmamasına devam edin.",
      "Açık hava, nesne temelli oyun ve sosyal etkileşim olan etkinlikleri desteklemeyi sürdürün.",
      "Ekranı ödül veya ceza aracı olarak kullanmaktan kaçınmaya devam edin.",
      "İzlenen içerikleri birlikte seçme ve zaman zaman birlikte izleme, ilişkiyi güçlendirecektir."
    ]
  },
  {
    min: 20,
    max: 40,
    badge: "🟡 20–40 Puan: Düşük–Orta Risk – Dikkat Edilmesi Gereken Noktalar",
    cssClass: "risk-yellow",
    description:
      "Çocuğunuz ekran süresine bağlı bazı erken davranışsal belirtiler göstermeye başlamış olabilir. Bu aşamada yapılacak düzenlemelerle riskler kolayca azaltılabilir.",
    advice: [
      "Ekran süresini her gün 10–15 dakika kademeli olarak azaltmayı deneyin.",
      "Yemek, uyku ya da ağlama kontrolü için ekran kullanmaktan kaçının.",
      "Ekran kapanmadan önce 2–3 dakikalık ‘bitiş uyarısı’ vererek geçişi yumuşatın.",
      "Ekran sonrası kitap okuma, nefes oyunu, duyusal oyun (hamur, kum vb.) gibi sakinleştirici aktiviteler ekleyin.",
      "Haftalık aile rutininize bir ‘ekransız gün’ dahil etmeyi düşünebilirsiniz."
    ]
  },
  {
    min: 40,
    max: 60,
    badge: "🟠 40–60 Puan: Orta Risk – Belirgin Davranışsal Etkiler Başlamış Olabilir",
    cssClass: "risk-orange",
    description:
      "Çocuğunuzun ekran kullanımına bağlı davranışsal ve duygusal alanlarda orta düzeyde etkilenme belirtileri görülmektedir. Bu düzeyin uzun süre devam etmesi dikkat, uyku, iletişim ve duygu düzenleme alanlarını olumsuz etkileyebilir.",
    advice: [
      "Günlük ekran süresini 30–45 dakika azaltacak yeni bir düzen oluşturun.",
      "Hızlı, parlak ve aşırı uyarıcı içerikleri (savaş oyunları, hızlı kesmeli çizgi filmler, kısa videolar vb.) tamamen kaldırın.",
      "Aktif oyun–pasif ekran dengesini yeniden kurun: her 10 dakika ekran için en az 20 dakika fiziksel veya sosyal oyun hedefleyin.",
      "Dijital yerine duyusal kutu, yapı-inşa oyunları, rol oyunları ve problem çözme oyunları gibi alternatifler sunun.",
      "Uyku saatinden en az 2 saat önce ekran kullanımını durdurun.",
      "Belirtiler 4–6 hafta içinde belirgin şekilde azalmazsa uzman (çocuk gelişimci/psikolog) görüşü almak faydalı olabilir."
    ]
  },
  {
    min: 60,
    max: 80,
    badge: "🔴 60–80 Puan: Yüksek Risk – Davranışsal Sorunlar Belirgin",
    cssClass: "risk-red",
    description:
      "Ekran kullanımının çocuğunuzun davranışlarını, duygusal tepkilerini ve günlük rutinlerini belirgin şekilde etkilediği anlaşılmaktadır. Bu düzeyde etki; sosyal becerilerden uykuya, duygu düzenlemeden dikkat süreçlerine kadar birçok alanı zorlayabilir.",
    advice: [
      "Günlük ekran süresini kararlı ve net bir şekilde 30–40 dakikalık sınıra indirin.",
      "Esnek kurallardan kaçınarak, tüm bakım verenlerin uymaya çalıştığı tutarlı ekran kuralları belirleyin.",
      "Haftada en az 1 gün tamamen ‘ekransız gün’ uygulaması başlatın.",
      "Öfke ve ağlama krizlerinde ekranı sakinleştirme aracı olarak kullanmayın; bunun yerine sarılma, konuşma, birlikte nefes egzersizi veya oyunla sakinleştirme deneyin.",
      "Yüksek uyarıcı ve saldırgan içeriklere kesin yasak getirin.",
      "Duygu düzenleme oyunları, sosyal oyunlar ve masal/kitap anlatımını günlük rutinin bir parçası haline getirin.",
      "Uyku sorunları, aşırı öfke veya sosyal geri çekilme devam ediyorsa uzman desteği almak önemlidir."
    ]
  },
  {
    min: 80,
    max: 100,
    badge: "🟥 80–100 Puan: Çok Yüksek Risk – Müdahale Gerektiriyor",
    cssClass: "risk-dark-red",
    description:
      "Ekran kullanımının çocuğunuzda yoğun davranışsal ve duygusal sorunlara yol açtığı güçlü bir risk görünmektedir. Bu puan aralığı, çocuğun günlük yaşamını ve gelişimsel alanlarını belirgin şekilde etkileyen bir duruma işaret eder.",
    advice: [
      "Ekran süresini en az 2–4 haftalık bir dönem için ciddi biçimde sınırlayın (günlük 20–30 dakika maksimum).",
      "Tüm hızlı, parlak ve gürültülü içerikleri (şiddet içeren veya aşırı uyarıcı çizgi filmler, kısa video akışları vb.) tamamen kaldırın.",
      "Her gün mümkünse: en az 1 saat açık hava, 30 dakika duyusal oyun (kum, su, hamur vb.), 30 dakika sosyal/taklit oyun ve düzenli kitap okuma–sohbet zamanı oluşturun.",
      "Öfke nöbetleri, dikkat dağınıklığı ve sosyal iletişim sorunları yoğun ise çocuk gelişimi/psikolog desteği almak güçlü şekilde önerilir.",
      "Aile içinde kısa süreli bir ‘ekran detoks programı’ planlayarak tüm aile bireylerinin ekran alışkanlıklarını birlikte düzenlemesi faydalı olabilir."
    ]
  }
];

// ===============================
// 3) ARAYÜZ OLUŞTURMA
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const questionsContainer = document.getElementById("questionsContainer");
  const surveyForm = document.getElementById("surveyForm");
  const errorMessage = document.getElementById("errorMessage");
  const resultSection = document.getElementById("resultSection");
  const totalScoreEl = document.getElementById("totalScore");
  const maxScoreEl = document.getElementById("maxScore");
  const riskBadgeEl = document.getElementById("riskBadge");
  const riskDescriptionEl = document.getElementById("riskDescription");
  const riskAdviceListEl = document.getElementById("riskAdviceList");
  const resetBtn = document.getElementById("resetBtn");

  maxScoreEl.textContent = "/ 100";

  // Soruları ekle
  questions.forEach((qText, index) => {
    const qIndex = index + 1;

    const questionDiv = document.createElement("div");
    questionDiv.className = "question-item";
    questionDiv.dataset.questionIndex = String(qIndex);

    const title = document.createElement("p");
    title.className = "question-title";
    title.textContent = qIndex + ". " + qText;

    const optionsRow = document.createElement("div");
    optionsRow.className = "options-row";

    // 1–5 arasında seçenek oluştur
    for (let value = 1; value <= 5; value++) {
      const label = document.createElement("label");
      label.className = "option-label";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = "q" + qIndex;
      input.value = String(value);

      const spanValue = document.createElement("span");
      spanValue.className = "value";
      spanValue.textContent = value;

      label.appendChild(input);
      label.appendChild(spanValue);

      // Tıklandığında görsel seçim efekti
      label.addEventListener("click", () => {
        const siblings = optionsRow.querySelectorAll(".option-label");
        siblings.forEach((s) => s.classList.remove("selected"));
        label.classList.add("selected");
      });

      optionsRow.appendChild(label);
    }

    questionDiv.appendChild(title);
    questionDiv.appendChild(optionsRow);
    questionsContainer.appendChild(questionDiv);
  });

  // ===============================
  // 4) FORM GÖNDERME – HESAPLAMA
  // ===============================
  surveyForm.addEventListener("submit", (e) => {
    e.preventDefault();
    errorMessage.hidden = true;

    let totalScore = 0;
    let answeredCount = 0;

    questions.forEach((_, index) => {
      const qIndex = index + 1;
      const selected = document.querySelector(
        `input[name="q${qIndex}"]:checked`
      );
      if (selected) {
        totalScore += Number(selected.value);
        answeredCount++;
      }
    });

    if (answeredCount !== questions.length) {
      errorMessage.hidden = false;
      resultSection.hidden = true;
      return;
    }

    // Risk aralığını bul
    const risk = riskLevels.find(
      (level) => totalScore >= level.min && totalScore <= level.max
    );

    // Sonuç gösterimi
    totalScoreEl.textContent = String(totalScore);

    // Badge stillerini resetle
    riskBadgeEl.className = "risk-badge";
    if (risk) {
      riskBadgeEl.classList.add(risk.cssClass);
      riskBadgeEl.textContent = risk.badge;
      riskDescriptionEl.textContent = risk.description;

      // Tavsiye listesini doldur
      riskAdviceListEl.innerHTML = "";
      risk.advice.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        riskAdviceListEl.appendChild(li);
      });
    } else {
      riskBadgeEl.textContent = "Puan aralığı bulunamadı.";
      riskDescriptionEl.textContent =
        "Teknik bir sorun oluştu. Lütfen tekrar deneyiniz.";
      riskAdviceListEl.innerHTML = "";
    }

    resultSection.hidden = false;

    // Sonuca scroll
    resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  // ===============================
  // 5) SIFIRLAMA BUTONU
  // ===============================
  resetBtn.addEventListener("click", () => {
    // Tüm seçimleri temizle
    const inputs = surveyForm.querySelectorAll('input[type="radio"]');
    inputs.forEach((input) => {
      input.checked = false;
    });

    const labels = surveyForm.querySelectorAll(".option-label");
    labels.forEach((label) => label.classList.remove("selected"));

    errorMessage.hidden = true;
    resultSection.hidden = true;
    totalScoreEl.textContent = "0";
  });

  
});
