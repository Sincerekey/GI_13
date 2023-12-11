import fs from 'fs';
import express from 'express';
import axios from 'axios';
import * as dotenv from 'dotenv';
import { transcode } from 'buffer';
import { callbackify } from 'util';

dotenv.config();
const app = express();
// Here we will create our routes for our GET request to recive our data
// These are the HTML routes
app.get('/employees', (req,res)=>{
    fs.readFile('./employees.json', (err,data)=>{
        res.write(data);
        res.end();
    })
})

app.get(`/employees/:id`, (req,res)=>{
    const id = req.params.id

    fs.readFile('./employees.json', (err,data)=>{
    const bufferData = fs.readFileSync('employees.json')
    const dataJson = bufferData.toString()
    const parJson = JSON.parse(dataJson)
    let foundEmp = parJson.employees
    
    for(let i = 0; i < foundEmp.length; i++){
        if(foundEmp[i].employeeID === Number(id)){
            const parDa = JSON.stringify(foundEmp[i])
            res.write(parDa);
            res.end();
        }
        
        }})
})



const port = 3000;

app.listen(port,(port,err)=>{
    if(err) throw err;
    console.log(`Listening on port `+ port);
})