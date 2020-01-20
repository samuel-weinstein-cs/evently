const { Event, User, Attending } = require('./models');

const seed = async () => {
  await Event.destroy({ where: {} })
  await User.destroy({ where: {} })
  await Attending.destroy({ where: {} });

  const event1 = await Event.create({
    title: "Event1",
    date: "January, 23, 2020",
    location: "GA, NY Campus",
    time: "11am",
    image_url: "https://si.wsj.net/public/resources/images/MK-CG029_MBASTA_P_20130904152503.jpg",
    category: "Not School"
  })
  const event2 = await Event.create({
    title: "Event2",
    date: "January, 23, 2020",
    location: "GA, NY Campus",
    time: "11am",
    image_url: "https://si.wsj.net/public/resources/images/MK-CG029_MBASTA_P_20130904152503.jpg",
    category: "School"
  })
  const event3 = await Event.create({
    title: "Event3",
    date: "January, 23, 2020",
    location: "GA, NY Campus",
    time: "11am",
    image_url: "https://si.wsj.net/public/resources/images/MK-CG029_MBASTA_P_20130904152503.jpg",
    category: "School"


  })

  const maleeha = await User.create({
    "username": "Maleeha",
    "password_digest": "$2b$11$jKeBUnZYoPIgRki.U5B5o.UMR6TtECB3e0HQvkwWVrse5JJBroC2C",
    "image_url": "https://i.imgur.com/j9j8hII.jpg",
    "description": "abcd",
    "interests": "m, n, o, p",
    "join_date": "Jan 17, 2020"
  })

  const richard = await User.create({
    "username": "Richard",
    "password_digest": "$2b$11$7zoiX9RizkmXwF0bZkPAYebA.yvzBJsRml.yI0XB8cNMrF/vvk99m",
    "image_url": "https://s3.amazonaws.com/nooklyn-pro/agents/26284/xlarge/newheadshot.jpeg",
    "description": "efgh",
    "interests": "q, r, s, t",
    "join_date": "Jan 17, 2020"
  })

  const sam = await User.create({
    "username": "Sam",
    "password_digest": "$2b$11$eEumHGhZY3SYT9UHdKFX2eFT8XzdEKUu0tRdJcUaP2gHF4Ppr65va",
    "image_url": "https://i.imgur.com/aLCxuY0.jpg",
    "description": "ijkl",
    "interests": "u, v, w, x",
    "join_date": "Jan 17, 2020"
  })

  await maleeha.addEvent(event1);
  await maleeha.addEvent(event2);
  await maleeha.addEvent(event3);


await event1.addUser(maleeha);
await event2.addUser(maleeha);
  await event3.addUser(maleeha);

  await event1.addUser(sam);
  await event2.addUser(sam);
  await event3.addUser(richard);

  process.exit();
}

seed();
