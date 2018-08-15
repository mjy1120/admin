const connect = require('../db/connect');
//所有
const select = (options) => {
    const {
        page = 1,
        pageSize = 5
    } = options;
    const sql = `select * from (product) limit ${(page - 1) * pageSize},${pageSize}`;
    return new Promise((resolve, reject) => {
        connect.query(sql, [], (error, res) => {
            if (error) {
                reject();
                return;
            }
            connect.query("select count(*) from product", [], (err, res2) => {
                resolve({
                    count: res2[0]["count(*)"],
                    list: res
                })
            })
        })
    })
}
//删除
const delect = (options) => {
    const sql = 'select * from product where `id`=?';
    return new Promise((resolve, reject) => {
        connect.query(sql, [options.id], (error, res) => {
            if (error) {
                reject();
                return;
            }
            resolve(res[0])
        })
    })
}
//详情
const detail = (options) => {
    const sql = 'select * from product where `id`=?';
    return new Promise((resolve, reject) => {
        connect.query(sql, [options.id], (error, res) => {
            if (error) {
                reject();
                return;
            }
            resolve(res[0])
        })
    })
}
//发布
const update = (id, options) => {
    let sql = "update product set";
    for (var key in options) {
        sql += ' ' + key + '=' + options[key]
    }
    sql += ' where id=' + id;
    return new Promise((resolve, reject) => {
        connect.query(sql, [], (error, res) => {
            if (error) {
                reject();
                return;
            }
            detail({ id: id }).then(res2 => {
                // console.log(res2)
                resolve(res2)
            })
        })
    })
}

module.exports = {
    select,
    delect,
    update
}