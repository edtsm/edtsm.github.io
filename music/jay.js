const jay = new APlayer({
    container: document.getElementById('jay'),
    fixed: false,
    autoplay: false,
    theme: '#1c03fc',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: '150px',
    lrcType: 3,
    audio: [
      {
        name: "明明就",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫抒情/周杰倫-明明就.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-明明就.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "青花瓷",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫抒情/周杰倫-青花瓷.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-青花瓷.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "愛情廢柴",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫抒情/周杰倫-愛情廢柴.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-愛情廢柴.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "告白氣球",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫抒情/周杰倫-告白氣球.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-告白氣球.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "菊花台",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫抒情/周杰倫-菊花台.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-菊花台.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "手寫的從前",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫抒情/周杰倫-手寫的從前.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-手寫的從前.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "擱淺",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫抒情/周杰倫-擱淺.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-擱淺.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "晴天",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫抒情/周杰倫-晴天.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-晴天.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "聽爸爸的話",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫抒情/周杰倫-聽爸爸的話.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-聽爸爸的話.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "聽媽媽的話",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫抒情/周杰倫-聽媽媽的話.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-聽媽媽的話.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "聽見下雨的聲音",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫抒情/周杰倫-聽見下雨的聲音.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-聽見下雨的聲音.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "Mojito",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫抒情/周杰倫-Mojito.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-Mojito.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "一路向北",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫抒情/周杰倫-一路向北.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-一路向北.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "七里香",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫抒情/周杰倫-七里香.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-七里香.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "不愛我就拉倒",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫抒情/周杰倫-不愛我就拉倒.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-不愛我就拉倒.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "不能說的秘密",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫抒情/周杰倫-不能說的秘密.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-不能說的秘密.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "不該",
        artist: '周杰倫(ft. aMEI)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫抒情/周杰倫-不該 (with aMEI).mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-不該 (with aMEI).lrc',
		cover: '/cover.jpg'
      },
      {
        name: "夜曲",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫抒情/周杰倫-夜曲.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-夜曲.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "大笨鐘",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫抒情/周杰倫-大笨鐘.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-大笨鐘.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "安靜",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫抒情/周杰倫-安靜.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-安靜.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "楓",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫抒情/周杰倫-楓.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-楓.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "等你下課",
        artist: '周杰倫(ft. 楊瑞代)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫抒情/周杰倫-等你下課(with 楊瑞代).mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-等你下課(with 楊瑞代).lrc',
		cover: '/cover.jpg'
      },
      {
        name: "紅塵客棧",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫抒情/周杰倫-紅塵客棧.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-紅塵客棧.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "算什麼男人",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫抒情/周杰倫-算什麼男人.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-算什麼男人.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "給我一首歌的時間",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫抒情/周杰倫-給我一首歌的時間.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-給我一首歌的時間.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "說了再見",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫抒情/周杰倫-說了再見.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-說了再見.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "說好的幸福呢",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫抒情/周杰倫-說好的幸福呢.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-說好的幸福呢.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "說好不哭",
        artist: '周杰倫 (ft. 阿信)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫抒情/周杰倫-說好不哭 (with 五月天阿信).mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-說好不哭 (with 五月天阿信).lrc',
		cover: '/cover.jpg'
      },
      {
        name: "千里之外",
        artist: '周杰倫(ft. 費玉清)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫抒情/周杰倫&費玉清-千里之外.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫&費玉清-千里之外.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "髮如雪",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫抒情/周杰倫-髮如雪.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-髮如雪.lrc',
		cover: '/cover.jpg'
      },

    ]
});