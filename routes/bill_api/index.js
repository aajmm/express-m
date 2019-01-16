var mymongo1610 = require('mymongo1610');
// 添加账单
function addBill(req, res, next) {
    var uid = req.body.uid;
    var cid = req.body.cid;
    var timer = req.body.timer;
    var type = req.body.type;
    var money = req.body.money;
    var intro = req.body.intro;
    var icon = req.body.icon;
	if(!uid || !cid || !type || !intro || !money || !icon){
		return res.json({code:3,msg:'丢失参数'})
	}else{
		mymongo1610.insert('bill_list', { uid: uid, cid: cid, timer: timer, type: type, money: money, intro: intro, icon: icon }, function(err, result) {
		    // console.log(result)
		    if (err) {
		        res.json({ code: 0, msg: 'error' })
		    } else {
		        res.json({ code: 1, msg: '添加成功', insertedId: result.insertedId, data: result })
		    }
		});
	}
    
}
// 删除账单
function delBill(req, res, next) {
    var id = req.query.id;
    mymongo1610.delete('bill_list', { _id: id }, function(err, result) {
        // console.log(result)
        if (err) {
            res.json({ code: 0, msg: 'error' })
        } else {
            res.json({ code: 1, msg: '删除成功', data: result })
        }
    });
}
// 查询账单
function selectBill(req, res, next) {
	var uid = req.query.uid;
	var timer = new RegExp(req.query.timer)
	if(!uid || !timer){
		res.json({code:4,msg:'丢失参数'})
	}
    mymongo1610.find('bill_list',{uid:uid,timer:{$regex:timer}}, function(err, result) {
        if (err) {
            res.json({ code: 0, msg: 'error' })
        } else {
			if(result.length == 0){
				res.json({ code: 3, msg:'找不到相关数据'})
			}else{
				res.json({ code: 1, data: result })
			}
        }
    });
}
module.exports = {
    addBill: addBill,
    delBill: delBill,
    selectBill: selectBill
}