const fs = require('fs')

fs.readFile('one.txt', 'utf8', function cat(error,data){
    if(error){
        console.log(error)
    }
    console.log(data)
})