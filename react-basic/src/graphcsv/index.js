const csvtojson = require('csvtojson')
const fs = require('fs')

let csvfilepath = "../csvfile/train_study_level.csv"

csvtojson()
    .fromFile(csvfilepath)
    .then((json) => {
        //console.log(json)

        fs.writeFileSync("Convert-3.json", JSON.stringify(json), "utf-8", (err) => {
            if (err) console.log(err)
        })

        var x1 = json.filter(t => t[`Negative for Pneumonia`] === '0')
        //console.log(c1.length);
        var x2 = json.filter(t => t[`Negative for Pneumonia`] === '1')
        //console.log(c2.length);
        var x3 = json.filter(t => t[`Typical Appearance`] === '0')
        //console.log(c3.length);
        var x4 = json.filter(t => t[`Typical Appearance`] === '1')
        //console.log(c4.length);
        var x5 = json.filter(t => t[`Indeterminate Appearance`] === '0')
        //console.log(c5.length);
        var x6 = json.filter(t => t[`Indeterminate Appearance`] === '1')
        //console.log(c6.length);
        var x7 = json.filter(t => t[`Atypical Appearance`] === '0')
        //console.log(c7.length);
        var x8 = json.filter(t => t[`Atypical Appearance`] === '1')
        //console.log(c8.length);
        var x9 = json.filter(t => t.id)
        //console.log(c9.length);
        let alldata = [];
        alldata.push(x1.length);
        alldata.push(x2.length);
        alldata.push(x3.length);
        alldata.push(x4.length);
        alldata.push(x5.length);
        alldata.push(x6.length);
        alldata.push(x7.length);
        alldata.push(x8.length);
        alldata.push(x9.length);
        fs.writeFileSync("./Countnumbercsv/DataCount-3.json", JSON.stringify(alldata), "utf-8", (err) => {
            if (err) console.log(err)
        })

    })
;

const csvtojson1 = require('csvtojson')
csvfilepath = "../csvfile/sample_submission.csv"

csvtojson1()
    .fromFile(csvfilepath)
    .then((json) => {
        //console.log(json)

        fs.writeFileSync("Convert-4.json", JSON.stringify(json), "utf-8", (err) => {
            if (err) console.log(err)
        })

        var s1 = json.filter(t => t.PredictionString === 'negative 1 0 0 1 1')
        //console.log(s1.length);
        var s2 = json.filter(t => t.PredictionString === 'none 1 0 0 1 1')
        //console.log(s2.length);
        var s3 = json.filter(t => t.id)
        //console.log(s3.length);
        let alldata = [];
        alldata.push(s1.length);
        alldata.push(s2.length);
        alldata.push(s3.length);

        fs.writeFileSync("./Countnumbercsv/DataCount-4.json", JSON.stringify(alldata), "utf-8", (err) => {
            if (err) console.log(err)
        })
    })
;

const csvtojson2= require('csvtojson')
csvfilepath = "../csvfile/train_image_level.csv"

csvtojson2()
    .fromFile(csvfilepath)
    .then((json) => {
        //console.log(json)

        fs.writeFileSync("Convert-5.json", JSON.stringify(json), "utf-8", (err) => {
            if (err) console.log(err)
        })

        var t1 = json.filter(t => t.id)
        //console.log(t1.length);
        let alldata = [];
        alldata.push(t1.length);
        fs.writeFileSync("./Countnumbercsv/DataCount-5.json", JSON.stringify(alldata), "utf-8", (err) => {
            if (err) console.log(err)
        })
    })
;
