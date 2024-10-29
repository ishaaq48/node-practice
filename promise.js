const {readFile} = require('fs')

const getTask = (path) =>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,data)=>{
            if(err){
                reject(err)
            }
            else
            {
                resolve(data)
            }
        })
    })
}

// getTask('./content/first.text')
//     .then(result => console.log(result))
//     .catch(err => console.log(err))


const start = async() =>{
    try {
        const first = await getTask('./content/first.text')
        const second = await getTask('./content/result-sync.txt')
        console.log(second)
    } catch (error) {
        console.log(error)
    }
}

start()
    
