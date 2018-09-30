const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "nos",
    password: "nos",
    database: "apple_collection"
});

function getClientsList(){
    
}

function insertClient(client){

    var sql = `INSERT INTO client (name, photo, description)
    	VALUES ("${client.name}", "${client.photo}", "${client.description}")`;

    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log(`Client ${client.name} inserted!`);
    });   
}

function insertRequest(request){

}

function insertCupboard(cupboard){
	
}

function insertType(type){
	
}

module.exports = {
    insertClient: insertClient,
    insertRequest: insertRequest,
    insertCupboard: insertCupboard,
    insertType: insertType,
    getClientsList: getClientsList
};