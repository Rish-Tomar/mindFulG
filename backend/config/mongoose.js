import mongoose  from "mongoose";

mongoose.connect('mongodb+srv://root:adminroot@assessments.os5t7uu.mongodb.net/?retryWrites=true&w=majority')

// acquire Connection
const db=mongoose.connection

//if failed
db.on('error',console.error.bind(console,'error connecting to DB'))

//if successful
db.once('open',()=>{
    console.log('successfully connected to the database')
})

export default db