const express = require('express');
const cors = require("cors");
const bcrypt = require ('bcrypt');
const saltRounds = 16;
const app = express();
const port = 3000;

app.use(cors())


app.get('/', (req, res) => res.send('Hello World!'));

app.post("/account/new", (req, res) => {
    res.send('New Account')
})
app.post("/hobby/new", (req, res) => {
    res.send('New Hobby')
})
app.post("/item/new", (req, res) => {
    res.send('New Item')
})

app.get("/account/one", (req, res) => {
    res.send('One Account')
})
app.get("/hobby/one", (req, res) => {
    res.send('One Hobby')
})
app.get("/hobby/all", (req, res) => {
    res.send('All Hobbies')
})
app.get("/item/all", (req, res) => {
    res.send('All Items')
})

app.put("/hobby/update", (req, res) => {
    res.send('Update Hobby')
})
app.put("/item/update", (req, res) => {
    res.send('Update Item')
})

app.delete("/hobby/delete", (req, res) => {
    res.send('Delete Hobby')
})
app.delete("item/delete", (req, res) => {
    res.send('Delete Item')
})

app.listen(port, () => console.log(`Express app running on port ${port}!`));