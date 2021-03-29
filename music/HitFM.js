const a = new APlayer({  
    container: document.getElementById('hit'),
    fixed: true,
    autoplay: false,
    theme: '#1c03fc',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: '300px',
    lrcType: 0,
    audio: [
      {
        name: "無人知曉",
        artist: "田馥甄 Hebe",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/001. 無人知曉.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "刻在我心底的名字",
        artist: "盧廣仲",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/002. 刻在我心底的名字.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "交換餘生",
        artist: "林俊傑",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/003. 交換餘生.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Not Tonight (Tomorrow Sounds Good Steve Aoki Remix)",
        artist: "JJ Lin林俊傑,Steve Aoki",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/004. Not Tonight (Tomorrow Sounds Good Steve Aoki Remix).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "炎",
        artist: "LiSA",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/005. 炎.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "猴籠",
        artist: "蕭敬騰",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/006. 猴籠.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "撞",
        artist: "Bii 畢書盡",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/007. 撞.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "懸日",
        artist: "田馥甄 Hebe",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/008. 懸日.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Dynamite",
        artist: "BTS 防彈少年團",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/009. Dynamite.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "摩登原始人",
        artist: "炎亞綸",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/010. 摩登原始人.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "薩哈星球",
        artist: "蕭敬騰",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/011. 薩哈星球.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "ON",
        artist: "BTS 防彈少年團",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/012. ON.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "最難的是相遇",
        artist: "吳青峰",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/013. 最難的是相遇.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "皆可",
        artist: "田馥甄 Hebe",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/014. 皆可.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "倖存者",
        artist: "林俊傑",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/015. 倖存者.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Better",
        artist: "BoA 寶兒",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/016. Better.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "因為你 所以我",
        artist: "五月天",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/017. 因為你 所以我.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Yummy",
        artist: "Justin Bieber",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/018. Yummy.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "暫時的記號",
        artist: "林俊傑",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/019. 暫時的記號.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "HAPPY",
        artist: "太妍",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/020. Happy.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "柔軟",
        artist: "吳青峰",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/021. 柔軟.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Cardigan",
        artist: "Taylor Swift",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/022. Cardigan.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "你",
        artist: "Bii 畢書盡",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/023. 你.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "小時候的我們",
        artist: "周興哲",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/024. 小時候的我們.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Life Goes On",
        artist: "BTS 防彈少年團",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/025. Life Goes On.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "不用告訴我",
        artist: "韋禮安",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/026. 不用告訴我.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Positions",
        artist: "Ariana Grande",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/027. Positions.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Hello",
        artist: "蕭敬騰, 林俊傑",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/028. Hello.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "The Melody",
        artist: "SUPER JUNIOR",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/029. The Melody.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "A CA ELLA",
        artist: "ELLA陳嘉樺",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/030. A CA ELLA.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "不安室的奈美惠",
        artist: "炎亞綸 feat. JULIA 吳卓源",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/031. 不安室的奈美惠.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Willow",
        artist: "Taylor Swift",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/032. Willow.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "修煉愛情  (Jazz Version)",
        artist: "林俊傑",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/033. 修煉愛情  (Jazz Version).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Give You My Heart",
        artist: "IU",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/034. Give You My Heart.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "想見你想見你想見你",
        artist: "八三夭",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/035. 想見你想見你想見你.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Lonely",
        artist: "Justin Bieber & Benny Blanco",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/036. Lonely.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "我很快樂",
        artist: "周興哲",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/037. 我很快樂.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "貓咪共和國",
        artist: "韋禮安",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/038. 貓咪共和國.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Afterglow",
        artist: "Ed Sheeran",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/039. Afterglow.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Colorful",
        artist: "婁峻碩",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/040. Colorful.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "More & More",
        artist: "TWICE",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/041. More & More.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "像是一顆星星",
        artist: "楊丞琳",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/042. 像是一顆星星.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "에이핑크 덤더럼(Dumhdurum)",
        artist: "APINK",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/043. 에이핑크 덤더럼(Dumhdurum).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "娛樂無限公司",
        artist: "ELLA 陳嘉樺",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/044. 娛樂無限公司.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "一點點",
        artist: "吳青峰",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/045. 一點點.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Wannabe",
        artist: "ITZY",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/046. Wannabe.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "No Time To Die",
        artist: "Billie Eilish",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/047. No Time To Die.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "四季",
        artist: "SELINA 任家萱",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/048. 四季.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "What Do I Call You",
        artist: "太妍",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/049. What Do I Call You.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "誰",
        artist: "李友廷",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/050. 誰.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "感電",
        artist: "米津玄師",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/051. 感電.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Mojito",
        artist: "周杰倫",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/052. Mojito.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Rain On Me",
        artist: "Lady Gaga, Ariana Grande",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/053. Rain On Me.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "這樣好嗎",
        artist: "韋禮安",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/054. 這樣好嗎.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "朝陽",
        artist: "AIMYON 愛繆",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/055. 朝陽.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "沙發裡有沙發 Radio",
        artist: "魚丁糸",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/056. 沙發裡有沙發 Radio.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "All Day",
        artist: "W0LF(S) 五堅情",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/057. All Day.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Black Swan",
        artist: "BTS 防彈少年團",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/058. Black Swan.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "女孩們",
        artist: "楊丞琳 王心凌",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/059. 女孩們.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Physical",
        artist: "Dua Lipa",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/060. Physical.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "別人的",
        artist: "徐若瑄",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/061. 別人的.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "風箏 カイト",
        artist: "ARASHI 嵐",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/062. 風箏 カイト.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "運氣來得若有似無",
        artist: "告五人",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/063. 運氣來得若有似無.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Time",
        artist: "宇多田 ヒカル",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/064. Time.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "抱歉，我不抱歉",
        artist: "A-LIN",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/065. 抱歉，我不抱歉.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "真面目",
        artist: "蘇慧倫",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/066. 真面目.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "OMG What's Happening",
        artist: "Ava Max",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/067. OMG Whats Happening.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Tomorrow will be fine.",
        artist: "蘇打綠",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/068. Tomorrow will be fine..mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Fiesta",
        artist: "IZ*ONE",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/069. Fiesta.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "受夠",
        artist: "周興哲",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/070. 受夠.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Resonance",
        artist: "NCT 2020",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/071. Resonance.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Change",
        artist: "瘦子E.SO",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/072. Change.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Diamonds",
        artist: "Sam Smith",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/073. Diamonds.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "速食愛情",
        artist: "W0LF四堅情",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/074. 速食愛情.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Mazy Nighto",
        artist: "KING & PRINCE",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/075. Mazy Nighto.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "你的情歌",
        artist: "TANK",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/076. 你的情歌.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Wap",
        artist: "Cardi B feat. Megan Thee Stallion",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/077. Wap.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "MY! CYNDI!",
        artist: "王心凌",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/078. MY! CYNDI!.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "遠距離",
        artist: "GJ蔣卓嘉",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/079. 遠距離.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "I Can't Stop Me",
        artist: "TWICE",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/080. I Can_t Stop Me.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "七十億分之一加一",
        artist: "JULIA吳卓源 feat. 婁峻碩",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/081. 七十億分之一加一.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "別再想見我",
        artist: "許光漢",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/082. 別再想見我.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "愛上現在的我",
        artist: "閻奕格 feat. 高爾宣OSN",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/083. 愛上現在的我.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Savage Love(Laxed - Siren Beat) [BTS Remix]",
        artist: "Jawsh 685, Jason Derulo, BTS防彈少年團",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/084. Savage Love(Laxed - Siren Beat) [BTS Remix].mp3',
        cover: '/cover.jpg'
      },
      {
        name: "덤디덤디 (DUMDi DUMDi)",
        artist: "(G)I-DLE",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/085. 덤디덤디 (DUMDi DUMDi).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Messed Up",
        artist: "文慧如 ft. 邱鋒澤",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/086. Messed Up.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Candy",
        artist: "BAEKHYUN",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/087. Candy.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "回不去的海",
        artist: "ARIEL 蔡佩軒",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/088. 回不去的海.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Girlfriend",
        artist: "Charlie Puth",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/089. Girlfriend.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "背光旅行",
        artist: "黃偉晉",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/090. 背光旅行.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Not By The Moon",
        artist: "GOT7",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/091. Not By The Moon.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "反方向",
        artist: "光良",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/092. 反方向.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "嗜愛動物",
        artist: "麋先生",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/093. 嗜愛動物.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Say So",
        artist: "Doja Cat feat. Nicki Minaj",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/094. Say So.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "U",
        artist: "劉以豪",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/095. U.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "In Your Eyes",
        artist: "The Weeknd",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/096. In Your Eyes.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "開始 Beginning",
        artist: "GAHO",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/097. 開始 Beginning.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "外婆橋",
        artist: "安溥",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/098. 外婆橋.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "還不夠",
        artist: "孫盛希",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/099. 還不夠.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "那種人",
        artist: "MARZ23",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2020HitFM/100. 那種人.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "我比從前想你了",
        artist: "畢書盡",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/001. 畢書盡 - 我比從前想你了.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "說好不哭(With 五月天阿信)",
        artist: "周杰倫",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/002. 周杰倫 - 說好不哭(With 五月天阿信).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Super Clap",
        artist: "SuperJunior",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/003. SuperJunior - Super Clap.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "對的時間點",
        artist: "林俊傑",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/004. 林俊傑 - 對的時間點.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Señorita",
        artist: "Shawn Mendes, Camila Cabello",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/005. Shawn Mendes _ Camila Cabello - Señorita.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "美麗醜與我",
        artist: "獅子LION",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/006. 獅子LION - 美麗醜與我.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "I Think I",
        artist: "SuperJunior",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/007. SuperJunior - I Think I.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "太空人",
        artist: "吳青峰",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/008. 吳青峰 - 太空人.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "句號",
        artist: "鄧紫棋",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/009. 鄧紫棋 - 句號.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Into the Unknown",
        artist: "AURORA",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/010. AURORA - Into the Unknown.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "刪拾",
        artist: "楊丞琳",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/011. 楊丞琳 - 刪拾.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "別讓我走遠",
        artist: "林宥嘉",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/012. 林宥嘉 - 別讓我走遠.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Danger",
        artist: "S-J D_E",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/013. S-J D_E - Danger.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Better Fly",
        artist: "畢書盡",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/014. 畢書盡 - Better Fly.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "彼個所在",
        artist: "魏如萱",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/015. 魏如萱 - 彼個所在.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Boy With Luv",
        artist: "BTS",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/016. BTS - Boy With Luv.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "怎麼了",
        artist: "周興哲",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/017. 周興哲 - 怎麼了.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "bad guy",
        artist: "Billie Eilish",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/018. Billie Eilish - bad guy.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "If You Catch Me When I Fall",
        artist: "Bii 畢書盡",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/019. If You Catch Me When I Fall.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "蕭志達",
        artist: "獅子LION",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/020. 獅子LION - 蕭志達.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "慢冷",
        artist: "梁靜茹",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/021. 梁靜茹 - 慢冷.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Obsession",
        artist: "EXO",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/022. EXO - Obsession.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "一半人生",
        artist: "五月天阿信",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/023. 五月天阿信 - 一半人生.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "路過人間",
        artist: "郁可唯",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/024. 郁可唯 - 路過人間.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Lover",
        artist: "Taylor Swift",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/025. Taylor Swift - Lover.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "節日快樂",
        artist: "楊丞琳",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/026. 楊丞琳 - 節日快樂.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Ophelia",
        artist: "魏如萱",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/027. 魏如萱 - Ophelia.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "5x20",
        artist: "ARASHI嵐",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/028. ARASHI嵐 - 5x20.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "謎之音",
        artist: "曾沛慈",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/029. 曾沛慈 - 謎之音.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "歌頌者",
        artist: "吳青峰",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/030. 吳青峰 - 歌頌者.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "A Brand New Day",
        artist: "BTS",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/031. BTS - A Brand New Day.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Be The One",
        artist: "畢書盡",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/032. 畢書盡 - Be The One.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Speechless",
        artist: "Naomi Scott",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/033. Naomi Scott - Speechless.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "摩天動物園",
        artist: "鄧紫棋",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/034. 鄧紫棋 - 摩天動物園.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "UN Village",
        artist: "BAEKHYUN",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/035. BAEKHYUN - UN Village.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "愛情怎麼了嗎",
        artist: "盧廣仲",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/036. 盧廣仲 - 愛情怎麼了嗎.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "少女",
        artist: "林宥嘉",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/037. 林宥嘉 - 少女.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "流浪狗",
        artist: "黃明志",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/038. 黃明志 - 流浪狗.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Spark",
        artist: "太妍",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/039. 太妍 - Spark.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "你朝我的方向走來",
        artist: "馬念先_9m88",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/040. 馬念先_9m88 - 你朝我的方向走來.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "I Don_t Care",
        artist: "Ed Sheeran",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/041. Ed Sheeran - I Don_t Care.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Love Is Love",
        artist: "楊丞琳",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/042. 楊丞琳 - Love Is Love.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "我好嗎",
        artist: "梁靜茹",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/043. 梁靜茹 - 我好嗎.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Starry Night",
        artist: "BoA",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/044. BoA - Starry Night.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "I GO",
        artist: "周湯豪",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/045. 周湯豪 - I GO.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "終於了解自由",
        artist: "周興哲",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/046. 周興哲 - 終於了解自由.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "太空",
        artist: "吳青峰",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/047. 吳青峰 - 太空.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "BREATHE",
        artist: "AB6IX",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/048. AB6IX - BREATHE.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Without You",
        artist: "高爾宣",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/049. 高爾宣 - Without You.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "跪了",
        artist: "鼓鼓",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/050. 鼓鼓 - 跪了.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Memories",
        artist: "Maroon 5",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/051. Maroon 5 - Memories.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "讓水倒流",
        artist: "伍佰",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/052. 伍佰 - 讓水倒流.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "The day we meet again",
        artist: "圭賢",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/053. 圭賢 - The day we meet again.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "我們不像我們",
        artist: "丁噹",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/054. 丁噹 - 我們不像我們.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "What are you up to",
        artist: "KANG DANIEL",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/055. KANG DANIEL - What are you up to.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "天黑請閉眼",
        artist: "陳零九",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/056. 陳零九 - 天黑請閉眼.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "當你和心跳一起出現",
        artist: "蕭亞軒",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/057. 蕭亞軒 - 當你和心跳一起出現.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Pink Magic",
        artist: "藝聲",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/058. 藝聲 - Pink Magic.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "騙吃騙吃",
        artist: "頑童MJ116",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/059. 頑童MJ116 - 騙吃騙吃.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Boyfriend",
        artist: "Ariana Grande",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/060. Ariana Grande - Boyfriend.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "You Calling My Name",
        artist: "GOT7",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/061. GOT7 - You Calling My Name.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Things Things Things",
        artist: "Julia Wu",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/062. Julia Wu - Things Things Things.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Make it count",
        artist: "CHEN",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/063. CHEN - Make it count.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "怎麼能這樣",
        artist: "曾沛慈",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/064. 曾沛慈 - 怎麼能這樣.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "巴別塔慶典",
        artist: "吳青峰",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/065. 吳青峰 - 巴別塔慶典.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Violeta",
        artist: "IZ＊ONE",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/066. IZ＊ONE - Violeta.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "這款自作多情",
        artist: "茄子蛋",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/067. 茄子蛋 - 這款自作多情.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "On My Way",
        artist: "Alan Walker",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/068. Alan Walker - On My Way.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "所愛之初",
        artist: "白安",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/069. 白安 - 所愛之初.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "愛人錯過",
        artist: "告五人",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/070. 告五人 - 愛人錯過.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Psycho",
        artist: "Red Velvet",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/071. Red Velvet - Psycho.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "沒有錯",
        artist: "家家",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/072. 家家 - 沒有錯.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "馬と鹿",
        artist: "米津玄師",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/073. 米津玄師 - 馬と鹿.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "候鳥",
        artist: "蕭煌奇",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/074. 蕭煌奇 - 候鳥.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Beatiful People",
        artist: "Ed Sheeran",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/075. Ed Sheeran - Beatiful People.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "蠢蛋",
        artist: "八三夭",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/076. 八三夭 - 蠢蛋.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "輸情歌",
        artist: "J.Sheon",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/077. 輸情歌.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "來個蹦蹦",
        artist: "玖壹壹",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/078. 玖壹壹 - 來個蹦蹦.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "光之跡象",
        artist: "近畿小子",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/079. 光之跡象.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "我想要的快樂",
        artist: "家家",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/080. 家家 - 我想要的快樂.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "So Am I",
        artist: "Ava Max",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/081. Ava Max - So Am I.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "別再叫我哥",
        artist: "許書豪",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/082. 許書豪 - 別再叫我哥.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "超機車",
        artist: "鼓鼓",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/083. 鼓鼓 - 超機車.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "羅志祥",
        artist: "羅志祥",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/084. 羅志祥 - 羅志祥.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "DALLA DALLA",
        artist: "ITZY",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/085. ITZY - DALLA DALLA.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "直到我遇見了你",
        artist: "李友廷",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/086. 李友廷 - 直到我遇見了你.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "怨偶",
        artist: "熱狗",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/087. 熱狗 - 怨偶.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "仲夏夜",
        artist: "潤娥",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/088. 潤娥 - 仲夏夜.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "變心記",
        artist: "蔡旻佑",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/089. 蔡旻佑 - 變心記.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Lights Up",
        artist: "Harry Styles",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/090. Harry Styles - Lights Up.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Help Me",
        artist: "(G)I-DLE",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/091. (G)I-DLE - Help Me.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Start It",
        artist: "C.T.O",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/092. C.T.O - Start It.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "夜長夢少",
        artist: "傻子與白痴",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/093. 傻子與白痴 - 夜長夢少.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Old Town Road(Remix)",
        artist: "Lil Nas X",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/094. Lil Nas X - Old Town Road(Remix).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "守護永恆的愛",
        artist: "孫燕姿",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/095. 孫燕姿 - 守護永恆的愛.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "7 rings",
        artist: "Ariana Grande",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/096. Ariana Grande - 7 rings.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "浪漫和算盤",
        artist: "椎名林檎",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/097. 椎名林檎 - 浪漫和算盤.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "路痴",
        artist: "楊乃文",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/098. 楊乃文 - 路痴.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "重感情的廢物",
        artist: "TRASH",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/099. TRASH - 重感情的廢物.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Circles",
        artist: "Post Malone",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2019HitFM/100. Post Malone - Circles.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "怪美的",
        artist: "蔡依林",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/001. 怪美的 - 蔡依林.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "愛了很久的朋友",
        artist: "田馥甄",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/002. 愛了很久的朋友 - 田馥甄.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "讓我為你唱情歌",
        artist: "蕭敬騰",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/003. 讓我為你唱情歌 - 蕭敬騰.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Shallow",
        artist: "Lady Gaga&Bradley Cooper",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/004. Shallow - Lady Gaga&Bradley Cooper.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "十七",
        artist: "S.H.E.",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/005. 十七 - S.H.E.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "LEMON",
        artist: "米津玄師",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/006. LEMON - 米津玄師.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "聊傷",
        artist: "Bii畢書盡",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/007. 聊傷 - Bii畢書盡.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "MOONLIGHT",
        artist: "潘瑋柏 feat. TIA袁婭維",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/008. MOONLIGHT - 潘瑋柏 feat. TIA袁婭維.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "thank u, next",
        artist: "Ariana Grande",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/009. thank u, next - Ariana Grande.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "年少有為",
        artist: "李榮浩",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/010. 年少有為 - 李榮浩.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "什麼歌",
        artist: "五月天",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/011. 什麼歌 - 五月天.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "不愛我就拉倒",
        artist: "周杰倫",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/012. 不愛我就拉倒 - 周杰倫.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "FAKE LOVE",
        artist: "BTS",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/013. FAKE LOVE - BTS.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "自己的房間",
        artist: "田馥甄",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/014. 自己的房間 - 田馥甄.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "在青春迷失的咖啡馆",
        artist: "王心凌",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/015. 在青春迷失的咖啡馆 - 王心凌.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "皮囊",
        artist: "蕭敬騰",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/016. 皮囊 - 蕭敬騰.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "FLOWER ROAD (꽃 길)",
        artist: "BIGBANG",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/017. FLOWER ROAD (꽃 길) - BIGBANG.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "倒數",
        artist: "G.E.M.鄧紫棋",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/018. 倒數 - G.E.M.鄧紫棋.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Girls Like You (ft. Cardi B)",
        artist: "Maroon 5",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/019. Girls Like You (ft. Cardi B) - Maroon 5.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "幾分之幾",
        artist: "盧廣仲",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/020. 幾分之幾 - 盧廣仲.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "ONE SHOT, TWO SHOT",
        artist: "BoA",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/021. ONE SHOT, TWO SHOT - BoA.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "親愛的怪物",
        artist: "炎亞綸",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/022. 親愛的怪物 - 炎亞綸.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Finesse (Remix)",
        artist: "Bruno Mars feat. Cardi B",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/023. Finesse (Remix) -  Bruno Mars  feat. Cardi B.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "全是愛",
        artist: "蕭敬騰",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/024. 全是愛 - 蕭敬騰.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Lo Siento",
        artist: "Super Junior ft. Leslie Grace",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/025. Lo Siento (Ft. Leslie Grace ) -  Super Junior.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "大眠",
        artist: "王心凌",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/026. 大眠 - 王心凌.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "我們的春天來臨前(Before Our Spring)",
        artist: "鐘鉉(종현)",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/027. 我們的春天來臨前(Before Our Spring) - 鐘鉉(종현).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "從來不知道",
        artist: "Bii畢書盡",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/028. 從來不知道 - Bii畢書盡.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "愛過你多久就有多痛",
        artist: "蕭秉治",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/029. 愛過你多久就有多痛 - 蕭秉治.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "瘋掉(NEGA DOLA)",
        artist: "BoA寶兒",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/030. 瘋掉(NEGA DOLA) - BoA寶兒.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "忘課",
        artist: "楊丞琳",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/031. 忘課 - 楊丞琳.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "The Way I Am",
        artist: "Charlie Puth",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/032. The Way I Am - Charlie Puth.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Everybody Woohoo",
        artist: "吴青峰&9m88",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/033. Everybody Woohoo - 吴青峰&9m88.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "DDU-DU DDU-DU",
        artist: "BLACKPINK",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/034. DDU-DU DDU-DU - BLACKPINK.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "最想去的地方",
        artist: "炎亞綸",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/035. 最想去的地方 - 炎亞綸.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "我懂你的獨特",
        artist: "朱俐静",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/036. 我懂你的獨特 - 朱俐静.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Let Go",
        artist: "BTS",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/037. Let Go - BTS.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "劈你的雷正在路上",
        artist: "王心凌",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/038. 劈你的雷正在路上 - 王心凌.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "讓我逃離平庸的生活",
        artist: "白安",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/039. 讓我逃離平庸的生活 - 白安.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Have It All",
        artist: "Jason Mraz",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/040. Have It All - Jason Mraz.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "一事無成的偉大",
        artist: "八三夭",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/041. 一事無成的偉大 - 八三夭.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "One More Time (Otra Vez)",
        artist: "SUPER JUNIOR feat. Reik",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/042. One More Time (Otra Vez) (Feat. Reik) - SUPER JUNIOR.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "我要給世界最悠長的濕吻",
        artist: "蔡健雅",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/043. 我要給世界最悠長的濕吻 - 蔡健雅.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "殘缺的彩虹",
        artist: "陳綺貞",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/044. 殘缺的彩虹 - 陳綺貞.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "'Bout you",
        artist: "SUPER JUNIOR-D&E",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/045. 'Bout you - SUPER JUNIOR-D&E.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "漸漸",
        artist: "陳奕迅 & the duo band",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/046. 漸漸 - 陳奕迅 & the duo band.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "沉睡的巨人",
        artist: "炎亞綸",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/047. 沉睡的巨人 - 炎亞綸.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "In My Blood",
        artist: "Shawn Mendes",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/048. In My Blood - Shawn Mendes.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "查某囡仔",
        artist: "李千那",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/049. 查某囡仔 - 李千那.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "閃光(Shinin’)",
        artist: "鐘鉉 (종현)",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/050. 閃光(Shinin’) - 鐘鉉 (종현).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Breathin",
        artist: "Ariana Grande",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/051. Breathin - Ariana Grande.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "等你下課",
        artist: "周杰倫 & 楊瑞代",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/052. 等你下課 - 周杰倫 & 楊瑞代.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "I'm so sick",
        artist: "Apink",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/053. I'm so sick - Apink.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "備胎",
        artist: "謝和弦",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/054. 備胎 - 謝和弦.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "BOOMERANG (부메랑)",
        artist: "Wanna One",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/055. BOOMERANG (부메랑) - Wanna One.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Forever Young",
        artist: "艾怡良",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/056. Forever Young - 艾怡良.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "東岸",
        artist: "B.C.W & 家家",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/057. 東岸 - B.C.W & 家家.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Teacher Teacher",
        artist: "AKB48",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/058. Teacher Teacher - AKB48.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "No Joke",
        artist: "羅志祥",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/059. No Joke - 羅志祥.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "天鵝說",
        artist: "Erika",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/060. 天鵝說 - Erika.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Always Remember Us This Way",
        artist: "Lady Gaga",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/061. Always Remember Us This Way - Lady Gaga.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Tempo",
        artist: "EXO",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/062. Tempo - EXO.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "慢慢喜歡你",
        artist: "莫文蔚",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/063. 慢慢喜歡你 - 莫文蔚.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "GTFO",
        artist: "Mariah Carey",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/064. GTFO - Mariah Carey.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "夜信(Through the night)",
        artist: "IU",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/065. 夜信(Through the night) - IU.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "少年董",
        artist: "頑童MJ116",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/066. 少年董  - 頑童MJ116.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Kiss and Make Up",
        artist: "Dua Lipa & BLACKPINK",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/067. Kiss and Make Up - Dua Lipa & BLACKPINK.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "晚安",
        artist: "蕭煌奇",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/068. 晚安 - 蕭煌奇.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "我好想好想你",
        artist: "蕭秉治",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/069. 我好想好想你 - 蕭秉治.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "PALETTE",
        artist: "IU & G-Dragon",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/070. PALETTE - IU & G-Dragon.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "我們",
        artist: "陳奕迅",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/071. 我們 - 陳奕迅.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Insomnia",
        artist: "C.T.O",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/072. Insomnia - C.T.O.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Lil` Touch",
        artist: "少女時代 OH!GG",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/073. Lil` Touch - 少女時代 OH!GG.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Dance To This",
        artist: "Troye Sivan&Ariana Grande",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/074. Dance To This - Troye Sivan&Ariana Grande.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "一樣的是",
        artist: "李佳薇",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/075. 一樣的是 - 李佳薇.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "你不是我的",
        artist: "陳勢安",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/076. 你不是我的 - 陳勢安.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Something New",
        artist: "太研태연",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/077. Something New - 太研태연.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "和平分手",
        artist: "梁文音",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/078. 和平分手 - 梁文音.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "初戀",
        artist: "宇多田光",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/079. 初戀 - 宇多田光.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "花粉症",
        artist: "許茹芸",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/080. 花粉症 - 許茹芸.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "If Only",
        artist: "Andrea Bocelli & Dua Lipa",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/081. If Only - Andrea Bocelli & Dua Lipa.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Love Shot",
        artist: "EXO",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/082. Love Shot - EXO.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "撥接",
        artist: "吳卓源Julia",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/083. 撥接 - 吳卓源Julia.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Find the Answer",
        artist: "嵐",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/084. Find the Answer - 嵐.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "沒那麼脆弱",
        artist: "李玉璽",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/085. 沒那麼脆弱 - 李玉璽.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "I Promise You (I.P.U.)",
        artist: "Wanna One",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/086. I Promise You (I.P.U.) - Wanna One.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "何必記念",
        artist: "小球 莊鵑瑛",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/087. 何必記念 - 小球 莊鵑瑛.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "LOVE SCENARIO (사랑을 했다)",
        artist: "iKON",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/088. LOVE SCENARIO (사랑을 했다) - iKON.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "B.O.",
        artist: "ØZI & 9m88",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/089. B.O. - ØZI & 9m88.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Secrets",
        artist: "李玖哲",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/090. Secrets - 李玖哲.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Candy Pop",
        artist: "TWICE",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/091. Candy Pop - TWICE.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "峇里島",
        artist: "李英宏",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/092. 峇里島 - 李英宏.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Sing With Me",
        artist: "李玉璽",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/093. Sing With Me - 李玉璽.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "去接你(Good Evening)",
        artist: "SHINee",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/094. 去接你(Good Evening) - SHINee.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "SWAG午覺",
        artist: "異鄉人 & 9m88",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/095. SWAG午覺 - 異鄉人 & 9m88.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "你是答案",
        artist: "王笠人",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/096. 你是答案 - 王笠人.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "EVERYDAY",
        artist: "WINNER",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/097. EVERYDAY - WINNER.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "我跟你卡好",
        artist: "玖壹壹 & 羅志祥",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/098. 我跟你卡好 - 玖壹壹 & 羅志祥.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Growing Pains",
        artist: "Alessia Cara",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/099. Growing Pains - Alessia Cara.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "RBB(Really Bad Boy)",
        artist: "Red Velvet",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2018HitFM/100. RBB(Really Bad Boy) - Red Velvet.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "偉大的渺小",
        artist: "林俊傑",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/01.偉大的渺小.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "我想你了",
        artist: "Bii畢書盡",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/02.我想你了.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Beautiful(孤單又燦爛的神原聲)",
        artist: "CRUSH",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/03.Beautiful(孤單又燦爛的神原聲).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "連名帶姓",
        artist: "aMEI張惠妹",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/04.連名帶姓.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Shape of You",
        artist: "Ed Sheeran",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/05.Shape of You.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "風衣",
        artist: "孫燕姿",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/06.風衣.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "我們的愛",
        artist: "獅子合唱團",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/07.我們的愛.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Lonely",
        artist: "鐘鉉 Feat. 太妍",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/08.Lonely.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "啞巴",
        artist: "潘瑋柏",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/09.啞巴.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "就這樣",
        artist: "李榮浩",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/10.就這樣.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "魚仔",
        artist: "盧廣仲",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/11.魚仔.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Look What You Made Me Do",
        artist: "Taylor Swift",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/12.Look What You Made Me Do.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "青春住了誰",
        artist: "楊丞琳",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/13.青春住了誰.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Not Today",
        artist: "BTS防彈少年團",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/14.Not Today.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "黑夜問白天",
        artist: "林俊傑",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/15.黑夜問白天.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "我很愉快",
        artist: "孫燕姿",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/16.我很愉快.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "How Far I'll Go(海洋奇緣原聲)",
        artist: "Alessia Cara",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/17.How Far I'll Go(海洋奇緣原聲).mp3",
        cover: '/cover.jpg'
      },
      {
        name: "偷故事的人",
        artist: "aMEI張惠妹",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/18.偷故事的人.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "ENERGETIC",
        artist: "WANNA ONE",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/19.ENERGETIC.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Despacito(Remix)",
        artist: "Luis Fonsi, Daddy Yankee ft. Justin Bieber",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/20.Despacito(Remix).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "家家酒",
        artist: "家家",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/21.家家酒.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Nothing At All",
        artist: "Bii畢書盡",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/22.Nothing At All.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Something Just Like This",
        artist: "The Chainsmokers & Coldplay",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/23.Something Just Like This.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Black Suit",
        artist: "SUPER JUNIOR",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/24.Black Suit.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "天亮以後說分手",
        artist: "獅子合唱團",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/25.天亮以後說分手.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "反對眼淚",
        artist: "朱俐靜",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/26.反對眼淚.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "言不由衷",
        artist: "徐佳瑩",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/27.言不由衷.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Fxxk It",
        artist: "BIGBANG",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/28.Fxxk It.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "不曾回來過",
        artist: "李千娜",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/29.不曾回來過.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "你離開他了嗎",
        artist: "曾沛慈",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/30.你離開他了嗎.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Attention",
        artist: "Charlie Puth",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/31.Attention.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Coming Home",
        artist: "潘瑋柏",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/32.Coming Home.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "如果雨之後",
        artist: "ERIC周興哲",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/33.如果雨之後.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Song for you",
        artist: "五月天+岡野昭仁",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/34.Song for you.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "誰來剪月光",
        artist: "陳奕迅",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/35.誰來剪月光.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "夢中情人",
        artist: "陳彥允",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/36.夢中情人.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Beauty and the Beast",
        artist: "Ariana Grande & John Legend",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/37.Beauty and the Beast.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "為愛而愛",
        artist: "鼓鼓",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/38.為愛而愛.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "DNA",
        artist: "BTS防彈少年團",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/39.DNA.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "跳舞的梵",
        artist: "孫燕姿",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/40.跳舞的梵谷.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Stay with me(孤單又燦爛的神原聲)",
        artist: "EXO CHANYEOL+PUNCH",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/41.Stay with me(孤單又燦爛的神原聲).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "You’re Gone",
        artist: "Bii畢書盡",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/42.You’re Gone.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "你說了算",
        artist: "aMEI張惠妹+瘦子E-SO",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/43.你說了算.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Havana",
        artist: "Camila Cabello ft. Young Thug",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/44.Havana.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "One More Chance",
        artist: "SUPER JUNIOR",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/45.One More Chance.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "未單身",
        artist: "A-Lin",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/46.未單身.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "秘密",
        artist: "獅子合唱團",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/47.秘密.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "All Falls Down",
        artist: "Alan Walker ft. Noah CyrusDigital",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/48.All Falls Down.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "幹大事",
        artist: "頑童MJ116",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/49.幹大事.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "我的女神",
        artist: "鄭容和 ft. LOCO",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/50.我的女神.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "現在就讓我走",
        artist: "宇宙人",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/51.現在就讓我走.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "所謂的愛",
        artist: "小宇-宋念宇",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/52.所謂的愛.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "LAST DANCE",
        artist: "BIGBANG",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/53.LAST DANCE.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Will You Remember Me",
        artist: "李玖哲",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/54.Will You Remember Me.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "戒菸",
        artist: "李榮浩",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/55.戒菸.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "一千零一個願望(單人版)",
        artist: "楊丞琳",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/56.一千零一個願望(單人版).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Beautiful",
        artist: "WANNA ONE",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/57.Beautiful.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Good Life(玩命關頭8原聲)",
        artist: "G-Eazy & Kehlani",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/58.Good Life(玩命關頭8原聲).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "第三類接觸",
        artist: "潘瑋柏",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/59.第三類接觸.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "無題(UNTITLED, 2014)",
        artist: "G-DRAGON",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/60.無題(UNTITLED, 2014).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "乾啦 乾啦",
        artist: "八三夭+任賢齊+五月天阿信",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/61.乾啦 乾啦.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "親愛的",
        artist: "王力宏",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/62.親愛的.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "One More Time",
        artist: "TWICE",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/63.One More Time.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "偏愛",
        artist: "曾沛慈",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/64.偏愛.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "What Lovers Do",
        artist: "Maroon 5 ft. SZA",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/65.What Lovers Do.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "上位",
        artist: "邱勝翊",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/66.上位.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "不要不要",
        artist: "陳珊妮+魏如萱",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/67.不要不要.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Glory days",
        artist: "CNBLUE",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/68.Glory days.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "亮了",
        artist: "曾之喬",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/69.亮了.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "該忘的日子",
        artist: "郭靜",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/70.該忘的日子.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "City of Stars(樂來越愛你原聲)",
        artist: "Ryan Gosling, Emma Stone",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/71.City of Stars(樂來越愛你原聲).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "J.SHEON別問很可怕",
        artist: "",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/72.別問很可怕.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Party Crasher",
        artist: "安那ANNA",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/73.Party Crasher.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Showtime",
        artist: "安室奈美惠",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/74.Showtime.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "灰色",
        artist: "徐佳瑩",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/75.灰色.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Castle on the Hill",
        artist: "Ed Sheeran",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/76.Castle on the Hill.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Fine",
        artist: "太妍",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/77.Fine.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "皇后區的皇后",
        artist: "MISS KO葛仲珊",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/78.皇后區的皇后.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "我想念我自己",
        artist: "彭佳慧",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/79.我想念我自己.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Ko Ko Bop",
        artist: "EXO",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/80.Ko Ko Bop.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "其實沒聊什麼",
        artist: "朱俐靜 feat. RPG",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/81.其實沒聊什麼.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "美女與野獸",
        artist: "田馥甄+井柏然",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/82.美女與野獸.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "我說寶貝",
        artist: "阿達+LULU黃路梓茵",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/83.我說寶貝.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Symphony",
        artist: "Clean Bandit feat. Zara Larsson",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/84.Symphony.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "當夜晚來臨(同名原聲)",
        artist: "EDDY KIM",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/85.當夜晚來臨(同名原聲).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "跟自己合唱",
        artist: "動力火車",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/86.跟自己合唱.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "孤獨是會上癮的",
        artist: "吳克群",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/87.孤獨是會上癮的.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "...Ready For It",
        artist: "Taylor Swift",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/88. ...Ready For It.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "披風",
        artist: "陳奕迅",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/89.披風.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "SPRING DAY",
        artist: "BTS防彈少年團",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/90.SPRING DAY.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "還是想念",
        artist: "家家",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/91.還是想念.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "閻羅王",
        artist: "閻奕格",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/92.閻羅王.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Holiday",
        artist: "少女時代",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/93.Holiday.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "可以唷",
        artist: "鼓鼓",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/94.可以唷.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "釘子花",
        artist: "伍佰&CHINA BLUE",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/95.釘子花.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Doors～勇氣的軌跡～",
        artist: "嵐",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/96.Doors～勇氣的軌跡～.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "永恆的印記",
        artist: "張信哲+張艾嘉",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/97.永恆的印記.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "星之所向",
        artist: "小球(莊鵑瑛)",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/98.星之所向.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "We Are One",
        artist: "Hardwell ft. Jolin Tsai",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/99.We Are One.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "派對俠",
        artist: "玖壹壹",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2017HitFM/100.派對俠.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "不為誰而作的歌",
        artist: "林俊傑",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/01.不為誰而作的歌.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "餘波盪漾",
        artist: "田馥甄",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/02.餘波盪漾.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "後來的我們",
        artist: "五月天",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/03.後來的我們.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "前前前世(你的名子原聲)",
        artist: "RADWIMPS",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/04.前前前世(你的名子原聲).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "不該",
        artist: "周杰倫+aMEI",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/05.不該.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "最後的請求",
        artist: "獅子合唱團",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/06.最後的請求.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "CAN'T STOP THE FEELING!",
        artist: "JUSTIN TIMBERLAKE",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/07. CAN'T STOP THE FEELING!.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "年輪說",
        artist: "楊丞琳",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/08.年輪說.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "ALWAYS(太陽的後裔原聲)",
        artist: "尹美萊",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/09.ALWAYS(太陽的後裔原聲).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "滿座",
        artist: "李榮浩",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/10.滿座.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "天真有邪",
        artist: "林宥嘉",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/11.天真有邪.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "PPAP(Pen-Pineapple-Apple-Pen)",
        artist: "PIKO太郎",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/12.PPAP(Pen-Pineapple-Apple-Pen).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "關鍵詞",
        artist: "林俊傑",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/13.關鍵詞.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "獨善其身",
        artist: "田馥甄",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/14.獨善其身.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "11點11",
        artist: "太妍",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/15.11點11.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "24K Magic",
        artist: "BRUNO MARS",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/16.24K Magic.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "都是你害的",
        artist: "Bii畢書盡",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/17.都是你害的.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "有夢不難",
        artist: "林俊傑+信+MIKE",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/18.有夢不難.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Like OOH-AHH",
        artist: "TWICE",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/19.Like OOH-AHH.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "一次幸福的機會",
        artist: "蕭敬騰",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/20.一次幸福的機會.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "We Don't Talk Anymore",
        artist: "CHARLIE PUTH+ SELENA GOMEZ",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/21.We Don't Talk Anymore.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "人間煙火",
        artist: "田馥甄",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/22.人間煙火.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Monster",
        artist: "EXO",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/23.Monster.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "你,好不好",
        artist: "ERIC周興哲",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/24.你,好不好.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "I Wanna Know",
        artist: "ALESSO+JOLIN TSAI",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/25.I Wanna Know.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "LION",
        artist: "獅子合唱團",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/26.LION.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "為了你(너를 위해)",
        artist: "EXO CHEN+伯賢+XIUMIN",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/27.為了你(너를 위해)_no.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "遠在眼前的你",
        artist: "王心凌",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/28.遠在眼前的你.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Closer",
        artist: "THE CHAINSMOKERS+HALSEY",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/29.Closer.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "帥到分手",
        artist: "周湯豪",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/30.帥到分手.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "You Are My Everything(太陽的後裔原聲)",
        artist: "GUMMY",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/31.You Are My Everything(太陽的後裔原聲).mp3",
        cover: '/cover.jpg'
      },
      {
        name: "第一個想到你",
        artist: "韋禮安",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/32.第一個想到你.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Work from home",
        artist: "FIFTH HARMONY+TY DOLLA $IGN",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/33.Work from home.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "愛情廢柴",
        artist: "周杰倫",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/34.愛情廢柴.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Catch Your Double Eye",
        artist: "Bii畢書盡",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/35.Catch Your Double Eye.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "血汗淚",
        artist: "BTS防彈少年團",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/36.血汗淚.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "袖手旁觀",
        artist: "蕭敬騰",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/37.袖手旁觀.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Cold Water",
        artist: "MAJOR LAZER+JUSTIN BIEBER+ MØ",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/38.Cold Water.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "當一個天使的憂愁",
        artist: "ERIKA+小宇",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/39.當一個天使的憂愁.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "派對動物",
        artist: "五月天",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/40.派對動物.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Everytime(太陽的後裔原聲)",
        artist: "CHEN+PUNCH",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/41.Everytime(太陽的後裔原聲).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "一點點",
        artist: "林宥嘉",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/42. 一點點.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Adventure of a Lifetime",
        artist: "COLDPLAY",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/43.Adventure of a Lifetime.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "永遠都在",
        artist: "S.H.E",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/44.永遠都在.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "什麼都沒有(你的名子原聲)",
        artist: "RADWIMPS",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/45.什麼都沒有(你的名子原聲).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "少女的祈禱",
        artist: "王心凌",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/46.少女的祈禱.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Glory Days",
        artist: "CNBLUE",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/47.Glory Days.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "滿天星",
        artist: "李玉璽",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/48.滿天星.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "頑固",
        artist: "五月天",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/49.頑固.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "1 of 1",
        artist: "SHINee",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/50.1 of 1.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Perfect Illusion",
        artist: "LADY GAGA",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/51.Perfect Illusion.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "戀我癖",
        artist: "陳星翰+蔡依林",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/52.戀我癖.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "床邊故事",
        artist: "周杰倫",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/53.床邊故事.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "道路",
        artist: "宇多田光",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/54.道路.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "你啊你啊",
        artist: "魏如萱",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/55.你啊你啊.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "Faded",
        artist: "ALAN WALKER",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/56.Faded.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "熱血無賴",
        artist: "林宥嘉",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/57.熱血無賴.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Dear Diary",
        artist: "安室奈美惠",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/58.Dear Diary.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Boyz On Fire",
        artist: "SPEXIAL",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/59.Boyz On Fire.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "觀眾",
        artist: "楊丞琳",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/60.觀眾.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Don't You Get It",
        artist: "嵐",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/61.Don't You Get It.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "SUGAR RUSH(CHN Ver.)",
        artist: "吳映潔",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/62.SUGAR RUSH(CHN Ver.).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "靚仔",
        artist: "安心亞+羅志祥",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/63.靚仔.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "Why",
        artist: "太妍",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/64.Why.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "是我不夠好",
        artist: "李毓芬",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/65.是我不夠好.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Home",
        artist: "王詩安",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/66.Home.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "道聽塗說",
        artist: "林芯儀",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/67.道聽塗說.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "單",
        artist: "楊丞琳",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/68.單.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Lion Heart",
        artist: "少女時代",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/69.Lion Heart.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "如果再見",
        artist: "韋禮安",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/70.如果再見.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "很久很久以後",
        artist: "范瑋琪",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/71.很久很久以後.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "只有兩小時的假期",
        artist: "宇多田光+椎名林檎",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/72.只有兩小時的假期.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "偶",
        artist: "魏如昀",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/73.偶.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Try Everything(動物方程式原聲)",
        artist: "SHAKIRA",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/74.Try Everything(動物方程式原聲).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "不放手",
        artist: "吳思賢",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/75.不放手.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "矜持",
        artist: "蕭敬騰",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/76.矜持.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "離心力",
        artist: "楊乃文",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/77.離心力.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "好愛好散",
        artist: "陳勢安",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/78.好愛好散.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Dancing King",
        artist: "EXO+劉在錫",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/79.Dancing King.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "My Way",
        artist: "朱俐靜",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/80.My Way.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "7 Years",
        artist: "LUKAS GRAHAM",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/81.7 Years.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "只是不夠愛自己",
        artist: "丁噹",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/82.只是不夠愛自己.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "雲畫的月光(雲畫的月光原聲)",
        artist: "GUMMY",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/83.雲畫的月光(雲畫的月光原聲).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Fly Out",
        artist: "兄弟本色",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/84.Fly Out.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "賊",
        artist: "戴佩妮",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/85.賊.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "後知後覺",
        artist: "李洪基",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/86.後知後覺.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "在，也不見",
        artist: "孫燕姿",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/87.在，也不見.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "Don't Wanna Know",
        artist: "MAROON 5 + KENDRICK LAMAR",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/88.Don't Wanna Know.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "不害怕",
        artist: "張韶涵",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/89.不害怕.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "This Is Love",
        artist: "ERIC周興哲",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/90.This Is Love.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "無論經過幾年",
        artist: "近畿小子",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/91.無論經過幾年.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "等我變了之後",
        artist: "張芸京",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/92.等我變了之後.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Turn Up",
        artist: "周湯豪",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/93.Turn Up.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "你就是旋律",
        artist: "AKB48",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/94.你就是旋律.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "野生動物",
        artist: "李榮浩",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/95.野生動物.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "很不低調",
        artist: "方大同",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/96.很不低調.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "你的愛是什麼形狀",
        artist: "GJ蔣卓嘉",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/97.你的愛是什麼形狀.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Mad World",
        artist: "濱崎步",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/98.Mad World.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "我們的總和",
        artist: "艾怡良",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/99.我們的總和.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "YOUTH",
        artist: "TROYE SIVAN",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2016HitFM/100.YOUTH.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "小幸運",
        artist: "田馥甄",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/1 田馥甄 - 小幸運.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "可惜沒如果",
        artist: "林俊傑",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/2 林俊傑 - 可惜沒如果.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "不過失去了一點點",
        artist: "曾沛慈",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/3 曾沛慈 - 不過失去了一點點.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "CHECKMATE",
        artist: "鄭容和+林俊傑",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/4 鄭容和+林俊傑 - CHECKMATE.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "HELLO",
        artist: "ADELE",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/5 ADELE - HELLO.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "夠了",
        artist: "羅志祥",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/6 羅志祥 - 夠了.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "CINDERELLA",
        artist: "CNBLUE",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/7 CNBLUE - CINDERELLA.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "算什麼男人",
        artist: "周杰倫",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/8 周杰倫 - 算什麼男人.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "DEVIL",
        artist: "SUPER JUNIOR",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/9 SUPER JUNIOR - DEVIL.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "DANGEROUS",
        artist: "SpeXial",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/10 SpeXial - DANGEROUS.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "BAD BLOOD",
        artist: "TAYLOR SWIFT+ KENDRICK LAMAR",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/11 TAYLOR SWIFT+ KENDRICK LAMAR - BAD BLOOD.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "我還想念你",
        artist: "Bii畢書盡",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/12 Bii畢書盡 - 我還想念你.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "ONE FINE DAY",
        artist: "鄭容和",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/13 鄭容和 - ONE FINE DAY.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "你的愛",
        artist: "王力宏",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/14 王力宏 - 你的愛.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "WHAT DO YOU MEAN",
        artist: "JUSTIN BIEBER",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/15 JUSTIN BIEBER - WHAT DO YOU MEAN.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "下雨的夜晚",
        artist: "蘇打綠",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/16 蘇打綠 - 下雨的夜晚.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "CALL ME BABY",
        artist: "EXO",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/17 EXO - CALL ME BABY.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "失憶的金魚",
        artist: "楊丞琳",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/18 楊丞琳 - 失憶的金魚.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "THIS SUMMER’S GONNA HURT",
        artist: "MAROON 5",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/19 MAROON 5 - THIS SUMMER’S GONNA HURT.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "BANG BANG BANG",
        artist: "BIGBANG",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/20 BIGBANG - BANG BANG BANG.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "手心的薔薇",
        artist: "林俊傑+G.E.M.鄧紫棋",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/21 林俊傑+G.E.M.鄧紫棋 - 手心的薔薇.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "LOVE ME LIKE YOU DO",
        artist: "ELLIE GOULDING",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/22 ELLIE GOULDING - LOVE ME LIKE YOU DO.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "3.1415",
        artist: "Selina任家萱",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/23 Selina任家萱 - 3.1415.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "突然好想你",
        artist: "徐佳瑩",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/24 徐佳瑩 - 突然好想你.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "在光化門",
        artist: "圭賢",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/25 圭賢 - 在光化門.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "兜圈",
        artist: "林宥嘉",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/26 林宥嘉 - 兜圈.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Flashlight",
        artist: "Jessie J",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/27 Jessie J - Flashlight.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "I am a Hero",
        artist: "福山雅治",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/28 福山雅治 - I am a Hero.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "SUPERNOVA",
        artist: "CNBLUE",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/29 CNBLUE - SUPERNOVA.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "心時代",
        artist: "Bii畢書盡+陳勢安+陳彥允+李玉璽",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/30 Bii畢書盡+陳勢安+陳彥允+李玉璽 - 心時代.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "RADIO",
        artist: "孫燕姿",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/31 孫燕姿 - RADIO.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "不要痛(GROWING PAINS)",
        artist: "SUPER JUNIOR-D&E",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/32 SUPER JUNIOR-D&E - 不要痛(GROWING PAINS).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "致命傷",
        artist: "羅志祥",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/33 羅志祥 - 致命傷.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "如同悲傷被下載了兩次",
        artist: "陳珊妮+林宥嘉",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/34 陳珊妮+林宥嘉 - 如同悲傷被下載了兩次.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "再見",
        artist: "鄧紫棋",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/35 鄧紫棋 - 再見.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "信愛成癮",
        artist: "ELLA陳嘉樺",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/36 ELLA陳嘉樺 - 信愛成癮.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "I REALLY LIKE YOU",
        artist: "CARLY RAE JEPSEN",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/37 CARLY RAE JEPSEN - I REALLY LIKE YOU.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "UPTOWN FUNK",
        artist: "MARK RONSON+BRUNO MARS",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/38 MARK RONSON+BRUNO MARS - UPTOWN FUNK.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "貼身",
        artist: "SpeXial",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/39 SpeXial - 貼身.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "母系社會",
        artist: "AMIT",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/40 AMIT - 母系社會.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "用餘生去愛",
        artist: "張學友",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/41 張學友 - 用餘生去愛.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "SEE YOU AGAIN",
        artist: "WIZ KHALIFA + CHARLIE PUTH",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/42 WIZ KHALIFA + CHARLIE PUTH - SEE YOU AGAIN.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "點水",
        artist: "楊丞琳",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/43 楊丞琳 - 點水.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "手寫的從前",
        artist: "周杰倫",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/44 周杰倫 - 手寫的從前.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Lost Stars",
        artist: "Adam Levine",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/45 Adam Levine - Lost Stars.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "多年後",
        artist: "曾沛慈",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/46 曾沛慈 - 多年後.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "女孩",
        artist: "韋禮安",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/47 韋禮安 - 女孩.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "THE GIFT",
        artist: "濱崎步",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/48 濱崎步 - THE GIFT.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "너 귀엽다 你好可愛",
        artist: "吳克群+宋智孝",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/49 吳克群+宋智孝 - 너 귀엽다 你好可愛.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "LOVE MORE",
        artist: "Bii畢書盡",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/50 Bii畢書盡 - LOVE MORE.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "SORRY",
        artist: "JUSTIN BIEBER",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/51 JUSTIN BIEBER - SORRY.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "LET'S NOT FALL IN LOVE",
        artist: "BIGBANG",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/52 BIGBANG - LET'S NOT FALL IN LOVE.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "輕輕",
        artist: "嚴爵+PEACE",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/53 嚴爵+PEACE - 輕輕.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "看我的",
        artist: "Selina任家萱",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/54 Selina任家萱 - 看我的.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "YOUR LEGEND~燃燒的生命~",
        artist: "五月天",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/55 五月天 - YOUR LEGEND~燃燒的生命~.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "難得孤寂",
        artist: "A-Lin",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/56 A-Lin - 難得孤寂.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "ON MY MIND",
        artist: "ELLIE GOULDING",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/57 ELLIE GOULDING - ON MY MIND.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "幸福特調",
        artist: "羅志祥+秀智",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/58 羅志祥+秀智 - 幸福特調.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "MAGIC",
        artist: "SUPER JUNIOR",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/59 SUPER JUNIOR - MAGIC.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "新地球",
        artist: "林俊傑",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/60 林俊傑 - 新地球.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "SOBER",
        artist: "BIGBANG",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/61 BIGBANG - SOBER.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "其實我們值得幸福",
        artist: "楊丞琳",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/62 楊丞琳 - 其實我們值得幸福.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "痛快的哀艷",
        artist: "蘇打綠",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/63 蘇打綠 - 痛快的哀艷.mp3',
        cover: '/cover.jpg'
      },
            {
        name: "PERFECT",
        artist: "ONE DIRECTION",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/64 ONE DIRECTION - PERFECT.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "不散,不見",
        artist: "莫文蔚",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/65 莫文蔚 - 不散,不見.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "CATCH ME IF YOU CAN",
        artist: "少女時代",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/66 少女時代 - CATCH ME IF YOU CAN.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "黑框眼鏡",
        artist: "曾沛慈",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/67 曾沛慈 - 黑框眼鏡.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "那你呢",
        artist: "宇宙人",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/68 宇宙人 - 那你呢.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "ZUTTER",
        artist: "GD&T.O.P",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/69 GD&T.O.P - ZUTTER.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "孤獨的總和",
        artist: "吳汶芳",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/70 吳汶芳 - 孤獨的總和.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "ACTION GO!",
        artist: "Bii畢書盡",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/71 Bii畢書盡 - ACTION GO!.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "一人水一項",
        artist: "Selina任家萱+蕭煌奇",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/72 Selina任家萱+蕭煌奇 - 一人水一項.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "浪費眼淚",
        artist: "ELLA陳嘉樺",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/73 ELLA陳嘉樺 - 浪費眼淚.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "暖男製造機",
        artist: "SpeXial",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/74 SpeXial - 暖男製造機.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "WRITING'S ON THE WALL",
        artist: "SAM SMITH",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/75 SAM SMITH - WRITING'S ON THE WALL.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "你不是真正的快樂",
        artist: "鄧紫棋",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/76 鄧紫棋 - 你不是真正的快樂.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "LOVE ME RIGHT",
        artist: "EXO",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/77 EXO - LOVE ME RIGHT.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "我懂了",
        artist: "劉若英",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/78 劉若英 - 我懂了.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "不將就",
        artist: "李榮浩",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/79 李榮浩 - 不將就.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "BAE BAE",
        artist: "BIGBANG",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/80 BIGBANG - BAE BAE.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "LOVE KILLAH",
        artist: "SpeXial",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/81 SpeXial - LOVE KILLAH.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "PHOTOGENIC",
        artist: "安室奈美惠",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/82 安室奈美惠 - PHOTOGENIC.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "裂心",
        artist: "王力宏",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/83 王力宏 - 裂心.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "SHOUT",
        artist: "李玉璽",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/84 李玉璽 - SHOUT.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "VIEW",
        artist: "SHINee",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/85 SHINee - VIEW.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "陌生的地方",
        artist: "陳彥允",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/86 陳彥允 - 陌生的地方.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "EVERYONE",
        artist: "蘇打綠",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/87 蘇打綠 - EVERYONE.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "鞋子特大號",
        artist: "周杰倫",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/88 周杰倫 - 鞋子特大號.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "迷失 IN U",
        artist: "SpeXial",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/89 SpeXial - 迷失 IN U.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "失語者",
        artist: "蔡健雅",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/90 蔡健雅 - 失語者.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "拿破崙",
        artist: "黃鴻升",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/91 黃鴻升 - 拿破崙.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "百萬碎片 (A MILLION PIECES)",
        artist: "圭賢",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/92 圭賢 - 百萬碎片 (A MILLION PIECES).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "RESET",
        artist: "TIGER JK+ JINSIL OF MAD SOUL CHILD",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/93 TIGER JK+ JINSIL OF MAD SOUL CHILD - RESET.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "I WANNA SAY",
        artist: "Bii畢書盡",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/94 Bii畢書盡 - I WANNA SAY.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "心之空",
        artist: "嵐",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/95 嵐 - 心之空.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "皮諾丘",
        artist: "ROY KIM",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/96 ROY KIM - 皮諾丘.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "無條件",
        artist: "陳奕迅",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/97 陳奕迅 - 無條件.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "我不離開",
        artist: "戴愛玲+A-LIN",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/98 戴愛玲+A-LIN - 我不離開.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "LIVING FOR LOVE",
        artist: "MADONNA",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/99 MADONNA - LIVING FOR LOVE.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "愛不需要裝乖",
        artist: "謝和弦+王詩安",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2015HitFM/100 謝和弦+王詩安 - 愛不需要裝乖.mp3',
        cover: '/cover.jpg'
      },
	  {
        name: "呸",
        artist: "蔡依林",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/001.蔡依林 - 呸.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "克卜勒",
        artist: "孫燕姿",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/002.孫燕姿 - 克卜勒.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Let it Go",
        artist: "Demi Lovato",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/003.Demi Lovato - Let it Go.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Can't Stop",
        artist: "CNBLUE",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/004.CNBLUE - Can't Stop.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "不解釋親吻",
        artist: "蕭亞軒",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/005.蕭亞軒 - 不解釋親吻.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "MAMACITA(哎呀呀)",
        artist: "Super Junior",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/006.Super Junior - MAMACITA(哎呀呀).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "三月",
        artist: "張惠妹",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/007.張惠妹 - 三月.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "第三人稱",
        artist: "蔡依林",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/008.蔡依林 - 第三人稱.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "Shake It Off",
        artist: "Taylor Swift",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/009.Taylor Swift - Shake It Off.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "My Destiny(我的命運)",
        artist: "LYN",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/010.LYN - My Destiny(我的命運).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "步步",
        artist: "五月天",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/011.五月天 - 步步.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Kelly",
        artist: "蕭敬騰",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/012.蕭敬騰 - Kelly.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "聽我說 ~金嘆與恩尚定情曲",
        artist: "FTISLAND 李洪基",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/013.FTISLAND 李洪基 - 聽我說 ~金嘆與恩尚定情曲.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Problem",
        artist: "Ariana Grande+Iggy Azalea",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/014.Ariana Grande+Iggy Azalea - Problem.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "天使的指纹",
        artist: "孫燕姿",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/015.孫燕姿 - 天使的指纹.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "GUTS!",
        artist: "嵐",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/016.嵐 - GUTS!.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "浪漫來襲",
        artist: "蕭亞軒",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/017.蕭亞軒 - 浪漫來襲.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Maps",
        artist: "Maroon 5",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/018.Maroon 5 - Maps.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Mr.Mr.",
        artist: "少女時代",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/019.少女時代 - Mr.Mr.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "這不是我",
        artist: "炎亞綸",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/020.炎亞綸 - 這不是我.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "上瘾 (Overdose)",
        artist: "EXO-M",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/021.EXO-M-上瘾 (Overdose).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Don't Stop",
        artist: "5 Seconds of Summer",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/022.5 Seconds of Summer - Don't Stop.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "我還是愛著你",
        artist: "MP魔幻力量",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/023.MP魔幻力量 - 我還是愛著你.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "This is Love",
        artist: "Super Junior",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/024.Super Junior - This is Love.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "感傷",
        artist: "蕭亞軒",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/025.蕭亞軒 - 感傷.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Magic",
        artist: "Coldplay",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/026.Coldplay - Magic.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "這樣你還要愛我嗎",
        artist: "張惠妹",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/027.張惠妹 - 這樣你還要愛我嗎.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Touch Love",
        artist: "尹美萊",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/028.尹美萊 - Touch Love.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "吻我吧",
        artist: "蕭敬騰",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/029.蕭敬騰 - 吻我吧.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Mortorcyle",
        artist: "SUPER JUNIOR東海&銀赫",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/030.SUPER JUNIOR東海&銀赫 - Mortorcyle.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "一刀不剪",
        artist: "炎亞綸",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/031.炎亞綸 - 一刀不剪.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "缺口",
        artist: "庾澄慶",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/032.庾澄慶 - 缺口.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "Love Someone",
        artist: "Jason Mraz",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/033.Jason Mraz - Love Someone.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "九號球",
        artist: "五月天 怪獸",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/034.五月天 怪獸 - 九號球.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Can You Celebrate",
        artist: "安室奈美惠+葉加瀨太郎",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/035.安室奈美惠+葉加瀨太郎 - Can You Celebrate.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "無限大",
        artist: "孫燕姿",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/036.孫燕姿 - 無限大.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "以後別做朋友",
        artist: "ERIC周興哲",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/037.ERIC周興哲 - 以後別做朋友.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Drunk in Love",
        artist: "Beyoncé+Jay Z",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/038.Beyoncé+Jay Z - Drunk in Love.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "打呼",
        artist: "潘瑋柏+楊丞琳",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/039.潘瑋柏+楊丞琳 - 打呼.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "尋人啟事",
        artist: "徐佳瑩",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/040.徐佳瑩 - 尋人啟事.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "心意告示牌",
        artist: "AKB048",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/041.AKB048 - 心意告示牌.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Do You Ever Shine",
        artist: "五月天",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/042.五月天 - Do You Ever Shine.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Baby Boy",
        artist: "王心凌",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/043.王心凌 - Baby Boy.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Happy",
        artist: "Pharrell Williams",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/044.Pharrell Williams - Happy.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "Everything Changes",
        artist: "Bii畢書盡+陳勢安+陳彥允+李玉璽",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/045.Bii畢書盡+陳勢安+陳彥允+李玉璽 - Everything Changes.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "你給我聽好",
        artist: "陳奕迅",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/046.陳奕迅 - 你給我聽好.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "12月的奇蹟",
        artist: "EXO",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/047.EXO - 12月的奇蹟.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "跟我玩",
        artist: "蕭敬騰",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/048.蕭敬騰 - 跟我玩.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "我沒那麼愛你",
        artist: "丁噹",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/049.丁噹 - 我沒那麼愛你.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "最佳的幸運",
        artist: "CHEN(EXO)",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/050.CHEN(EXO) - 最佳的幸運.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "跳進來",
        artist: "張惠妹",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/051.張惠妹 - 跳進來.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "喜劇之王",
        artist: "李榮浩",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/052.李榮浩 - 喜劇之王.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "塵埃",
        artist: "家家",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/053.家家 - 塵埃.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "You're Mine (Eternal)",
        artist: "Mariah Carey",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/054.Mariah Carey - You're Mine (Eternal).mp3",
        cover: '/cover.jpg'
      },
      {
        name: "流浪者之歌",
        artist: "陳綺貞",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/055.陳綺貞 - 流浪者之歌.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "基因決定我愛你",
        artist: "陳彥允",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/056.陳彥允 - 基因決定我愛你.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Fantastic",
        artist: "HENRY(SUPER JUNIOR-M)",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/057.HENRY(SUPER JUNIOR-M) - Fantastic.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Break It Down",
        artist: "SpeXial",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/058.SpeXial - Break It Down.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "在你身邊",
        artist: "韋禮安",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/059.韋禮安 - 在你身邊.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "怪盜(Danger)",
        artist: "泰民",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/060.泰民 - 怪盜(Danger).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "陳淑芬與林志豪",
        artist: "王心凌",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/061.王心凌 - 陳淑芬與林志豪.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "小丑",
        artist: "潘瑋柏",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/062.潘瑋柏 - 小丑.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Steal My Girl",
        artist: "One Direction",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/063.One Direction - Steal My Girl.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "濃妝",
        artist: "朱俐靜",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/064.朱俐靜 - 濃妝.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "未接來電",
        artist: "楊乃文",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/065.楊乃文 - 未接來電.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "鍵のない箱",
        artist: "Kinki Kids",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/066.Kinki Kids - 鍵のない箱.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "像天堂的懸崖",
        artist: "李佳薇",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/067.李佳薇 - 像天堂的懸崖.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "在不確定的世界裡",
        artist: "魏如萱",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/068.魏如萱 - 在不確定的世界裡.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "Bang Bang",
        artist: "Jessie J+Ariana Grande+Nicki Minaj",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/069.Jessie J+Ariana Grande+Nicki Minaj - Bang Bang.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Swing",
        artist: "Super Junior-M",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/070.Super Junior-M - Swing.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Good Luck",
        artist: "Beast",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/071.Beast - Good Luck.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "啾咪啾咪",
        artist: "卓文萱",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/072.卓文萱 - 啾咪啾咪.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "敢愛敢當",
        artist: "丁噹",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/073.丁噹 - 敢愛敢當.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Holler",
        artist: "少女時代",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/074.少女時代 - Holler.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "不搭",
        artist: "李榮浩",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/075.李榮浩 - 不搭.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Go Crazy-",
        artist: "2PM",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/076.2PM - Go Crazy-.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "Stay With Me",
        artist: "Sam Smith",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/077.Sam Smith - Stay With Me.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "看看",
        artist: "莫文蔚",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/078.莫文蔚 - 看看.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "大逃殺",
        artist: "八三夭",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/079.八三夭 - 大逃殺.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Empty.",
        artist: "Winner",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/080.Winner - Empty.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "沉睡的野獸",
        artist: "楊培安",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/081.楊培安 - 沉睡的野獸.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Eyes,Nose,Lips",
        artist: "Taeyang",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/082.Taeyang - Eyes,Nose,Lips.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "若你真的有想過",
        artist: "白安",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/083.白安 - 若你真的有想過.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Animals",
        artist: "Maroon 5",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/084.Maroon 5 - Animals.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "歲月這把刀",
        artist: "林凡",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/085.林凡 - 歲月這把刀.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "口的形狀",
        artist: "林宥嘉",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/086.林宥嘉 - 口的形狀.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "Downtown Baby",
        artist: "SHINee",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/087.SHINee - Downtown Baby.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "偷偷的",
        artist: "MP魔幻力量",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/088.MP魔幻力量 - 偷偷的.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "特别的人",
        artist: "方大同",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/089.方大同 - 特别的人.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Home",
        artist: "RoyKim",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/090.RoyKim - Home.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "不還",
        artist: "郭靜",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/091.郭靜 - 不還.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "放下,旅行",
        artist: "李玉璽",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/092.李玉璽 - 放下,旅行.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "曉",
        artist: "福山雅治",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/093.福山雅治 - 曉.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Love Never Felt So Good",
        artist: "Michael Jackson+Justin Timberlake",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/094.Michael Jackson+Justin Timberlake - Love Never Felt So Good.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "美麗",
        artist: "王大文",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/095.王大文 - 美麗.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Something",
        artist: "東方神起",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/096.東方神起 - Something.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "More",
        artist: "Popu Lady",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/097.Popu Lady - More.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "200%",
        artist: "AKMU樂童音樂家",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/098.AKMU樂童音樂家 - 200%.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "還在夏天呢",
        artist: "辰亦儒",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/099.辰亦儒 - 還在夏天呢.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Bittersweet",
        artist: "嵐",
        url: "https://notp.ddns.net/wordpress/wp-content/music/2014HitFM/100.嵐 - Bittersweet.mp3",
        cover: '/cover.jpg'
      }
    ]
});