
var router = require('express').Router();

router.get('/menuplanner/api/v1/recipes', (req,res) => {
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

router.get('/menuplanner/api/v1/menus', (req,res) => {
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

module.exports = router;