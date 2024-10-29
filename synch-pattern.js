const http = require('http')

const server = http.createServer((req,res) =>{

    if(req.url === '/')
    {
        res.end('Home Page')
    }
    if(req.url === '/about')
    {
        for(let i = 0; i <1000; i++){
            console.log(i)
        }
        res.end('About Page')
    }
    res.end("Error Page")
})


server.listen(5000,()=>{
    console.log('Server is listening on port 5000...')
})