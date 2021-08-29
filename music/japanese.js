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
    listMaxHeight: '175px',
    lrcType: 3,
    audio: [
      {
        name: "終わりの世界から",
        artist: '麻枝准',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/やなぎなぎ-終わりの世界から.mp3',
        lrc: '/music_lrcover/japanese_lrc/やなぎなぎ-終わりの世界から.lrc',
		cover: '/images/album/music.jpg'
      },
      {
        name: "あの世行きのバスに乗ってさらば。",
        artist: 'ツユ',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/ツユ-あの世行きのバスに乗ってさらば。.mp3',
        lrc: '/music_lrcover/japanese_lrc/ツユ-あの世行きのバスに乗ってさらば。.lrc',
		cover: '/images/album/ツユ.jpg'
      },
      {
        name: "くらべられっ子",
        artist: 'ツユ',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/ツユ-くらべられっ子.mp3',
        lrc: '/music_lrcover/japanese_lrc/ツユ-くらべられっ子.lrc',
		cover: '/images/album/ツユ.jpg'
      },
      {
        name: "やっぱり雨は降るんだね",
        artist: 'ツユ',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/ツユ-やっぱり雨は降るんだね.mp3',
        lrc: '/music_lrcover/japanese_lrc/ツユ-やっぱり雨は降るんだね.lrc',
		cover: '/images/album/ツユ.jpg'
      },
      {
        name: "雨を浴びる",
        artist: 'ツユ',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/ツユ-雨を浴びる.mp3',
        lrc: '/music_lrcover/japanese_lrc/ツユ-雨を浴びる.lrc',
		cover: '/images/album/ツユ.jpg'
      },
      {
        name: "虹 (STAND BY ME 2 主題曲)",
        artist: '菅田将暉(すだ まさき)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/菅田将暉 (すだ まさき)-虹.mp3',
        lrc: '/music_lrcover/japanese_lrc/菅田将暉 (すだ まさき)-虹.lrc',
		cover: '/images/album/music.jpg'
      },
      {
        name: "奏 (かなで)",
        artist: '雨宮天',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/雨宮天-奏 (かなで).mp3',
        lrc: '/music_lrcover/japanese_lrc/雨宮天-奏 (かなで).lrc',
		cover: '/images/album/music.jpg'
      },
      {
        name: "願い～あの頃のキミへ～",
        artist: '當山みれい',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/當山みれい-願い～あの頃のキミへ～.mp3',
        lrc: '/music_lrcover/japanese_lrc/當山みれい-願い～あの頃のキミへ～.lrc',
		cover: '/images/album/music.jpg'
      },
      {
        name: "茜さす",
        artist: 'Aimer',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/Aimer-茜さす.mp3',
        lrc: '/music_lrcover/japanese_lrc/Aimer-茜さす.lrc',
		cover: '/images/album/Aimer.jpg'
      },
      {
        name: "Brave Shine",
        artist: 'Aimer',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/Aimer-Brave Shine.mp3',
        lrc: '/music_lrcover/japanese_lrc/Aimer-Brave Shine.lrc',
		cover: '/images/album/Aimer.jpg'
      },
      {
        name: "Ref：rain",
        artist: 'Aimer',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/Aimer-Ref：rain.mp3',
        lrc: '/music_lrcover/japanese_lrc/Aimer-Ref：rain.lrc',
		cover: '/images/album/Aimer.jpg'
      },
      {
        name: "ninelie",
        artist: 'Aimer&chelly',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/Aimer&chelly-ninelie.mp3',
        lrc: '/music_lrcover/japanese_lrc/Aimer&chelly-ninelie.lrc',
		cover: '/images/album/Aimer.jpg'
      },
      {
        name: "STAND ALONE",
        artist: 'Aimer',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/Aimer-STAND-ALONE.mp3',
        lrc: '/music_lrcover/japanese_lrc/Aimer-STAND-ALONE.lrc',
		cover: '/images/album/Aimer.jpg'
      },
      {
        name: "ハルノヒ",
        artist: 'Aimyon',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/Aimyon-ハルノヒ.mp3',
        lrc: '/music_lrcover/japanese_lrc/Aimyon-ハルノヒ.lrc',
		cover: '/images/album/aimyon.png'
      },
      {
        name: "君はロックを聴かない",
        artist: 'Aimyon',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/Aimyon-君はロックを聴かない.mp3',
        lrc: '/music_lrcover/japanese_lrc/Aimyon-君はロックを聴かない.lrc',
		cover: '/images/album/aimyon.png'
      },
      {
        name: "生きていたんだよな",
        artist: 'Aimyon',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/Aimyon-生きていたんだよな.mp3',
        lrc: '/music_lrcover/japanese_lrc/Aimyon-生きていたんだよな.lrc',
		cover: '/images/album/aimyon.png'
      },
      {
        name: "空の青さを知る人よ",
        artist: 'Aimyon',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/Aimyon-空の青さを知る人よ.mp3',
        lrc: '/music_lrcover/japanese_lrc/Aimyon-空の青さを知る人よ.lrc',
		cover: '/images/album/aimyon.png'
      },
      {
        name: "裸の心",
        artist: 'Aimyon',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/Aimyon-裸の心.mp3',
        lrc: '/music_lrcover/japanese_lrc/Aimyon-裸の心.lrc',
		cover: '/images/album/aimyon.png'
      },
      {
        name: "マリーゴールド",
        artist: 'Aimyon',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/Aimyon-マリーゴールド.mp3',
        lrc: '/music_lrcover/japanese_lrc/Aimyon-マリーゴールド.lrc',
		cover: '/images/album/aimyon.png'
      },
      {
        name: "炎",
        artist: 'LiSA',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/LiSA-炎.mp3',
        lrc: '/music_lrcover/japanese_lrc/LiSA-炎.lrc',
		cover: '/images/album/music.jpg'
      },
      {
        name: "僕らの手には何もないけど、",
        artist: 'RAM WIRE',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/RAM WIRE-僕らの手には何もないけど、.mp3',
        lrc: '/music_lrcover/japanese_lrc/RAM WIRE-僕らの手には何もないけど、.lrc',
		cover: '/images/album/music.jpg'
      },
      {
        name: "Can't You Say",
        artist: 'Roys',
        url: "https://notp.ddns.net/wordpress/wp-content/music/Japanese/Roys-Can't You Say.mp3",
        lrc: "/music_lrcover/japanese_lrc/Roys-Can't You Say.lrc",
		cover: '/images/album/music.jpg'
      },
      {
        name: "Winding Road",
        artist: 'Tiara',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/Tiara-Winding Road.mp3',
        lrc: '/music_lrcover/japanese_lrc/Tiara-Winding Road.lrc',
		cover: '/images/album/music.jpg'
      },
      {
        name: "リメンバー (Remember)",
        artist: 'Uru',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/Uru-リメンバー.mp3',
        lrc: '/music_lrcover/japanese_lrc/Uru-リメンバー.lrc',
		cover: '/images/album/music.jpg'
      },
      {
        name: "群青",
        artist: 'YOASOBI',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/YOASOBI&ayase-群青.mp3',
        lrc: '/music_lrcover/japanese_lrc/YOASOBI&ayase-群青.lrc',
		cover: '/images/album/yoasobi.jpg'
      },
      {
        name: "あの夢をなぞって",
        artist: 'YOASOBI',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/YOASOBI-あの夢をなぞって.mp3',
        lrc: '/music_lrcover/japanese_lrc/YOASOBI-あの夢をなぞって.lrc',
		cover: '/images/album/yoasobi.jpg'
      },
      {
        name: "夜に駆ける",
        artist: 'YOASOBI',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/YOASOBI-夜に駆ける.mp3',
        lrc: '/music_lrcover/japanese_lrc/YOASOBI-夜に駆ける.lrc',
		cover: '/images/album/yoasobi.jpg'
      },
      {
        name: "ハルカ",
        artist: 'YOASOBI',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/YOASOBI-ハルカ.mp3',
        lrc: '/music_lrcover/japanese_lrc/YOASOBI-ハルカ.lrc',
		cover: '/images/album/yoasobi.jpg'
      },
      {
        name: "ハルジオン",
        artist: 'YOASOBI',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/YOASOBI-ハルジオン.mp3',
        lrc: '/music_lrcover/japanese_lrc/YOASOBI-ハルジオン.lrc',
		cover: '/images/album/yoasobi.jpg'
      },
      {
        name: "たぶん",
        artist: 'YOASOBI',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/YOASOBI-たぶん.mp3',
        lrc: '/music_lrcover/japanese_lrc/YOASOBI-たぶん.lrc',
		cover: '/images/album/yoasobi.jpg'
      },
      {
        name: "優しい彗星",
        artist: 'YOASOBI',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/YOASOBI-優しい彗星.mp3',
        lrc: '/music_lrcover/japanese_lrc/YOASOBI-優しい彗星.lrc',
		cover: '/images/album/yoasobi.jpg'
      },
      {
        name: "怪物",
        artist: 'YOASOBI',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/YOASOBI-怪物.mp3',
        lrc: '/music_lrcover/japanese_lrc/YOASOBI-怪物.lrc',
		cover: '/images/album/yoasobi.jpg'
      },
      {
        name: "花に亡霊",
        artist: 'ヨルシカ',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/Yorushika-花に亡霊.mp3',
        lrc: '/music_lrcover/japanese_lrc/Yorushika-花に亡霊.lrc',
		cover: '/images/album/music.jpg'
      },
      {
        name: "噓月",
        artist: 'ヨルシカ',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/ヨルシカ-噓月.mp3',
        lrc: '/music_lrcover/japanese_lrc/ヨルシカ-噓月.lrc',
		cover: '/images/album/music.jpg'
      },
      {
        name: "グランドエスケープ (Movie edit)",
        artist: '三浦透子',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/三浦透子-グランドエスケープ(Movie edit).mp3',
        lrc: '/music_lrcover/japanese_lrc/三浦透子-グランドエスケープ(Movie edit).lrc',
		cover: '/images/album/music.jpg'
      },
      {
        name: "妄想感傷代償連盟",
        artist: 'YuNi',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/妄想感傷代償連盟.mp3',
        lrc: '/music_lrcover/japanese_lrc/妄想感傷代償連盟.lrc',
		cover: '/images/album/music.jpg'
      },
      {
        name: "打上花火",
        artist: '米津玄師 x Daoko',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/米津玄師&daoko-打上花火.mp3',
        lrc: '/music_lrcover/japanese_lrc/米津玄師&daoko-打上花火.lrc',
		cover: '/images/album/music.jpg'
      },
      {
        name: "カワキヲアメク",
        artist: '美波',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/美波-カワキヲアメク.mp3',
        lrc: '/music_lrcover/japanese_lrc/美波-カワキヲアメク.lrc',
		cover: '/images/album/美波.jpg'
      },
      {
        name: "main actor",
        artist: '美波',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/美波-main actor.mp3',
        lrc: '/music_lrcover/japanese_lrc/美波-main actor.lrc',
		cover: '/images/album/美波.jpg'
      },
      {
        name: "アメヲマツ、",
        artist: '美波',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/美波-アメヲマツ、.mp3',
        lrc: '/music_lrcover/japanese_lrc/美波-アメヲマツ、.lrc',
		cover: '/images/album/美波.jpg'
      },
      {
        name: "ライラック",
        artist: '美波',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/美波-ライラック.mp3',
        lrc: '/music_lrcover/japanese_lrc/美波-ライラック.lrc',
		cover: '/images/album/美波.jpg'
      },
      {
        name: "祝祭",
        artist: 'RADWIMPS(ft. 三浦透子)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/祝祭 feat. 三浦透子.mp3',
        lrc: '/music_lrcover/japanese_lrc/祝祭 feat. 三浦透子.lrc',
		cover: '/images/album/music.jpg'
      },
      {
        name: "前前前世(Movie ver.)",
        artist: 'RADWIMPS',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/RADWIMPS-前前前世(Movie ver.).mp3',
        lrc: '/music_lrcover/japanese_lrc/RADWIMPS-前前前世(Movie ver.).lrc',
		cover: '/images/album/music.jpg'
      },
      {
        name: "竈門炭治郎のうた(OST ver.)",
        artist: '椎名豪&中川奈美',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/椎名豪&中川奈美-竈門炭治郎のうた(OST ver.).mp3',
        lrc: '/music_lrcover/japanese_lrc/椎名豪&中川奈美-竈門炭治郎のうた(OST ver.).lrc',
		cover: '/images/album/music.jpg'
      },
      {
        name: "うっせぇわ",
        artist: 'Ado',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/Ado-うっせぇわ.mp3',
        lrc: '/music_lrcover/japanese_lrc/Ado-うっせぇわ.lrc',
		cover: '/images/album/ado.jpg'
      },
      {
        name: "レディメイド",
        artist: 'Ado',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/Ado-レディメイド.mp3',
        lrc: '/music_lrcover/japanese_lrc/Ado-レディメイド.lrc',
		cover: '/images/album/ado.jpg'
      },
      {
        name: "ギラギラ",
        artist: 'Ado',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/Ado-ギラギラ.mp3',
        lrc: '/music_lrcover/japanese_lrc/Ado-ギラギラ.lrc',
		cover: '/images/album/ado.jpg'
      },
      {
        name: "踊",
        artist: 'Ado',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/Japanese/Ado-踊.mp3',
        lrc: '/music_lrcover/japanese_lrc/Ado-踊.lrc',
		cover: '/images/album/ado.jpg'
      }

    ]
});