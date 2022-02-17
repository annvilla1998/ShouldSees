'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    return queryInterface.bulkInsert('Shows', [
      {
        image: 'https://resizing.flixster.com/On4-hd2qS2tV0zj5pzysL7fLW9A=/206x305/v2/https://flxt.tmsimg.com/assets/p12510467_b_v13_af.jpg',
        releaseDate: new Date(2016,8,19),
        criticRating: 9.7,
        name: 'The Good Place',
        description: "When Eleanor Shellstrop finds herself in the afterlife, she's both relieved and surprised that she's made it into the Good Place. But it doesn't take long for Eleanor to realize she's there by mistake. She hides in plain sight from the Good Place's architect, Michael, and his all-knowing assistant, Janet. Her seemingly perfect neighbors, Tahani and Jason, and open-hearted soul mate, Chidi, help her realize that it's never too late to change. With the help of her new friends -- and a few enemies -- Eleanor becomes determined to shed her old way of life in hopes of discovering a new one in the afterlife.",
        cast: "Kristen Bell, Ted Danson, William Jackson Harper, Jameela Jamil, D'Arcy Carden",
        genre: 'Comedy',
        myShowListId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'https://resizing.flixster.com/LJF8WGwW3OuWiT9Lq3h9hgtV8Pg=/206x305/v2/https://resizing.flixster.com/ctsq9k5IYMhGtQSnBj7ute85lxQ=/ems.ZW1zLXByZC1hc3NldHMvdHZzZXJpZXMvUlRUVjc4MDcxMS53ZWJw',
        releaseDate: new Date(2020,11,10),
        criticRating: 7.1,
        name: 'Alice in Borderland',
        description: "Arisu—a listless, jobless and video-game-obsessed young man—suddenly finds himself in a strange, emptied-out version of Tokyo in which he and his friends must compete in dangerous games in order to survive. In this strange world, Arisu meets Usagi, a young woman who’s navigating the games alone. Together, they set out to unravel one mystery after another as they risk their lives and confront what it means to live.",
        cast: 'Kento Yamazaki, Tao Tsuchiya, Nijirô Murakami, Yûki Morinaga, Keita Machida',
        genre: 'Mystery thriller',
        myShowListId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'https://resizing.flixster.com/AyR32LLxWNXRLuAKHfBwfYPNrvM=/206x305/v2/https://flxt.tmsimg.com/assets/p20649163_b_v12_aa.jpg',
        releaseDate: new Date(2021,9,13),
        criticRating: 8.3,
        name: 'The Sinner: Season 4',
        description: 'The Sinner is an American crime drama focusing on a young woman (Jessica Biel) who commits a seemingly inexplicable crime and the detective (Bill Pullman) who works hard to explain it.',
        cast: 'Bill Pullman, Jessica Hecht, Frances Fisher, Alice Kremelberg',
        genre: 'Thriller',
        myShowListId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'https://resizing.flixster.com/C1wbfSQmiL6NEfV572UDx1vbynA=/206x305/v2/https://flxt.tmsimg.com/assets/p186109_b_v8_aa.jpg',
        releaseDate: new Date(2005,1,20),
        criticRating: 9.9,
        name: 'Avatar: The Last Airbender',
        description: 'The world is divided into four nations -- the Water Tribe, the Earth Kingdom, the Fire Nation and and the Air Nomads -- each represented by a natural element for which the nation is named. Benders have the ability to control and manipulate the element from their nation. Only the Avatar is the master of all four elements. The ruthless Fire Nation wants to conquer the world but the only bender who has enough power, the Avatar, has disappeared ... until now. His tribe soon discovers that Aang is the long-lost Avatar. Now Katara and Sokka must safeguard Aang on his journey to master all four elements and save the world from the Fire Nation.',
        cast: 'Zach Tyler Eisen, Mae Whitman, Jack DeSena, Dee Bradley Baker, Dante Basco',
        genre: 'Fantasy',
        myShowListId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'https://resizing.flixster.com/0ne-v9NFfm_m5XQZvDPgd0oAz6Q=/206x305/v2/https://flxt.tmsimg.com/assets/p8952681_b_v13_ab.jpg',
        releaseDate: new Date(2011,11,04),
        criticRating: 8.4,
        name: 'Black Mirror',
        description: 'Featuring stand-alone dramas -- sharp, suspenseful, satirical tales that explore techno-paranoia -- "Black Mirror" is a contemporary reworking of "The Twilight Zone" with stories that tap into the collective unease about the modern world. Each story features its own cast of unique characters, including stars like Bryce Dallas Howard ("The Help"), Alice Eve, Gugu Mbatha-Raw, Tom Cullen and Jerome Flynn ("Game of Thrones"). Joe Wright, Dan Trachtenberg, and James Watkins are among the featured directors.',
        cast: 'Charlie Brooker, Annabel Jones, Charlie Brooker',
        genre: 'Sci fi',
        myShowListId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'https://resizing.flixster.com/W6PcwqnEINSXaiOqVyRRS6I9ctc=/206x305/v2/https://resizing.flixster.com/N-NGauVnWu73U03ILXVA1O__vmE=/ems.ZW1zLXByZC1hc3NldHMvdHZzZXJpZXMvUlRUVjc2NDUyMS53ZWJw',
        releaseDate: new Date(2020,9,23),
        criticRating: 9.6,
        name: "The Queen's Gambit",
        description: 'Set during the Cold War era, orphaned chess prodigy Beth Harmon struggles with addiction in a quest to become the greatest chess player in the world.',
        cast: 'Anya Taylor-Joy, Marielle Heller, Thomas Brodie-Sangster, Moses Ingram, Harry Melling',
        genre: 'Drama',
        myShowListId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'https://resizing.flixster.com/0pWN5U9iNmZYwJBlVPAu70qEazM=/206x305/v2/https://resizing.flixster.com/RSpYoeGOhOsuKljzPowpTd-F0mo=/ems.ZW1zLXByZC1hc3NldHMvdHZzZWFzb24vUlRUVjI2NDc2Mi53ZWJw',
        releaseDate: new Date(2017,9,27),
        criticRating: 9.4,
        name: 'Stranger Things: Season 2',
        description: 'The Sinner is an American crime drama focusing on a young woman (Jessica Biel) who commits a seemingly inexplicable crime and the detective (Bill Pullman) who works hard to explain it.',
        cast: 'Winona Ryder, David Harbour, Finn Wolfhard, Natalia Dyer, Cara Buono',
        genre: 'Sci fi',
        myShowListId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'https://resizing.flixster.com/dxajEAyrXDkg0oW473LualUMpls=/206x305/v2/https://resizing.flixster.com/NQvihFeQ-r89ZXR04ZKjOlsVoH8=/ems.ZW1zLXByZC1hc3NldHMvdHZzZXJpZXMvUlRUVjQxMTc3OC53ZWJw',
        releaseDate: new Date(2019,3,15),
        criticRating: 8.3,
        name: 'The Umbrella Academy',
        description: "On one day in 1989, 43 infants are inexplicably born to random, unconnected women who showed no signs of pregnancy the day before. Seven are adopted by billionaire industrialist Sir Reginald Hargreeves, who creates the Umbrella Academy and prepares his "children" to save the world. In their teenage years, though, the family fractures and the team disbands. Fast forward to the present time, when the six surviving members of the clan reunite upon the news of Hargreeves' passing. They work together to solve a mystery surrounding their father's death, but divergent personalities and abilities again pull the estranged family apart, and a global apocalypse is another imminent threat. The series is based on a collection of comics and graphic novels created and written by My Chemical Romance lead singer Gerard Way.",
        cast: 'Elliot Page, Tom Hopper, David Castañeda, Emmy Raver-Lampman, Robert Sheehan',
        genre: 'Action',
        myShowListId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'https://resizing.flixster.com/XCvrJHmXutcwt-L0B35EUVZUwxg=/206x305/v2/https://flxt.tmsimg.com/assets/p20492187_b_v13_ab.jpg',
        releaseDate: new Date(2021,8,17),
        criticRating: 9.4,
        name: 'Squid Game',
        description: "Hundreds of cash-strapped contestants accept an invitation to compete in children's games for a tempting prize, but the stakes are deadly.",
        cast: 'Lee Jung-jae, Park Hae-soo, Oh Yeong-su, Wi Ha-joon, Jung Ho-Yeon',
        genre: 'Drama',
        myShowListId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'https://resizing.flixster.com/46UETl-93HIUnz7jv8V17g9hJEU=/206x305/v2/https://flxt.tmsimg.com/assets/p183921_b_v8_aw.jpg',
        releaseDate: new Date(1992,8,05),
        criticRating: 9.8,
        name: 'Batman: The Animated Series',
        description: "This animated series conveys the dark mood of the original Batman comic books. Unlike the light action Batman show of the 1960s, Gotham City's Caped Crusader, Bruce Wayne, is sometimes moody. And Robin's alter ego, Dick Grayson, has a more-mature personality than in the original series.",
        cast: 'Kevin Conroy, Efrem Zimbalist Jr., Bob Hastings, Loren Lester, Robert Costanzo',
        genre: 'Fantasy',
        myShowListId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'https://resizing.flixster.com/6sIz4eQ9hvWnqVfU3ztu33iTY9I=/206x305/v2/https://resizing.flixster.com/wZPpEHoFi-6Zp5zCUM5wZKKRWxc=/ems.ZW1zLXByZC1hc3NldHMvdHZzZWFzb24vNGNmOGM4ZmUtZmI5My00ZDU2LTk4MzAtZGFiMDQ2YTc2N2EwLmpwZw==',
        releaseDate: new Date(2021,9,15),
        criticRating: 9.4,
        name: 'You: Season 3',
        description: 'Joe and Love are married and raising their newborn son, Henry, in the fictitious Californian suburb of Madre Linda. As their relationship dynamic takes a new turn, Joe continues to repeat the cycle of obsession with a burgeoning interest in Natalie Engler, the next door neighbor.',
        cast: 'Penn Badgley, Victoria Pedretti, Saffron Burrows, Tati Gabrielle, Dylan Arnold',
        genre: 'Drama',
        myShowListId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'https://resizing.flixster.com/20QlUfvNteJDJ4O2LglrA5agGmw=/206x305/v2/https://flxt.tmsimg.com/assets/p186592_b_v10_ab.jpg',
        releaseDate: new Date(2009,4,27),
        criticRating: 3.9,
        name: 'The Goode Family',
        description: "King of the Hill creator Mike Judge dreamed up this new animated comedy series about a clan whose members are obsessed with doing the right thing, although their efforts usually produce unintentionally comic results.",
        cast: 'Mike Judge, Nancy Carell, David Herman, Linda Cardellini, Brian Doyle Murray',
        genre: 'Comedy',
        myShowListId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'https://resizing.flixster.com/L4fXIo8zI_CLrtvI1R5VZpxKfPs=/206x305/v2/https://flxt.tmsimg.com/assets/p17580186_b_v13_ab.jpg',
        releaseDate: new Date(2021,11,17),
        criticRating: 9.5,
        name: 'The Witcher: Season 2',
        description: 'The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.',
        cast: 'Henry Cavill, Anya Chalotra, Freya Allan, Joey Batey',
        genre: 'Fantasy',
        myShowListId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'https://resizing.flixster.com/Xqf-YhTX2We97fEoTwk09XQ3caw=/206x305/v2/https://flxt.tmsimg.com/assets/p183920_b_v13_ae.jpg',
        releaseDate: new Date(1993,8,16),
        criticRating: 9.3,
        name: 'Frasier',
        description: "Dr. Frasier Crane, a successful Boston therapist, moves to Seattle to get a new start on life; he has a radio talk show, which he uses to relay his wit and wisdom to others, but at times he struggles with his own problems with his salt-of-the-earth father, his pretentious brother and his friends and co-workers.",
        cast: 'Kelsey Grammer, John Mahoney, Jane Leeves, David Hyde Pierce, Peri Gilpin',
        genre: 'Comedy',
        myShowListId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'https://resizing.flixster.com/YJq9Sh-HyWq2nDAjbA0Te53oKOU=/206x305/v2/https://resizing.flixster.com/JojyYDGdp7mri2pZoLwnmvtoIk0=/ems.ZW1zLXByZC1hc3NldHMvdHZzZWFzb24vNGQ5MzhmZGQtZTE2My00NTIzLWIyYjMtMTliNGNhMmRkOGRmLmpwZw==',
        releaseDate: new Date(2021,10,7),
        criticRating: 7.7,
        name: 'Dexter: New Blood: Season 1',
        description: 'The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.',
        cast: 'Michael C. Hall, Clancy Brown, Julia Jones, Alano Miller, Johnny Sequoyah',
        genre: 'Mystery',
        myShowListId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'https://resizing.flixster.com/115LMLYhiIzdY-xBJk0pcv8ZSY4=/206x305/v2/https://flxt.tmsimg.com/assets/p21226806_b_v13_aa.jpg',
        releaseDate: new Date(2022,0,28),
        criticRating: 5.6,
        name: 'The Woman In The House Across The Street From The Girl In The Window',
        description: 'Watching the world go by from her living room window, heartbroken Anna sets her sights on a handsome new neighbor until she witnesses a gruesome murder.',
        cast: 'Kristen Bell, Michael Ealy, Mary Holland, Shelley Hennig, Cameron Britton',
        genre: 'Mystery thriller',
        myShowListId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: 'https://resizing.flixster.com/yxtOnVxIItI7axeOrrpf6Nes4Lo=/206x305/v2/https://flxt.tmsimg.com/assets/p183919_b_v8_ae.jpg',
        releaseDate: new Date(1995,0,16),
        criticRating: 7.6,
        name: 'Star Trek: Voyager',
        description: "Kathryn Janeway is the captain of a starship that is lost in space and must travel across an unexplored region of the galaxy to find its way back home. On its way, the crew encounters different species they must deal with, but find that all their adventures only make them long for home.",
        cast: 'Kate Mulgrew, Robert Beltran, Roxann Dawson, Robert Duncan McNeill, Ethan Phillips',
        genre: 'SciFi',
        myShowListId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image:"https://resizing.flixster.com/xmCD2uqWkkMEA6J4RW4fghKGGnU=/206x305/v2/https://flxt.tmsimg.com/assets/p10777519_b_v13_bb.jpg",
        releaseDate: new Date(2014,7,24),
        criticRating: 5.7,
        name: "Black-ish",
        description: "Dre Johnson (Anthony Anderson) has it all: a great job, a beautiful wife, Rainbow (Tracee Ellis Ross), four kids and a big home in a classy neighborhood, but as a black man, he begins to question whether all his success has brought too much cultural assimilation for his family.",
        cast: "Kenya Barris , Courtney Lilly , Laura Gutin Peterson , Anthony Anderson",
        genre: "Comedy",
        myShowListId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: "https://resizing.flixster.com/xC6zum-zvZwTpI7KfMWN2JSUdY8=/206x305/v2/https://flxt.tmsimg.com/assets/p184338_b_v13_ap.jpg",
        releaseDate: new Date(1997,7,19),
        criticRating: 8.7,
        name: "South Park",
        description: "The animated series is not for children. In fact, its goal seems to be to offend as many as possible as it presents the adventures of Stan, Kyle, Kenny and Cartman. The show has taken on Saddam Hussein, Osama bin Laden, politicians of every stripe and self-important celebrities.",
        cast: "Trey Parker , Matt Stone , Anne Garefino",
        genre: "Animation",
        myShowListId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: "https://resizing.flixster.com/LfRp0WDqLNRZoPCP_lTaFIfGqns=/206x305/v2/https://flxt.tmsimg.com/assets/p10774951_b_v8_ad.jpg",
        releaseDate: new Date(2015,4,01),
        criticRating: 8.1,
        name: "The Last Man On Earth",
        description: "In 2022, a cataclysm strikes Earth, seemingly wiping out the population save for former family man and bank employee Phil Miller. Sad and very lonely, Phil travels the United States, Canada and Mexico in his RV searching for other survivors",
        cast: "Will Forte , Chris Miller , Phil Lord , Seth Cohen",
        genre: "Comedy",
        myShowListId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image:"https://resizing.flixster.com/5fEclN3Ie3737l8Ms0g_LCaOv9c=/206x305/v2/https://flxt.tmsimg.com/assets/p187350_b_v8_ac.jpg",
        releaseDate: new Date(2003, 1, 15),
        criticRating: 4.9,
        name: "American Idol",
        description: "Singers with dreams of super stardom audition and compete in a series of challenging rounds in the hope of living their childhood and lifelong dreams.",
        cast: "Trish Kinane , Jennifer Mullin , Simon Fuller , Ken Warwick",
        genre: "Music",
        myShowListId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Shows', null, {});
  }
};
