const { Event, User } = require('./models');

const seed = async () => {
  await Event.destroy({ where: {} })
  await User.destroy({ where: {} })

  const presentation = await Event.create({
  title: "Presentation for p3",
  date: "January, 23, 2020",
  location: "GA, NY Campus",
  time: "11am",
  image_url: "https://si.wsj.net/public/resources/images/MK-CG029_MBASTA_P_20130904152503.jpg"

    })
  await Event.create({
    title: "Presentation for p3",
  date: "January, 23, 2020",
  location: "GA, NY Campus",
  time: "11am",
  image_url: "https://si.wsj.net/public/resources/images/MK-CG029_MBASTA_P_20130904152503.jpg"
    })
  await Event.create({
    title: "Presentation for p3",
  date: "January, 23, 2020",
  location: "GA, NY Campus",
  time: "11am",
  image_url: "https://si.wsj.net/public/resources/images/MK-CG029_MBASTA_P_20130904152503.jpg"
  })

  const maleeha = await User.create({
    username: "Maleeha",
    password: "1234",
    description: "abcd",
    interests: "m, n, o, p",
    join_date: "Jan 17, 2020"
  })

  const richard = await User.create({
    username: "Richard",
    password: "1234",
    description: "efgh",
    interests: "q, r, s, t",
    join_date: "Jan 17, 2020"
  })

  const sam = await User.create({
    username: "Sam",
    password: "1234",
    description: "ijkl",
    interests: "u, v, w, x",
    join_date: "Jan 17, 2020"
  })

  maleeha.addEvent(presentation);

  process.exit();
}

seed();
