const gao = new APlayer({
    container: document.getElementById('gao'),
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
        name: "簡答題",
        artist: '告五人',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/告五人/告五人 - 簡答題.mp3',
        lrc: '/music_lrcover/gao_lrc/告五人 - 簡答題.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "WEWE",
        artist: '告五人',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/告五人/告五人 - WEWE.mp3',
        lrc: '/music_lrcover/gao_lrc/告五人 - WEWE.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "新世界",
        artist: '告五人 (feat.阿爆)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/告五人/告五人 - 新世界.mp3',
        lrc: '/music_lrcover/gao_lrc/告五人 - 新世界.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "鹿",
        artist: '告五人',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/告五人/告五人 - 鹿.mp3',
        lrc: '/music_lrcover/gao_lrc/告五人 - 鹿.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "與海無關",
        artist: '告五人',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/告五人/告五人 - 與海無關.mp3',
        lrc: '/music_lrcover/gao_lrc/告五人 - 與海無關.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "人前人後",
        artist: '告五人',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/告五人/告五人 - 人前人後.mp3',
        lrc: '/music_lrcover/gao_lrc/告五人 - 人前人後.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "法蘭西多士",
        artist: '告五人',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/告五人/告五人 - 法蘭西多士.mp3',
        lrc: '/music_lrcover/gao_lrc/告五人 - 法蘭西多士.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "醜人多作怪",
        artist: '告五人',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/告五人/告五人 - 醜人多作怪.mp3',
        lrc: '/music_lrcover/gao_lrc/告五人 - 醜人多作怪.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "溫蒂公主的侍衛",
        artist: '告五人',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/告五人/告五人 - 溫蒂公主的侍衛.mp3',
        lrc: '/music_lrcover/gao_lrc/告五人 - 溫蒂公主的侍衛.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "運氣來得若有似無",
        artist: '告五人',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/告五人/告五人 - 運氣來得若有似無.mp3',
        lrc: '/music_lrcover/gao_lrc/告五人 - 運氣來得若有似無.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "帶我去找夜生活-健康版",
        artist: '告五人',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/告五人/告五人 - 帶我去找夜生活-健康版.mp3',
        lrc: '/music_lrcover/gao_lrc/告五人 - 帶我去找夜生活-健康版.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "你要不要吃哈密瓜",
        artist: '告五人',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/告五人/告五人 - 你要不要吃哈密瓜.mp3',
        lrc: '/music_lrcover/gao_lrc/告五人 - 你要不要吃哈密瓜.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "紅",
        artist: '告五人',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/告五人/告五人 - 紅.mp3',
        lrc: '/music_lrcover/gao_lrc/告五人 - 紅.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "唯一",
        artist: '告五人',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/告五人/告五人 - 唯一.mp3',
        lrc: '/music_lrcover/gao_lrc/告五人 - 唯一.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "同樣一個你",
        artist: '告五人',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/告五人/告五人 - 同樣一個你.mp3',
        lrc: '/music_lrcover/gao_lrc/告五人 - 同樣一個你.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "從沒去過巴塞隆納",
        artist: '告五人',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/告五人/告五人 - 從沒去過巴塞隆納.mp3',
        lrc: '/music_lrcover/gao_lrc/告五人 - 從沒去過巴塞隆納.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "跳海",
        artist: '告五人',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/告五人/告五人 - 跳海.mp3',
        lrc: '/music_lrcover/gao_lrc/告五人 - 跳海.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "愛人錯過",
        artist: '告五人',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/告五人/告五人 - 愛人錯過.mp3',
        lrc: '/music_lrcover/gao_lrc/告五人 - 愛人錯過.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "帶我去找夜生活",
        artist: '告五人',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/告五人/告五人 - 帶我去找夜生活.mp3',
        lrc: '/music_lrcover/gao_lrc/告五人 - 帶我去找夜生活.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "驕傲的鯨魚",
        artist: '告五人',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/告五人/告五人 - 驕傲的鯨魚.mp3',
        lrc: '/music_lrcover/gao_lrc/告五人 - 驕傲的鯨魚.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "夜裡無星",
        artist: '告五人',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/告五人/告五人 - 夜裡無星.mp3',
        lrc: '/music_lrcover/gao_lrc/告五人 - 夜裡無星.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "不具名的花",
        artist: '告五人',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/告五人/告五人 - 不具名的花.mp3',
        lrc: '/music_lrcover/gao_lrc/告五人 - 不具名的花.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "披星戴月的想你",
        artist: '告五人',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/告五人/告五人 - 披星戴月的想你.mp3',
        lrc: '/music_lrcover/gao_lrc/告五人 - 披星戴月的想你.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "在這座城市遺失了你",
        artist: '告五人',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/告五人/告五人 - 在這座城市遺失了你.mp3',
        lrc: '/music_lrcover/gao_lrc/告五人 - 在這座城市遺失了你.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "迷霧之子",
        artist: '告五人',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/告五人/告五人 - 迷霧之子.mp3',
        lrc: '/music_lrcover/gao_lrc/告五人 - 迷霧之子.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "果然你還是",
        artist: '告五人',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/告五人/告五人 - 果然你還是.mp3',
        lrc: '/music_lrcover/gao_lrc/告五人 - 果然你還是.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "愛在夏天",
        artist: '告五人',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/告五人/告五人 - 愛在夏天.mp3',
        lrc: '/music_lrcover/gao_lrc/告五人 - 愛在夏天.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "愚人游戲",
        artist: '告五人',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/告五人/告五人 - 愚人游戲.mp3',
        lrc: '/music_lrcover/gao_lrc/告五人 - 愚人游戲.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "獨角獸",
        artist: '告五人',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/告五人/告五人 - 獨角獸.mp3',
        lrc: '/music_lrcover/gao_lrc/告五人 - 獨角獸.lrc',
		cover: '/cover.jpg'
      }

    ]
});