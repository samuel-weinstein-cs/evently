const { Event, User } = require('./models');

const seed = async () => {
  await Event.destroy({ where: {} })
  await User.destroy({ where: {} })

  const presentation = await Event.create({
  title: "Presentation for p3",
  date: "January, 23, 2020",
  location: "GA, NY Campus",
  time: "11am",
  image_url: "https://si.wsj.net/public/resources/images/MK-CG029_MBASTA_P_20130904152503.jpg",
  category: "Not School"
    })
  await Event.create({
    title: "Presentation for p3",
  date: "January, 23, 2020",
  location: "GA, NY Campus",
  time: "11am",
    image_url: "https://si.wsj.net/public/resources/images/MK-CG029_MBASTA_P_20130904152503.jpg",
  category: "School"
    })
  await Event.create({
    title: "Presentation for p3",
  date: "January, 23, 2020",
  location: "GA, NY Campus",
  time: "11am",
  image_url: "https://si.wsj.net/public/resources/images/MK-CG029_MBASTA_P_20130904152503.jpg",
  category: "School"


  })

  const maleeha = await User.create({
    username: "Maleeha",
    password: "1234",
    image_url: "https://i.imgur.com/j9j8hII.jpg"
  })

  const richard = await User.create({
    username: "Richard",
    password: "1234",
    image_url: "https://s3.amazonaws.com/nooklyn-pro/agents/26284/xlarge/newheadshot.jpeg"
  })

  const sam = await User.create({
    username: "Sam",
    password: "1234",
    image_url: "https://i.imgur.com/aLCxuY0.jpg"

  })

  maleeha.addEvent(presentation);

  process.exit();
}

seed();
