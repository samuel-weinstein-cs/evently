const { Router } = require("express");
const { Event, User } = require("../models")
const eventRouter = Router();
const {hashPassword, genToken, checkPassword, restrict} = require("../services/auth");


eventRouter.get("/", async (req, res) => {
  try {
    const events = await Event.findAll()
    res.json({ events })
  } catch (e) {
    console.error("Seems to be a connection problem m8")
  }
})

eventRouter.get("/:id", async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    res.json({ event })
  } catch (e) {
    console.error("Seems to be a connection problem m8")
  }
})

eventRouter.get("/category/:category", async (req, res) => {
  try {
    const category = req.params.category
    console.log(category)
    const catEvent = await Event.findAll({ where: { category } })
    res.json(catEvent)
  } catch (e) {
    console.error("Seems to be a connection problem m8")
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
      next(e)
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
      next(e)
    }
  })






module.exports = eventRouter;
