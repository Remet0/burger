let connection = require('./connection.js');


let orm = {
    all: function(table, cb){
        //set up the query
        let queryString = 'SELECT * FROM ??'
        //make query using agruments and queryString
        connection.query(queryString, [table], function(err, data){
            if(err) throw err;
            cb(data);
        })
    },

    insert: function(table, insertValue, cb){
                //set up the query
                let queryString = 'INSERT INTO ?? VALUES ??'
                //make query using agruments and queryString
                connection.query(queryString, [table, insertValue], function(err ,data){
                    if(err) throw err;

                    cb(data);
                })
    },
    update: function(table, colName, updateValue, colID, cb){
        let queryString = 'UPDATE ?? SET ?? = ?? WHERE ??'

        connection.query(queryString, [table, colName, updateValue, colID], function(err, data){
            cb(data);
        })
    }
}

module.exports = orm;