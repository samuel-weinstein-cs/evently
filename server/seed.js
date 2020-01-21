const { Event, User, Attending } = require('./models');

const seed = async () => {
  await Event.destroy({ where: {} })
  await User.destroy({ where: {} })
  await Attending.destroy({ where: {} });

  const event1 = await Event.create({
    title: "Presentation for p3",
    date: "January, 23, 2020",
    location: "GA, NY Campus",
    startTime: "11am",
    endTime: "11:15am",
    entry: "Free",
    image_url: "https://si.wsj.net/public/resources/images/MK-CG029_MBASTA_P_20130904152503.jpg",
    category: "School",
    description: "Prepare to bask in the unending glory that is EVENTLY. A platform very similar to meet up but less advanced because we are n00bs",
    tagline: "A presentation to end all presentations"
  })
  const event2 = await Event.create({
    title: "Game Night",
    date: "January, 20th, 2020",
    location: "Barcade. ",
    startTime: "11am",
    endTime: "7pm",
    entry: "$15",
    image_url: "https://cdn.vox-cdn.com/thumbor/del40kXVNnljLwFEF64A-eFAZ-Y=/0x0:2000x1335/1200x0/filters:focal(0x0:2000x1335):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/16209222/2019_05_02_Barcade_020.jpg",
    category: "Gaming",
    description: "Come join us for a night of drinking and video gaming. Tons of classic arcade games and great beers on tap. I heard they have food too. Wow. What a world! Entry includes $5 tokens and one drink.",
    tagline: ""
  })
  const event3 = await Event.create({
    title: "Real Estate Conference: How to sell",
    date: "January, 25, 2020",
    location: "Madison Square Garden",
    startTime: "10am",
    endTime: "2pm",
    entry: "$10",
    image_url: "https://crs.com/sf_images/default-source/attend-section/may-meetings_banner.jpeg?sfvrsn=65a35c4f_0",
    category: "Business",
    description: "Join us for speeches by Keller William, Barbara Corcoran and some other rich broker! Topics covered will range from how to turn friends into dollars and how to cheat the inspection so your seller gets their ridiculous price. Refreshments will be served but if you want besides chips and soda there will be an addintional charge. Sorry we didn't get rich by not being cheap.",
    tagline: "Don't worry you will be a millionaire soon"
  })
  const event4 = await Event.create({
    title: "Best Halal Cart In The City Competition",
    date: "January, 24, 2020",
    location: "Union Square Park",
    startTime: "5pm",
    endTime: "9pm",
    entry: "$15 to try them all!",
    image_url: "https://cdn.vox-cdn.com/thumbor/ptJzfLnxypYf5mDaKb0wWUk_UfU=/0x0:2046x1535/1200x800/filters:focal(0x0:2046x1535)/cdn.vox-cdn.com/uploads/chorus_image/image/46704794/halal-nyc-guian-bolisay.0.0.jpg",
    category: "Food",
    description: "There has been a ton of argument recently over which halal cart has the most flavorful meal so we organized an event to put them to the test! Come join us to try out the most famous carts including Kwik Meal, Halal Guys, Sammy's, King of Falafel, Royal Halal Grill, Biryana Cart and more! ",
    tagline: "Whom is the best halal cart meal in all of NYC?"
  })
  const event5 = await Event.create({
    title: "Di and Di Grand Opening!",
    date: "January, 28th, 2020",
    location: "68 Greenpoint Ave, Brooklyn, NY 11222 ",
    startTime: "5pm",
    endTime: "10pm",
    entry: "$5",
    image_url: "https://i.redd.it/r9fmnskanoi31.jpg",
    category: "Food",
    description: "GRAND OPENING!! Come join us for our grand opening at Di and Di, bringing you amazing traditional Vietnamese food in Greenpoint! For our grand opening we are offering a drink from our extensive cocktail menu and two half portions of an entree of your choice for just $5! ",
    tagline: "Grand Opening of NEW restuarant by acclaimed Chef Hoa Nguyen"
  })
  const event6 = await Event.create({
    title: "Amateur Coding Meet and Greet",
    date: "January, 24, 2020",
    location: "Freehold, 45 S 3rd St, Brooklyn, NY 11249",
    startTime: "4pm",
    endTime: "Midnight or later",
    entry: "Free but please buy a drink or two",
    image_url: "https://i.pinimg.com/originals/21/bd/c9/21bdc99261c03643de4d864021ae48df.jpg",
    category: "Technology",
    description: "Are you a recent bootcamp grad looking to meet others in the same position? Come to Freehold on Jan 24th to meet and talk about your experiences while meeting some fellow coders. Expand your knowledge through each other and relax with some driniks.  ",
    tagline: "Recent bootcamp/Amateur coder meet up!"
  })
  const event7 = await Event.create({
    title: "App Jam",
    date: "January, 24, 2020 - January, 26, 2020",
    location: " 69 Grand St, Brooklyn, NY 11249",
    startTime: "10am",
    endTime: "5pm",
    entry: "$100 per team",
    image_url: "https://openai.com/content/images/size/w1400/2018/03/openaihackathon-1.jpg",
    category: "Technology",
    description: "Hosted by Google come join us for an web application competition in Williamsburg! Assemble your team of 3-4 peers and prepare to hack away. Topics will be given at the venue and a grand prize of $4,000 will be awarded to the winning team!  ",
    tagline: "Put your coding skills to the test"
  })
  const event8 = await Event.create({
    title: "Ted Talk: Are birds dinosaurs distant cousins?",
    date: "January, 26, 2020",
    location: "Caspery Auditorium, 1230 York Ave, New York, NY",
    startTime: "7pm",
    endTime: "9:30pm",
    entry: "Free",
    image_url: "https://s.abcnews.com/images/Technology/ht_dinosaur_feathers_kb_150717_16x9_992.jpg",
    category: "Education",
    description: "Professor Goldbloom joins us to discuss how birds are the only distant relatives of dinosaurs. Presenting skeletal comparisons as well as a rarely seen new evidence! ",
    tagline: "Look mom! I can fly!"
  })
  const event8ish = await Event.create({
    title: "Learn to code workshop",
    date: "January, 30th, 2020",
    location: "Made Up Auditorium, 1230 York Ave, New York, NY",
    startTime: "7pm",
    endTime: "9:30pm",
    entry: "$25",
    image_url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    category: "Education",
    description: "Ever wanted to learn how to code your own websites or applications? Come join us for an intro class to learn the basics of HTML, CSS and Javascript. Presented in an easy to learn format and perfect for complete beginners! ",
    tagline: "Learn to build websites from scratch!"
  })
  const event9 = await Event.create({
    title: "Are we living in a simulation?",
    date: "February, 5th, 2020",
    location: "435 E 30th St, Room 1010101010101001, New York, NY 10016",
    startTime: "7pm",
    endTime: "9:30pm",
    entry: "Free",
    image_url: "https://miro.medium.com/max/1200/1*22w78-9WYLGPMKFNcX0aGg.jpeg",
    category: "Science",
    description: " 100010 100001 001010 01001 1010100 101001 00101010 1001 01010010 101010 1010 1010101 0101010 101010 1010 101010101 10101 0011 101010 1010101 10010101 10000 01001 1000 0101 0101 ",
    tagline: "Will you take the red pill or the blue pill?"
  })
  const event10 = await Event.create({
    title: "Could UFOs be human time travelers?",
    date: "February, 10th, 2020",
    location: "435 E 30th St, Area 51, New York, NY 10016",
    startTime: "5pm",
    endTime: "8pm",
    entry: "Free",
    image_url: "https://media4.s-nbcnews.com/j/newscms/2017_19/1994846/170510-time-travel-mn-1150_62ae0216673fbd69cc88472ce207045d.fit-760w.jpg",
    category: "Science",
    description: "Come listen to some looney tunes talk a big game. Have you ever watched Ancient Aliens? It's going to be like that but less crazy hair and more science. ",
    tagline: "You should probably get high for this one."
  })
  const event11 = await Event.create({
    title: "Moodyman",
    date: "February, 15th, 2020",
    location: "Good Room, 98 Meserole Ave, Brooklyn, NY 11222",
    startTime: "10pm",
    endTime: "4am",
    entry: "$30",
    image_url: "https://djmag.com/sites/default/files/styles/djmag_landscape__691x372_/public/article/image/moodymann-offsonar-detroit-love-massive-tracks.jpg?itok=Cg-rkUlA",
    category: "Music",
    description: "Rare appearance by easily one of the best house and techno DJs of all time. Tickets are going to sell out fast! Special guests TBA. ",
    tagline: "I got work! "
  })
  const event12 = await Event.create({
    title: "Death, Obituary, Slayer",
    date: "February, 15th, 2020",
    location: "Saint Vitus, 1029 Manhattan Ave, Brooklyn, NY 11222",
    startTime: "10pm",
    endTime: "2am",
    entry: "$30",
    image_url: "http://www.invisibleoranges.com/files/2014/12/deathtoall-15.jpg?zc=1&s=0&a=t&q=89&w=630",
    category: "Music",
    description: "Break your neck to the greatest metal bands of the last half century. Playing the full 'Scream Bloody Gore', 'South of Heaven' and 'Cause of Death' albums! ",
    tagline: "There is NO hope, why don't you......PULL THE PLUG?! "
  })
  const event13 = await Event.create({
    title: "New Rescue Pups Meet",
    date: "February, 12th, 2020",
    location: "McCarren Park, Bedford Ave, Brooklyn, NY 11249",
    startTime: "10am",
    endTime: "2pm",
    entry: "Free",
    image_url: "http://cdn.shopify.com/s/files/1/1087/4348/files/mountain_dog_meetup-20_1.jpg?13916153893135396948",
    category: "Animals",
    description: "Come introduce your new rescue pup to his new rescue friends in the area! Please only bring your rescue if they can get along with all dogs, big and small.  ",
    tagline: "Rescue Pups Unite!!! "
  })
  const event14 = await Event.create({
    title: "Alligator Adoption",
    date: "February, 29th, 2020",
    location: "Maria Hernandez Park, Knickerbocker Ave, Brooklyn, NY 11237",
    startTime: "10am",
    endTime: "2pm",
    entry: "Free",
    image_url: "https://i.pinimg.com/originals/c1/fa/48/c1fa4894b4c2ed5f9786381ab38352e6.jpg",
    category: "Animals",
    description: "Come adopt and alligator cause you are an idiot and want to die.  ",
    tagline: "Come adopt an alligator cause you are an idiot and want to die. "
  })
  const event15 = await Event.create({
    title: "50k Marathon in the these streets",
    date: "February, 3rd, 2020",
    location: "Maria Hernandez Park, Knickerbocker Ave, Brooklyn, NY 11237",
    startTime: "10am",
    endTime: "2pm",
    entry: "Free",
    image_url: "https://cdn.abcotvs.com/dip/images/5662266_103119-ap-nyc-marathon-2018-img.jpg?w=1280&r=16%3A9",
    category: "Health",
    description: "WHOM will SURVIVE??? We will not be shutting down any roads so do your best frogger style to surivice this grueling 50k race. First to finish wins free water for life!  ",
    tagline: "Kind of the like the urban Iron Man competition "
  })
  const event16 = await Event.create({
    title: "Learn how to eat vegan and feel superior in your malnourishment",
    date: "February, 27th, 2020",
    location: "Jungle Cafe, 100 Greenpoint Ave, Brooklyn, NY 11222",
    startTime: "6pm",
    endTime: "7pm",
    entry: "$50",
    image_url: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/08/16/09/vegan-diet-change-body.jpg?w968h681",
    category: "Health",
    description: "Ever wanted to be vegan but realized you can barely eat anything anywhere? And that there is no point in doing so? Well let us change your mind by manipulating statistics and information! ",
    tagline: "Let everyone know you are vegan. "
  })
  const event17 = await Event.create({
    title: "Five Pointz being rebuilt!",
    date: "February, 27th, 2020",
    location: "Long Island City, Queens, New York, 11458",
    startTime: "10am",
    endTime: "7pm",
    entry: "Free",
    image_url: "https://live.staticflickr.com/8033/8059038689_737595c6fb_b.jpg",
    category: "art",
    description: "We are tearing those godawful luxury condos down and rebuilding the 5pointz where it once stood! Try and STOP US! EAT THE RICH! ",
    tagline: "Part of the bring back the soul of the city campaign! "
  })
  const event18 = await Event.create({
    title: "Hip new gallery shows off ridiculously stupid 'art",
    date: "February, 7th, 2020",
    location: "Somewhere in the LES or SOHO",
    startTime: "2pm",
    endTime: "9pn",
    entry: "$5",
    image_url: "https://blogofthecourtierdotcom.files.wordpress.com/2010/06/rothko2.jpg",
    category: "art",
    description: "Check out these 'paintings' that are just canvases painted black. Surley some rich schmuck will buy them for a million a pop. But you average joe's can come here and pretend to be cultured for a couple hours as well. ",
    tagline: "Talentless hack becomes millionaire by knowing the right people or their parents. "
  })
  const event19 = await Event.create({
    title: "Where to travel next!",
    date: "February, 7th, 2020",
    location: "Travel Agency, 45 Canal St, New York, New York",
    startTime: "5pm",
    endTime: "9pm",
    entry: "$5",
    image_url: "https://www.pmyaasia.com/wp-content/uploads/2014/11/Maldives2.jpg",
    category: "Travel",
    description: "Our most experienced travel agent shows off the best places to travel this year as well as insider tips for the destinations. Special travel package deals to be revealed! ",
    tagline: "Best travel destinations for 2020! "
  })
  const event20 = await Event.create({
    title: "Classic Cars",
    date: "March, 20th, 2020",
    location: "Javits Center, New York, New York",
    startTime: "9am",
    endTime: "9pm",
    entry: "$20",
    image_url: "https://dcdws.blob.core.windows.net/dws-8938375-5292-media/2018/11/3-Classic-Cars-Montage-3.jpg",
    category: "Cars",
    description: "Huge selection of classic cars. Some for sale, most just to see.",
    tagline: "Huge selection of classic cars. Some for sale, most just to see"
  })
  const event21 = await Event.create({
    title: "Expensive Ass Cars",
    date: "March, 10th, 2020",
    location: "Javits Center, New York, New York",
    startTime: "9am",
    endTime: "9pm",
    entry: "$20",
    image_url: "https://www.lambonb.com/blogs/1540/wp-content/uploads/2019/05/IMG_7176.jpg",
    category: "Cars",
    description: "Show off your wealth to the peasants.",
    tagline: "Show off your wealth to the peasants"
  })
  const event22 = await Event.create({
    title: "Incredbile Virutal Reality Worlds",
    date: "March, 10th, 2020",
    location: "VR Central, 120 Random St, NY, NY",
    startTime: "Noon",
    endTime: "9pm",
    entry: "$10",
    image_url: "https://www.sjpl.org/sites/default/files/styles/hero_image/public/2019-09/virtual-reality-1400.jpg?h=1dd3d00d&itok=YlY2OAn9",
    category: "Gaming",
    description: "Come check out the first and only FULL service VR space in New York City!",
    tagline: "Explore New Worlds without ever leaving NYC!"
  })
  const event23 = await Event.create({
    title: "Where to travel next!",
    date: "February, 7th, 2020",
    location: "Thai Travel Agency, 45 Canal St, New York, New York",
    startTime: "5pm",
    endTime: "9pm",
    entry: "$5",
    image_url: "https://d36tnp772eyphs.cloudfront.net/blogs/1/2011/05/thailand-1200x819.jpg",
    category: "Travel",
    description: "Expat living in Thailand for over 30 years tells us the most amazing spots that no tourist would ever find! Whether your first trip or your 100th, come discover the secrets of Thailand! ",
    tagline: "Discover the secrets of Thailand from a local "
  })











  const maleeha = await User.create({
    "username": "Maleeha",
    "password_digest": "$2b$11$jKeBUnZYoPIgRki.U5B5o.UMR6TtECB3e0HQvkwWVrse5JJBroC2C",
    "image_url": "https://i.imgur.com/j9j8hII.jpg",
    "description": "I like dollar pizza and crowded starbucks! I am  also partial to long commutes and quinoa filled lunches. I am told I am an excellent coder but I already knew that. I hope to find some great events to attend through evently.",
    "interests": "Pizza, Coding, Gaming, Pizza, Coding",
    "join_date": "Jan 17, 2020"
  })

  const richard = await User.create({
    "username": "Richard",
    "password_digest": "$2b$11$7zoiX9RizkmXwF0bZkPAYebA.yvzBJsRml.yI0XB8cNMrF/vvk99m",
    "image_url": "https://s3.amazonaws.com/nooklyn-pro/agents/26284/xlarge/newheadshot.jpeg",
    "description": "An annoying asshole by most accounts. I am good at overeating, wasting time on the internet and doing things I am too old to do. I hope to find some great events through our new platform evently!",
    "interests": "Gaming, Pizza, Generally Unhealthy Foods, Coding",
    "join_date": "Jan 17, 2020"
  })

  const sam = await User.create({
    "username": "Sam",
    "password_digest": "$2b$11$eEumHGhZY3SYT9UHdKFX2eFT8XzdEKUu0tRdJcUaP2gHF4Ppr65va",
    "image_url": "https://i.imgur.com/aLCxuY0.jpg",
    "description": "Hi I am Sam. I am an incredibly talented coder and love food. Yayforfood!!!! You can find me in my where's Waldo hat hacking away at making the next big thing or maybe just something I find enjoyable. I hope to find some stellar events through my new platform evently!",
    "interests": "Coding, Food, Day-trading, Gambling, Gaming",
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
