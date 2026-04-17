const APP_CONFIG = {
  accessPassword: "190425",
  coupleNames: "Duygu ve Saffet",
  heroMessage: "Birlikte geçen bir yıl, ömrümün en güzel hikayesine dönüştü.",
  playlistUrl: "https://open.spotify.com/intl-tr/track/3R2EtXboGshTXOnHHvKaRw?si=39cefeaf66404d96",
  unlockDate: (() => {
    const now = new Date();
    const thisYearUnlock = new Date(now.getFullYear(), 3, 19, 0, 0, 0, 0);
    const target = now <= thisYearUnlock
      ? thisYearUnlock
      : new Date(now.getFullYear() + 1, 3, 19, 0, 0, 0, 0);
    return target.toISOString();
  })(),
  signatureName: "Saffet Hakan",
  letterVoiceSrc: "media/mektup_ses.mp4",
  letterText: `Canım Sevgilim Duygu,

Bugün bizim için sadece bir tarih değil. Bugün, kalbimde kocaman bir yer kaplayan, bana sevgiyi, özlemeyi, değer vermeyi ve birini gerçekten hayatının parçası gibi hissetmeyi öğreten çok özel bir hikâyenin birinci yılı. Bir yıl… Belki dışarıdan bakınca sadece on iki ay gibi görünebilir ama benim için içinde sayısız duygu, anı, gülüş, özlem, heyecan ve sevgi taşıyan koskoca bir ömür gibi.

Seninle geçen bu bir yılın her anını düşündüğümde içimde tarifsiz bir sıcaklık oluşuyor. Hayatıma girdiğin günden beri birçok şey değişti. Bazı günler daha güzel oldu, bazı anlar daha anlamlı hale geldi. En sıradan günler bile senin varlığını hissettiğimde farklılaştı. Çünkü insan gerçekten sevdiği biri hayatındayken zamanı başka yaşıyor. Gün aynı gün, gökyüzü aynı gökyüzü belki ama kalbin başka atıyor. İşte sen benim hayatımda tam olarak böyle bir etki bıraktın.

Seninle ilgili en güzel şeylerden biri, sadece mutlu anlarımda değil, en normal günlerimde bile aklımda olman. Bazen hiçbir sebep yokken seni düşünüyorum. Bir şarkı duyuyorum, aklıma sen geliyorsun. Güzel bir manzara görüyorum, “bunu Duygu da görseydi” diyorum. Gün içinde küçücük bir şey oluyor ve ilk anlatmak istediğim kişi sen oluyorsun. Çünkü sen benim için sadece sevdiğim biri değil, aynı zamanda içimi açabildiğim, heyecanımı paylaşabildiğim, özlediğimde içimin burkulduğu, mutlu olduğumda bunu en çok hak ettiğini düşündüğüm kişisin.

Birlikte geçirdiğimiz zamanları düşündükçe, aslında sevginin büyük laflardan çok küçük detaylarda saklı olduğunu daha iyi anlıyorum. Bir bakışta, bir gülüşte, bir mesajda, bir ses tonunda, bazen birlikte susabilmekte bile ne kadar büyük duygular olduğunu seninle öğrendim. Belki her anımız kusursuz değildi, belki her gün masal gibi geçmedi ama zaten gerçek sevgi biraz da burada başlıyor bence. İki insanın birbirini her haliyle sevebilmesi, özleyebilmesi, önemsemesi ve her şeye rağmen kalbinin yönünü yine birbirine çevirmesi… Benim kalbim bu bir yıl boyunca hep sana döndü.

Senin yanında kendimi bazen çok huzurlu, bazen çok heyecanlı, bazen de çocuk gibi mutlu hissediyorum. Bu çok özel bir şey. Çünkü insan herkesin yanında kendisi gibi olamıyor. Ama ben senin yanında hem içten olabiliyorum hem duygularımı saklama ihtiyacı hissetmiyorum. Seninle konuşurken, gülerken, bir şey paylaşırken içimde “iyi ki” dediğim çok an oldu. Hatta bazen seni düşünürken bile gülümsediğimi fark ediyorum. Çünkü bazı insanlar sadece varlıklarıyla bile insanın ruhuna iyi geliyor. Sen bana tam olarak böyle geliyorsun.

Bir yıl boyunca seninle ilgili biriktirdiğim o kadar çok duygu var ki hangisini kelimelere döksem eksik kalacak gibi hissediyorum. Seni özlemek mesela… Özlemek bile sende başka bir şey. Bazen sadece seni görmek istemek değil, yanında olmak istemek oluyor. Sesini duymak, gözlerine bakmak, gülüşünü görmek, en basit anı bile seninle paylaşmak istemek oluyor. Çünkü sen sıradan biri değilsin benim için. Sen, yokluğunda eksikliği hissedilen, varlığında ise içimi tamamlayan birisin.

Bazen kendi kendime düşünüyorum da, bir insan başka bir insanın hayatında ne kadar güzel bir iz bırakabilir diye… Sonra aklıma sen geliyorsun. Çünkü sen bende güzel bir iz değil, kocaman bir yer bıraktın. Belki farkında bile olmadan bazı yaralarıma iyi geldin, bazı yorgunluklarımı hafiflettin, bazı karışıklıklarımı susturdun. Varlığınla bana iyi geldin. Bazen sadece konuşmanla, bazen sadece dinlemenle, bazen de hiçbir şey yapmadan sadece “orada olmanla.”

Seninle geçen bu bir yılda en çok hissettiğim şeylerden biri şu oldu: Sevgi gerçekten insanı değiştiriyor. Daha ince düşünen, daha çok özleyen, daha çok kıymet bilen biri oldum. Çünkü senin kıymetini hissettim. Herkesin hayatına böyle biri çıkmıyor. Kalbine dokunan, seni heyecanlandıran, seni güldüren, seni düşündüren ve seni olduğun yerden daha güzel bir hale getiren biri… Ben böyle birini bulduğum için kendimi çok şanslı hissediyorum. O kişi sensin Duygu.

Belki sana bunu her zaman tam anlatamıyorum. Bazen duygular insanın içinde o kadar büyüyor ki kelimeler geride kalıyor. Ama şunu bilmeni isterim: Bu bir yıl benim için çok kıymetliydi. Seninle geçen zaman, benim hayatımın en güzel parçalarından biri oldu. Seninle kurduğumuz her cümle, paylaştığımız her an, birlikte güldüğümüz her dakika, hatta seni özleyerek geçirdiğim her gün bile benim için değerli. Çünkü hepsinin merkezinde sen varsın.

Senin gülüşünün içimde bıraktığı etkiyi, sesinin bana verdiği huzuru, bazen küçücük bir cümlenin bile bütün günümü güzelleştirmesini tarif etmek çok zor. Ama gerçek. Ve çok derin. Benim iç dünyamda çok özel bir yerdesin. Öyle geçici, öyle yüzeysel, öyle sıradan bir yer değil. Kalbimin en içinden gelen, en samimi, en saf hislerle sevdiğim bir yerdesin.

Bir yıl boyunca öğrendiğim en güzel şeylerden biri de şu: İnsan sevdiği kişiye sadece bakmaz, onu hisseder. Ben seni bazen uzakta olsan bile hissediyorum. Bazen seni düşünmek bile yetiyor mutlu olmama. Çünkü senin benim hayatımda var olman, başlı başına güzel bir şey. Belki her şeyi mükemmel yapamayız, belki hayat her zaman kolay olmaz ama sevginin gerçekliği bazen tam da bütün bunların içinde daha çok belli olur. Ve ben seni gerçekten, içten, derinden seviyorum.

Bugün, birinci yılımızda sana sadece seni sevdiğimi söylemek istemiyorum. Aynı zamanda bana hissettirdiğin tüm güzellikler için teşekkür etmek istiyorum. Hayatıma kattığın anlam için, kalbimde oluşturduğun o sıcacık yer için, beni bazen bir cümleyle bile mutlu edebildiğin için, varlığınla birçok şeyi daha güzel hale getirdiğin için… teşekkür ederim. İyi ki hayatıma girdin. İyi ki yollarımız kesişti. İyi ki bu bir yılı seninle yaşadım.

Ve şunu da bilmeni isterim… Benim için bir yıl sadece geride kalan bir zaman değil, aynı zamanda daha nice güzel anının başlangıcı gibi. Seninle daha çok gülmek, daha çok anı biriktirmek, daha çok şey paylaşmak, seni daha çok tanımak, daha çok sevmek istiyorum. Çünkü seninle ilgili içimde olan şey geçici bir heves değil; derin, sakin, gerçek ve her geçen gün biraz daha büyüyen bir duygu.

Bazen insan birine bakınca “işte” der ya… İçinde tam açıklayamadığı ama çok güçlü hissettiği bir şey olur. Ben seni düşündüğümde bunu hissediyorum. Kalbimde sana karşı taşıdığım şey çok özel. O yüzden bugün bu mektubu yazarken sadece bir yıl dönümünü kutlamıyorum; aynı zamanda seni sevdiğim için ne kadar mutlu olduğumu da kutluyorum.

Sevgilim,
Geçen bu bir yıl için, kalbime dokunduğun her an için, bana yaşattığın bütün güzel hisler için sana teşekkür ederim. Sen benim için çok özelsin. Gülüşünle, kalbinle, varlığınla, bende bıraktığın bütün güzel izlerle… çok özelsin. İyi ki varsın. İyi ki benim hayatımdasın. İyi ki bizim bir hikâyemiz var.

Birinci yılımız kutlu olsun aşkım.
Dilerim bu sadece başlangıç olur ve birlikte daha nice güzel senelerimizin mektuplarını yazarız.
Seni tarif edemeyeceğim kadar çok,
anlatamayacağım kadar derin,
ve her geçen gün biraz daha fazla seviyorum.

İyi ki sen.
İyi ki biz.
İyi ki bir yıldır kalbimin en güzel yerindesin.

Seni çok seviyorum.`,
  letterWordTimeline: [],
};

const TIMELINE_ITEMS = [
  {
    date: "19 Nisan 2025",
    title: "Hikayemizin İlk Sayfası",
    text: "Her şey bugün başladı. Zamanın yavaşladığı, kalbimin hızlandığı gün.",
    image: "media/timeline-1.jpeg",
    location: "Seka Park",
    mapX: 24,
    mapY: 32,
    latitude: 40.76004002191814,
    longitude: 29.90521508071168,
  },
  {
    date: "3 Mayıs 2025",
    title: "Bir Lokma Bin His",
    text: "O gün masada kebap vardı, ama benim aklımda yalnızca senin gülüşün kaldı.",
    image: "media/timeline-2.jpeg",
    location: "Kebapçı Mehmet Usta",
    mapX: 36,
    mapY: 40,
    latitude: 40.757792142649336,
    longitude: 29.83597689420457,
  },
  {
    date: "24 Mayıs 2025",
    title: "Yanımda Sen",
    text: "Aynı masada oturduk, ama ben o gün bütün huzurumu sende buldum. Seninle sıradan bir an bile kalbimde en güzel hatıraya dönüşüyor.",
    image: "media/timeline-3.jpeg",
    imagePosition: "72% center",
    location: "Seka Park",
    mapX: 60,
    mapY: 38,
    latitude: 40.762862252182956,
    longitude: 29.900007309661763,
  },
  {
    date: "20 Haziran 2025",
    title: "Gidişin Kaldı İçimde",
    text: "O gün seni otogardan uğurlarken arkandan bakmak zordu. Sen gittikten sonra daha önce bu kadar içimin buruk kaldığını hissetmemiştim.",
    image: "media/timeline-4.jpeg",
    location: "Otogar",
    mapX: 45,
    mapY: 52,
    latitude: 40.77629606148337,
    longitude: 29.974211380712525,
  },
  {
    date: "21 Eylül 2025",
    title: "Hasret Biten Gün",
    text: "Uzun bir aradan sonra seni yeniden görmek, kalbime iyi gelen en güzel şeydi. Sanki zaman durmuş da, sen gelince her şey yeniden güzelleşmiş gibiydi.",
    image: "media/timeline-5.jpeg",
    location: "Seka Park",
    mapX: 68,
    mapY: 44,
    latitude: 40.75962596033966,
    longitude: 29.899420105781843,
  },
  {
    date: "5 Ekim 2025",
    title: "Yan Yana, Huzurla",
    text: "Zaman tünelinde bu fotoğrafa da yer vermek istedim. Barındığın yere ait bir fotoğraf da bu alana girmeyi hak etti bence hdfsfhshd",
    image: "media/timeline-6.jpeg",
    imagePosition: "35% center",
    location: "Şerife Gelin KYK Yurdu Önü",
    mapX: 42,
    mapY: 36,
    latitude: 40.82204827012716,
    longitude: 29.937286523043674,
  },
  {
    date: "22 Kasım 2025",
    title: "En Güzel Detay Sen",
    text: "O gün birlikte kebap yemeye gitmiştik; masada ne varsa güzeldi ama benim en sevdiğim detay yine sendin. Elindeki küçücük turp bile, seninle olunca kalbimde tatlı bir hatıraya dönüştü.",
    image: "media/timeline-7.jpeg",
    location: "MehmET kebap ciğer",
    mapX: 47,
    mapY: 30,
    latitude: 40.763877128532854,
    longitude: 29.965112596054432,
  },
  {
    date: "22 Kasım 2025",
    title: "Benim Fındığım",
    text: "Sütlüce'de fındıklı soğuk kadayıf yedik ama benim fındığımın yanında bu fındık cırt. O tatlının tadı geçti, ama senin tadın tatlanarak devam etti.",
    image: "media/timeline-8.jpeg",
    location: "Sütlüce",
    mapX: 33,
    mapY: 47,
    latitude: 40.77412882636713,
    longitude: 29.98061058530642,
  },
  {
    date: "28 Kasım 2025",
    title: "Her Halin Ayrı Güzel",
    text: "O gün farklı bir şal bağlama modeli denedin, ben ise sana bir kez daha hayran kaldım. Sonra Cajun'da burger yedik ama aklımda en çok kalan yine senin o güzel halindi. İstediğin modeli dene ben her halini çok beğeniyorum 🤍",
    image: "media/timeline-9.jpeg",
    location: "Cajun Corner",
    latitude: 40.82393248534611,
    longitude: 29.927149416902836,
  },
  {
    date: "28 Kasım 2025",
    title: "En Sevdiğim Biz",
    text: "Bu fotoğrafa her baktığımda, seni sevmenin içimde bıraktığı o güzel huzuru yeniden hissediyorum. Belki bir kareye sığdık ama benim kalbimde kocaman bir biz olduk.",
    image: "media/timeline-10.jpeg",
    location: "Şerife Gelin KYK Yurdu Önü",
    latitude: 40.82206450807992,
    longitude: 29.93727579420804,
  },
  {
    date: "19 Aralık 2025",
    title: "Çiçeğim ve Çiçeği",
    text: "O gün elinde çiçek vardı, benim içimde ise sana karşı daha da büyüyen bir sevgi. Cuma çıkışı başımı vurduğumda o küçücük dokunuşun acısını hemen geçirmişti.",
    image: "media/timeline-11.jpeg",
    location: "Seka Park",
    latitude: 40.75909351100365,
    longitude: 29.909724617376966,
  },
  {
    date: "26 Aralık 2025",
    title: "Kağıttan Tavşan Kalpten Gülüş",
    text: "O gün birlikte origami yaparken ne kadar eğlendiğim aklıma geldikçe yüzümde istemsiz bir gülümseme oluyor. Kağıttan küçük şeyler yapıyorduk belki ama benim için asıl güzel olan, o anı seninle paylaşmaktı. Senin yanında en basit şeyler bile çok daha keyifli, çok daha özel bir hale geliyor.",
    image: "media/timeline-12.jpeg",
    location: "Arabica Coffee House",
    latitude: 40.8232083860015,
    longitude: 29.93039281140008,
  },
  {
    date: "14 Şubat 2026",
    title: "Ellerimde Çiçekler",
    text: "Ara tatil bitişi dönüşünü karşılamak için heyecanlı heyecanlı yanına gelirken çekildiğim naçizane bir fotoğraf. Zaman tünelinin bu kısmında kendime yer vereyim dedim ;)",
    image: "media/timeline-14.jpeg",
    location: "Simge Çiçekçilik",
    latitude: 40.76581653000908,
    longitude: 29.965748651876297,
  },
  {
    date: "14 Şubat 2026",
    title: "Duygu İnceliyor",
    text: "Bi anda TCG Gayret'i gezme planı yaptık. Önce denizaltına girdik, içerisi çok dardı ben ilerleyemedim. Duygu beni bıraktı orada yalnız kaldım :( Üzüldüm.. hadnfshfdaf şaka şaka. Bana anlatmak için gitmişti. Sonra çıktı biraz da gemiyi gezdik.",
    image: "media/timeline-16.jpeg",
    location: "TCG Gayret Gemi Müzesi",
    latitude: 40.76117665875379,
    longitude: 29.917139211396723,
  },
  {
    date: "17 Şubat 2026",
    title: "Müthiş Konforlu Uyku",
    text: "İstanbul'a gidişimizde oldukça ilginç olan bu uyuma pozisyonunla kameralara yakalandın. Omzumuz boş yere mi duruyor yasla kafayı bak keyfine ehehe.",
    image: "media/timeline-19.jpeg",
    location: "İzmit-İstanbul Yolu",
    latitude: 40.7617570050716,
    longitude: 29.86641340952525,
  },
  {
    date: "17 Şubat 2026",
    title: "İstanbul Gezisi Başlıyor",
    text: "Nihayet İstanbul'a vardıktan sonra kahvaltımızı yaptık. Heyecanlıydım bi yandan çünkü pek uzun olmayan vakitte planladığım şeyleri yapmak istiyordum. Merdivenden inerken de seni çekivermişim.",
    image: "media/timeline-20.jpeg",
    location: "Fethipaşa Sosyal Tesisi",
    latitude: 41.033576197388854,
    longitude: 29.025888638397387,
  },
  {
    date: "17 Şubat 2026",
    title: "Dijital bi Deneyim",
    text: "Sağdan sola aşağıdan yukarıya acayip bir animasyonun içinde bulduk kendimizi. Van Gogh yapmış sanatını. Ama benim ilgilendiğim sanat hemen yanıbaşımda.",
    image: "media/timeline-23.jpeg",
    location: "Dijital Deneyim Merkezi",
    latitude: 41.05811142196264,
    longitude: 28.94952145374112,
  },
  {
    date: "17 Şubat 2026",
    title: "Gururlan Burası Beşiktaş!",
    text: "Tuttuğum takımın stadına sevdiğim kızla gitmek.. Maçını izlemeye gitmeyi de iple çekiyorum. İnşallah en yakın zamanda gidebiliriz.",
    image: "media/timeline-25.jpeg",
    location: "Tüpraş Stadyumu",
    latitude: 41.039124256668,
    longitude: 28.99453858257576,
  },
  {
    date: "17 Şubat 2026",
    title: "Son Demler",
    text: "Gün sonuna gelmiştik. Dolu dolu keyifli bir gün geçirmiştik. En son da bi tatlı yiyelim dedik. Trene az bi vakit kalmıştı. Biraz hızlandık ve yetiştik trene. Görev başarıyla tamamlandı!",
    image: "media/timeline-26.jpeg",
    location: "Kurukahveci Hafız Ahmet",
    latitude: 41.024332218103844,
    longitude: 29.014037820621517,
  },
  {
    date: "23 Şubat 2026",
    title: "Üşüdüğüm Gün",
    text: "Üşümüştüm ve seni buna inandıramamıştım. İçeri geçmek istedim geçmedin fısrnfısrngfı. Dışımız üşüse de içimizi ısıtanımız oldukça soğuk vız gelir tırıs gider.",
    image: "media/timeline-27.jpeg",
    location: "Boşnak Börekçi",
    latitude: 40.822834181537,
    longitude: 29.932910151879405,
  },
  {
    date: "28 Şubat 2026",
    title: "Hodri Meydan",
    text: "Birkaç önceki paylaştığım anımızda ettiğim duanın kabul edildiğinin göstergesi. İnanılmaz mutlu olmuştum. Atkı da ayrıca çok yakışmış sana. Fakat siyah beyazın daha çok yakışacağına eminim :)",
    image: "media/timeline-28.jpeg",
    location: "Kocaeli Stadyumu",
    latitude: 40.77415594290467,
    longitude: 30.017797396054988,
  },
  {
    date: "4 Mart 2026",
    title: "Lokma Lokma Lokma Yemek",
    text: "Kendi hür iradenle \"Saffet, canım bunu çekti alalım mı?\" dediğin bir şey olduğu için buna anı tünelimizde yer vermek istedim hfsıfhsdfbds. Tarihe not düşülsün : DUYGUNUN CANI Bİ ŞEY ÇEKTİ!!!",
    image: "media/timeline-31.jpeg",
    location: "İzmit Millet Bahçesi",
    latitude: 40.76164133966338,
    longitude: 29.936449463332735,
  },
  {
    date: "6 Mart 2026",
    title: "Okul Yemekhanesinde İftar",
    text: "Yine okulda iftar açtığımız günlerden biri. Yüzüğünü göstermiştin. Yemeği çok beğenmiş görünüyorsun ayrıca hfdskfsbdıfb.",
    image: "media/timeline-32.jpeg",
    location: "Okul Yemekhanesi",
    latitude: 40.82147043347672,
    longitude: 29.927724353728745,
  },
  {
    date: "25 Mart 2026",
    title: "Etliekmek Testi",
    text: "Sen etliekmek yemek, sonra da beni etkilemek.",
    image: "media/timeline-33.jpeg",
    location: "Yenicuma Çay Bahçesi",
    latitude: 40.76347469911259,
    longitude: 29.93129328256129,
  },
];

const GALLERY_ITEMS = [
  {
    caption: "Anı Kare - 10",
    image: "media/timeline-10.jpeg",
    large: true,
  },
  {
    caption: "Anı Kare - 15",
    image: "media/timeline-15.jpeg",
  },
  {
    caption: "Anı Kare - 17",
    image: "media/timeline-17.jpeg",
  },
  {
    caption: "Anı Kare - 18",
    image: "media/timeline-18.jpeg",
  },
  {
    caption: "Anı Kare - 22",
    image: "media/timeline-22.jpeg",
    large: true,
  },
  {
    caption: "Anı Kare - 23",
    image: "media/timeline-23.jpeg",
  },
  {
    caption: "Anı Kare - 24",
    image: "media/timeline-24.jpeg",
  },
  {
    caption: "Anı Kare - 25",
    image: "media/timeline-25.jpeg",
  },
  {
    caption: "Anı Kare - 27",
    image: "media/timeline-27.jpeg",
  },
  {
    caption: "Anı Kare - 28",
    image: "media/timeline-28.jpeg",
  },
];

const VIDEO_ITEMS = [
  {
    title: "Van Gogh Kaydırak",
    src: "media/kaydırak.mp4",
  },
  {
    title: "Mini Vlog",
    src: "media/vlog.mp4",
  },
  {
    title: "Salıncak Keyfi",
    src: "media/salıncak.mp4",
  },
  {
    title: "Origami Günü",
    src: "media/origami.mp4",
  },
  {
    title: "Çikolatalı Lokma + Spanish Latte",
    src: "media/lokma.mp4",
  },
  {
    title: "Win11 Kurulum",
    src: "media/win11kurulum.mp4",
  },
  {
    title: "Kafayı Vurma Hikayesi",
    src: "media/kafayivurmahikayesi.mp4",
  },
  {
    title: "Etliekmek Tadım",
    src: "media/etliekmek.mp4",
  },
];

const ACCESS_STORAGE_KEY = "duygu_ani_unlocked";
const THEME_STORAGE_KEY = "duygu_theme";

function isNightTheme() {
  return localStorage.getItem(THEME_STORAGE_KEY) === "night";
}

function applyTheme(theme) {
  if (theme === "night") {
    document.body.classList.add("night-theme");
    localStorage.setItem(THEME_STORAGE_KEY, "night");
    return;
  }

  document.body.classList.remove("night-theme");
  localStorage.setItem(THEME_STORAGE_KEY, "day");
}

function initializeThemeToggle() {
  applyTheme(isNightTheme() ? "night" : "day");

  document.querySelectorAll(".top-nav").forEach((nav) => {
    if (nav.querySelector(".theme-toggle")) {
      return;
    }

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "btn theme-toggle";
    toggle.textContent = document.body.classList.contains("night-theme") ? "Gündüz" : "Gece";
    toggle.addEventListener("click", () => {
      const nextTheme = document.body.classList.contains("night-theme") ? "day" : "night";
      applyTheme(nextTheme);
      toggle.textContent = nextTheme === "night" ? "Gündüz" : "Gece";
    });
    nav.appendChild(toggle);
  });
}

function initializeMobileNavMenu() {
  if (!document.body.classList.contains("sub-page")) {
    return;
  }

  const isMobile = () => window.matchMedia("(max-width: 800px)").matches;

  document.querySelectorAll(".top-nav").forEach((nav) => {
    if (nav.querySelector(".nav-menu-toggle")) {
      return;
    }

    const menuToggle = document.createElement("button");
    menuToggle.type = "button";
    menuToggle.className = "btn nav-menu-toggle";
    menuToggle.setAttribute("aria-label", "Menüyü aç veya kapat");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.innerHTML = "<span></span><span></span><span></span>";
    nav.prepend(menuToggle);

    function closeMenu() {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }

    function toggleMenu() {
      const nextOpen = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", nextOpen);
      menuToggle.setAttribute("aria-expanded", nextOpen ? "true" : "false");
    }

    menuToggle.addEventListener("click", () => {
      if (!isMobile()) {
        return;
      }
      toggleMenu();
    });

    nav.querySelectorAll("a.btn, .theme-toggle").forEach((item) => {
      item.addEventListener("click", () => {
        if (isMobile()) {
          closeMenu();
        }
      });
    });

    document.addEventListener("click", (event) => {
      if (!isMobile() || !nav.classList.contains("is-open")) {
        return;
      }

      if (!nav.contains(event.target)) {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (!isMobile()) {
        closeMenu();
      }
    });
  });
}

function showIntroCinematic(onDone) {
  const introKey = `duygu_intro_seen_${window.location.pathname}`;
  if (sessionStorage.getItem(introKey) === "1") {
    onDone();
    return;
  }

  const overlay = document.createElement("div");
  overlay.className = "intro-cinematic";
  overlay.innerHTML = `
    <div class="intro-box">
      <p>Hoş Geldin</p>
      <h2>${APP_CONFIG.coupleNames}</h2>
    </div>
  `;

  document.body.appendChild(overlay);
  sessionStorage.setItem(introKey, "1");

  setTimeout(() => {
    overlay.remove();
    onDone();
  }, 2300);
}

function revealAll() {
  document.querySelectorAll(".reveal").forEach((element) => {
    element.classList.add("visible");
  });
}

function initializeAccessGate() {
  const gate = document.getElementById("accessGate");
  const appRoot = document.getElementById("appRoot");
  const form = document.getElementById("accessForm");
  const input = document.getElementById("accessInput");
  const error = document.getElementById("accessError");

  if (!gate || !appRoot || !form || !input || !error) {
    return;
  }

  function unlock(skipIntro = false) {
    sessionStorage.setItem(ACCESS_STORAGE_KEY, "1");
    gate.classList.add("is-hidden");
    gate.setAttribute("aria-hidden", "true");
    appRoot.classList.remove("is-hidden");
    appRoot.setAttribute("aria-hidden", "false");
    document.body.classList.remove("locked");
    document.dispatchEvent(new Event("duygu:unlocked"));

    if (skipIntro) {
      revealAll();
      return;
    }

    showIntroCinematic(() => {
      revealAll();
    });
  }

  const isUnlocked = sessionStorage.getItem(ACCESS_STORAGE_KEY) === "1";
  if (isUnlocked) {
    unlock(true);
    return;
  }

  document.body.classList.add("locked");
  gate.classList.remove("is-hidden");
  appRoot.classList.add("is-hidden");
  appRoot.setAttribute("aria-hidden", "true");
  input.focus();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = input.value.trim();
    if (value === APP_CONFIG.accessPassword) {
      unlock();
      return;
    }

    error.classList.remove("hidden");
    input.select();
  });

  input.addEventListener("input", () => {
    error.classList.add("hidden");
  });
}

function setStaticContent() {
  const coupleNames = document.getElementById("coupleNames");
  const heroMessage = document.getElementById("heroMessage");
  const playlistLink = document.getElementById("playlistLink");
  const signatureName = document.getElementById("signatureName");
  const letterText = document.getElementById("letterText");

  if (coupleNames) {
    coupleNames.textContent = APP_CONFIG.coupleNames;
  }

  if (heroMessage) {
    heroMessage.textContent = APP_CONFIG.heroMessage;
  }

  if (playlistLink) {
    playlistLink.href = APP_CONFIG.playlistUrl;
  }

  if (signatureName) {
    signatureName.textContent = APP_CONFIG.signatureName;
  }

  if (letterText) {
    letterText.textContent = APP_CONFIG.letterText;
  }
}

function renderTimeline() {
  const root = document.getElementById("timelineList");
  if (!root) {
    return;
  }

  root.innerHTML = TIMELINE_ITEMS.map(
    (item, index) => `
      <article class="timeline-item reveal ${index % 2 === 0 ? "story-left" : "story-right"}" style="transition-delay:${Math.min(index * 70, 420)}ms;">
        <div class="timeline-body">
          <img src="${item.image}" alt="${item.title}" loading="lazy" style="object-position: ${item.imagePosition || "center"};" />
          <div class="timeline-content">
            <h3>${item.title}</h3>
            <p>${item.text}</p>
            <span class="date-chip">${item.date}</span>
            ${item.location ? `<span class="date-chip" style="margin-left:0.5rem;">${item.location}</span>` : ""}
          </div>
        </div>
      </article>
    `
  ).join("");
}

function renderGallery() {
  const root = document.getElementById("galleryGrid");
  if (!root) {
    return;
  }

  root.innerHTML = GALLERY_ITEMS.map(
    (item, index) => `
      <figure class="gallery-item ${item.large ? "large" : ""}" tabindex="0" data-image="${item.image}" data-order="${index + 1}" aria-label="Fotograf ${index + 1}">
        <img src="${item.image}" alt="Fotograf ${index + 1}" loading="lazy" />
      </figure>
    `
  ).join("");
}

function emitHearts(container, event, count = 9) {
  if (!container) {
    return;
  }

  const rect = container.getBoundingClientRect();
  const originX = event?.clientX ?? (rect.left + rect.width / 2);
  const originY = event?.clientY ?? (rect.top + rect.height / 2);
  const baseX = originX - rect.left;
  const baseY = originY - rect.top;

  for (let i = 0; i < count; i += 1) {
    const particle = document.createElement("span");
    particle.className = "gallery-heart";
      particle.textContent = String.fromCharCode(9829);

    const angle = (Math.PI * 2 * i) / count + Math.random() * 0.4;
    const distance = 28 + Math.random() * 74;
    const driftX = Math.cos(angle) * distance;
    const driftY = Math.sin(angle) * distance - (24 + Math.random() * 28);

    particle.style.left = `${baseX}px`;
    particle.style.top = `${baseY}px`;
    particle.style.setProperty("--dx", `${driftX.toFixed(1)}px`);
    particle.style.setProperty("--dy", `${driftY.toFixed(1)}px`);
    particle.style.animationDelay = `${(Math.random() * 90).toFixed(0)}ms`;

    container.appendChild(particle);
    setTimeout(() => particle.remove(), 1000);
  }
}

function initializeGalleryWow() {
  const cards = document.querySelectorAll(".gallery-item");
  cards.forEach((card, index) => {
    card.style.animationDelay = `${Math.min(index * 85, 900)}ms`;
    card.classList.add("gallery-entrance");

    const burst = (event) => emitHearts(card, event, 8);
    card.addEventListener("click", burst);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        burst(event);
      }
    });
  });
}

function initializeGalleryTilt() {
  document.querySelectorAll(".gallery-item").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const cx = event.clientX - rect.left;
      const cy = event.clientY - rect.top;
      const rx = ((cy / rect.height) - 0.5) * -8;
      const ry = ((cx / rect.width) - 0.5) * 12;
      card.classList.add("tilt-active");
      card.style.transform = `perspective(700px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
    });

    card.addEventListener("pointerleave", () => {
      card.classList.remove("tilt-active");
      card.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg)";
    });
  });
}

function renderVideos() {
  const root = document.getElementById("videoGrid");
  if (!root) {
    return;
  }

  root.innerHTML = VIDEO_ITEMS.map(
    (item, index) => `
      <article class="video-card">
        <button class="video-open" type="button" data-video-index="${index}">
          <video muted preload="metadata" playsinline>
            <source src="${item.src}" type="video/mp4" />
          </video>
        </button>
        <p>${item.title}</p>
      </article>
    `
  ).join("");
}

function initializeVideoCardPreviews() {
  const grid = document.getElementById("videoGrid");
  if (!grid) {
    return;
  }

  const videos = grid.querySelectorAll("video");
  videos.forEach((video) => {
    video.muted = true;
    video.preload = "metadata";
    video.playsInline = true;
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    let posterSet = false;

    function setPosterFromFrame() {
      if (posterSet || !video.videoWidth || !video.videoHeight) {
        return;
      }

      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        return;
      }

      try {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL("image/jpeg", 0.86);
        video.setAttribute("poster", dataUrl);
        posterSet = true;
        video.classList.remove("video-preview-fallback");
      } catch {
        // Canvas capture can fail on unsupported codecs. Keep fallback style.
      }
    }

    video.addEventListener("loadedmetadata", () => {
      const duration = Number.isFinite(video.duration) ? video.duration : 0;
      const seekTarget = duration > 1 ? Math.min(0.45, duration * 0.14) : 0.1;

      try {
        video.currentTime = seekTarget;
      } catch {
        // Some browsers may block seeking before enough data is available.
      }
    }, { once: true });

    video.addEventListener("seeked", () => {
      setPosterFromFrame();
      video.pause();
    }, { once: true });

    // Keep a non-black fallback until the poster is extracted.
    video.classList.add("video-preview-fallback");
    video.load();
  });
}

function initializeVideoModal() {
  const videoGrid = document.getElementById("videoGrid");
  if (!videoGrid) {
    return;
  }

  let currentIndex = 0;
  const modal = document.createElement("div");
  modal.className = "video-modal hidden";
  modal.innerHTML = `
    <div class="video-modal-content">
      <video id="videoModalPlayer" controls playsinline></video>
      <div class="video-modal-controls">
        <button id="videoPrev" class="btn btn-ghost" type="button">Önceki</button>
        <button id="videoClose" class="btn btn-primary" type="button">Kapat</button>
        <button id="videoNext" class="btn btn-ghost" type="button">Sonraki</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  const player = modal.querySelector("#videoModalPlayer");
  const closeBtn = modal.querySelector("#videoClose");
  const nextBtn = modal.querySelector("#videoNext");
  const prevBtn = modal.querySelector("#videoPrev");

  function open(index) {
    currentIndex = (index + VIDEO_ITEMS.length) % VIDEO_ITEMS.length;
    player.src = VIDEO_ITEMS[currentIndex].src;
    modal.classList.remove("hidden");
    player.play().catch(() => {});
  }

  function close() {
    player.pause();
    player.currentTime = 0;
    modal.classList.add("hidden");
  }

  function next() {
    open(currentIndex + 1);
  }

  function prev() {
    open(currentIndex - 1);
  }

  videoGrid.addEventListener("click", (event) => {
    const trigger = event.target.closest(".video-open");
    if (!trigger) {
      return;
    }

    open(Number(trigger.dataset.videoIndex));
  });

  closeBtn.addEventListener("click", close);
  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      close();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (modal.classList.contains("hidden")) {
      return;
    }

    if (event.key === "Escape") {
      close();
    } else if (event.key === "ArrowRight") {
      next();
    } else if (event.key === "ArrowLeft") {
      prev();
    }
  });
}

function initializeLightbox() {
  const galleryGrid = document.getElementById("galleryGrid");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const closeButton = document.getElementById("lightboxClose");

  if (!galleryGrid || !lightbox || !lightboxImage || !lightboxCaption || !closeButton) {
    return;
  }

  lightboxCaption.textContent = "";
  lightboxCaption.classList.add("hidden");

  function openLightbox(card, event) {
    lightboxImage.src = card.dataset.image;
    lightbox.classList.remove("hidden");
    lightbox.setAttribute("aria-hidden", "false");
    lightbox.classList.remove("lightbox-pop");
    void lightbox.offsetWidth;
    lightbox.classList.add("lightbox-pop");
    emitHearts(lightbox, event, 12);
  }

  function closeLightbox() {
    lightbox.classList.add("hidden");
    lightbox.setAttribute("aria-hidden", "true");
  }

  galleryGrid.addEventListener("click", (event) => {
    const card = event.target.closest(".gallery-item");
    if (!card) {
      return;
    }

    openLightbox(card, event);
  });

  galleryGrid.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") {
      return;
    }

    const card = event.target.closest(".gallery-item");
    if (!card) {
      return;
    }

    openLightbox(card, event);
  });

  closeButton.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
}

function startCountdown() {
  const countdownEl = document.getElementById("countdown");
  const lockEl = document.getElementById("letterLock");
  const letterEl = document.getElementById("letterContent");
  const ritualEl = document.getElementById("letterRitual");
  const letterText = document.getElementById("letterText");
  if (!countdownEl || !lockEl || !letterEl) {
    return;
  }

  const unlockAt = new Date(APP_CONFIG.unlockDate);
  let ritualReady = false;

  function runLetterTypewriter() {
    lockEl.classList.add("hidden");
    letterEl.classList.remove("hidden");

    if (!letterText) {
      return;
    }

    const fullText = APP_CONFIG.letterText;
    // Keep the whole letter visible; audio (if provided) plays in the background.
    letterText.textContent = fullText;

    if (!APP_CONFIG.letterVoiceSrc) {
      return;
    }

    const voice = document.createElement("audio");
    voice.src = APP_CONFIG.letterVoiceSrc;
    voice.preload = "auto";

    voice.play().catch(() => {
      // Audio can fail due to browser autoplay policies; keep full text visible.
    });
  }

  function showRitual() {
    if (ritualReady || !ritualEl) {
      return;
    }

    ritualReady = true;
    countdownEl.classList.add("hidden");
    ritualEl.classList.remove("hidden");
    ritualEl.innerHTML = `
      <div class="seal-ritual-wrap">
        <button id="breakSeal" class="wax-seal" type="button" aria-label="Mühürü yırt ve mektubu aç">
          <span class="seal-crack" aria-hidden="true"></span>
        </button>
        <p class="seal-instruction">Süre doldu. Mühüre tıkla ve mektubu aç.</p>
      </div>
    `;
    const sealBtn = document.getElementById("breakSeal");
    if (!sealBtn) {
      return;
    }

    let isBroken = false;
    function triggerBreak() {
      if (isBroken) {
        return;
      }

      isBroken = true;
      sealBtn.style.setProperty("--tear-progress", "1");
      sealBtn.classList.add("is-tearing");
      sealBtn.classList.add("is-breaking");
      setTimeout(runLetterTypewriter, 580);
    }

    sealBtn.addEventListener("click", triggerBreak);

    sealBtn.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }

      event.preventDefault();
      triggerBreak();
    });
  }

  function update() {
    const now = new Date();
    const diff = unlockAt.getTime() - now.getTime();

    if (diff <= 0) {
      showRitual();
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    countdownEl.textContent = `${days} gün ${hours} saat ${minutes} dk ${seconds} sn`;
  }

  update();
  setInterval(update, 1000);
}

function initializeNowPlaying() {
  const link = document.getElementById("playlistLink");
  const badge = document.getElementById("nowPlaying");
  if (!link || !badge) {
    return;
  }

  if (sessionStorage.getItem("duygu_now_playing") === "1") {
    badge.classList.remove("hidden");
  }

  link.addEventListener("click", () => {
    sessionStorage.setItem("duygu_now_playing", "1");
    badge.classList.remove("hidden");
  });
}

function initializeMemoryMap() {
  const map = document.getElementById("memoryMap");
  const detail = document.getElementById("mapDetail");
  if (!map || !detail) {
    return;
  }

  const mapItems = TIMELINE_ITEMS.filter(
    (item) => Number.isFinite(item.latitude) && Number.isFinite(item.longitude)
  );

  if (!mapItems.length) {
    detail.innerHTML = "<h3>Konum bulunamadı</h3><p>Zaman tüneline latitude ve longitude ekle.</p>";
    return;
  }

  if (typeof google === "undefined" || !google.maps) {
    detail.innerHTML = "<h3>Harita yüklenemedi</h3><p>Google Maps dosyaları erişilemiyor.</p>";
    return;
  }

  if (map.dataset.initialized === "1") {
    return;
  }
  map.dataset.initialized = "1";

  const IZMIR_CENTER = { lat: 40.7654, lng: 29.9408 };
  const IZMIR_ZOOM = 10;

  const googleMapStyles = [
    {
      featureType: "poi",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "transit",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ saturation: -10 }, { lightness: 8 }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#a8d8ff" }],
    },
  ];

  const googleMap = new google.maps.Map(map, {
    center: IZMIR_CENTER,
    zoom: IZMIR_ZOOM,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    gestureHandling: "cooperative",
    styles: googleMapStyles,
  });

  const bounds = new google.maps.LatLngBounds();
  const baseIcon = {
    path: google.maps.SymbolPath.CIRCLE,
    scale: 8,
    fillColor: "#e16592",
    fillOpacity: 1,
    strokeColor: "#fff6fa",
    strokeWeight: 2,
  };
  const activeIcon = {
    path: google.maps.SymbolPath.CIRCLE,
    scale: 10,
    fillColor: "#ff7ca8",
    fillOpacity: 1,
    strokeColor: "#ffffff",
    strokeWeight: 2,
  };
  let activeMarker = null;

  function getPolaroidTilt(point) {
    const source = `${point.title}${point.date}`;
    let hash = 0;
    for (let i = 0; i < source.length; i += 1) {
      hash = (hash * 31 + source.charCodeAt(i)) % 997;
    }
    const tiltValues = [-2.8, -1.6, -0.7, 0.9, 1.8, 2.7];
    return tiltValues[hash % tiltValues.length];
  }

  function applyMapImageSizing(imageEl) {
    if (!imageEl) {
      return;
    }

    function updateByRatio() {
      const ratio = imageEl.naturalWidth / imageEl.naturalHeight;
      imageEl.classList.remove("is-portrait", "is-landscape", "is-square");

      if (ratio < 0.9) {
        imageEl.classList.add("is-portrait");
      } else if (ratio > 1.2) {
        imageEl.classList.add("is-landscape");
      } else {
        imageEl.classList.add("is-square");
      }
    }

    if (imageEl.complete) {
      updateByRatio();
      return;
    }

    imageEl.addEventListener("load", updateByRatio, { once: true });
  }

  function setDetail(point, marker) {
    detail.classList.remove("is-animating");
    void detail.offsetWidth;
    detail.classList.add("is-animating");

    if (activeMarker) {
      activeMarker.setIcon(baseIcon);
      activeMarker.setZIndex(1);
    }

    if (marker) {
      marker.setIcon(activeIcon);
      marker.setZIndex(1000);
      activeMarker = marker;
    }

    const tilt = getPolaroidTilt(point);

    detail.innerHTML = `
      <article class="map-memory-card polaroid-drop" style="--polaroid-tilt:${tilt}deg;">
        <p class="map-memory-date">${point.date}</p>
        <h3>${point.title}</h3>
        <p><strong>Konum:</strong> ${point.location || "Belirtilmedi"}</p>
        <p>${point.text}</p>
        <img src="${point.image}" alt="${point.title}" class="map-memory-image" />
      </article>
    `;

    applyMapImageSizing(detail.querySelector(".map-memory-image"));
  }

  const markerLayers = [];
  const coordinateUseCount = new Map();

  function getSpreadLatLng(lat, lng, useIndex) {
    if (useIndex === 0) {
      return [lat, lng];
    }

    const angle = ((useIndex - 1) * 137.5 * Math.PI) / 180;
    const radiusMeters = 22 + useIndex * 10;
    const metersToLat = 1 / 111320;
    const metersToLng = 1 / (111320 * Math.cos((lat * Math.PI) / 180));

    const spreadLat = lat + Math.cos(angle) * radiusMeters * metersToLat;
    const spreadLng = lng + Math.sin(angle) * radiusMeters * metersToLng;
    return [spreadLat, spreadLng];
  }

  mapItems.forEach((point) => {
    const key = `${point.latitude.toFixed(6)},${point.longitude.toFixed(6)}`;
    const useIndex = coordinateUseCount.get(key) || 0;
    coordinateUseCount.set(key, useIndex + 1);

    const spread = getSpreadLatLng(point.latitude, point.longitude, useIndex);
    const latLng = { lat: spread[0], lng: spread[1] };
    const marker = new google.maps.Marker({
      position: latLng,
      map: googleMap,
      title: `${point.title} - ${point.location || "Konum"}`,
      icon: baseIcon,
      zIndex: 1,
    });

    marker.addListener("click", () => setDetail(point, marker));
    markerLayers.push(marker);
    bounds.extend(latLng);
  });

  if (markerLayers.length > 1) {
    googleMap.fitBounds(bounds, 70);
  } else {
    googleMap.setCenter(IZMIR_CENTER);
    googleMap.setZoom(IZMIR_ZOOM);
  }

  setDetail(mapItems[0], markerLayers[0] || null);

  function refreshMapSize() {
    const refreshDelays = [0, 220, 700, 1200];
    refreshDelays.forEach((delay) => {
      setTimeout(() => {
        google.maps.event.trigger(googleMap, "resize");
        if (markerLayers.length > 1) {
          googleMap.fitBounds(bounds, 70);
          return;
        }

        if (markerLayers.length === 1) {
          const onlyMarkerPos = markerLayers[0].getPosition();
          if (onlyMarkerPos) {
            googleMap.setCenter(onlyMarkerPos);
            googleMap.setZoom(13);
          }
          return;
        }

        googleMap.setCenter(IZMIR_CENTER);
        googleMap.setZoom(IZMIR_ZOOM);
      }, delay);
    });
  }

  refreshMapSize();
  document.addEventListener("duygu:unlocked", refreshMapSize);
  window.addEventListener("load", refreshMapSize);
  window.addEventListener("resize", refreshMapSize);
}

function initializeFinalScene() {
  const finalScene = document.getElementById("finalScene");
  const starsWrap = finalScene ? finalScene.querySelector(".final-stars") : null;
  const replayBtn = document.getElementById("replayJourney");
  if (!finalScene || !starsWrap || !replayBtn) {
    return;
  }

  if (!starsWrap.children.length) {
    for (let i = 0; i < 22; i += 1) {
      const star = document.createElement("span");
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${(Math.random() * 1.5).toFixed(2)}s`;
      starsWrap.appendChild(star);
    }
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          finalScene.classList.add("active");
        }
      });
    },
    { threshold: 0.35 }
  );
  observer.observe(finalScene);

  replayBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function initializeHeroParticles() {
  const hero = document.querySelector(".hero");
  if (!hero) {
    return;
  }

  let lastEmit = 0;
  hero.addEventListener("pointermove", (event) => {
    const now = performance.now();
    if (now - lastEmit < 40) {
      return;
    }
    lastEmit = now;

    const rect = hero.getBoundingClientRect();
    const particle = document.createElement("span");
    particle.className = "heart-particle";
    particle.textContent = String.fromCharCode(9829);
    particle.style.left = `${event.clientX - rect.left}px`;
    particle.style.top = `${event.clientY - rect.top}px`;
    hero.appendChild(particle);
    setTimeout(() => particle.remove(), 900);
  });
}

function activateReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.13 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function bootstrap() {
  initializeThemeToggle();
  initializeMobileNavMenu();
  initializeAccessGate();
  setStaticContent();
  renderTimeline();
  renderGallery();
  renderVideos();
  initializeVideoCardPreviews();
  initializeGalleryWow();
  initializeGalleryTilt();
  initializeVideoModal();
  initializeLightbox();
  startCountdown();
  initializeNowPlaying();
  initializeMemoryMap();
  initializeFinalScene();
  initializeHeroParticles();
  activateReveal();
}

bootstrap();
