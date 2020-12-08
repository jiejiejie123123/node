module.exports = {
    createUserRequest:{
        mobile:{type:'string',required:true,description:'手机号',example:'17788883333',format:/^1[34578]\d{9}$/,},
        password:{type:'string',required:true,description:'密码',example:'111111'},
        realName:{type:'string',required:true,description:'姓名',example:'张三'},
       
    }
}