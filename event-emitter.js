const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('response',(name,age) =>{
    console.log(`data recieved ${name} ${age}`)
})

emitter.emit('response','Ishaaq',21)