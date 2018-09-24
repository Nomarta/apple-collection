const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "nos",
    password: "nos",
    database: "apple_collection"
});

async function createClientTable(){
    var sql = "CREATE TABLE client (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), photo VARCHAR(255), description TEXT)";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table \'client\' created");
    });
}

async function createOrderTable(){
    var sql = "CREATE TABLE order (id INT AUTO_INCREMENT PRIMARY KEY, client_id INT, type_id INT, quantity INT, description TEXT";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table \'order\' created");
    });  
}

async function createTypeTable(){
    var sql = "CREATE TABLE type (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), photo VARCHAR(255), dafault_price INT, description TEXT)";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table \'type\' created");
    });
}

async function createPantryTable(){
    var sql = "CREATE TABLE pantry (id INT AUTO_INCREMENT PRIMARY KEY, type_id INT, quantity INT)";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table \'pantry\' created");
    });  
}

createClientTable()