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
    password: "1234"
  })

  const richard = await User.create({
    username: "Richard",
    password: "1234"
  })

  const sam = await User.create({
    username: "Sam",
    password: "1234"
  })

  maleeha.addEvent(presentation);

  process.exit();
}

seed();
