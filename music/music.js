const ap = new APlayer({
    container: document.getElementById('aplayer'),
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
        name: "Wind flower",
        artist: '마마무',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/YTsongs/Wind flower.mp3',
		cover: '/cover.jpg'
      },
      {
        name: 'A Thousand Years',
        artist: 'Christina Perri',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/YTsongs/A Thousand Years.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "Solo",
        artist: 'Clean Bandit ft. Demi Lovato',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/YTsongs/Solo.mp3',
		cover: '/cover.jpg'
      },
      {
        name: 'Rather Be',
        artist: 'Clean Bandit ft. Jess Glynne',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/YTsongs/Rather Be.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "Closer",
        artist: 'The Chainsmokers ft. Halsey',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/YTsongs/Closer.mp3',
		cover: '/cover.jpg'
      },
      {
        name: 'Symphony',
        artist: 'Clean Bandit ft. Zara Larsson',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/YTsongs/Symphony.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "Titanium",
        artist: 'David Guetta ft. Sia',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/YTsongs/Titanium.mp3',
		cover: '/cover.jpg'
      },
      {
        name: 'Bang My Head',
        artist: 'David Guetta ft. Sia & Fetty Wap',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/YTsongs/Bang My Head.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "Extraordinary",
        artist: 'Clean Bandit ft. Sharna Bass',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/YTsongs/Extraordinary.mp3',
		cover: '/cover.jpg'
      },
      {
        name: 'Happy Now',
        artist: 'Zedd, Elley Duhé',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/YTsongs/Happy Now.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "Fast Car",
        artist: 'Jonas Blue ft. Dakota',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/YTsongs/Fast Car.mp3',
		cover: '/cover.jpg'
      },
      {
        name: 'Perfect Strangers',
        artist: 'Jonas Blue ft. JP Cooper',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/YTsongs/Perfect Strangers.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "Firestone",
        artist: 'Kygo ft. Conrad Sewell',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/YTsongs/Firestone.mp3',
		cover: '/cover.jpg'
      },
      {
        name: 'In The Name Of Love',
        artist: 'Martin Garrix & Bebe Rexha',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/YTsongs/In The Name Of Love.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "Now You're Gone",
        artist: 'Basshunter',
        url: "https://notp.ddns.net/wordpress/wp-content/music/YTsongs/Now You're Gone.mp3",
		cover: '/cover.jpg'
      },
      {
        name: 'Counting Stars',
        artist: 'OneRepublic',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/YTsongs/Counting Stars.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "Rockabye",
        artist: 'Clean Bandit ft. Sean Paul & Anne-Marie',
        url: "https://notp.ddns.net/wordpress/wp-content/music/YTsongs/Rockabye.mp3",
		cover: '/cover.jpg'
      },
      {
        name: 'These Days',
        artist: 'Rudimental ft. Jess Glynne, Macklemore & Dan Caplen',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/YTsongs/These Days.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "See You Again",
        artist: 'Wiz Khalifa ft. Charlie Puth',
        url: "https://notp.ddns.net/wordpress/wp-content/music/YTsongs/See You Again.mp3",
		cover: '/cover.jpg'
      },
      {
        name: 'Wolves',
        artist: 'Selena Gomez, Marshmello',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/YTsongs/Wolves.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "Treat You Better",
        artist: 'Shawn Mendes',
        url: "https://notp.ddns.net/wordpress/wp-content/music/YTsongs/Treat You Better.mp3",
		cover: '/cover.jpg'
      },
      {
        name: "Don't Let Me Down",
        artist: 'The Chainsmokers ft. Daya',
        url: "https://notp.ddns.net/wordpress/wp-content/music/YTsongs/Don't Let Me Down.mp3",
		cover: '/cover.jpg'
      },
	  {
        name: "Something Just Like This",
        artist: 'The Chainsmokers & Coldplay',
        url: "https://notp.ddns.net/wordpress/wp-content/music/YTsongs/Something Just Like This.mp3",
		cover: '/cover.jpg'
      },
      {
        name: "Clarity",
        artist: 'Zedd ft. Foxes',
        url: "https://notp.ddns.net/wordpress/wp-content/music/YTsongs/Clarity.mp3",
		cover: '/cover.jpg'
      },
      {
        name: "Stay",
        artist: 'Zedd, Alessia Cara',
        url: "https://notp.ddns.net/wordpress/wp-content/music/YTsongs/Stay.mp3",
		cover: '/cover.jpg'
      }
    ]
});