var express = require('express')
var router = express.Router();
var data = require('./sample.json')
var bodyParser = require('body-parser')
var url = require('url')

var order = ''
var property = ''
var params = ''

router.get('/',function(req,res){

    params = url.parse(req.url,true).query
    var json = data 
    var count = 0
    var tdata = ''

    for (var i in params )
    {
        property = i
        tdata = data.sort(SortByName)
        data = tdata
        count++;
    }
    if (count > 3 )
    {
        res.status(500).json({'error':'Maximum of 3 columns can be sorted '})
    }
    else 
    {
    res.status(200).json(tdata)
    }
})

function SortByName(a, b){

    var aValue = ''
    var bValue = ''

    if (property == 'first_name')
    {
        order = params.first_name
        aValue = a.first_name.toLowerCase();
        bValue = b.first_name.toLowerCase();
    }
    else if (property == 'last_name')
    {
        order = params.last_name
        aValue = a.last_name.toLowerCase();
        bValue = b.last_name.toLowerCase();
    }
    else if (property == 'email')
    {
        order = params.email
        aValue = a.email.toLowerCase();
        bValue = b.email.toLowerCase();
    }
    else if (property == 'gender')
    {
        order = params.gender
        aValue = a.gender.toLowerCase();
        bValue = b.gender.toLowerCase();
    }
    else if (property == 'age')
    {
        order = params.age
        aValue = a.age;
        bValue = b.age;
    }
    else if (property == 'id')
    {
        order = params.id
        aValue = a.id;
        bValue = b.id;
    }
    // console.log('ordee is ' + order)
    if (order == 'asc')
        {
            return ((aValue < bValue) ? -1 : ((aValue > bValue) ? 1 : 0));
        }
        else 
        {
            return ((aValue < bValue) ? 1 : ((aValue > bValue) ? -1 : 0));
        }
}

module.exports = router;