const { Picture } = require('../models');

const pictureData = [
    {
        image_path: '"/assets/images/food.jpeg"',
        question_id: 1   
    },
    {
        image_path: '"/assets/images/food.jpeg"',
        question_id: 2   
    },
    {
        image_path: '"/assets/images/sights.jpeg"',
        question_id: 3   
    },
    {
        image_path: '"/assets/images/food.jpeg"',
        question_id: 4   
    },
    { 
        
        
        image_path: '"/assets/images/drinks.jpeg"',
        question_id: 5   
    }]

const seedPictures = () => Picture.bulkCreate(pictureData);

module.exports = seedPictures;