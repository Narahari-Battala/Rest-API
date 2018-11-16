var express = require('express')
var api = express()
var router = express.Router();
var array = require('./sample.json')
var bodyParser = require('body-parser')
var url = require('url')

api.use(bodyParser.json())
api.use(bodyParser.urlencoded({extended:true}))

// page numbers starts from 1
router.get('/',function(req,res){
    var page = req.query.page
    var perPage = req.query.size
    if (page > 0 && perPage > 0)
    {
    var obj = {}
    var start = (page - 1) * perPage
    var end = page * perPage
  
    obj.items = array.slice(start, end)
    if (obj.items.length === 0) {
      return obj
    }
  
    if (page > 1) {
      obj.prev = page - 1
    }
  
    if (end < array.length) {
      obj.next = page + 1
    }
  
    if (obj.items.length !== array.length) {
      obj.current = page
      obj.first = 1
      obj.last = Math.ceil(array.length / perPage)
    }
  
    res.status(200).json(obj)
}
else{
    res.status(200).json({'Invalid parameters':'Enter valid values for page and size'})
}
  })

module.exports = router