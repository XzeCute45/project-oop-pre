var express = require('express');
var cors = require('cors');
var app = express();
var fs = require('fs');
var axios = require('axios');
var bodyParser = require('body-parser')
var list = require('../react-basic/src/graphcsv/Convert-3.json')
app.use(cors());


app.use(bodyParser());
const base64_encode=(file)=>{
    var bitmap = fs.readFileSync(file);
    return new Buffer(bitmap).toString('base64');
}

app.post('/image',function(require, res){
    const image = (require.body.image); //require(ร้องขอ) การรับ path มาจาก react
    axios.get('http://127.0.0.1:5000/api', { params: {img: image } })   //parameter ของ mg
    .then(res=>console.log(res.data))   //รับค่า return ที่ส่งมาจาก python
    return res.send(base64_encode('./image/change.jpg'))    //read รูปจาก folder
})

//get import from URL
//post import from form

app.get('/',function(req,res){
    return res.send('PROKET');
})

app.get('/HI1', function(req,res){
    res.send('HELLO EVERYONE');
})

app.get('/LIST', function(req,res){
    res.send(list);
})

app.listen(9000, function () {
    console.log('Listening on http://localhost:9000/');
}); //กำหนด port รับส่งข้อมูล