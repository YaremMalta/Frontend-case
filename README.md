 # 1.Frontend- Case
  
Bu proje React Native (Expo) kullanılarak geliştirilmiş bir e-ticaret mobil uygulamasıdır.

Kullanıcılar ürünleri listeleyebilir, ürün detaylarını görebilir ve sepete ürün ekleyebilir.

 # 2.Proje Amacı
Bu uygulamanın amacı:

1.Modern React Native mimarisi oluşturmak

2.API üzerinden veri çekme ve yönetme becerisini göstermek

3.Zustand ile global state (sepet) yönetimi yapmak

4.React Query ile server state yönetimini optimize etmek

5.Figma tasarımına uygun, temiz ve sürdürülebilir UI geliştirmek

# 3.Kullanılan Teknolojiler
1.React Native (Expo)

2.TypeScript

3.Axios

4.React Query (TanStack Query v5)

5.Zustand

6.Expo Router (navigation)

7.Tailwind CSS (UI styling)

8.Fakestore API
https://fakestoreapiserver.reactbd.org/api

# 4.Özellikler
 1.Ürün Listeleme
API üzerinden ürünlerin çekilmesi

Loading state yönetimi

Error handling

Ürün kartlarında:
Görsel
Ürün adı
Fiyat

2 .Ürün Detay Ekranı
Seçilen ürünün detaylarının gösterilmesi

Ürün açıklaması

Görsel ve fiyat bilgisi

“Sepete Ekle” fonksiyonu

3. Sepet Yönetimi

Sepete ürün ekleme

Sepetten ürün çıkarma

Ürün adedi artırma / azaltma

Toplam fiyat hesaplama

Zustand ile global state yönetimi


# 5. Proje Yapısı

src/
  ├── components/     # Tekrar kullanılabilir UI bileşenleri
 
  ├── screens/        # Uygulama ekranları (Home, Detail, Cart)
 
  ├── services/       # API istekleri (Axios instance)
 
  ├── store/          # Zustand global state (Sepet yönetimi)
 
  ├── stereotypes/    # TypeScript type ve interface tanımları
 
  ├── data/           # Statik / mock veriler
 

# 6.Kurulum

Projeyi çalıştırmadan önce bilgisayarınızda Node.js kurulu olmalıdır.

Eğer Expo yüklü değilse: npx create-expo-app@latest

git clone https://github.com/YaremMalta/Frontend-case.git

cd frontend-case

npm install

npx expo start

npx expo start komutundan sonra ios simulatör için "i" basmak yeterlidir.









