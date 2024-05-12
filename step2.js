const fs = require('fs')
const axios = require('axios')


async function webCat(url){
    let res = await axios.get(url)
    console.log(res.data)
}

fs.readFile('one.txt', 'utf8', function cat(error,data){
    if(error){
        console.log(error)
    }
   if(data.slice(0,4) === 'http'){
    webCat(data)
   }
   else{
    console.log(data)
   }
})