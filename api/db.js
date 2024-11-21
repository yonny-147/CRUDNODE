const mongoose = require('mongoose')

const connectDB = async() => {
    try{
        await mongoose.connect('mongodb://localhost:27017/tasksDB', {
            useUnifiedTopology: true,
        })
        console.log('MongoDB conectado')
    }catch(error){
        console.error('Error conectandose a la base de datos', error)
        process.exit(1)
    }
}

module.exports = connectDB