var express = require('express');
var router = express.Router();
var checkToken = require('./middleware/checkToken')

const User = require('./controller/user')
const ItemList = require('./controller/list')

router.post('/login', User.login);
/* router.get('/user/info', checkToken, User.info);
router.get('/user/info2', checkToken, User.info);
router.get('/msgCode', User.code); */
router.get('/list', ItemList.List);
router.get('/delect', ItemList.Delect);
router.post('/update', ItemList.Update);
module.exports = router;
