🚀 Node.js REST API with Express and MySQL
Proyek ini merupakan REST API sederhana menggunakan Node.js, Express, dan MySQL.
Aplikasi ini dapat dijalankan secara lokal dan diuji menggunakan Postman untuk melakukan operasi CRUD.
📦 Struktur Folder
.
├── index.js             # Entry point server utama
├── connection.js        # Konfigurasi koneksi ke MySQL
├── response.js          # Helper untuk format response JSON
├── models/              # Model query database (CRUD)
├── utils/               # Helper tambahan
├── package.json         # Dependency dan script npm
├── package-lock.json
└── node_modules/        # Dependensi (otomatis di-generate oleh npm)
⚙️ Persiapan Awal
1️⃣ Instal Node.js
Pastikan Node.js sudah terinstal di komputer kamu.
Cek versi dengan:
node -v
npm -v
2️⃣ Install Dependencies
Setelah clone atau ekstrak proyek ini, jalankan:
npm install
Perintah ini akan otomatis mengunduh semua library dari file package.json, termasuk:
express – framework utama REST API
mysql – koneksi ke database MySQL
body-parser – untuk parsing data JSON
nodemon – menjalankan server dengan auto-restart
3️⃣ Konfigurasi Database
Pastikan MySQL server sudah berjalan (misalnya menggunakan XAMPP atau MySQL Workbench).
Ubah kredensial database di file connection.js sesuai dengan milik kamu:
host: 'localhost',
user: 'root',
password: '',
database: 'nama_database_kamu'
▶️ Menjalankan Server
Gunakan nodemon agar server otomatis restart setiap ada perubahan kode:
npx nodemon index.js
Atau gunakan perintah npm:
npm start
Server akan berjalan di:
👉 http://localhost:3000
🧪 Pengujian dengan Postman
Kamu bisa menguji API menggunakan Postman dengan langkah berikut:
Buka aplikasi Postman.
Coba endpoint utama untuk memastikan server berjalan:
GET http://localhost:3000/
Harus menampilkan respon seperti:
{
  "status": 200,
  "message": "Server running successfully"
}
Contoh endpoint lain:
GET http://localhost:3000/users
➜ Menampilkan seluruh data dari tabel users di MySQL.
📚 Script yang Tersedia
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
Kamu bisa menggunakan:
npm start → Menjalankan server normal
npm run dev → Menjalankan server dengan nodemon
🧰 Dependencies
Package	Fungsi
express	Framework utama untuk REST API
mysql	Menjalankan koneksi dan query database
body-parser	Parsing data JSON dari request
nodemon	Auto-restart server saat file berubah
🧭 Alur Singkat Penggunaan
Langkah	Perintah
Instal dependency	npm install
Jalankan server	npm start
Jalankan dengan nodemon	npx nodemon index.js
Uji API di Postman	GET http://localhost:3000/
🪪 Lisensi
Proyek ini dibuat untuk tujuan pembelajaran Node.js dan Express.
Silakan digunakan, dimodifikasi, dan dikembangkan untuk keperluan akademik atau latihan pribadi.