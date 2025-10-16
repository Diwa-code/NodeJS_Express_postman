# 🚀 Node.js REST API with Express and MySQL

Proyek ini merupakan REST API sederhana menggunakan **Node.js**, **Express**, dan **MySQL**.  
Aplikasi ini dapat dijalankan secara lokal dan diuji menggunakan **Postman** untuk melakukan operasi CRUD.

---

## 📁 Struktur Folder

.
├── index.js # Entry point server utama
├── connection.js # Konfigurasi koneksi ke MySQL
├── response.js # Helper untuk format response JSON
├── models/ # Model query database (CRUD)
├── utils/ # Helper tambahan
├── package.json # Dependency dan script npm
├── package-lock.json
└── node_modules/ # Dependensi (otomatis di-generate oleh npm)

---

## ⚙️ Persiapan Awal

### 1️⃣ Instal Node.js

Pastikan Node.js sudah terinstal di komputer kamu.

Cek versi:

```bash
node -v
npm -v
2️⃣ Install Dependencies
Setelah clone atau ekstrak proyek ini, jalankan:
npm install
Perintah ini akan otomatis mengunduh semua library dari file package.json, termasuk:
express – framework utama REST API
mysql – koneksi ke database MySQL
body-parser – parsing data JSON
nodemon – auto-restart server saat file berubah
3️⃣ Konfigurasi Database
Pastikan MySQL server sudah berjalan (misalnya lewat XAMPP atau MySQL Workbench).
Ubah kredensial database di file connection.js sesuai dengan milikmu:
host: 'localhost',
user: 'root',
password: '',
database: 'nama_database_kamu'
4️⃣ Menjalankan Server
Gunakan nodemon agar server otomatis restart setiap ada perubahan kode:
npx nodemon index.js
Atau jalankan server normal tanpa auto-restart:
npm start
Server akan berjalan di:
👉 http://localhost:3000
🧪 Pengujian dengan Postman
Kamu bisa menguji API menggunakan Postman.
🔹 Cek status server
GET http://localhost:3000/
Response:
{
  "status": 200,
  "message": "Server running successfully"
}
🔹 Ambil semua user
GET http://localhost:3000/users
Menampilkan seluruh data dari tabel users di MySQL.
📜 Script NPM
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
Gunakan:
Jalankan server normal: npm start
Jalankan dengan nodemon: npm run dev
📚 Dependencies
Package	Fungsi
express	Framework utama REST API
mysql	Menjalankan koneksi & query database
body-parser	Parsing data JSON dari request
nodemon	Auto-restart server saat file berubah
🧭 Langkah Singkat Penggunaan
Langkah	Perintah
Install dependency	npm install
Jalankan server	npm start
Jalankan dengan nodemon	npx nodemon index.js
Uji API di Postman	GET http://localhost:3000/
🪪 Lisensi
Proyek ini dibuat untuk tujuan pembelajaran Node.js dan Express.
Silakan digunakan, dimodifikasi, dan dikembangkan untuk keperluan akademik atau latihan pribadi.
