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
    listMaxHeight: '175px',
    lrcType: 3,
    audio: [
      {
        name: "明明就",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-明明就.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-明明就.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "青花瓷",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-青花瓷.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-青花瓷.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "愛情廢柴",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-愛情廢柴.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-愛情廢柴.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "告白氣球",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-告白氣球.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-告白氣球.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "菊花台",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-菊花台.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-菊花台.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "手寫的從前",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-手寫的從前.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-手寫的從前.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "擱淺",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-擱淺.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-擱淺.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "晴天",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-晴天.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-晴天.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "聽爸爸的話",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-聽爸爸的話.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-聽爸爸的話.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "聽媽媽的話",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-聽媽媽的話.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-聽媽媽的話.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "聽見下雨的聲音",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-聽見下雨的聲音.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-聽見下雨的聲音.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "Mojito",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-Mojito.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-Mojito.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "一路向北",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-一路向北.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-一路向北.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "七里香",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-七里香.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-七里香.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "不愛我就拉倒",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-不愛我就拉倒.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-不愛我就拉倒.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "不能說的秘密",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-不能說的秘密.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-不能說的秘密.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "不該",
        artist: '周杰倫(ft. aMEI)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-不該 (with aMEI).mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-不該 (with aMEI).lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "夜曲",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-夜曲.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-夜曲.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "大笨鐘",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-大笨鐘.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-大笨鐘.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "安靜",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-安靜.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-安靜.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "楓",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-楓.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-楓.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "等你下課",
        artist: '周杰倫(ft. 楊瑞代)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-等你下課(with 楊瑞代).mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-等你下課(with 楊瑞代).lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "紅塵客棧",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-紅塵客棧.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-紅塵客棧.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "算什麼男人",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-算什麼男人.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-算什麼男人.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "給我一首歌的時間",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-給我一首歌的時間.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-給我一首歌的時間.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "說了再見",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-說了再見.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-說了再見.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "說好的幸福呢",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-說好的幸福呢.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-說好的幸福呢.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "說好不哭",
        artist: '周杰倫 (ft. 阿信)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-說好不哭 (with 五月天阿信).mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-說好不哭 (with 五月天阿信).lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "千里之外",
        artist: '周杰倫(ft. 費玉清)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫&費玉清-千里之外.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫&費玉清-千里之外.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "髮如雪",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-髮如雪.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-髮如雪.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "退後",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-退後.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-退後.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "我不配",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-我不配.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-我不配.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "愛你沒差",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-愛你沒差.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-愛你沒差.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "甜甜的",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-甜甜的.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-甜甜的.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "回到過去",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-回到過去.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-回到過去.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "星晴",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-星晴.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-星晴.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "藉口",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-藉口.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-藉口.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "半島鐵盒",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-半島鐵盒.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-半島鐵盒.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "開不了口",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-開不了口.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-開不了口.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "陽光宅男",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-陽光宅男.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-陽光宅男.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "白色風車",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-白色風車.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-白色風車.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "Mine Mine",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-Mine Mine.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-Mine Mine.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "彩虹",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-彩虹.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-彩虹.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "珊瑚海",
        artist: '周杰倫&梁心頤',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫&梁心頤-珊瑚海.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫&梁心頤-珊瑚海.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "稻香",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-稻香.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-稻香.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "簡單愛",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-簡單愛.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-簡單愛.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "黑色毛衣",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-黑色毛衣.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-黑色毛衣.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "龍捲風",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-龍捲風.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-龍捲風.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "怎麼了",
        artist: '周杰倫&袁詠琳',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫&袁詠琳-怎麼了.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫&袁詠琳-怎麼了.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "夜的第七章",
        artist: '周杰倫&潘兒',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫&潘兒-夜的第七章.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫&潘兒-夜的第七章.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "公主病",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-公主病.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-公主病.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "天涯過客",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-天涯過客.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-天涯過客.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "心雨",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-心雨.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-心雨.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "牛仔很忙",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-牛仔很忙.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-牛仔很忙.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "前世情人",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-前世情人.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-前世情人.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "哪裡都是你",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-哪裡都是你.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-哪裡都是你.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "說走就走",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-說走就走.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-說走就走.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "竊愛",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-竊愛.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-竊愛.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "四面楚歌",
        artist: '周杰倫&林邁可',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫&林邁可-四面楚歌.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫&林邁可-四面楚歌.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "我要夏天",
        artist: '周杰倫&楊瑞代',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫&楊瑞代-我要夏天.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫&楊瑞代-我要夏天.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "Now You See Me",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-Now You See Me.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-Now You See Me.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "一口氣全念對",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-一口氣全念對.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-一口氣全念對.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "止戰之殤",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-止戰之殤.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-止戰之殤.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "本草綱目",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-本草綱目.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-本草綱目.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "我是如此相信",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-我是如此相信.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-我是如此相信.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "美人魚",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-美人魚.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-美人魚.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "陽明山",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-陽明山.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-陽明山.lrc',
		cover: '/images/album/jay.jpg'
      },
      {
        name: "鞋子特大號",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/周杰倫/周杰倫-鞋子特大號.mp3',
        lrc: '/music_lrcover/jay_lrc/周杰倫-鞋子特大號.lrc',
		cover: '/images/album/jay.jpg'
      }

    ]
});