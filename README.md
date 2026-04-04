# Bizim Hikayemiz - Anı Uygulamasi

Bu proje, 1. yil icin hazirlanmis tek sayfalik romantik bir anı uygulamasidir.

## Nasil Acilir

1. `index.html` dosyasina cift tikla.
2. Tarayicida uygulama acilacaktir.

## Ozellestirme

`script.js` dosyasindaki su alanlari duzenle:

- `APP_CONFIG.coupleNames`
- `APP_CONFIG.heroMessage`
- `APP_CONFIG.playlistUrl`
- `APP_CONFIG.unlockDate`
- `APP_CONFIG.signatureName`
- `APP_CONFIG.letterText`

Anilar icin:

- `TIMELINE_ITEMS` listesindeki yazi ve gorselleri degistir.
- `GALLERY_ITEMS` listesindeki yazi ve gorselleri degistir.

## Kendi Fotograflarini Ekleme

1. Klasor icinde `media` adinda bir klasor olustur.
2. Fotograflari oraya kopyala (ornek: `media/foto1.jpg`).
3. `script.js` icindeki `image` alanlarini bu dosya yollarina cevir.

## Not

Mektup bolumu `unlockDate` zamanina kadar kilitli kalir. Tarih geldiginde otomatik acilir.
