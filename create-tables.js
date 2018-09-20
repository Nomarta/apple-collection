const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "nos",
    password: "nos",
    database: "apple_collection"
});

async function createClientTable(){
    var sql = "CREATE TABLE client (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), photo VARCHAR(255), description VARCHAR(255))";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table \'client\' created");
    });
}

async function createOrderTable(){
  
}

async function createAppleTypeTable(){
  
}

async function createPantryTable(){
  
}

createClientTable()