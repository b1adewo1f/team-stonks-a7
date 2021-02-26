exports.view = function (req, res) {
    res.render('investing', {
        "stockOne": "STOK",
        "stockTwo": "STON"
    });
};