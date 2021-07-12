const namewee = new APlayer({
    container: document.getElementById('namewee'),
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
        name: "爸爸的夢",
        artist: '黃明志&黃安熙',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/黃明志/黃明志&黃安熙-爸爸的夢.mp3',
        lrc: '/music_lrcover/namewee_lrc/黃明志&黃安熙-爸爸的夢.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "飆高音",
        artist: '黃明志',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/黃明志/黃明志-飆高音.mp3',
        lrc: '/music_lrcover/namewee_lrc/黃明志-飆高音.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "泰傷情歌",
        artist: '黃明志',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/黃明志/黃明志-泰傷情歌.mp3',
        lrc: '/music_lrcover/namewee_lrc/黃明志-泰傷情歌.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "泰國情歌",
        artist: '黃明志',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/黃明志/黃明志-泰國情歌.mp3',
        lrc: '/music_lrcover/namewee_lrc/黃明志-泰國情歌.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "心愛的人",
        artist: '黃明志',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/黃明志/黃明志-心愛的人.mp3',
        lrc: '/music_lrcover/namewee_lrc/黃明志-心愛的人.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "一起做過的蠢事情",
        artist: '黃明志&小潘潘',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/黃明志/黃明志&小潘潘（潘柚彤）-一起做過的蠢事情.mp3',
        lrc: '/music_lrcover/namewee_lrc/黃明志&小潘潘（潘柚彤）-一起做過的蠢事情.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "Tokyo Bon 東京盆踴り2020",
        artist: '黃明志&二宮芽生',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/黃明志/黃明志&二宮芽生-Tokyo Bon 東京盆踴り2020.mp3',
        lrc: '/music_lrcover/namewee_lrc/黃明志&二宮芽生-Tokyo Bon 東京盆踴り2020.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "五百",
        artist: '黃明志',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/黃明志/黃明志-五百.mp3',
        lrc: '/music_lrcover/namewee_lrc/黃明志-五百.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "安娣",
        artist: '黃明志 & MC 阿芳',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/黃明志/黃明志&MC 阿芳-安娣.mp3',
        lrc: '/music_lrcover/namewee_lrc/黃明志&MC 阿芳-安娣.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "胡志明的雨 (雙人合唱版)",
        artist: '黃明志 & Ho Quang Hieu',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/黃明志/黃明志&Ho Quang Hieu-胡志明的雨(雙人合唱版).mp3',
        lrc: '/music_lrcover/namewee_lrc/黃明志&Ho Quang Hieu-胡志明的雨(雙人合唱版).lrc',
		cover: '/cover.jpg'
      },
      {
        name: "漂向北方 (Live)",
        artist: '黃明志&G.E.M.鄧紫棋',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/黃明志/黃明志&G.E.M.鄧紫棋-漂向北方(Live).mp3',
        lrc: '/music_lrcover/namewee_lrc/黃明志&G.E.M.鄧紫棋-漂向北方(Live).lrc',
		cover: '/cover.jpg'
      },
      {
        name: "泰國恰恰",
        artist: '黃明志 & Bie The Ska',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/黃明志/黃明志&Bie The Ska-泰國恰恰.mp3',
        lrc: '/music_lrcover/namewee_lrc/黃明志&Bie The Ska-泰國恰恰.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "好想你 2.0",
        artist: '黃明志&朱主愛',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/黃明志/黃明志&朱主愛-好想你 2.0.mp3',
        lrc: '/music_lrcover/namewee_lrc/黃明志&朱主愛-好想你 2.0.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "台北之旅",
        artist: '黃明志',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/黃明志/黃明志-台北之旅.mp3',
        lrc: '/music_lrcover/namewee_lrc/黃明志-台北之旅.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "唯一的唯一的唯一",
        artist: '黃明志',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/黃明志/黃明志-唯一的唯一的唯一.mp3',
        lrc: '/music_lrcover/namewee_lrc/黃明志-唯一的唯一的唯一.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "單身狗",
        artist: '黃明志',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/黃明志/黃明志-單身狗.mp3',
        lrc: '/music_lrcover/namewee_lrc/黃明志-單身狗.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "在我背後",
        artist: '黃明志',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/黃明志/黃明志-在我背後.mp3',
        lrc: '/music_lrcover/namewee_lrc/黃明志-在我背後.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "唱廣東歌",
        artist: '黃明志&盧巧音',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/黃明志/黃明志&盧巧音-唱廣東歌.mp3',
        lrc: '/music_lrcover/namewee_lrc/黃明志&盧巧音-唱廣東歌.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "哥抽菸",
        artist: '黃明志',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/黃明志/黃明志-哥抽菸.mp3',
        lrc: '/music_lrcover/namewee_lrc/黃明志-哥抽菸.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "飄向北方",
        artist: '黃明志&王力宏',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/黃明志/黃明志&王力宏-飄向北方.mp3',
        lrc: '/music_lrcover/namewee_lrc/黃明志&王力宏-飄向北方.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "老母",
        artist: '黃明志&王光芳',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/黃明志/黃明志&王光芳-老母.mp3',
        lrc: '/music_lrcover/namewee_lrc/黃明志&王光芳-老母.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "擊敗人",
        artist: '黃明志',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/黃明志/黃明志-擊敗人.mp3',
        lrc: '/music_lrcover/namewee_lrc/黃明志-擊敗人.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "不想放開",
        artist: '黃明志&文慧如',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/黃明志/黃明志&文慧如-不想放開.mp3',
        lrc: '/music_lrcover/namewee_lrc/黃明志&文慧如-不想放開.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "愛妳也愛她",
        artist: '黃明志',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/黃明志/黃明志-愛妳也愛她.mp3',
        lrc: '/music_lrcover/namewee_lrc/黃明志-愛妳也愛她.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "不想上班",
        artist: '黃明志&肖央',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/黃明志/黃明志&肖央-不想上班.mp3',
        lrc: '/music_lrcover/namewee_lrc/黃明志&肖央-不想上班.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "怎麼辦",
        artist: '黃明志&動力火車',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/黃明志/黃明志&動力火車-怎麼辦.mp3',
        lrc: '/music_lrcover/namewee_lrc/黃明志&動力火車-怎麼辦.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "我還是我",
        artist: '黃明志',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/黃明志/黃明志-我還是我.mp3',
        lrc: '/music_lrcover/namewee_lrc/黃明志-我還是我.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "怎麼辦",
        artist: '黃明志',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/黃明志/黃明志 - 中國痛(Ft. 黃秋生).mp3',
        lrc: '',
		cover: '/cover.jpg'
      },
      {
        name: "一起飆高音",
        artist: '黃明志&李佳薇',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/黃明志/黃明志&李佳薇-一起飆高音.mp3',
        lrc: '/music_lrcover/namewee_lrc/黃明志&李佳薇-一起飆高音.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "學廣東話",
        artist: '黃明志&連綺嵐',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/黃明志/黃明志&連綺嵐-學廣東話.mp3',
        lrc: '/music_lrcover/namewee_lrc/黃明志&連綺嵐-學廣東話.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "誰說不可能",
        artist: '黃明志&朱浩仁',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/黃明志/朱浩仁&黃明志-誰說不可能.mp3',
        lrc: '/music_lrcover/namewee_lrc/朱浩仁&黃明志-誰說不可能.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "Oh My God",
        artist: '黃明志&玖壹壹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/黃明志/玖壹壹&黃明志-Oh My God.mp3',
        lrc: '/music_lrcover/namewee_lrc/玖壹壹&黃明志-Oh My God.lrc',
		cover: '/cover.jpg'
      },

    ]
});