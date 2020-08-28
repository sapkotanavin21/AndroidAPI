const express = require('express');
const Resturants = require('../model/cart');

const router = express.Router();

router.route('/')
    .get((req,res,next)=>{
        Resturants.find()
        .then((resturant)=>{
            res.json(resturant);
        }).catch(next);
})

.post((req,res,next)=>{
    // console.log(req.body);
    Resturants.create(req.body)
    .then((resturant)=>{
        res.json(resturant);
    }).catch(next);
});

router.route('/:id/location')
.get((req,res,next) =>{
    Resturants.findById(req.params.id)
    .then((resturant)=>{
        res.json(resturant.location);
    }).catch(next);
})
.post((req,res,next)=>{
    Resturants.findById(req.params.id)
        .then((resturant) =>{
            resturant.location.push(req.body);
                resturant.save()
            .then((resturant) => {
        res.json(resturant);
        })
    }).catch(next);
});

router.route('/:id/foods')
.get((req,res,next) =>{
    Resturants.findById(req.params.id)
    .then((resturant)=>{
        res.json(resturant.food);
    }).catch(next);
})

.post((req,res,next)=>{
    Resturants.findById(req.params.id)
        .then((resturant) =>{
            resturant.food.push(req.body);
                resturant.save()
            .then((resturant) => {
        res.json(resturant);
        })
    }).catch(next);
});
router.route('/:id')
.delete((req,res,next)=>{
    Resturants.findByIdAndDelete(req.params.id)
    .then((resturant)=>{
        res.json(resturant);
    }).catch(next);
})

module.exports = router;