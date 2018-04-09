var connect = require('./connect');

var updateOpenMenus = function() {
    connect()
    .catch(err => {
        console.error(`Can't connect to mlab ${err.stack}`);
        throw err;
    })
    .then(conn => {
        if(conn) {
            var db = conn.db('wiggers_menu');
            var collection = db.collection('menus');
            collection.updateOne(
                {"key": {"$eq": "BkIqqGwHjf"}}, 
                { $set: {"start_date":"2018-04-06T00:00:00.001Z"}}
            ).then(writeresult => console.log(JSON.stringify(writeresult)));

        }
    });
}

var createMenus = function() {
    connect()
    .catch(err => {
        console.error(`Can't connect to mlab ${err.stack}`);
        throw err;
    })
    .then(conn => {
        if(conn) {
            var db = conn.db('wiggers_menu');
            var result = db.collection('menus')
            .insertMany([
                // 6th April
            {
                "key": "BkIqqGwHjf",
                "title": "w/b 6th April",
                "start_date": "2018-04-06T00:00:00.001Z",
                "status": "open",
                "meals": [
                    {
                        "name":"Fajitas",
                        "meal_id": "5a8dac5d798df85e76e517a4"
                    },
                    {
                        "name":"Sea Bass",
                        "meal_id": "5a8dac5d798df85e76e517ae"
                    },
                    {
                        "name":"Curry",
                        "meal_id": "5a8dac5d798df85e76e517a5"
                    },
                    {
                        "name":"Burgers with salad",
                        "meal_id": "5a8dac5d798df85e76e517ad"
                    },
                    {
                        "name":"Omelette",
                        "meal_id": "5a8dac5d798df85e76e517a3"
                    },
                    {
                        "name":"Spaghetti and Meatballs",
                        "meal_id": "5a8dac5d798df85e76e5179a"
                    }
            ]}             // 6th April
            ,{ //23 March
                "key": "Bys9cfwBiM", 
                "title": "w/b 23rd March",
                "start_date": "2018-03-23T00:00:00.001Z",
                "status": "open",
                "meals": [
                    {
                        "name": "Pea and Halloumi Fritters",
                        "meal_id": "5a8dac5d798df85e76e517ac"
                    },
                    {
                        "name":"Macaroni and Cheese",
                        "meal_id": "5a8dac5d798df85e76e517b1"
                    },
                    {
                        "name":"Omelette",
                        "meal_id": "5a8dac5d798df85e76e517a3"
                    },
                    {
                        "name":"Burgers with salad",
                        "meal_id": "5a8dac5d798df85e76e517ad"
                    },
                    {
                        "name":"Spaghetti and meatballs",
                        "meal_id": "5a8dac5d798df85e76e5179a"
                    }
            ]}

            ,{ 
                "key": "By55cfwBsz", 
                "title": "w/b 16th March",
                "start_date": "2018-03-16T00:00:00.001Z",
                "status": "open",
                "meals": [
                    {
                        "name":"Bean Pastie",
                        "meal_id": "5a8dac5d798df85e76e517ab"
                    },
                    {
                        "name":"Curry",
                        "meal_id": "5a8dac5d798df85e76e517a5"
                    },
                    {
                        "name":"Baked Potato",
                        "meal_id": "5a8dac5d798df85e76e517aa"
                    },
                    {
                        "name":"Salmon, Lentils and Asparagus",
                        "meal_id": "5a8dac5d798df85e76e517a1"
                    },
                    {
                        "name":"Chicken Kievs",
                        "meal_id": "5a8dac5d798df85e76e5179f"
                    },
                    {
                        "name":"Sausages and Pasta",
                        "meal_id": "5a8dac5d798df85e76e517a2"
                    }
            ]}
            ,{ 
                "key": "rkKqczvBoz", 
                "title": "w/b 27th February",
                "start_date": "2018-02-27T00:00:00.001Z",
                "status": "open",
                "meals": [        
                    {
                        "name":"Sea Bass",
                        "meal_id": "5a8dac5d798df85e76e517ae"
                    },
                    {
                        "name":"Toast in the Hole",
                        "meal_id": "5a8dac5d798df85e76e517a0"
                    },
                    {
                        "name":"Rice, scrambled eggs, and peas",
                        "meal_id": "5a8c6d0ff36d286fea326c17"
                    },
                    {
                        "name": "Tacos",
                        "meal_id": "5a8c6ceaf36d286fea326c12"
                    }
            ]},
            
            { 
                "key": "H1w9cGwBsG", 
                "title": "w/b 22nd February",
                "start_date": "2018-02-22T00:00:00.001Z",
                "status": "open",
                "meals": [
                    {
                        "name":"Sea Bass",
                        "meal_id": "5a8dac5d798df85e76e517ae"
                    },
                    {
                        "name":"Couscous",
                        "meal_id": "5a8dac5d798df85e76e517a8"
                    },
                    {
                        "name":"Omelette",
                        "meal_id": "5a8dac5d798df85e76e517a3"
                    },
                    {
                        "name":"Fajitas",
                        "meal_id": "5a8dac5d798df85e76e517a4"
                    },
                    {
                        "name":"Baked Potato",
                        "meal_id": "5a8dac5d798df85e76e517aa"
                    }
            ]},        
            { 
                "key": "SyB5qGvSoG", 
                "title": "w/b 15th February",
                "start_date": "2018-02-15T00:00:00.001Z",
                "status": "open",
                "meals": [
                    {
                        "name":"Curry",
                        "meal_id": "5a8dac5d798df85e76e517a5"
                    },
                    {
                        "name":"Spaghetti and Meatballs",
                        "meal_id": "5a8dac5d798df85e76e5179a"
                    },
                    {
                        "name":"Pea and Halloumi Fritters",
                        "meal_id": "5a8dac5d798df85e76e517ac"
                    },
                    {
                        "name":"Stir Fry",
                        "meal_id": "5a8dac5d798df85e76e517b0"
                    },
                    {
                        "name":"Seafood Risotto",
                        "meal_id": "5a8dac5d798df85e76e5179d"
                    }
            ]},
            
            { 
                "key": "H1V95zDrsf", 
                "title": "w/b 7th February",
                "start_date": "2018-02-07T00:00:00.001Z",
                "status": "open",
                "meals": [        
                    {
                        "name":"Pizza",
                        "meal_id": "5a8dac5d798df85e76e51799"
                    },
                    {
                        "name":"Pasta Bake",
                        "meal_id": "5a8dac5d798df85e76e5179b"
                    },
                    {
                        "name":"Burgers with salad",
                        "meal_id": "5a8dac5d798df85e76e517ad"
                    },
                    {
                        "name":"Omelette",
                        "meal_id": "5a8dac5d798df85e76e517a3"
                    },
                    {
                        "name":"Risotto with Veg",
                        "meal_id": "5a8dac5d798df85e76e5179c"
            }]},
            
            { 
                "key": "rkXccGPrjG", 
                "title": "w/b 30th January",
                "start_date": "2018-01-30T00:00:00.001Z",
                "status": "open",
                "meals": [
                    {
                        "name":"Salmon, Lentils and Asparagus",
                        "meal_id": "5a8dac5d798df85e76e517a1"
                    },
                    {
                        "name":"Chicken Kievs",
                        "meal_id": "5a8dac5d798df85e76e5179f"
                    },
                    {
                        "name":"Bean Pastie",
                        "meal_id": "5a8dac5d798df85e76e517ab"
                    },
                    {
                    "name":"Curry",
                    "meal_id": "5a8dac5d798df85e76e517a5"
                    },
                    {
                    "name":"Couscous",
                    "meal_id": "5a8dac5d798df85e76e517a8"
                    }
            ]},
                
            { 
                "key": "S1M99MDriz", 
                "title": "w/b 16th January",
                "start_date": "2018-01-16T00:00:00.001Z",
                "status": "open",
                "meals": [
                    {
                        "name":"Pasta Bake",
                        "meal_id": "5a8dac5d798df85e76e5179b"
                    },
                    {
                        "name":"Fajitas",
                        "meal_id": "5a8dac5d798df85e76e517a4"
                    },
                    {
                        "name":"Burgers with salad",
                        "meal_id": "5a8dac5d798df85e76e517ad"
            }]},
            
            { 
                "key": "SJZ9cfDriz", 
                "title": "w/b 3rd January",
                "start_date": "2018-01-03T00:00:00.001Z",
                "status": "open",
                "meals": [
                    {
                        "name":"Fajitas",
                        "meal_id": "5a8dac5d798df85e76e517a4"
                    },
                    {
                        "name":"Burgers with salad",
                        "meal_id": "5a8dac5d798df85e76e517ad"
                    },
                    {
                        "name":"Stir Fry",
                        "meal_id": "5a8dac5d798df85e76e517b0"
                    },
                    {
                        "name":"Omelette",
                        "meal_id": "5a8dac5d798df85e76e517a3"
                    }
            ]},
            
            { 
                "key": "r1x5qfvSjM", 
                "title": "w/b 27th December",
                "start_date": "2017-12-27T00:00:00.001Z",
                "status": "open",
                "meals": [
                    {
                        "name":"Toast in the Hole",
                        "meal_id": "5a8dac5d798df85e76e517a0"
                    },
                    {
                        "name":"Vegetable Pie",
                        "meal_id": "5a8dac5d798df85e76e517a6"
                    },
                    {
                        "name":"Spaghetti and Meatballs",
                        "meal_id": "5a8dac5d798df85e76e5179a"
                    },
                    {
                        "name":"Chicken Kievs",
                        "meal_id": "5a8dac5d798df85e76e5179f"
                    },
                    {
                        "name":"Baked Potato",
                        "meal_id": "5a8dac5d798df85e76e517aa"
                    },
                    {
                        "name":"Pea and Halloumi Fritters",
                        "meal_id": "5a8dac5d798df85e76e517ac"
                    }
            ]},
            
            { 
                "key": "HyjbqqMvSsG", 
                "title": "w/b 14th December",
                "start_date": "2017-12-14T00:00:00.001Z",
                "status": "open",
                "meals": [
                    {
                        "name":"Salmon, Lentils and Asparagus",
                        "meal_id": "5a8dac5d798df85e76e517a1"
                    },
                    {
                        "name":"Tuna and Pasta Salad",
                        "meal_id": "5ac56ee8f36d281564cb2674"
                    },
                    {
                        "name":"Spaghetti and Meatballs",
                        "meal_id": "5a8dac5d798df85e76e5179a"
                    },
                    {
                        "name":"Bean Pastie",
                        "meal_id": "5a8dac5d798df85e76e517ab"
                    },
                    {
                        "name":"Omelette",
                        "meal_id": "5a8dac5d798df85e76e517a3"
                    },
                    {
                        "name":"Seafood Risotto",
                        "meal_id": "5a8dac5d798df85e76e5179d"
                    }
            ]},
            
            { 
                "key": "SycZqqfwHsG", 
                "title": "w/b 6th December",
                "start_date": "2017-12-06T00:00:00.001Z",
                "status": "open",
                "meals": [
                    {
                        "name":"Fajitas",
                        "meal_id": "5a8dac5d798df85e76e517a4"
                    },
                    {
                        "name":"Pie and Chips",
                        "meal_id": "5ac56ef6f36d281564cb2676"
                    },
                    {
                        "name":"Pea and Halloumi Fritters",
                        "meal_id": "5a8dac5d798df85e76e517ac"
                    },
                    {
                        "name":"Macaroni and Cheese",
                        "meal_id": "5a8dac5d798df85e76e517b1"
                    },
                    {
                        "name":"Sea Bass",
                        "meal_id": "5a8dac5d798df85e76e517ae"
                    },
                    {
                        "name":"Risotto with Veg",
                        "meal_id": "5a8dac5d798df85e76e5179c"
                    }
            ]},
            {
                "_id": {
                    "$oid": "5acbe1e7a687981909347ca2"
                },
                "key": "BkIqqGwHjf",
                "title": "w/b 6th April",
                "start_date": "2018-04-06T00:00:00.001Z",
                "status": "archived",
                "meals": [
                    {
                        "name": "Fajitas",
                        "meal_id": "5a8dac5d798df85e76e517a4"
                    },
                    {
                        "name": "Sea Bass",
                        "meal_id": "5a8dac5d798df85e76e517ae"
                    },
                    {
                        "name": "Curry",
                        "meal_id": "5a8dac5d798df85e76e517a5"
                    },
                    {
                        "name": "Burgers with salad",
                        "meal_id": "5a8dac5d798df85e76e517ad"
                    },
                    {
                        "name": "Omelette",
                        "meal_id": "5a8dac5d798df85e76e517a3"
                    },
                    {
                        "name": "Spaghetti and Meatballs",
                        "meal_id": "5a8dac5d798df85e76e5179a"
                    }
                ]
            }
                    ]);
        console.log(JSON.stringify(result));

    // ({}).toArray().then(recipes => {
    //     console.log(JSON.stringify(recipes));            
    // })
    } else {
        throw new Error('Could not connect');
    }

    });
}        

// createMenus();

var removeMenusWithStatus = function(status) {
    connect()
    .catch(err => {
        console.error(`Can't connect to mlab ${err.stack}`);
        throw err;
    })
    .then(conn => {
        if(conn) {
            var db = conn.db('wiggers_menu');
            var writeresult = db.collection('menus').remove({"status": {"$eq": status}});
        }
    });
}

//removeMenusWithStatus('open');