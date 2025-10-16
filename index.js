const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./connection')
const response = require('./response')

app.use(bodyParser.json())

// routes utama kita methode get

// endpoint biasa
app.get('/', (req, res) => {
  const sql = "select * from mahasiswa"
  db.query(sql, (error, fields) => {
    //hasil data dari mysql
    response(200, fields, "get yout all data from mahasiswa", res)
  })  
})

app.get('/find', (req,res) => {
  const sql = `select nama from mahasiswa where nim = ${req.query.nim}` //${req.query.nim} artinya mencari mahasiswa berdasakan nim yang di masukkan di url dengan tambahan url ?(nim)
  db.query(sql,(error,result) => {
    response(200, result, "find mahasiswa name", res)
  })
})

// endpoint /Hello
app.get('/Hello', (req, res) => { 
  console.log({urlParam: req.query}) //bisa menggunakan req.query.alamat atau .nama sesuai data yang di inginkan 
  res.send('Hello World!')
})

app.post('/login', (req, res) => {
  console.log({requestFromOutside: req.body})
   res.send('login berhasil')
})

app.put('/username', (req,res) => {
  console.log({updateData: req.body})
  res.send('update berhasil')
})


// ROUTE METHODE
app.get('/mahasiswa', (req, res) => { //ketika kita ingin memunculkan atau data dari database kepada tampilan di frontend maka pakai get
  res.send("berhasil")
})

app.get('/mahasiswaa', (req, res) => { //ketika kita ingin memunculkan atau data dari database kepada tampilan di frontend maka pakai get
  res.json("hallo") // biasanya kalo sudah projek menggunakan res.json tapi fungsionalnya sama saja dengan res.send
})

app.get('/mahasiswa/:nim', (req, res) => {   //ketika kita ingin memunculkan atau data dari database kepada tampilan di frontend maka pakai get
  const nim = req.params.nim //artinya dapat mencari mahasiswa berdasarkan nim yang di ketik di url
  res.send(`Spesifik mahasiswa by id ${nim}`)
})

app.post('/mahasiswa', (req, res) => { // ketika misal orang mengisi from, ketika klik submit maka endpoint post akan di eksekusi dan insert data ke database
const { nim, nama, kelas, alamat} = req.body
const sql = ` insert into mahasiswa (nim, nama, kelas, alamat) values ( ${nim}, '${nama}', '${kelas}', '${alamat}')`

db.query(sql, (err, fields) => {
  if (err) 
    response(500, "invalid", "error", res)
  if (fields?.affectedRows) {
    const data = {
      isSuccess : fields.affectedRows,
      id: fields.insertId
    }
    response(200, data, "data added succesfully", res)
  }
})
}) 
// url sama semua mahsiswa tetap bisa berjalan karena methodenya berbeda beda
app.put('/mahasiswa', (req, res) => { 
  const {nim, nama, kelas, alamat} = req.body
  const sql = `update mahasiswa set nama = '${nama}', kelas = '${kelas}', alamat = '${alamat}' where nim = ${nim}`

  db.query(sql, (err, result) => {
    if (err) response(500, "invalid", "error", res)
      if (result?.affectedRows) {
    const data = {
      isSuccess : result.changedRows,
      message: result.message
    }
    response(200, data, "data updated succesfully", res)
  } else {
    response(404, "data tidak ada", "silahkan cari data yang sudah ada", res)
  }
  })
})

app.delete('/mahasiswa', (req, res) => {
   const {nim} = req.body
   const sql = `delete from mahasiswa where nim = ${nim}`

   db.query(sql, (err, result) => {
    if (err) response(500, "error", "invalid", res)
      if (result?.affectedRows){
        const data = {
          isDeleted : result.affectedRows
        }
        response(200, data, "selamat", res)
      }
      else {
        response(404, "not found", "data tidak ada", res)
      }
   })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
