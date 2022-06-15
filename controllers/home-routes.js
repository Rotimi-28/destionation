const router = require('express').Router();


const sequelize = require('../config/connection');

const { Question, User, Options, Picture } = require('../models');

/////////////////////////////////////////


// set up our root directory '/'

router.get('/', (req, res) => {

    res.render('homepage');
    
})


/////////////////////////////

router.get('/login', (req, res) => {

    // we dont need 2nd argument for render method
    // because we dont need any variables
    res.render('login');
});


////////////////////////////

router.get('/quiz', (req, res) => {

    Question.findAll({
        include: [
            {model: Options},
            {model: Picture}
        ]

    }).then(dbQuestionData => {
        
        const questions = dbQuestionData.map(question => question.get({ plain:true}));
        console.log(questions);
        res.render ('quiz', {questions});
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    
    
});

/////////////////////////////

router.get('/results1', (req, res) => {

    res.render('results1');

})

router.get('/results2', (req, res) => {

    res.render('results2');

})

router.get('/results3', (req, res) => {

    res.render('results3');

})

router.get('/results4', (req, res) => {

    res.render('results4');

})



/////////////////////////////////

module.exports = router;