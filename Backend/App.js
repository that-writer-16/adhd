const express = require('express');
const cors = require("cors");
const bcrypt = require('bcrypt');
const DA = require("./data-access.js").Access;
const saltRounds = 16;
const auth = require("./Auth/auth.js");
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json);
app.use("/api/auth", require("./Auth/route"));


app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.post("/account/new", async (req, res) => {
    let account = await DA.createAccount();
    //Access.DA.createAccount(529, "Kia", "Miles", "kia.miles@gmail.com", "HF*9eh@4fe&wh8#", "HF*9eh@4fe&wh8#");
    res.send(account);
})
app.post("/hobby/new", async (req, res) => {
    let hobby = await DA.createHobby();
    //Access.DA.createHobby(182, "Puzzle", "Different Puzzles & Accessories", 529, [290, 827, 918], 120.89, 150.44);
    res.send(hobby);
})
app.post("/item/new", async (req, res) => {
    let item = await DA.createItem();
    //Access.DA.createItem(290, "Van Gogh Puzzle", "1000 piece Vincent van Gogh puzzle", 9, 40.65, 55.30, 182);
    res.send(item);
})

app.get("/account/one", async (req, res) => {
    let account = await DA.getAccount();
    //Access.DA.getAccount(529);
    res.send(account);
})
app.get("/hobby/one", async (req, res) => {
    let hobby = await DA.getHobby();
    //Access.DA.getHobby('645a9ed8ad530de5f1b03939');
    res.send(hobby);
})
app.get("/hobby/all", async (req, res) => {
    let hobby = await DA.getHobbies();
    //Access.DA.getHobbies()
    res.send(hobby);
})
app.get("/item/all", async (req, res) => {
    let item = await DA.getItems();
    //Access.DA.getItems();
    res.send(item);
})

app.put("/hobby/update", async (req, res) => {
    let hobby = await DA.updateHobby();
    //Access.DA.updateHobby('645a9f30ad530de5f1b0393c', "Puzzles", "Different Puzzles", 529, [290, 827], 120, 150.4);
    res.send(hobby);
})
app.put("/item/update", async (req, res) => {
    let item = await DA.updateItem();
    //Access.DA.updateItem('645a9ef7ad530de5f1b0393a', "Van Gogh Sunflower Puzzle", "1000 piece Vincent van Gogh puzzle", 10, 40.65, 55.30, 182);
    res.send(item);
})

app.delete("/hobby/delete", async (req, res) => {
    let hobby = await DA.deleteHobby();
    //Access.DA.deleteHobby('645a9f33ad530de5f1b0393d');
    res.send(hobby);
})
app.delete("/item/delete", async (req, res) => {
    let item = await DA.deleteItem();
    //Access.DA.deleteItem('645a9f1fad530de5f1b0393b');
    res.send(item);
})

function login (){
    try{
        username = req.body.username;
        password = req.body.password;

    }catch(e){
        
    }
}

app.listen(port, () => console.log(`Express app running on port ${port}!`));