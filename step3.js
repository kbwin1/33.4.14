const fs = require('fs')
const axios = require('axios')
const process = require('process');


async function webCat(url){
    let res = await axios.get(url)
    console.log(res.data)
    return res.data
}
async function webCatPrint(url){
    let res = await axios.get(url)
    console.log(res.data)
    out1(res.data)
}

fs.readFile('one.txt', 'utf8', function cat(error,data){
    if(error){
        console.log(error)
    }
   if(data.slice(0,4) === 'http'){
    webCat(data)
   }
   if(data.slice(0,4) === 'http' && process.argv[2] === '--out'){
    webCatPrint(data)
   }
   else{
    console.log(data)
   }
   if (process.argv[2] === '--out'){
    out1(data)
}

})

function out1(data){
    fs.writeFile('out.txt',data, 'utf8',function(error){
        if(error){
            console.log(error)
        }
    })
}

