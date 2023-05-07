const { MongoClient, ObjectId } = require('mongodb');d

const uri = "mongodb+srv://tharris:zZ9UefFGL63S191X@cluster0.poz2wm4.mongodb.net/";

const dbName = 'ADHD';

exports.DA = {
    createAccount: async function(){
        const client = await MongoClient.connect(uri);
        try{
            const db = client.db(dbName);
            const collection = db.collection('Account');

            var newAccount = {
                ID: id,
                FirstName: firstName,
                LastName: lastName,
                Email: email,
                Password: password,
                PasswordConfirmation: passwordConfirmation
            }
            var results = await collection.insertOne(newAccount);

            console.log("createAccount: results!");
            console.log(results);

            return results;
        }catch(e){
            console.log("DA.createAccount: Something don Goofed.");
            console.log(e);
        }finally{
            client.close();
        }
    },
    createHobby: async function(){
        const client = await MongoClient.connect(uri);
        try{
            const db = client.db(dbName);
            const collection = db.collection('Hobby');

            var newHobby = {
                ID: id,
                Name: name,
                Description: description,
                Seller: seller,
                Items: [],
                CalculatedPrice: calculatedPrice,
                SellerPrice: sellerPrice
            }
            var results = await collection.insertOne(newHobby);

            console.log("createHobby: results!");
            console.log(results);

            return results;
        }catch(e){
            console.log("DA.createHobby: Something don Goofed.");
            console.log(e);
        }finally{
            client.close();
        }
    },
    createItem: async function(){
        const client = await MongoClient.connect(uri);
        try{
            const db = client.db(dbName);
            const collection = db.collection('Item');

            var newItem = {
                ID: id,
                Name: name,
                Description: description,
                Condition: condition,
                CalculatedPrice: calculatedPrice,
                SellerPrice: sellerPrice,
                Hobby: hobby
            }
            var results = await collection.insertOne(newItem);

            console.log("createItem: results!");
            console.log(results);

            return results;
        }catch(e){
            console.log("DA.createItem: Something don Goofed.");
            console.log(e);
        }finally{
            client.close();
        }
    },
    getAccount: async function(){
        const client = await MongoClient.connect(uri);
        try{
            const db = client.db(dbName);
            const collection = db.collection('Account');

            var query = { _id: new ObjectId(id) };
            var results = await collection.find(query).toArray();

            console.log("getAccount: results!");
            console.log(results);
        }catch(e){
            console.log("DA.getAccount: Something don Goofed.");
            console.log(e);
        }finally{
            client.close();
        }
    },
    getHobby: async function(){
        const client = await MongoClient.connect(uri);
        try{
            const db = client.db(dbName);
            const collection = db.collection('Hobby');

            var query = { _id: new ObjectId(id) };
            var results = await collection.find(query).toArray();

            console.log("getHobby: results!");
            console.log(results);
        }catch(e){
            console.log("DA.getHobby: Something don Goofed.");
            console.log(e);
        }finally{
            client.close();
        }
    },
    getHobbies: async function(){
        const client = await MongoClient.connect(uri);
        try{
            const db = client.db(dbName);
            const collection = db.collection('Hobby');

            var query = {};
            var results = await collection.find(query).toArray();

            console.log("getHobbies: results!");
            console.log(results);

            return results;
        }catch(e){
            console.log("DA.getHobbies: Something don Goofed.");
            console.log(e);
        }finally{
            client.close();
        }
    },
    getItems: async function(){
        const client = await MongoClient.connect(uri);
        try{
            const db = client.db(dbName);
            const collection = db.collection('Item');

            var query = {};
            var results = await collection.find(query).toArray();

            console.log("getItems: results!");
            console.log(results);

            return results;
        }catch(e){
            console.log("DA.getItems: Something don Goofed.");
            console.log(e);
        }finally{
            client.close();
        }
    },
    updateHobby: async function(){
        const client = await MongoClient.connect(uri);
        try{
            const db = client.db(dbName);
            const collection = db.collection('Hobby');

            var query = { _id: new ObjectId(id) };
            var update = {
                $set: {
                    ID: id,
                    Name: name,
                    Description: description,
                    Seller: seller,
                    Items: [],
                    CalculatedPrice: calculatedPrice,
                    SellerPrice: sellerPrice
                }
            }

            var results = await collection.updateOne(query, update);

            console.log("updateHobby: results!");
            console.log(results);

            return results;
        }catch(e){
            console.log("DA.updateHobby: Something don Goofed.");
            console.log(e);
        }finally{
            client.close();
        }
    },
    updateItem: async function(){
        const client = await MongoClient.connect(uri);
        try{
            const db = client.db(dbName);
            const collection = db.collection('Item');

            var query = { _id: new ObjectId(id) };
            var update = {
                $set: {
                    ID: id,
                    Name: name,
                    Description: description,
                    Condition: condition,
                    CalculatedPrice: calculatedPrice,
                    SellerPrice: sellerPrice,
                    Hobby: hobby
                }
            }

            var results = await collection.updateOne(query, update);

            console.log("updateItem: results!");
            console.log(results);

            return results;
        }catch(e){
            console.log("DA.updateItem: Something don Goofed.");
            console.log(e);
        }finally{
            client.close();
        }
    },
    deleteHobby: async function(){
        const client = await MongoClient.connect(uri);
        try{
            const db = client.db(dbName);
            const collection = db.collection('Hobby');

            var query = { _id: new ObjectId(id) };
            var results = await collection.deleteOne(query);

            console.log("deleteHobby: results!");
            console.log(results);

            return results;
        }catch(e){
            console.log("DA.deleteHobby: Something don Goofed.");
            console.log(e);
        }finally{
            client.close();
        }
    },
    deleteItem: async function(){
        const client = await MongoClient.connect(uri);
        try{
            const db = client.db(dbName);
            const collection = db.collection('Item');

            var query = { _id: new ObjectId(id) };
            var results = await collection.deleteOne(query);

            console.log("deleteItem: results!");
            console.log(results);

            return results;
        }catch(e){
            console.log("DA.deleteItem: Something don Goofed.");
            console.log(e);
        }finally{
            client.close();
        }
    }
}