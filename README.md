# 🛠️ Arıza Takip Sistemi

Arıza Takip Sistemi, teknik destek süreçlerini kolaylaştırmak ve arıza kayıtlarını tek bir yerden yönetmek amacıyla geliştirilen bir mobil uygulamadır. Kullanıcıların mevcut arızaları incelemesine, arıza detaylarını görüntülemesine ve yeni arıza kayıtları oluşturmasına olanak tanır.

## ✨ Özellikler

- **Arıza Listeleme:** Sistemdeki arıza kayıtlarını görüntüleme.
- **Arıza Detayları:** Arızanın numarası, konumu, açıklaması ve durumunu inceleme.
- **Yeni Arıza Kaydı:** Arıza başlığı, konumu ve açıklamasıyla yeni kayıt oluşturma.
- **Durum Takibi:** Arızaları bekliyor, işlemde ve çözüldü durumlarına göre görüntüleme.

## 🧰 Kullanılan Teknolojiler

- [React Native](https://reactnative.dev/) — Mobil uygulama arayüzü
- [Expo](https://expo.dev/) — Geliştirme ve çalıştırma ortamı
- [TypeScript](https://www.typescriptlang.org/) — Tip güvenli kod geliştirme
- [Expo Router](https://docs.expo.dev/router/introduction/) — Sayfalar arası gezinme

## 🚀 Kurulum

Projeyi bilgisayarınıza indirin:

```bash
git clone https://github.com/EylulErkaya/ArizaTakip.git
cd ArizaTakip
```

Gerekli paketleri yükleyin:

```bash
npm install
```

Uygulamayı web üzerinde başlatın:

```bash
npx expo start --web
```

## 📁 Proje Yapısı

```text
src/
├── app/          # Ekranlar ve sayfa yönlendirmeleri
├── components/   # Tekrar kullanılabilir arayüz bileşenleri
└── data/         # Örnek arıza kayıtları
```

## 🎯 Projenin Amacı

Bu proje, React Native ve Expo kullanarak arıza takip uygulaması geliştirme, bileşen tabanlı arayüz tasarımı, sayfalar arası yönlendirme ve TypeScript ile uygulama geliştirme konularında pratik kazanmak amacıyla hazırlanmıştır.
