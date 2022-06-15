const router = require('express').Router();

const { Question } = require('../../models');
///////////////////////////////////////////

// GET request for api/questions/ endpoint
router.get('/', (req, res) => {
    
    Question.findAll({
    })
        .then(dbQuestionData => res.json(dbQuestionData))
        .catch(err => {

            console.log(err);

            res.status(500).json(err);

        });

});

////////////////////////////////////////////

// POST request for api/questions/ endpoint
router.post('/', (req, res) => {
    
    Question.create({
        name : req.body.name
    })
        .then(dbQuestionData => res.json(dbQuestionData))
        .catch(err => {

            console.log(err);

            res.status(500).json(err);

        });

});


//////////////////////////////////////////


module.exports = router;