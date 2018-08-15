const connect = require('../db/connect');

const userlogin = ({
  name,
  password
 }) => {
  const sql = 'select * from login where `name`=? and `password`=?';
  return new Promise((resolve, reject) => {
    connect.query(sql, [
      name,
      password
    ], (error, res) => {
      if (error) {
        reject();
        return;
      }
      console.log(res)
      resolve(res);
    })
  })
}
//查找名字
const userInfo = ({
  name
 }) => {
  const sql = 'select * from login where `name`=?';
  return new Promise((resolve, reject) => {
    connect.query(sql, [
      name
    ], (error, res) => {
      if (error) {
        reject();
        return;
      }
      resolve(res[0])
    })
  })
}
module.exports = {
  userlogin,
  userInfo
}