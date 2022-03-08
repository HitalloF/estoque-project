const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'camisas'

})

const app = express()
app.use(cors());


app.get('/camisas/golacareca/branca',(req,res)=>{
    let SQL = 'SELECT * FROM gcbranca'

    db.query(SQL,(err, result)=>{
        if(err) console.log(err)  
        else res.send(result)
    })
})

app.use(cors())
app.use(express.json())


app.listen(3003, ()=>{ console.log("db connected")})