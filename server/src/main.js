
import app from '../server'
const port = process.env.PORT || 3001




app.listen(port, ()=>{
    console.log(`Server on port ${port} is running`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))