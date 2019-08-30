let orm = require('../config/orm.js');

let burger = {
    all: function(cb){
        orm.all('burgers', function(res){
            cb(res);
        })
    },

    insert: function(){
        
    }
}

module.exports = burger;