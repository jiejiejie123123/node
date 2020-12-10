module.exports = app => { 
    const mongoose = app.mongoose
    const UserSchema = new mongoose.Schema({
        mobile:{type:String,unique:true,required:true},
        password:{type:String,required:true},
        realName:{type:String,required:true},
        avatar:{type:String,default:'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'},
        extra:{type:mongoose.Schema.Types.Mixed},
        createdAt:{type:Date,default:Date.now},
    })
    return mongoose.model('User',UserSchema)
}