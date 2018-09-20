const mysql = require('mysql');

const databaseName = "apple_collection"

const connection = mysql.createConnection({
    host: "localhost",
    user: "nos",
    password: "nos"
});

async function removeDatabase(){
    connection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        connection.query(`DROP DATABASE ${databaseName}`, function (err, result) {
            if (err) throw err;
            console.log(`Database ${databaseName} removed`);
        });
    });
}

removeDatabase()