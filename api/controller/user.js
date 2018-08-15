const User = require('../model/user')
const jwt = require('jsonwebtoken')

const login = async (req, res, next) => {
  const {
    name,
    password
  } = req.body;
  //console.log(req.body.password)
  const userInfo = await User.userInfo({
    name
  });
  //console.log(userInfo.password)
  if (userInfo.password == req.body.password) {
    res.cookie('token', jwt.sign({
      name: name
    }, 'admin'), {
        maxAge: 60 * 1000 * 60 * 24
      });
    res.json({
      code: 0,
      msg: "登录成功"
    })
  } else {
    res.json({
      code: 1,
      msg: "登录失败"
    })
  }
}
module.exports = {
  login
}