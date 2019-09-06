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

    insert: function(table, col1, col2, insertValue1, insertValue2, cb){
                //set up the query
                console.log(insertValue1);
                let queryString = `INSERT INTO ?? (${col1},${col2}) VALUES ('${insertValue1.toString()}',${insertValue2})`
                //make query using agruments and queryString
                connection.query(queryString, [table], function(err ,data){
                    if(err) throw err;
                    cb(data);
                })
    },

    update: function(table, colName, updateValue, colID, cb){
        let queryString = `UPDATE ${table} SET ${colName} = ${updateValue} WHERE ${colID}`;
        connection.query(queryString, function(err, data){
            cb(data);
        })
    }
}

module.exports = orm;