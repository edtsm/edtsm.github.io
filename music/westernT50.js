const app = new APlayer({
    container: document.getElementById('western'),
    fixed: false,
    autoplay: false,
    theme: '#1c03fc',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: '200px',
    lrcType: 0,
    audio: [
      {
        name: "ROSÉ - On The Ground",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/On The Ground.mp3',
		cover: '/cover.jpg'
      },
      {
        name: 'ROSÉ - Gone',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/Gone.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "Bruno Mars, Anderson .Paak & Silk Sonic - Leave The Door Open",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/Leave The Door Open.mp3',
		cover: '/cover.jpg'
      },
      {
        name: 'Justin Bieber - Hold On',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/Hold On.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "Maroon 5 & Megan Thee Stallion - Beautiful Mistakes",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/Beautiful Mistakes.mp3',
		cover: '/cover.jpg'
      },
      {
        name: 'ØZI - 0.03',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/003.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "Taylor Swift - Love Story (Taylors Version)",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/Love Story.mp3',
		cover: '/cover.jpg'
      },
      {
        name: 'Jhené Aiko - Lead the Way',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/Lead the Way.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "ØZI - LUFU (feat.Arin Ray,GSoul)",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/LUFU.mp3',
		cover: '/cover.jpg'
      },
      {
        name: 'Post Malone - Only Wanna Be With You (Pokémon 25 Version)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/Only Wanna Be With You.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "Conan Gray - Overdrive",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/Overdrive.mp3',
		cover: '/cover.jpg'
      },
      {
        name: 'The Chainsmokers, Coldplay - Something Just Like This',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/Something Just Like This.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "Ed Sheeran - Shape of You",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/Shape of You.mp3',
		cover: '/cover.jpg'
      },
      {
        name: 'DJ Snake & Selena Gomez - Selfish Love',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/Selfish Love.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "Maisie Peters - John Hughes Movie",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/John Hughes Movie.mp3',
		cover: '/cover.jpg'
      },
      {
        name: 'Zara Larsson - Need Someone',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/Need Someone.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "Joel Corry, RAYE & David Guetta - BED",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/BED.mp3',
		cover: '/cover.jpg'
      },
      {
        name: 'Alan Walker & salem ilese - Fake A Smile',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/Fake A Smile.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "Ed Sheeran - Afterglow",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/Afterglow.mp3',
		cover: '/cover.jpg'
      },
      {
        name: 'Shawn Mendes & Camila Cabello - Señorita',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/Senorita.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "BTS - Dynamite",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/Dynamite.mp3',
		cover: '/cover.jpg'
      },
      {
        name: 'Bebe Rexha - Sacrifice',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/Sacrifice.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "Tones and I - Dance Monkey",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/Dance Monkey.mp3',
		cover: '/cover.jpg'
      },
      {
        name: 'Alan Walker - Faded',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/Faded.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "SHAUN - Way Back Home (feat. Conor Maynard)",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/Way Back Home.mp3',
		cover: '/cover.jpg'
      },
      {
        name: 'ØZI - SLIDE',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/SLIDE.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "Ed Sheeran - Perfect",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/Perfect.mp3',
		cover: '/cover.jpg'
      },
      {
        name: 'Rhydian Vaughan - Fine As Moonlight',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/Fine As Moonlight.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "The Chainsmokers - Closer (ft. Halsey)",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/Closer.mp3',
		cover: '/cover.jpg'
      },
      {
        name: 'Camila Cabello - Havana (ft. Young Thug)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/Havana.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "Maroon 5 - Girls Like You (feat. Cardi B)",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/Girls Like You.mp3',
		cover: '/cover.jpg'
      },
      {
        name: 'ØZI - JUST DO YOU (feat. sunkis)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/JUST DO YOU.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "Ariana Grande - test drive",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/test drive.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Dua Lipa - We're Good",
        url: "https://notp.ddns.net/wordpress/wp-content/music/WesternT50/Were Good.mp3",
		cover: '/cover.jpg'
      },
	  {
        name: "Lady Gaga, Bradley Cooper - Shallow",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/Shallow.mp3',
		cover: '/cover.jpg'
      },
      {
        name: 'Sia - 1+1',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/11.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "RITA ORA - Big (feat. Gunna)",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/Big.mp3',
		cover: '/cover.jpg'
      },
      {
        name: 'Adam Hambrick - The Longer I Lay Here (ft Jillian Jacqueline)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/The Longer I Lay Here.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "Maroon 5 - Sugar",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/Sugar.mp3',
		cover: '/cover.jpg'
      },
      {
        name: 'Wiz Khalifa - See You Again (ft. Charlie Puth)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/See You Again.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "Amy Shark - Love Songs Ain't for Us (feat. Keith Urban)",
        url: "https://notp.ddns.net/wordpress/wp-content/music/WesternT50/Love Songs Aint for Us.mp3",
		cover: '/cover.jpg'
      },
      {
        name: 'Imagine Dragons - Follow You',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/Follow You.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "Billie Eilish - bad guy",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/bad guy.mp3',
		cover: '/cover.jpg'
      },
      {
        name: 'Ava Max - Sweet but Psycho',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/Sweet but Psycho.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "Justin Bieber - Love Yourself",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/Love Yourself.mp3',
		cover: '/cover.jpg'
      },
      {
        name: 'Gentle Bones & Clara Benin - A Day At A Time',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/A Day At A Time.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "Alexander 23 - Cry Over Boys",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/Cry Over Boys.mp3',
		cover: '/cover.jpg'
      },
      {
        name: 'Joshua Bassett - Telling Myself',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/Telling Myself.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "Alan Walker, Noah Cyrus, Digital Farm Animals, Juliander - All Falls Down",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/All Falls Down.mp3',
		cover: '/cover.jpg'
      },
      {
        name: 'Justin Bieber - Anyone',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/WesternT50/Anyone.mp3',
		cover: '/cover.jpg'
      }
    ]
});