var mymongo1610 = require('mymongo1610');

function addUser(req, res, next) {
    var nick_name = req.body.nick_name || '';
    mymongo1610.insert('userlist', { nick_name: nick_name }, function(err, result) {
        console.log(result)
        if (nick_name) {
            if (err) {
                res.json({ code: 0, msg: 'error' })
            } else {
                res.json({ code: 1, data: result })
            }
        } else {
            res.json({ code: 4, msg: '用户不存在' })
        }
    });
}
module.exports = {
    addUser: addUser
}