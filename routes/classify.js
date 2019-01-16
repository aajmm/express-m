var express = require('express');
var router = express.Router();
var Classify = require('./classify_api/index');

/* GET users listing. */
// 添加分类
router.post('/api/addClassify', Classify.addClassify);
// 获取icon表
router.get('/api/getCIcons', Classify.getCIcons);
// 获取所有分类
router.get('/api/getClassifys', Classify.getClassifys);

module.exports = router;