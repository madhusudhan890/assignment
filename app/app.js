const express = require("express")
const route = express.Router()
const services = require("./services")



route.post("/hello",async(req,res)=> {
    const dam = await services.sam(req,res)
    res.json(dam)
})
