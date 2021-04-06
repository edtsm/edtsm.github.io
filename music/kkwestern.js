const kkw = new APlayer({
    container: document.getElementById('kkwestern'),
    fixed: false,
    autoplay: false,
    theme: '#1c03fc',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: '250px',
    lrcType: 0,
    audio: [
      {
        name: "Yummy",
        artist: 'Justin Bieber',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/01. Justin Bieber - Yummy.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Intentions",
        artist: 'Justin Bieber(feat. Quavo)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/02. Justin Bieber - Intentions (feat. Quavo).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Salt",
        artist: 'Ava Max',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/03. Ava Max - Salt.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Into the Unknown",
        artist: 'Idina Menzel, AURORA',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/04. Idina Menzel, AURORA - Into the Unknown.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Be Kind",
        artist: 'Marshmello & Halsey',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/05. Marshmello & Halsey - Be Kind.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Rain On Me",
        artist: 'Lady Gaga & Ariana Grande',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/06. Lady Gaga & Ariana Grande - Rain On Me.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Dynamite",
        artist: 'BTS',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/07. BTS - Dynamite.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Alone, Pt. II",
        artist: 'Alan Walker & Ava Max',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/08. Alan Walker & Ava Max - Alone, Pt. II.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "You should be sad",
        artist: 'Halsey',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/09. Halsey - You should be sad.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Funny",
        artist: 'Zedd & Jasmine Thompson',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/10. Zedd & Jasmine Thompson - Funny.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Physical",
        artist: 'Dua Lipa',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/11. Dua Lipa - Physical.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Sour Candy",
        artist: 'Lady Gaga(feat. BLACKPINK)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/12. Lady Gaga - Sour Candy (feat. BLACKPINK).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Stuck with U",
        artist: 'Ariana Grande & Justin Bieber',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/13. Ariana Grande & Justin Bieber - Stuck with U.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Kings & Queens",
        artist: 'Ava Max',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/14. Ava Max - Kings & Queens.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Break My Heart",
        artist: 'Dua Lipa',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/15. Dua Lipa - Break My Heart.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Show Yourself",
        artist: 'Idina Menzel, Evan Rachel Wood',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/16. Idina Menzel, Evan Rachel Wood - Show Yourself.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Underdog",
        artist: 'Alicia Keys',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/17. Alicia Keys - Underdog.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Ice Cream",
        artist: 'BLACKPINK(ft. Selena Gomez',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/18. BLACKPINK - Ice Cream (with Selena Gomez).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Stupid Love",
        artist: 'Lady Gaga',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/19. Lady Gaga - Stupid Love.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Say So",
        artist: 'Doja Cat(feat. Nicki Minaj)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/20. Doja Cat - Say So (feat. Nicki Minaj).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "everything i wanted",
        artist: 'Billie Eilish',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/21. Billie Eilish - everything i wanted.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Sweet Night",
        artist: 'V (BTS)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/22. V (BTS) - Sweet Night.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "LAVA!",
        artist: 'ØZI',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/23. ØZI - LAVA!.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Family",
        artist: 'The Chainsmokers(ft. Kygo)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/24. The Chainsmokers - Family (with Kygo).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Midnight",
        artist: 'Alesso(feat. Liam Payne)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/25. Alesso - Midnight (feat. Liam Payne).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Adore You",
        artist: 'Harry Styles',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/26. Harry Styles - Adore You.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Forever",
        artist: 'Justin Bieber(feat. Post Malone & Clever)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/27. Justin Bieber - Forever (feat. Post Malone & Clever).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "All Is Found",
        artist: 'Evan Rachel Wood',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/28. Evan Rachel Wood - All Is Found.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Lose Somebody",
        artist: 'Kygo & OneRepublic',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/29. Kygo & OneRepublic - Lose Somebody.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Holy",
        artist: 'Justin Bieber(feat. Chance the Rapper)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/30. Justin Bieber - Holy (feat. Chance the Rapper).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Mean It",
        artist: 'Lauv & LANY',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/31. Lauv & LANY - Mean It.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Only The Young (Featured in Miss Americana)",
        artist: 'Taylor Swift',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/32. Taylor Swift - Only The Young (Featured in Miss Americana).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Heading Home",
        artist: 'Alan Walker(feat. Ruben)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/33. Alan Walker - Heading Home (feat. Ruben).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Like It Is",
        artist: 'Kygo, Zara Larsson & Tyga',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/34. Kygo, Zara Larsson & Tyga - Like It Is.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Slow Grenade",
        artist: 'Ellie Goulding(feat. Lauv)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/35. Ellie Goulding - Slow Grenade (feat. Lauv).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Drown",
        artist: 'Martin Garrix(feat. Clinton Kane)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/36. Martin Garrix - Drown (feat. Clinton Kane).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Some Things Never Change",
        artist: 'Kristen Bell, Idina Menzel',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/37. Kristen Bell, Idina Menzel - Some Things Never Change.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Girlfriend",
        artist: 'Charlie Puth',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/38. Charlie Puth - Girlfriend.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Birthday",
        artist: 'Anne-Marie',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/39. Anne-Marie - Birthday.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Rare",
        artist: 'Selena Gomez',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/40. Selena Gomez - Rare.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Mind Is A Prison",
        artist: 'Alec Benjamin',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/41. Alec Benjamin - Mind Is A Prison.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Lose You to Love Me",
        artist: 'Selena Gome',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/42. Selena Gomez - Lose You to Love Me.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Changes",
        artist: 'Lauv',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/43. Lauv - Changes.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Don't Call Me Angel (Charlie's Angels)",
        artist: 'Ariana Grande, Miley Cyrus & Lana Del Rey',
        url: "https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/44. Ariana Grande, Miley Cyrus & Lana Del Rey - Don't Call Me Angel (Charlie's Angels).mp3",
		cover: '/cover.jpg'
      },
      {
        name: "Tattoos Together",
        artist: 'Lauv',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/45. Lauv - Tattoos Together.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Blinding Lights",
        artist: 'The Weeknd',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/46. The Weeknd - Blinding Lights.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Live Forever",
        artist: 'Liam Payne(feat. Cheat Codes)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/47. Liam Payne - Live Forever (feat. Cheat Codes).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "On Somebody",
        artist: 'Ava Max',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/48. Ava Max - On Somebody.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Lost in the Woods",
        artist: 'Jonathan Groff',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/49. Jonathan Groff - Lost in the Woods.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Together (From the Motion Picture “Music”)",
        artist: 'Sia',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/50. Sia - Together (From the Motion Picture “Music”).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Lonely",
        artist: 'Justin Bieber & benny blanco',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/51. Justin Bieber & benny blanco - Lonely.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Summer Feelings",
        artist: 'Lennon Stella(feat. Charlie Puth)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/52. Lennon Stella - Summer Feelings (feat. Charlie Puth).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Broken Glass",
        artist: 'Kygo(feat. Kim Petras)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/53. Kygo - Broken Glass (feat. Kim Petras).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "I Dare You",
        artist: 'Kelly Clarkson',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/54. Kelly Clarkson - I Dare You.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "I Love My Friends",
        artist: 'Steve Aoki(feat. Icona Pop)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/55. Steve Aoki - I Love My Friends (feat. Icona Pop).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "cardigan",
        artist: 'Taylor Swift',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/56. Taylor Swift - cardigan.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Finally beautiful stranger",
        artist: 'Halsey',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/57. Halsey - Finally beautiful stranger.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Don't Start Now",
        artist: 'Dua Lipa',
        url: "https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/58. Dua Lipa - Don't Start Now.mp3",
		cover: '/cover.jpg'
      },
      {
        name: "Imma Get A New One",
        artist: 'ChihSiou',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/59. ChihSiou(持修) - Imma Get A New One.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "To Die For",
        artist: 'Sam Smith',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/60. Sam Smith - To Die For.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Tick Tock",
        artist: 'Clean Bandit & Mabel(feat. 24kGoldn)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/61. Clean Bandit & Mabel - Tick Tock (feat. 24kGoldn).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Sigriswil ('Crash Landing on You' Title Full Ver.)",
        artist: 'Kim Kyoung Hee',
        url: "https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/62. Kim Kyoung Hee - Sigriswil ('Crash Landing on You' Title Full Ver.).mp3",
		cover: '/cover.jpg'
      },
      {
        name: "death bed (coffee for your head)",
        artist: 'Powfu, beabadoobee',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/63. Powfu, beabadoobee - death bed (coffee for your head).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Into the Unknown (Panic! At The Disco Version)",
        artist: 'Panic! At The Disco',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/64. Panic! At The Disco - Into the Unknown (Panic! At The Disco Version).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "positions",
        artist: 'Ariana Grande',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/65. Ariana Grande - positions.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Savage Love (Laxed - Siren Beat)",
        artist: 'Jawsh 685 & Jason Derulo',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/66. Jawsh 685 & Jason Derulo - Savage Love (Laxed - Siren Beat).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "no song without you",
        artist: 'HONNE',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/67. HONNE - no song without you.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Toosie Slide",
        artist: 'Drake',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/68. Drake - Toosie Slide.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Chills",
        artist: "Why Don't We",
        url: "https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/69. Why Don't We - Chills.mp3",
		cover: '/cover.jpg'
      },
      {
        name: "What a Man Gotta Do",
        artist: 'Jonas Brothers',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/70. Jonas Brothers - What a Man Gotta Do.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "I'm Ready",
        artist: 'Sam Smith & Demi Lovato',
        url: "https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/71. Sam Smith & Demi Lovato - I'm Ready.mp3",
		cover: '/cover.jpg'
      },
      {
        name: "Living Proof",
        artist: 'Camila Cabello',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/72. Camila Cabello - Living Proof.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Daisies",
        artist: 'Katy Perry',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/73. Katy Perry - Daisies.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Joke's on You",
        artist: 'Charlotte Lawrence',
        url: "https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/74. Charlotte Lawrence - Joke's on You.mp3",
		cover: '/cover.jpg'
      },
      {
        name: "Who's Laughing Now",
        artist: 'Ava Max',
        url: "https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/75. Ava Max - Who's Laughing Now.mp3",
		cover: '/cover.jpg'
      },
      {
        name: "FREE FALL",
        artist: 'ØZI',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/76. ØZI - FREE FALL.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Brand New Way",
        artist: 'DAMON',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/77. DAMON - Brand New Way.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Monster",
        artist: 'Shawn Mendes & Justin Bieber',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/78. Shawn Mendes & Justin Bieber - Monster.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Who",
        artist: 'Lauv(feat. BTS)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/79. Lauv - Who (feat. BTS).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Hold On",
        artist: 'Martin Garrix & Matisse & Sadko(feat. Michel Zitron)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/80. Martin Garrix & Matisse & Sadko - Hold On (feat. Michel Zitron).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "I Got Yo",
        artist: 'Bazzi',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/81. Bazzi - I Got You.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "No Time To Die",
        artist: 'Billie Eilish',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/82. Billie Eilish - No Time To Die.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "End of Time",
        artist: 'K-391, Alan Walker & Ahrix',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/83. K-391, Alan Walker & Ahrix - End of Time.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "My Bad",
        artist: 'SHAUN, Advanced(feat. Julie Bergan)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/84. SHAUN, Advanced - My Bad (feat. Julie Bergan) - KSHMR Edit.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "OK Not To Be OK",
        artist: 'Marshmello & Demi Lovato',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/85. Marshmello & Demi Lovato - OK Not To Be OK.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Love Somebody",
        artist: 'Lauv',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/86. Lauv - Love Somebody.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Higher Ground",
        artist: 'Martin Garrix(feat. John Martin)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/87. Martin Garrix - Higher Ground (feat. John Martin).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Nobody's Love",
        artist: 'Maroon 5',
        url: "https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/88. Maroon 5 - Nobody's Love.mp3",
		cover: '/cover.jpg'
      },
      {
        name: "The Other Side",
        artist: 'SZA & Justin Timberlake',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/89. SZA & Justin Timberlake - The Other Side.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "All The Time",
        artist: 'Marc Benjamin',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/90. Marc Benjamin - All The Time.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Wake Up",
        artist: 'Elaine',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/91. Elaine - Wake Up.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "We Are Warriors",
        artist: 'Avril Lavigne',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/92. Avril Lavigne - We Are Warriors.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Boss Bitch",
        artist: 'Doja Cat',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/93. Doja Cat - Boss Bitch.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "10,000 Hours",
        artist: 'Dan + Shay & Justin Bieber',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/94. Dan + Shay & Justin Bieber - 10,000 Hours.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "exile",
        artist: 'Taylor Swift(feat. Bon Iver)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/95.Taylor Swift - exile (feat. Bon Iver).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Savage Love (Laxed - Siren Beat)",
        artist: 'BTS Remix',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/96. BTS Remix - Savage Love (Laxed - Siren Beat).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Future Nostalgia",
        artist: 'Dua Lipa',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/97. Dua Lipa - Future Nostalgia.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Original (from Dolittle)",
        artist: 'Sia',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/98. Sia - Original (from Dolittle).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Young & Alive",
        artist: 'Bazzi',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/99. Bazzi - Young & Alive.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Diamonds",
        artist: 'Megan Thee Stallion & Normani',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2020/100. Megan Thee Stallion & Normani - Diamonds.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Way Back Home",
        artist: 'SHAUN(feat. Conor Maynard)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/001. SHAUN - Way Back Home (feat. Conor Maynard).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Señorita",
        artist: 'Shawn Mendes & Camila Cabello',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/002. Shawn Mendes & Camila Cabello - Señorita.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Everything I Need (Film Version)",
        artist: 'Skylar Grey',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/003. Skylar Grey - Everything I Need (Film Version).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Different World",
        artist: 'Alan Walker feat. Sofia Carson, K-391 & CORSAK',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/004. Alan Walker feat. Sofia Carson, K-391 & CORSAK - Different World.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "7 rings",
        artist: 'Ariana Grande',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/005. Ariana Grande - 7 rings.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Speechless (Full)",
        artist: 'Naomi Scott',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/006. Naomi Scott - Speechless (Full).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Here With Me",
        artist: 'Marshmello(feat. CHVRCHES)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/007. Marshmello - Here With Me (feat. CHVRCHES).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "On My Way",
        artist: 'Alan Walker, Sabrina Carpenter & Farruko',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/008. Alan Walker, Sabrina Carpenter & Farruko - On My Way.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "bad guy",
        artist: 'Billie Eilish',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/009. Billie Eilish - bad guy.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "thank u, next",
        artist: 'Ariana Grande',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/010. Ariana Grande - thank u, next.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Dancing with a Stranger",
        artist: 'Sam Smith & Normani',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/011. Sam Smith & Normani - Dancing with a Stranger.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "ME!",
        artist: 'Taylor Swift(feat. Brendon Urie of Panic! At The Disco)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/012. Taylor Swift - ME! (feat. Brendon Urie of Panic! At The Disco).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Lost Control",
        artist: 'Alan Walker, Sorana',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/013. Alan Walker, Sorana -  Lost Control.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "I Don't Care",
        artist: 'Ed Sheeran & Justin Bieber',
        url: "https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/014. Ed Sheeran & Justin Bieber - I Don't Care.mp3",
		cover: '/cover.jpg'
      },
      {
        name: "Lily",
        artist: 'Alan Walker, K-391, Emelie Hollow',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/015. Alan Walker, K-391, Emelie Hollow - Lily.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Hope",
        artist: 'The Chainsmokers、Winona Oak',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/016. The Chainsmokers、Winona Oak - Hope.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "A Whole New World",
        artist: 'Mena Massoud, Naomi Scott',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/017. Mena Massoud, Naomi Scott - A Whole New World.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "So Am I",
        artist: 'Ava Max',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/018. Ava Max - So Am I.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "This Feeling",
        artist: 'The Chainsmokers, Kelsea Ballerini',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/019. The Chainsmokers, Kelsea Ballerini - This Feeling.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "If I Can't Have You",
        artist: 'Shawn Mendes',
        url: "https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/020. Shawn Mendes - If I Can't Have You.mp3",
		cover: '/cover.jpg'
      },
      {
        name: "Better When You're Gone",
        artist: 'David Guetta, Brooks & Loote',
        url: "https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/021. David Guetta, Brooks & Loote - Better When You're Gone.mp3",
		cover: '/cover.jpg'
      },
      {
        name: "Sunflower (Spider-Man Into the Spider-Verse)",
        artist: 'Post Malone, Swae Lee',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/022. Post Malone, Swae Lee - Sunflower (Spider-Man Into the Spider-Verse).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "No Sleep",
        artist: 'Martin Garrix(feat. Bonn)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/023. Martin Garrix - No Sleep (feat. Bonn).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Rewrite The Stars",
        artist: 'James Arthur & Anne-Marie',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/024. James Arthur & Anne-Marie - Rewrite The Stars.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Head Above Water",
        artist: 'Avril Lavigne',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/025. Avril Lavigne - Head Above Water.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Beautiful People",
        artist: 'Ed Sheeran(feat. Khalid)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/026. Ed Sheeran - Beautiful People (feat. Khalid).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "I'm so tired…",
        artist: 'Lauv & Troye Sivan',
        url: "https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/027. Lauv & Troye Sivan -  I'm so tired….mp3",
		cover: '/cover.jpg'
      },
      {
        name: "Let Me Down Slowly",
        artist: 'Alec Benjamin(feat. Alessia Cara)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/028. Alec Benjamin - Let Me Down Slowly (feat. Alessia Cara).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Sucker",
        artist: 'Jonas Brothers',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/029. Jonas Brothers - Sucker.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Takeaway",
        artist: 'The Chainsmokers & Illenium(feat. Lennon Stella)',
        url: "https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/030. The Chainsmokers & Illenium - Takeaway (feat. Lennon Stella).mp3",
		cover: '/cover.jpg'
      },
      {
        name: "A Whole New World (End Title)",
        artist: 'ZAYN & Zhavia Ward',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/031. ZAYN & Zhavia Ward - A Whole New World (End Title).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Stand Out Fit In",
        artist: 'ONE OK ROCK',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/032. ONE OK ROCK - Stand Out Fit In.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Memories",
        artist: 'Maroon 5',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/033. Maroon 5 - Memories.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "You Need To Calm Down",
        artist: 'Taylor Swift',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/034. Taylor Swift - You Need To Calm Down.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "SOS",
        artist: 'Avicii(feat. Aloe Blacc)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/035. Avicii - SOS (feat. Aloe Blacc).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Who Do You Love",
        artist: 'The Chainsmokers, 5 Seconds of Summer',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/036. The Chainsmokers, 5 Seconds of Summer -  Who Do You Love.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Hello My Love",
        artist: 'Westlife',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/037. Westlife - Hello My Love.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Call You Mine",
        artist: 'The Chainsmokers, Bebe Rexha',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/038. The Chainsmokers, Bebe Rexha - Call You Mine.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "365",
        artist: 'Zedd & Katy Perry',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/039. Zedd & Katy Perry - 365.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "bad guy",
        artist: 'Billie Eilish & Justin Bieber',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/040. Billie Eilish & Justin Bieber - bad guy.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Rescue Me",
        artist: 'OneRepublic',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/041. OneRepublic - Rescue Me.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Mama",
        artist: 'Clean Bandit, Ellie Goulding',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/042. Clean Bandit, Ellie Goulding - Mama.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Old Town Road (Remix)",
        artist: 'Lil Nas X, Billy Ray Cyrus',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/043. Lil Nas X, Billy Ray Cyrus - Old Town Road (Remix).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Lover",
        artist: 'Taylor Swift',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/044. Taylor Swift - Lover.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "10,000 Hours",
        artist: 'Dan + Shay & Justin Bieber',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/045. Dan + Shay & Justin Bieber - 10,000 Hours.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Natural",
        artist: 'Imagine Dragons',
        url: "https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/046. Imagine Dragons - Natural.mp3",
		cover: '/cover.jpg'
      },
      {
        name: "Play",
        artist: 'K-391, Alan Walker & Martin Tungevaag(feat. Mangoo)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/047. K-391, Alan Walker & Martin Tungevaag - Play (feat. Mangoo).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Boyfriend",
        artist: 'Ariana Grande & Social House',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/048. Ariana Grande & Social House - Boyfriend.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Tell Me It's Over",
        artist: 'Avril Lavigne',
        url: "https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/049. Avril Lavigne - Tell Me It's Over.mp3",
		cover: '/cover.jpg'
      },
      {
        name: "Swan Song",
        artist: 'Dua Lipa',
        url: "https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/050. Dua Lipa - Swan Song (From. the Motion Picture 'Alita Battle Angel').mp3",
		cover: '/cover.jpg'
      },
      {
        name: "Carry On",
        artist: 'Kygo & Rita Ora',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/051. Kygo & Rita Ora - Carry On.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Beach House",
        artist: 'The Chainsmokers',
        url: "https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/052. The Chainsmokers - Beach House.mp3",
		cover: '/cover.jpg'
      },
      {
        name: "Never Really Over",
        artist: 'Katy Perry',
        url: "https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/053. Katy Perry - Never Really Over.mp3",
		cover: '/cover.jpg'
      },
      {
        name: "wish you were gay",
        artist: 'Billie Eilish',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/054. Billie Eilish - wish you were gay.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Fire On Fire (From 'Watership Down')",
        artist: 'Sam Smith',
        url: "https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/055. Sam Smith - Fire On Fire (From 'Watership Down').mp3",
		cover: '/cover.jpg'
      },
      {
        name: "San Francisco",
        artist: 'Galantis(feat. Sofia Carson)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/056. Galantis - San Francisco (feat. Sofia Carson).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "break up with your girlfriend, i'm bored",
        artist: 'Ariana Grande',
        url: "https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/057. Ariana Grande - break up with your girlfriend, i'm bored.mp3",
		cover: '/cover.jpg'
      },
      {
        name: "Let You Love Me",
        artist: 'Rita Ora',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/058. Rita Ora - Let You Love Me.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Back to Life (from.'Bumblebee')",
        artist: 'Hailee Steinfeld',
        url: "https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/059. Hailee Steinfeld - Back to Life (from.'Bumblebee').mp3",
		cover: '/cover.jpg'
      },
      {
        name: "Please Me",
        artist: 'Cardi B & Bruno Mars',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/060. Cardi B & Bruno Mars - Please Me.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Are You Lonely",
        artist: 'Steve Aoki & Alan Walke(feat. ISÁK)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/061. Steve Aoki & Alan Walker - Are You Lonely (feat. ISÁK).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Next Level",
        artist: 'A$ton Wyld',
        url: "https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/062. Various Artists, A$ton Wyld - Next Level.mp3",
		cover: '/cover.jpg'
      },
      {
        name: "Don’t Call Me Angel (Charlie’s Angels)",
        artist: 'Ariana Grande, Miley Cyrus & Lana Del Rey',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/063. Ariana Grande, Miley Cyrus & Lana Del Rey - Don’t Call Me Angel (Charlie’s Angels).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Everything I Need",
        artist: 'Skylar Grey',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/064. Skylar Grey - Everything I Need.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Giant",
        artist: "SHAUN(feat. Conor Maynard)",
        url: "https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/065. Calvin Harris, Rag'n'Bone Man - Giant.mp3",
		cover: '/cover.jpg'
      },
      {
        name: "How Do You Sleep？",
        artist: 'Sam Smith',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/066. Sam Smith - How Do You Sleep？.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Goodbyes",
        artist: 'Post Malone(feat. Young Thug)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/067. Post Malone - Goodbyes (feat. Young Thug).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Solo",
        artist: 'Clean Bandit, Demi Lovato(feat. Demi Lovato).',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/068. Clean Bandit, Demi Lovato - Solo (feat. Demi Lovato).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "I Don't Wanna Go",
        artist: 'Alan Walker, Julie Bergan',
        url: "https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/069. Alan Walker, Julie Bergan - I Don't Wanna Go.mp3",
		cover: '/cover.jpg'
      },
      {
        name: "Wasted Nights",
        artist: 'ONE OK ROCK',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/070. ONE OK ROCK - Wasted Nights.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Wow.",
        artist: 'Post Malone',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/071. Post Malone - Wow..mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Good Thing",
        artist: 'Zedd & Kehlani',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/072. Zedd & Kehlani - Good Thing.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Heaven",
        artist: 'Avicii',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/073. Avicii - Heaven.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "imagine",
        artist: 'Ariana Grande',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/074. Ariana Grande - imagine.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Don’t Feel Like Crying",
        artist: 'Sigrid',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/075. Sigrid - Don’t Feel Like Crying.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Bones",
        artist: 'Galantis(feat. OneRepublic)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/076. Galantis - Bones (feat. OneRepublic).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Why Don't We",
        artist: 'Big Plans',
        url: "https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/077. Why Don't We - Big Plans.mp3",
		cover: '/cover.jpg'
      },
      {
        name: "fuck, i'm lonely",
        artist: 'Lauv(feat. Anne-Marie)',
        url: "https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/078. Lauv - fuck, i'm lonely (feat. Anne-Marie).mp3",
		cover: '/cover.jpg'
      },
      {
        name: "Circles",
        artist: 'Post Malone',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/079. Post Malone - Circles.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Cruel Summer",
        artist: 'Taylor Swift',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/080. Taylor Swift - Cruel Summer.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Lose You to Love Me",
        artist: 'Selena Gomez',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/081. Selena Gomez - Lose You to Love Me.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Ritual",
        artist: 'Tiësto, Jonas Blue & RITA ORA',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/082. Tiësto, Jonas Blue & RITA ORA - Ritual.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Talk",
        artist: 'Khalid, Disclosure',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/083. Khalid, Disclosure - Talk.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "you should see me in a crown",
        artist: 'Billie Eilish',
        url: "https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/084. Billie Eilish - you should see me in a crown.mp3",
		cover: '/cover.jpg'
      },
      {
        name: "Somebody",
        artist: 'The Chainsmokers, Drew Lowe',
        url: "https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/085. The Chainsmokers, Drew Lowe - Somebody.mp3",
		cover: '/cover.jpg'
      },
      {
        name: "R.I.P.",
        artist: 'Sofia Reyes(feat. Rita Ora & Anitta)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/086. Sofia Reyes - R.I.P. (feat. Rita Ora & Anitta).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Walk Me Home",
        artist: 'P!nk',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/087. P!nk - Walk Me Home.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Broken & Beautiful (from the movie UglyDolls)",
        artist: 'Kelly Clarkson',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/088. Kelly Clarkson - Broken & Beautiful (from the movie UglyDolls).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "How You Love Me",
        artist: 'Hardwell(feat. Conor Maynard & Snoop Dogg)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/089. Hardwell - How You Love Me (feat. Conor Maynard & Snoop Dogg).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Can You Feel the Love Tonight",
        artist: 'Beyoncé(feat. Donald Glover, Billy Eichner, Seth Rogen)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/090. Beyoncé - Can You Feel the Love Tonight (feat. Donald Glover, Billy Eichner, Seth Rogen).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Shut Up",
        artist: 'Greyson Chance',
        url: "https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/091. Greyson Chance - Shut Up.mp3",
		cover: '/cover.jpg'
      },
      {
        name: "Runaway",
        artist: 'Tiffany Young(feat. Babyface)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/092. Tiffany Young - Runaway (Feat. Babyface).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Baby",
        artist: 'Clean Bandit(ft. Marina and The Diamonds & Luis Fonsi)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/093. Clean Bandit - Baby (ft. Marina and The Diamonds & Luis Fonsi).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Earth",
        artist: 'Lil Dicky',
        url: "https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/094. Lil Dicky - Earth.mp3",
		cover: '/cover.jpg'
      },
      {
        name: "There You Are",
        artist: 'ZAYN',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/095. ZAYN - There You Are.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Someone You Loved",
        artist: 'Lewis Capaldi',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/096. Lewis Capaldi - Someone You Loved.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Anxiety",
        artist: 'Julia Michaels(feat. Selena Gomez)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/097. Julia Michaels - Anxiety (feat. Selena Gomez).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Live Fast (PUBGM)",
        artist: 'Alan Walker & A$AP Rocky',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/098. Alan Walker & A$AP Rocky - Live Fast (PUBGM).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Dumb Blonde",
        artist: 'Avril Lavigne(feat. Nicki Minaj)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/099. Avril Lavigne - Dumb Blonde (feat. Nicki Minaj).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Liar",
        artist: 'Camila Cabello',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Western/2019/100. Camila Cabello - Liar.mp3',
		cover: '/cover.jpg'
      }

    ]
});