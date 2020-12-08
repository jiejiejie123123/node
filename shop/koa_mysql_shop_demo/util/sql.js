// 创建数据库
const CREATE_TABLE = (tablename) => `CREATE TABLE IF NOT EXISTS ${tablename}(
    user_id INT(10) NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(255) NOT NULL
    user_phone VARCHAR(255) NOT NULL
    PRIMARY KEY (user_id)
);`.replace(/[\r\n]/g,'')

//查询数据表
const QUERY_TABLE = (tablename) => `SELECT * FORM ${tablename}`

// 插入数据
const INSERT_TABLE = (tablename,{key,val}) => `INSERT INTO ${tablename}(${key}) VALUES (${val})`

// 更新数据
const UPDATE_TABLE = (tablename,{primaryKey,primaryVal},{key,val}) => `UPDATE ${tablename} SET ${key}=${val} WHERE(${primaryKey}=${primaryVal});`

// 删除数据
const DELETE_TABLE = (tablename,{primaryKey,primaryVal}) => `DELETE FROM ${tablename} WHERE(${primaryKey}=${primaryVal})`

class MySql{
    constructor () {
 
    }
    create(tablename){
        return CREATE_TABLE(tablename)
    }
    search(tablename,{primaryKey,primaryVal},{key,val}){
        return QUERY_TABLE(tablename)
    }

}

module.exports = MySql