const { Router } = require("express");
const { Event } = require("../models")
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

    const event = await Event.create(req.body);
    res.json(event);
  } catch (e) {
    next(e)
  }
})

eventRouter.route("/:id",restrict)
  .put(async (req, res, next) => {
    try {
      const event = await Event.findByPk(req.params.id);
      await event.update(req.body)
      res.json(event)
    } catch (e) {
      next(e)
    }
  })
  .delete(async (req, res, next) => {
    try {
      const event = await Event.destroy({ where: { id: req.params.id } })
      res.json(event)
    } catch (e) {
      next(e)
    }
  })






module.exports = eventRouter;
