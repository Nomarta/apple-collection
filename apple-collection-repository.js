const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "nos",
    password: "nos",
    database: "apple_collection"
});

function getClientsList(callback){
    var sql = `SELECT * FROM client`;
    connection.query(sql, function (err, result, fields) {
        if (err) throw err;
        callback(result);
    });    
}

function insertClient(client){
    var sql = `INSERT INTO client (name, photo, description)
    	VALUES (
            "${client.name}", 
            "${client.photo}", 
            "${client.description}"
        )`;
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log(`Client ${client.name} inserted with id ${result.insertId}.`);
    });   
}

function insertRequest(request){
    var sql = `INSERT INTO request (client_id, type_id, date, payment_method, price, is_paid, quantity, description)
    	VALUES (
            ${request.client.id}, 
            ${request.type.id}, 
            "${request.date}",
            "${request.paymentMethod}",
            ${request.price},
            ${request.isPaid},
            ${request.quantity},
            "${request.description}"
        )`;
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log(`Request inserted with id ${result.insertId}.`);
    });   
}

function insertCupboard(cupboard){
    var sql = `INSERT INTO cupboard (type_id, quantity)
    VALUES (
        ${cupboard.type.id}, 
        ${cupboard.quantity}
    )`;
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log(`Cupboard inserted with id ${result.insertId}.`);
    });   	
}

function insertType(type){
    var sql = `INSERT INTO type (name, photo, dafault_price, description)
    VALUES (
        "${type.name}", 
        "${type.photo}",
        ${type.dafaultPrice},
        "${type.description}"
    )`;
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log(`Type inserted with id ${result.insertId}.`);
    }); 	
}

module.exports = {
    insertClient: insertClient,
    insertRequest: insertRequest,
    insertCupboard: insertCupboard,
    insertType: insertType,
    getClientsList: getClientsList
};