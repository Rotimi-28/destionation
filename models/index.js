
// import models
const User = require ('./User.js')
const Options = require ('./Options.js')
const Question = require ('./Question.js')
const Picture = require ('./Picture.js')


////////////////////////////////////////////

// create associations here

Options.belongsTo(Question, {
    foreignKey: 'question_id'
});

Question.hasMany(Options, {
    foreignKey: 'question_id'
})

Picture.belongsTo(Question, {
    foreignKey: 'question_id'
});

Question.hasOne(Picture, {
    foreignKey: 'question_id'
})
//////////////////////////////////////////////


// export all our models
module.exports = { User, Options, Question, Picture };