var express = require('express');
var router = express.Router();
var Bill = require('./bill_api/index');

/* GET users listing. */
// 添加账单
router.post('/api/addBill', Bill.addBill);
// 删除账单
router.get('/api/delBill', Bill.delBill);
//查询账单
router.get('/api/selectBill', Bill.selectBill);

module.exports = router;