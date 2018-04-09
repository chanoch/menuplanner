var router = require('express').Router();

router.get('/menuplanner/api/v1/recipe', (req,res) => {
    if(req.app.locals.db) {
        req.app.locals.db.collection('recipes').find({}).toArray(function(err, docs) {
            if(err) {
                res.status(500).json({'message': `Error: ${err.message}`});
            } else {
                res.json(docs);
            }
        });
    } else {
        res.status(500).json({'message': 'No database connection'});
    }
});

router.get('/menuplanner/api/v1/menu', (req,res) => {
    if(req.app.locals.db) {
        req.app.locals.db.collection('menus').find({}).sort({"start_date":-1}).toArray(function(err, docs) {
            if(err) {
                res.status(500).json({'message': `Error: ${err.message}`});
            } else {
                res.json(docs);
            }
        });
    } else {
        res.status(500).json({'message': 'No database connection'});
    }
});

router.get('/menuplanner/api/v1/menu/open', (req,res) => {
    if(req.app.locals.db) {
        req.app.locals.db.collection('menus')
            .find({'status':{'$ne': 'archived'}})
            .sort({"start_date":-1})
            .toArray(function(err, docs) {
                if(err) {
                    res.status(500).json({'message': `Error: ${err.message}`});
                } else {
                    res.json(docs);
                }
            });
    } else {
        res.status(500).json({'message': 'No database connection'});
    }
});

router.get('/menuplanner/api/v1/menu/closed', (req,res) => {
    if(req.app.locals.db) {
        req.app.locals.db
            .collection('menus')
            .find({'status':{'$ne': 'closed'}})
            .sort({"start_date":-1})
            .toArray(function(err, docs) {
                if(err) {
                    res.status(500).json({'message': `Error: ${err.message}`});
                } else {
                    res.json(docs);
                }
            });
    } else {
        res.status(500).json({'message': 'No database connection'});
    }
});

/**
 * TODO Handle error 
 * TODO make success reporting consistent
 */
router.post('/menuplanner/api/v1/menu/:menu_key/archive', (req,res) => {
    if(req.app.locals.db) {
        req.app.locals.db
            .collection('menus')
            .update({'key':{'$eq': req.params.menu_key}},
                    {"$set": {'status':'archived'}})
            .then(result => {
                var success = {
                    operation: "archive_menu",
                    params: {"key":req.params.menu_key},
                };
                console.log(JSON.stringify(result)+'d ' + result.nModified + 'd ' + result.nModified===1);
                if(result.nModified===1) {
                    success.result = "success";
                    res.json(success);
                } else {
                    success.result = "failed";
                    res.status(404).json(success);
                }
            });
    } else {
        res.status(500).json({'message': 'No database connection'});
    }
});

module.exports = router;