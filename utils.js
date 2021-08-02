const { rejects } = require('assert')
const fs = require('fs')
const { resolve } = require('path')

function writeDataToFile(filename, content){
    fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) =>{
        if(err) {
            console.log(err)
        }
    })
}

function getPostData(req) {
    return new Promise((resolve, rejects) =>{
        try {
            let  body = ''

            req.on('data', (chunk) => {
                body += chunk.toString()
            })

            req.on('end', () =>{
                resolve(body)
            })
        } catch(error) {
            rejects(err)
        }
    })
}


module.exports = {
    writeDataToFile, getPostData
}