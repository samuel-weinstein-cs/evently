const { Router } = require("express");
const { Event, User, Attending } = require("../models")
const {Op} = require("sequelize");
const eventRouter = Router();
const {hashPassword, genToken, checkPassword, restrict} = require("../services/auth");


eventRouter.get("/", async (req, res) => {
  try {
    const events = await Event.findAll()
    res.json({ events })
  } catch (e) {
    console.error(e);
    next(e);
  }
})

eventRouter.get("/:id", async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    res.json({ event })
  } catch (e) {
    console.error(e);
    next(e);
  }
})

eventRouter.get("/category/:category", async (req, res) => {
  try {
    const category = req.params.category
    //console.log(category)
    const catEvent = await Event.findAll({ where: { category } })
    res.json(catEvent)
  } catch (e) {
    console.error(e);
    next(e);
  }
})

eventRouter.post('/', restrict, async (req, res, next) => {
  try {
    const userId = res.locals.user.id;
    const user = await User.findByPk(userId);
    const event = await Event.create(req.body);
    await user.addEvent(event);
    res.json(event);
  } catch (e) {
    next(e)
  }
})

eventRouter.route("/:id/attending")
  .get( async (req, res, next) => {
    try {
      const id = req.params.id;
      const attending = await Attending.findAll({
        where:{
          eventId: id
        }
      })
      const userId= attending.map(pair => {
        return pair.userId;
      })
      const users = await User.findAll({
        where:{
          id:userId
        }
      })
      res.json({users});
    } catch(e) {
      console.error(e);
      next(e);
    }
  })
  .post(restrict, async (req, res, next) => {
    try {
      const id = req.params.id;
      const userId = res.locals.user.id;
      const event = await Event.findByPk(id);
      const user = await User.findByPk(userId);
      await event.addUser(user);
      res.status(201).send('Created');
    } catch(e) {
      console.error(e);
      next(e);
    }
  })
  .delete(restrict, async(req, res, next) => {
    try{
      const id = req.params.id;
      const userId = res.locals.user.id;
      const attendingPair = await Attending.findOne({
        where:{
          [Op.and]: [{eventId:id}, {userId}]
        }
      })
      attendingPair.destroy();
      res.json({attendingPair});
    } catch(e) {
      console.error(e);
      next(e);
    }
  })

eventRouter.route("/:id")
  .put(restrict, async (req, res, next) => {
    try {
      const event = await Event.findByPk(req.params.id);
      const userId = res.locals.user.id;
      const id = event.userId;
      if(id===userId){
        await event.update(req.body)
        res.json(event)
      } else {
        res.status(403).send('Unauthorized');
      }
    } catch (e) {
      console.error(e);
      next(e);
    }
  })
  .delete(restrict, async (req, res, next) => {
    try {
      const event = await Event.findByPk(req.params.id);
      const userId = res.locals.user.id;
      const id = event.userId;
      if(id===userId){
        event.destroy();
        res.json(event);
      } else {
        res.status(403).send('Unauthorized');
      }
    } catch (e) {
      console.error(e);
      next(e)
    }
  })






module.exports = eventRouter;
