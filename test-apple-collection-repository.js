const repository = require('./apple-collection-repository');

function testInsertClient(){
    client = {
        name: "nosnos",
        photo: "path/to/photo",
        description: "description"
    }
    repository.insertClient(client)
}

function testInsertType(){
    type = {
        name: "czerwone",
        photo: "path/to/photo",
        description: "description",
        dafaultPrice: 30
    }
    repository.insertType(type)
}

function testInsertRequest(){
    request = {
        client: {id: 1},
        type: {id: 1},
        paymentMethod: "CASH",
        isPaid: true,
        price: 30,
        quantity: 5,
        date: "2018-08-30",
        description: "to sie udalo"
    }
    repository.insertRequest(request)
}

function testInsertCupboard(){
    cupboard = {
        type: {id: 1},
        quantity: 100
    }
    repository.insertCupboard(cupboard)
}

function testGetClientsList(){
    repository.getClientsList(r => console.log(r));
}

testInsertClient();
testInsertType();
testInsertRequest();
testInsertCupboard();
testGetClientsList();