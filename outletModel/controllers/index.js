var express = require('express');
var mongoose = require('mongoose');
const router = require('router')
const Outlet = require('../index')
const axios = require('axios');
const {createOutlet,deleteOutlet,getOutlet,getAllOutlets,updateOutlet} = require('../methods/index')

module.exports.createOutlet = async (req,res)=>{
    const data =await createOutlet(req.body)
  
    res.send(data)
}

module.exports.deleteOutlet  = async (request,response)=>{
    const data = await deleteOutlet({...request.body});
    response.send(data);
}

module.exports.getOutlet = async (req,res)=>{
    const data = await getOutlet(req.body)
    res.send(data)
}
module.exports.getAllOutlets = async (req,res)=>{
    const data = await getAllOutlets(req.body)
    res.send(data)
}

module.exports.updateOutlet = async (req,res)=>{
    const filterQuery = { _id:req.body._id};

    const Outlet = await getOutlet(filterQuery)
 
    const data = await updateOutlet(filterQuery,{...req.body})
    res.send(data)
}


