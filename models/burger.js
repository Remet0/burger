let orm = require('../config/orm.js');

let burger = {
    all: function(cb){
        orm.all('burgers', function(res){
            cb(res);
        })
    },

    insert: function(name, cb){
        orm.insert('burgers', 'burger_name', 'devoured', name, false, cb)
    },
    update: function(colID, cb){
        id = 'id=' + colID;
        orm.update('burgers', 'devoured', true, id, cb)
    }
}

module.exports = burger;