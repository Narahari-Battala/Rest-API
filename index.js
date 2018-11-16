var createError = require('http-errors');
var express = require('express')
var sortRoute = require('./sort')
var pageRoute = require('./pagination')
var bodyParser = require('body-parser')
var api = express()


api.use(bodyParser.json())
api.use(bodyParser.urlencoded({extended:true}))

var data = require('./sample.json')
var tdata = data
api.use('/sort',sortRoute);
api.use('/pages',pageRoute);

api.get('/', function(req,res){

    res.status(200).json(data)
})
api.post('/filter',function(req,res)
{
    var data = tdata
    var count = 0;
    var error
    for (var i in req.body.parameters)
    {
        var param = req.body.parameters[i]
        count ++;
    if (param.field == 'first_name')
    {
        if (param.operator.toLowerCase() == 'contains')
        {
        result = data.
        filter(function(p) { return p.first_name.toLowerCase().indexOf (param.value.toLowerCase()) > -1 })
        }
        else if (param.operator.toLowerCase() == 'startswith')
        {
            result = data.
            filter(function(p) { return (p.first_name.toLowerCase().indexOf (param.value.toLowerCase().charAt(0)) === 0) && (p.first_name.toLowerCase().indexOf (param.value.toLowerCase()) > -1 )})
        }
        else if (param.operator.toLowerCase() == 'equal')
        {
            result = data.
            filter(function(p) { return p.first_name.toLowerCase() === param.value.toLowerCase() })
        }
        else 
        {
             error = 'Enter valid operation for first name'
        }
        data = result
    }
    else if (param.field == 'last_name')
    {
        if (param.operator.toLowerCase() == 'contains')
        {
        result = data.
        filter(function(p) { return p.last_name.toLowerCase().indexOf (param.value.toLowerCase()) > -1 })
        }
        else if (param.operator.toLowerCase() == 'startswith')
        {
            result = data.
            filter(function(p) { return (p.last_name.toLowerCase().indexOf (param.value.toLowerCase().charAt(0)) === 0) && (p.first_name.toLowerCase().indexOf (param.value.toLowerCase()) > -1 )})
        }
        else if (param.operator.toLowerCase() == 'equal')
        {
            result = data.
            filter(function(p) { return p.last_name.toLowerCase() === param.value.toLowerCase() })
        }
        else 
        {
             error = 'Enter valid operation for last name'
        }
        data = result
    }
    else if (param.field.toLowerCase() == 'email')
    {
        if (param.operator.toLowerCase() == 'contains')
        {
        result = data.
        filter(function(p) { return p.email.toLowerCase().indexOf (param.value.toLowerCase()) > -1 })
        }
        else if (param.operator.toLowerCase() == 'startswith')
        {
            result = data.
            filter(function(p) { return (p.email.toLowerCase().indexOf (param.value.toLowerCase().charAt(0)) === 0) && (p.first_name.toLowerCase().indexOf (param.value.toLowerCase()) > -1 )})
        }
        else if (param.operator.toLowerCase() == 'equal')
        {
            result = data.
            filter(function(p) { return p.email.toLowerCase() === param.value.toLowerCase() })
        }
        else 
        {
             error = 'Enter valid operation for email'
        }
        data = result
    }
    else if (param.field.toLowerCase() == 'gender')
    {
        if (param.operator.toLowerCase() == 'equal'){
            result = data.
            filter(function(p) { return p.gender.toLowerCase() === param.value.toLowerCase() })
        }
        else 
        {
             error = 'Enter valid operation gender'
        }
        data = result
    }
    else if (param.field.toLowerCase() == 'age')
    {
        console.log(param.operator.toLowerCase())
        if (param.operator.toLowerCase() == 'equal'){
            result = data.
            filter(function(p) { return p.age === param.value})
        }
        else if (param.operator.toLowerCase() == 'greaterthan'){
            result = data.
            filter(function(p) { return p.age > param.value})
        }
        else if (param.operator.toLowerCase() == 'lessthan'){
            result = data.
            filter(function(p) { return p.age < param.value})
        }
        else 
        {
             error = 'Enter valid operation for age'
        }
        data = result
    }
    else if (param.field.toLowerCase() == 'id')
    {
        if (param.operator.toLowerCase() == 'equal'){
            result = data.
            filter(function(p) { return p.id === param.value})
        }
        else if (param.operator.toLowerCase() == 'greaterthan'){
            result = data.
            filter(function(p) { return p.id > param.value})
        }
        else if (param.operator.toLowerCase() == 'lessthan'){
            result = data.
            filter(function(p) { return p.id < param.value})
        }
        else 
        {
             error = 'Enter valid operation for id'
        }
        data = result
    }
    }
    if (count > 3 )
    {
        res.status(500).json({'error':'Maximum of 3 columns can be sorted '})
    }
    else if (error != undefined)
    {
        res.status(500).json({'error':error})
    }
    else 
    {
    res.status(200).json(result)
    
    }
})

api.listen(3000, () => {
    console.log("server is running at 3000");
});

module.exports = api