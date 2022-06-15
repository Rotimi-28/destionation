const router = require('express').Router();

const { Options } = require('../../models');
///////////////////////////////////////////

// GET request for api/options/ endpoint
router.get('/', (req, res) => {
    
    Options.findAll({
    })
        .then(dbOptionsData => res.json(dbOptionsData))
        .catch(err => {

            console.log(err);

            res.status(500).json(err);

        });

});

////////////////////////////////////////////

// POST request for api/options/ endpoint
router.post('/', (req, res) => {
    
    Options.create({
        name : req.body.name,
        question_id: req.body.question_id
    })
        .then(dbOptionsData => res.json(dbOptionsData))
        .catch(err => {

            console.log(err);

            res.status(500).json(err);

        });

});


//////////////////////////////////////////


module.exports = router;