const {readFile,writeFile} = require('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)



const start = async() =>{
    try {
        const first = await readFilePromise('./content/first.text','utf8')
        const second = await readFilePromise('./content/result-sync.txt','utf8')
        await writeFilePromise('./content/result.txt',
            `This is awesome : ${first} ${second}`)
        console.log(first,second)
    } catch (error) {
        console.log(error)
    }
}

start()
    
// const getTask = (path) =>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if(err){
//                 reject(err)
//             }
//             else
//             {
//                 resolve(data)
//             }
//         })
//     })
// }

// getTask('./content/first.text')
//     .then(result => console.log(result))
//     .catch(err => console.log(err))
