const express = require('express');
const router = express.Router();
const md5 = require('blueimp-md5')

const {UserModel} = require('../db/models')

const filter = {password:0,__v:0}//这是过滤掉password
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/*
定义注册的路由
路由回调函编程:
1. 获取请求参数数据: req.query/param.body
2. 处理数据: 有可能需要操作数据库
3. 返回响应: res.send()/json()
 */
/*router.post('/register', function (req, res) {
  // 1. 获取请求参数数据: req.query/param.body
  const {username, password} = req.body
  // 2. 处理数据: 有可能需要操作数据库
  if(username==='admin') {
    // 3. 返回响应(失败)
    res.send({code: 1, msg: '此用户已存在, 请重新注册222!'})
  } else {
    // 3. 返回响应(成功)
    res.json({code: 0, data: {_id: 'abc123', username}})
  }

})*/
router.post('/register',function (req, res) {
  const {username,password} = req.body
  if(username==='admin'){
    res.send({code:0,msg:'用户存在!!!!!!!!!!!!'})
  }else {
    res.json({code:1,data:{_id:'abc123',username}})
  }
})
/*//下面是注册的
//1. 获取请求参数数据: req.query/param.body
router.post('/register',function (req, res) {
  const {username,password,type} = req.body
})
//2. 处理数据: 有可能需要操作数据库
UserModel.findOne({username},function (error,userDoc) {
  if(error){
    console.log(error)
  }else{
    if(userDoc){
      res.send({
        "code": 1,
        "msg": "此用户已存在"
      })
    }else{
      new UserModel.save({username,password:md5(password),type},function (error, userDoc) {
        if(error){
          console.log(error)
        }else{
          const _id  =userDoc._id
          res.cookie('userid',_id)
          res.send({
            code: 0,
            data: {
              _id,
              username,
              type
            }
          })
        }
      })
    }
  }
})
//下面是登录的
router.post('/login',function (req, res) {
  const {username,password} = req.body
  UserModel.findOne({username,password:md5(password)},filter,function (error, userDoc) {
    if(!userDoc){
      req.send({
        "code": 1,
        "msg": "用户名或密码错误"
      })
    }else{
      res.cookie('userid',_id)
      res.send({
        code: 0,
        data: userDoc
      })
    }
  })
})*/
module.exports = router;
