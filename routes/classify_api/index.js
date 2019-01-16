var mymongo1610 = require('mymongo1610');
// 添加分类
function addClassify(req, res, next) {
    var id = req.body.id;
    var cName = req.body.cName;
    var cType = req.body.cType;
    var cIcon = req.body.cIcon;
    var uid = req.body.uid;
    mymongo1610.find('classify_list', { cName: cName, cType: cType, cIcon: cIcon, uid: uid }, function(err, result) {
        if (err) {
            res.json({ code: 0, msg: 'error' })
        } else {
            if (result.length > 0) {
                res.json({ code: 4, msg: '该分类已存在' })
            } else {
                mymongo1610.insert('classify_list', { cName: cName, cType: cType, cIcon: cIcon, uid: uid }, function(err, result) {
                    if (err) {
                        res.json({ code: 0, msg: 'error' })
                    } else {
                        res.json({ code: 1, data: result })
                    }
                });
            }
        }
    });
}
// 获取icon表
function getCIcons(req, res, next) {
    mymongo1610.find('icon_list', function(err, result) {
        if (err) {
            res.json({ code: 0, msg: 'error' })
        } else {
            res.json({ code: 1, data: result })
        }
    });
}
// 获取全部分类
function getClassifys(req, res, next) {
    var uid = req.query.uid;
    mymongo1610.find('classify_list', { uid: uid }, function(err, result) {
        // console.log(result)
        if (err) {
            res.json({ code: 0, msg: 'error' })
        } else {
            res.json({ code: 1, data: result })
        }
    });
}

module.exports = {
    addClassify: addClassify,
    getCIcons: getCIcons,
    getClassifys: getClassifys
}