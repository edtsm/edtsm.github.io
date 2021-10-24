const ronghaoli = new APlayer({
    container: document.getElementById('ronghaoli'),
    fixed: false,
    autoplay: false,
    theme: '#1c03fc',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: '175px',
    lrcType: 3,
    audio: [
      {
        name: "就這樣",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/李榮浩-就這樣.mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/李榮浩-就這樣.lrc',
		cover: '/images/album/ronghaoli.jpg'
      },
      {
        name: "二三十",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/李榮浩-二三十.mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/李榮浩-二三十.lrc',
		cover: '/images/album/ronghaoli.jpg'
      },
      {
        name: "山川",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/李榮浩-山川.mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/李榮浩-山川.lrc',
		cover: '/images/album/ronghaoli.jpg'
      },
      {
        name: "不將就",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/李榮浩-不將就.mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/李榮浩-不將就.lrc',
		cover: '/images/album/ronghaoli.jpg'
      },
      {
        name: "不搭",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/李榮浩-不搭.mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/李榮浩-不搭.lrc',
		cover: '/images/album/ronghaoli.jpg'
      },
      {
        name: "不說 (路過版)",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/李榮浩-不說(路過版).mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/李榮浩-不說(路過版).lrc',
		cover: '/images/album/ronghaoli.jpg'
      },
      {
        name: "不遺憾",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/李榮浩-不遺憾.mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/李榮浩-不遺憾.lrc',
		cover: '/images/album/ronghaoli.jpg'
      },
      {
        name: "天生",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/李榮浩-天生.mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/李榮浩-天生.lrc',
		cover: '/images/album/ronghaoli.jpg'
      },
      {
        name: "太坦白",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/李榮浩-太坦白.mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/李榮浩-太坦白.lrc',
		cover: '/images/album/ronghaoli.jpg'
      },
      {
        name: "王牌冤家",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/李榮浩-王牌冤家.mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/李榮浩-王牌冤家.lrc',
		cover: '/images/album/ronghaoli.jpg'
      },
      {
        name: "后羿",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/李榮浩-后羿.mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/李榮浩-后羿.lrc',
		cover: '/images/album/ronghaoli.jpg'
      },
      {
        name: "不將就",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/李榮浩-不將就.mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/李榮浩-不將就.lrc',
		cover: '/images/album/ronghaoli.jpg'
      },
      {
        name: "在一起嘛好不好",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/李榮浩-在一起嘛好不好.mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/李榮浩-在一起嘛好不好.lrc',
		cover: '/images/album/ronghaoli.jpg'
      },
      {
        name: "不說 (路過版)",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/李榮浩-不說(路過版).mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/李榮浩-不說(路過版).lrc',
		cover: '/images/album/ronghaoli.jpg'
      },
      {
        name: "年少有為",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/李榮浩-年少有為.mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/李榮浩-年少有為.lrc',
		cover: '/images/album/ronghaoli.jpg'
      },
      {
        name: "成長之重量",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/李榮浩-成長之重量.mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/李榮浩-成長之重量.lrc',
		cover: '/images/album/ronghaoli.jpg'
      },
      {
        name: "老友記",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/李榮浩-老友記.mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/李榮浩-老友記.lrc',
		cover: '/images/album/ronghaoli.jpg'
      },
      {
        name: "耳朵",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/李榮浩-耳朵.mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/李榮浩-耳朵.lrc',
		cover: '/images/album/ronghaoli.jpg'
      },
      {
        name: "自拍",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/李榮浩-自拍.mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/李榮浩-自拍.lrc',
		cover: '/images/album/ronghaoli.jpg'
      },
      {
        name: "作曲家",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/李榮浩-作曲家.mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/李榮浩-作曲家.lrc',
		cover: '/images/album/ronghaoli.jpg'
      },
      {
        name: "我看著你的時候",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/李榮浩-我看著你的時候.mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/李榮浩-我看著你的時候.lrc',
		cover: '/images/album/ronghaoli.jpg'
      },
      {
        name: "我們好好的",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/李榮浩-我們好好的.mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/李榮浩-我們好好的.lrc',
		cover: '/images/album/ronghaoli.jpg'
      },
      {
        name: "戒煙",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/李榮浩-戒煙.mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/李榮浩-戒煙.lrc',
		cover: '/images/album/ronghaoli.jpg'
      },
      {
        name: "李白",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/李榮浩-李白.mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/李榮浩-李白.lrc',
		cover: '/images/album/ronghaoli.jpg'
      },
      {
        name: "男女",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/李榮浩-男女.mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/李榮浩-男女.lrc',
		cover: '/images/album/ronghaoli.jpg'
      },
      {
        name: "爸爸媽媽",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/李榮浩-爸爸媽媽.mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/李榮浩-爸爸媽媽.lrc',
		cover: '/images/album/ronghaoli.jpg'
      },
      {
        name: "哎呀",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/李榮浩-哎呀.mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/李榮浩-哎呀.lrc',
		cover: '/images/album/ronghaoli.jpg'
      },
      {
        name: "不將就",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/李榮浩-不將就.mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/李榮浩-不將就.lrc',
		cover: '/images/album/ronghaoli.jpg'
      },
      {
        name: "貧窮或富有",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/李榮浩-貧窮或富有.mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/李榮浩-貧窮或富有.lrc',
		cover: '/images/album/ronghaoli.jpg'
      },
      {
        name: "都一樣",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/李榮浩-都一樣.mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/李榮浩-都一樣.lrc',
		cover: '/images/album/ronghaoli.jpg'
      },
      {
        name: "喜劇之王",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/李榮浩-喜劇之王.mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/李榮浩-喜劇之王.lrc',
		cover: '/images/album/ronghaoli.jpg'
      },
      {
        name: "等著等著就老了",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/李榮浩-等著等著就老了.mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/李榮浩-等著等著就老了.lrc',
		cover: '/images/album/ronghaoli.jpg'
      },
      {
        name: "嗯",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/李榮浩-嗯.mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/李榮浩-嗯.lrc',
		cover: '/images/album/ronghaoli.jpg'
      },
      {
        name: "落俗",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/李榮浩-落俗.mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/李榮浩-落俗.lrc',
		cover: '/images/album/ronghaoli.jpg'
      },
      {
        name: "歌謠",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/李榮浩-歌謠.mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/李榮浩-歌謠.lrc',
		cover: '/images/album/ronghaoli.jpg'
      },
      {
        name: "模特",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/李榮浩-模特.mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/李榮浩-模特.lrc',
		cover: '/images/album/ronghaoli.jpg'
      },
      {
        name: "縱橫四海",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/李榮浩-縱橫四海.mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/李榮浩-縱橫四海.lrc',
		cover: '/images/album/ronghaoli.jpg'
      },
      {
        name: "女兒國",
        artist: '李榮浩&張靚穎',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/張靚穎&李榮浩-女兒國.mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/張靚穎&李榮浩-女兒國.lrc',
		cover: '/images/album/ronghaoli.jpg'
      },
      {
        name: "老街",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/李榮浩-老街.mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/李榮浩-老街.lrc',
		cover: '/images/album/ronghaoli.jpg'
      },
      {
        name: "麻雀",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/李榮浩-麻雀.mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/李榮浩-麻雀.lrc',
		cover: '/images/album/ronghaoli.jpg'
      },
      {
        name: "滿座",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/李榮浩/李榮浩-滿座.mp3',
        lrc: '/music_lrcover/ronghaoli_lrc/李榮浩-滿座.lrc',
		cover: '/images/album/ronghaoli.jpg'
      }



    ]
});