const {Router} = require('express');
const {User, Event} = require('../models.js');
const userRouter = Router();

/*
/user
/user/:id
/user/:id/attending
/user/:id/events
*/

userRouter.get('/', async (req,res) => {
  try{
    const users = await User.findAll();
    res.json({users});
  } catch(e) {
    console.error(e);
  }
})

userRouter.get('/:id', async (req,res) => {
  try{
    const id = req.params.id;
    const user = await User.findByPk(id);
    res.json({quote});
  } catch(e) {
    console.error(e);
  }
})

userRouter.get('/:id/events', async (req, res) => {
  try{
    const id = req.params.id;
    const events = await Event.findAll({
      where:{
        userId: id
      }
    })
    res.json({events})
  } catch(e) {
    console.error(e);
  }
})

module.exports= userRouter;
