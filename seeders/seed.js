let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb+srv://roamingpink:2425Halo@cluster0.pmxvv.mongodb.net/budget?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useFindAndModify: false
});

let budgetSeed = [
    {
        "_id": "5f57c58da5da552a1008263b",
        "name": "breakfast",
        "value": -10,
        "date": "2020-09-08T17:55:25.503Z",
        "__v": 0
    },
    {
        "_id": "5f57c599a5da552a1008263c",
        "name": "clothes",
        "value": -20,
        "date": "2020-09-08T17:55:37.002Z",
        "__v": 0
    },
    {
        "_id": "5f57c5a4a5da552a1008263d",
        "name": "project work",
        "value": 50,
        "date": "2020-09-08T17:55:48.148Z",
        "__v": 0
    },
    {
        "_id": "5f5a7377bef3c44008cfb767",
        "name": "lunch",
        "value": -11,
        "date": "2020-09-10T18:41:59.778Z",
        "__v": 0
    },
    {
        "_id": "5f5b8909e42604420428d8c7",
        "name": "dinner",
        "value": -20,
        "date": "2020-09-11T14:26:17.061Z",
        "__v": 0
    },
    {
        "_id": "5f5b8930e42604420428d8c8",
        "name": "freelancing project",
        "value": 200,
        "date": "2020-09-11T14:26:56.381Z",
        "__v": 0
    },
    {
        "_id": "5f5b9ef6d9258e3c1cb8ab54",
        "name": "groceries",
        "value": -40,
        "date": "2020-09-11T15:59:50.529Z",
        "__v": 0
    },
    {
        "_id": "5f5ba8a9d9258e3c1cb8ab55",
        "name": "coffee",
        "value": 4,
        "date": "2020-09-11T16:40:24.386Z",
        "__v": 0
    },
    {
        "_id": "5f5ba8a9d9258e3c1cb8ab56",
        "name": "gas",
        "value": -20,
        "date": "2020-09-11T16:41:01.370Z",
        "__v": 0
    },
    {
        "_id": "5f5bd80c91e76a01141bfa5b",
        "name": "electric bill",
        "value": -25,
        "date": "2020-09-11T20:03:14.597Z",
        "__v": 0
    },
    {
        "_id": "5f5bdcb9cccefd25a4e54988",
        "name": "phone bill",
        "value": -15,
        "date": "2020-09-11T20:23:14.523Z",
        "__v": 0
    },
    {
        "_id": "5f5cc6b51cbd133c04c7b2c1",
        "name": "farmer's market",
        "value": -12,
        "date": "2020-09-12T13:01:41.520Z",
        "__v": 0
    },
    {
        "_id": "5f5cc6db1cbd133c04c7b2c2",
        "name": "drinks",
        "value": -22,
        "date": "2020-09-12T13:02:11.267Z",
        "__v": 0
    },
    {
        "_id": "5f5cc8561cbd133c04c7b2c3",
        "name": "snack",
        "value": -9,
        "date": "2020-09-12T13:08:34.437Z",
        "__v": 0
    },
    {
        "_id": "5f5fffe703c2e23850750e7c",
        "name": "project work",
        "value": 150,
        "date": "2020-09-14T23:42:31.285Z",
        "__v": 0
    },
    {
        "_id": "5f5ffff703c2e23850750e7d",
        "name": "parking",
        "value": -15,
        "date": "2020-09-14T23:42:47.268Z",
        "__v": 0
    }
]

db.Transaction.deleteMany({})
  .then(() => db.Transaction.insertMany(budgetSeed))
  .then(data => {
    console.log(data.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });