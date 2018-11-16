# Rest-API

This Rest-API is mainly intended for users who are willing to use an API for server side pagination, sorting and filtering 
the data to directly display the required processed data on the web page.

I have used Express as the web server. I have used Postman for testing the API

API Endpoints:

### Sorting

Method : GET

https://localhost:3000/sort?first_name=asc&last_name=desc&age=asc

### Filtering

Method: POST

https://localhost:3000/filter

Request:

{. 
    
    "parameters": 
    [
    
    { 
        "field": "age",  
        "operator":"greaterthan",  
        "value": 90.   
    }, 
    
    {   
        "field": "last_name",   
        "operator": "contains",  
        "value": "rian". 
    }
    
    ] 
} 

#### Response:

[

    {
        "id": 864,
        "first_name": "Hi",
        "last_name": "Dorrian",
        "email": "hdorriannz@microsoft.com",
        "gender": "Male",
        "age": 91
    }
]

### Pagination:

Method: GET

https://localhost:3000/pages?page=1&size=10

#### Response:

{

    "items": [
    
        {
        
            "id": 1,
            "first_name": "Andrea",
            "last_name": "Duffus",
            "email": "aduffus0@163.com",
            "gender": "Female",
            "age": 24
        },
        
        {
            "id": 2,
            "first_name": "Weider",
            "last_name": "Verdon",
            "email": "wverdon1@trellian.com",
            "gender": "Male",
            "age": 93
        },
        {
            "id": 3,
            "first_name": "Kaleb",
            "last_name": "Basketter",
            "email": "kbasketter2@dyndns.org",
            "gender": "Male",
            "age": 52
        },
        {
            "id": 4,
            "first_name": "Winifield",
            "last_name": "Murray",
            "email": "wmurray3@businesswire.com",
            "gender": "Male",
            "age": 94
        },
        {
            "id": 5,
            "first_name": "Franklin",
            "last_name": "McConigal",
            "email": "fmcconigal4@slideshare.net",
            "gender": "Male",
            "age": 46
        },
        {
            "id": 6,
            "first_name": "Dyana",
            "last_name": "Bigham",
            "email": "dbigham5@ezinearticles.com",
            "gender": "Female",
            "age": 18
        },
        {
            "id": 7,
            "first_name": "Patience",
            "last_name": "Shoubridge",
            "email": "pshoubridge6@cbc.ca",
            "gender": "Female",
            "age": 84
        },
        {
            "id": 8,
            "first_name": "Roze",
            "last_name": "Flag",
            "email": "rflag7@squidoo.com",
            "gender": "Female",
            "age": 52
        },
        {
            "id": 9,
            "first_name": "Lauretta",
            "last_name": "Saggers",
            "email": "lsaggers8@princeton.edu",
            "gender": "Female",
            "age": 77
        },
        {
            "id": 10,
            "first_name": "Arch",
            "last_name": "Redmille",
            "email": "aredmille9@msn.com",
            "gender": "Male",
            "age": 71
        }
    ],
    "next": "11",
    "current": "1",
    "first": 1,
    "last": 100
}


