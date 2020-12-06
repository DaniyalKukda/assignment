# assignment

# Step 1 

### npm install -g serverless

# Step 2 
### - go to the root folder and run command npm install


# Step 3 
### - go to the root folder and run command serverless offline

The Endpoint is : http://localhost:3000/calculate
Method : POST

Request object : {
"requiredBottles" : 12,
"prices" : [4.10, 40, 950],
"pieces" : [1, 11, 264]
}

Response object : {
    "bottles": 1,
    "packs": 1,
    "Box": 0,
    "price": 44.1
}
