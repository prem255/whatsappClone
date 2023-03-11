const Route = require('express').Router();
Route.get('/',(req,res)=>{
    return res.json({msg:'working'})
})
module.exports = Route