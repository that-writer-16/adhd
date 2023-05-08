const express = require('express');
const cors = require("cors");
const bcrypt = require('bcrypt');
const Access = require("./data-access.js");
const saltRounds = 16;
const app = express();
const port = 3000;

app.use(cors())


app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.post("/account/new", (req, res) => {
    Access.DA.createAccount();
    res.send('New Account')
})
app.post("/hobby/new", (req, res) => {
    Access.DA.createHobby();
    res.send('New Hobby')
})
app.post("/item/new", (req, res) => {
    Access.DA.createItem();
    res.send('New Item')
})

app.get("/account/one", (req, res) => {
    Access.DA.getAccount();
    res.send('One Account')
})
app.get("/hobby/one", (req, res) => {
    Access.DA.getHobby();
    res.send('One Hobby')
})
app.get("/hobby/all", (req, res) => {
    Access.DA.getHobbies();
    res.send('All Hobbies')
})
app.get("/item/all", (req, res) => {
    Access.DA.getItems();
    res.send('All Items')
})

app.put("/hobby/update", (req, res) => {
    Access.DA.updateHobby();
    res.send('Update Hobby')
})
app.put("/item/update", (req, res) => {
    Access.DA.updateItem();
    res.send('Update Item')
})

app.delete("/hobby/delete", (req, res) => {
    Access.DA.deleteHobby();
    res.send('Delete Hobby')
})
app.delete("item/delete", (req, res) => {
    Access.DA.deleteItem();
    res.send('Delete Item')
})

app.listen(port, () => console.log(`Express app running on port ${port}!`));