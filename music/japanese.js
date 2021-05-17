const japanese = new APlayer({
    container: document.getElementById('japanese'),
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
        name: "終わりの世界から",
        artist: '麻枝准',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/やなぎなぎ-終わりの世界から.mp3',
        lrc: '/music_lrcover/japanese_lrc/やなぎなぎ-終わりの世界から.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "あの世行きのバスに乗ってさらば。",
        artist: 'ツユ',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/ツユ-あの世行きのバスに乗ってさらば。.mp3',
        lrc: '/music_lrcover/japanese_lrc/ツユ-あの世行きのバスに乗ってさらば。.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "虹",
        artist: '菅田将暉(すだ まさき)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/菅田将暉 (すだ まさき)-虹.mp3',
        lrc: '/music_lrcover/japanese_lrc/菅田将暉 (すだ まさき)-虹.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "奏 (かなで)",
        artist: '雨宮天',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/雨宮天-奏 (かなで).mp3',
        lrc: '/music_lrcover/japanese_lrc/雨宮天-奏 (かなで).lrc',
		cover: '/cover.jpg'
      },
      {
        name: "願い～あの頃のキミへ～",
        artist: '當山みれい',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/當山みれい-願い～あの頃のキミへ～.mp3',
        lrc: '/music_lrcover/japanese_lrc/當山みれい-願い～あの頃のキミへ～.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "茜さす",
        artist: 'Aimer',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/Aimer-茜さす.mp3',
        lrc: '/music_lrcover/japanese_lrc/Aimer-茜さす.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "Brave Shine",
        artist: 'Aimer',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/Aimer-Brave Shine.mp3',
        lrc: '/music_lrcover/japanese_lrc/Aimer-Brave Shine.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "Ref：rain",
        artist: 'Aimer',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/Aimer-Ref：rain.mp3',
        lrc: '/music_lrcover/japanese_lrc/Aimer-Ref：rain.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "ハルノヒ",
        artist: 'Aimyon',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/Aimyon-ハルノヒ.mp3',
        lrc: '/music_lrcover/japanese_lrc/Aimyon-ハルノヒ.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "君はロックを聴かない",
        artist: 'Aimyon',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/Aimyon-君はロックを聴かない.mp3',
        lrc: '/music_lrcover/japanese_lrc/Aimyon-君はロックを聴かない.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "生きていたんだよな",
        artist: 'Aimyon',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/Aimyon-生きていたんだよな.mp3',
        lrc: '/music_lrcover/japanese_lrc/Aimyon-生きていたんだよな.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "空の青さを知る人よ",
        artist: 'Aimyon',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/Aimyon-空の青さを知る人よ.mp3',
        lrc: '/music_lrcover/japanese_lrc/Aimyon-空の青さを知る人よ.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "裸の心",
        artist: 'Aimyon',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/Aimyon-裸の心.mp3',
        lrc: '/music_lrcover/japanese_lrc/Aimyon-裸の心.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "炎",
        artist: 'LiSA',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/LiSA-炎.mp3',
        lrc: '/music_lrcover/japanese_lrc/LiSA-炎.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "僕らの手には何もないけど、",
        artist: 'RAM WIRE',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/RAM WIRE-僕らの手には何もないけど、.mp3',
        lrc: '/music_lrcover/japanese_lrc/RAM WIRE-僕らの手には何もないけど、.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "Can't You Say",
        artist: 'Roys',
        url: "https://notp.ddns.net/wordpress/wp-content/music/Japanese/Roys-Can't You Say.mp3",
        lrc: "/music_lrcover/japanese_lrc/Roys-Can't You Say.lrc",
		cover: '/cover.jpg'
      },
      {
        name: "Winding Road",
        artist: 'Tiara',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/Tiara-Winding Road.mp3',
        lrc: '/music_lrcover/japanese_lrc/Tiara-Winding Road.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "リメンバー (Remember)",
        artist: 'Uru',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/Uru-リメンバー.mp3',
        lrc: '/music_lrcover/japanese_lrc/Uru-リメンバー.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "群青",
        artist: 'YOASOBI',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/YOASOBI&ayase-群青.mp3',
        lrc: '/music_lrcover/japanese_lrc/YOASOBI&ayase-群青.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "あの夢をなぞって",
        artist: 'YOASOBI',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/YOASOBI-あの夢をなぞって.mp3',
        lrc: '/music_lrcover/japanese_lrc/YOASOBI-あの夢をなぞって.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "夜に駆ける",
        artist: 'YOASOBI',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/YOASOBI-夜に駆ける.mp3',
        lrc: '/music_lrcover/japanese_lrc/YOASOBI-夜に駆ける.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "花に亡霊",
        artist: 'Yorushika',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/Yorushika-花に亡霊.mp3',
        lrc: '/music_lrcover/japanese_lrc/Yorushika-花に亡霊.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "グランドエスケープ(Movie edit)",
        artist: '三浦透子',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/三浦透子-グランドエスケープ(Movie edit).mp3',
        lrc: '/music_lrcover/japanese_lrc/三浦透子-グランドエスケープ(Movie edit).lrc',
		cover: '/cover.jpg'
      },
      {
        name: "妄想感傷代償連盟",
        artist: 'YuNi',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/妄想感傷代償連盟.mp3',
        lrc: '/music_lrcover/japanese_lrc/妄想感傷代償連盟.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "打上花火",
        artist: '米津玄師 x Daoko',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/米津玄師&daoko-打上花火.mp3',
        lrc: '/music_lrcover/japanese_lrc/米津玄師&daoko-打上花火.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "カワキヲアメク",
        artist: '美波',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/美波-カワキヲアメク.mp3',
        lrc: '/music_lrcover/japanese_lrc/美波-カワキヲアメク.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "main actor",
        artist: '美波',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/美波-main actor.mp3',
        lrc: '/music_lrcover/japanese_lrc/美波-main actor.lrc',
		cover: '/cover.jpg'
      },
      {
        name: "祝祭",
        artist: 'RADWIMPS(ft. 三浦透子)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/祝祭 feat. 三浦透子.mp3',
        lrc: '/music_lrcover/japanese_lrc/祝祭 feat. 三浦透子.lrc',
		cover: '/cover.jpg'
      }

    ]
});