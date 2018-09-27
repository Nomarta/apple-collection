const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "nos",
    password: "nos",
    database: "apple_collection"
});

async function createClientTable(){
    var sql = `CREATE TABLE client (
        id INT AUTO_INCREMENT PRIMARY KEY, 
        name VARCHAR(255), 
        photo VARCHAR(255), 
        description TEXT
    )`;
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table \'client\' created");
    });
}

async function createTypeTable(){
    var sql = `CREATE TABLE type (
        id INT AUTO_INCREMENT PRIMARY KEY, 
        name VARCHAR(255), 
        photo VARCHAR(255), 
        dafault_price INT, 
        description TEXT
    )`;
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table \'type\' created");
    });
}

async function createRequestTable(){
    var sql = `CREATE TABLE request (
        id INT AUTO_INCREMENT PRIMARY KEY, 
        payment_method ENUM(\'CASH\', \'TRANSFER\'), 
        is_paid BOOL,  
        quantity INT, 
        description TEXT,
        client_id INT, FOREIGN KEY fk_client(client_id) REFERENCES client(id) ON UPDATE CASCADE ON DELETE RESTRICT,
        type_id INT, FOREIGN KEY fk_type(type_id) REFERENCES type(id) ON UPDATE CASCADE ON DELETE RESTRICT
    )`;
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table \'request\' created");
    });  
}

async function createCupboardTable(){
    var sql = `CREATE TABLE cupboard (
        id INT AUTO_INCREMENT PRIMARY KEY, 
        quantity INT,
        type_id INT, FOREIGN KEY fk_type(type_id) REFERENCES type(id) ON UPDATE CASCADE ON DELETE RESTRICT
    )`;
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table \'cupboard\' created");
    });  
}

async function createAllTables(){
    await createClientTable()
    await createTypeTable()
    createRequestTable()
    createCupboardTable()
}

createAllTables()
