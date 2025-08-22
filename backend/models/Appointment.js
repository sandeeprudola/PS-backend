const User = require("./User")

const mongoose=required('mongoose')


const AppointmentSchema=new mongoose.Schema({
    patient:{
        type: mongoose.Schema.Types.ObjectId,
        ref:User,
        required:true,
    },

})
