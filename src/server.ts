import "reflect-metadata";

import express from "express";

import "./database";

const app = express();

//inicialize server - http://localhost:3000
app.listen(3000, ()=> console.log("Server is running"))

//get 
app.get("/products", (request, response)=>{
    return response.send("Olá Sara");
});

app.post("/createProduct", (request, response)=>{
    return response.send("Olá, foi criado um produto");
});