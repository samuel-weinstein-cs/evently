const { Router } = require('express');
const { User, Event, } = require('../models.js');
const { hashPassword, genToken, checkPassword, restrict } = require("../services/auth");
const userRouter = Router();

const buildAuthResponse = (user) => {
  const userData = {
    username: user.username,
    id: user.id,
  };


  const token = genToken(userData);

  return {
    user: userData,
    token
  };
};

userRouter.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json({ users });
  } catch (e) {
    console.error(e);
    next(e)
  }
})

userRouter.get('/verify', restrict, (req, res) => {
  const user = res.locals.user;
  console.log(res.locals.user)
  res.json(user);
})

userRouter.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findByPk(id);
    res.json({ user });
  } catch (e) {
    console.error(e);
    next(e);
  }
})

userRouter.get('/:id/attending', async (req, res, next) => {
  try{
    const id = req.params.id;
    const attending = await Attending.findAll({
      where:{
        userId: id
      }
    })
    const eventId = attending.map(pair => {
      return pair.eventId;
    })
    const events = await Event.findAll({
      where:{
        id:eventId
      }
    })
    res.json({events})
  } catch(e) {
    console.error(e);
    next(e);
  }
})

userRouter.get('/:id/events', async (req, res, next) => {
  try {
    const id = req.params.id;
    const events = await Event.findAll({
      where: {
        userId: id
      }
    })
    res.json({ events })
  } catch (e) {
    console.error(e);
    next(e);
  }
})

userRouter.post('/register', async (req, res, next) => {
  try {
    const { username, image_url, description, interests, join_date } = req.body;
    const users = await User.findAll({ where: { username } });
    if (users.length === 0) {
      const password_digest = await hashPassword(req.body.password);
      const user = await User.create({
        username,
        password_digest,
        image_url,
        description,
        interests,
        join_date
      })
      const respData = buildAuthResponse(user);
      res.json(respData);
    } else {
      res.status(403).send('Username already exists');
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
})



userRouter.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username
      }
    })
    if(user && await checkPassword(req.body.password, user.password_digest)) {
      const respData = buildAuthResponse(user);
      res.json(respData);
    } else {
      res.status(401).send('Invalid Credentials');
    }
  } catch (e){
    console.error(e);
    next(e);
  }
});

userRouter.put('/:id', restrict, async (req, res, next) => {
  try{
    const userId = res.locals.user.id;
    const id = req.params.id
    if(id===userId){
      const data = req.body;
      const user = await User.findByPk(id);
      await user.update(data);
      res.json({user});
    } else {
      res.status(403).send('Unauthorized');
    }
  } catch(e) {
    console.error(e);
    next(e);
  }
})

module.exports = userRouter;
