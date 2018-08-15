const Product = require('../model/list');

const List = async (req, res, next) => {
    const list = await Product.select(req.query);
    res.json({
        code: 1,
        data: list
    });
}
const Delect = async (req, res, next) => {
    const list = await Product.delect({ id: req.query.id });;
    res.json({
        code: 1,
        data: list
    });
}
const Update = async (req, res, next) => {
    console.log(req.body)
    const list = await Product.update(req.body.id8, { status: req.body.status });;
    //console.log(list)
    res.json({
        code: 1,
        data: list
    });
}
module.exports = {
    List,
    Delect,
    Update
};
