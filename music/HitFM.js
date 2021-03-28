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
        name: "田馥甄 Hebe - 無人知曉",
        url: 'https://notp.synology.me/2020HitFM/001. 無人知曉.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "盧廣仲 - 刻在我心底的名字",
        url: 'https://notp.synology.me/2020HitFM/002. 刻在我心底的名字.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "林俊傑 - 交換餘生",
        url: 'https://notp.synology.me/2020HitFM/003. 交換餘生.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "JJ Lin林俊傑,Steve Aoki - Not Tonight (Tomorrow Sounds Good Steve Aoki Remix)",
        url: 'https://notp.synology.me/2020HitFM/004. Not Tonight (Tomorrow Sounds Good Steve Aoki Remix).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "LiSA - 炎",
        url: 'https://notp.synology.me/2020HitFM/005. 炎.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "蕭敬騰 - 猴籠",
        url: 'https://notp.synology.me/2020HitFM/006. 猴籠.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Bii 畢書盡 - 撞",
        url: 'https://notp.synology.me/2020HitFM/007. 撞.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "田馥甄 Hebe - 懸日",
        url: 'https://notp.synology.me/2020HitFM/008. 懸日.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "BTS 防彈少年團 - Dynamite",
        url: 'https://notp.synology.me/2020HitFM/009. Dynamite.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "炎亞綸 - 摩登原始人",
        url: 'https://notp.synology.me/2020HitFM/010. 摩登原始人.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "蕭敬騰 - 薩哈星球",
        url: 'https://notp.synology.me/2020HitFM/011. 薩哈星球.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "BTS 防彈少年團 - ON",
        url: 'https://notp.synology.me/2020HitFM/012. ON.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "吳青峰 - 最難的是相遇",
        url: 'https://notp.synology.me/2020HitFM/013. 最難的是相遇.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "田馥甄 Hebe - 皆可",
        url: 'https://notp.synology.me/2020HitFM/014. 皆可.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "林俊傑 - 倖存者",
        url: 'https://notp.synology.me/2020HitFM/015. 倖存者.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "BoA 寶兒 - Better",
        url: 'https://notp.synology.me/2020HitFM/016. Better.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "五月天 - 因為你 所以我",
        url: 'https://notp.synology.me/2020HitFM/017. 因為你 所以我.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Justin Bieber - Yummy",
        url: 'https://notp.synology.me/2020HitFM/018. Yummy.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "林俊傑 - 暫時的記號",
        url: 'https://notp.synology.me/2020HitFM/019. 暫時的記號.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "太妍 - HAPPY",
        url: 'https://notp.synology.me/2020HitFM/020. Happy.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "吳青峰 - 柔軟",
        url: 'https://notp.synology.me/2020HitFM/021. 柔軟.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Taylor Swift - Cardigan",
        url: 'https://notp.synology.me/2020HitFM/022. Cardigan.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Bii 畢書盡 - 你",
        url: 'https://notp.synology.me/2020HitFM/023. 你.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "周興哲 - 小時候的我們",
        url: 'https://notp.synology.me/2020HitFM/024. 小時候的我們.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "BTS 防彈少年團 - Life Goes On",
        url: 'https://notp.synology.me/2020HitFM/025. Life Goes On.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "韋禮安 - 不用告訴我",
        url: 'https://notp.synology.me/2020HitFM/026. 不用告訴我.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Ariana Grande - Positions",
        url: 'https://notp.synology.me/2020HitFM/027. Positions.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "蕭敬騰, 林俊傑 - Hello",
        url: 'https://notp.synology.me/2020HitFM/028. Hello.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "SUPER JUNIOR - The Melody",
        url: 'https://notp.synology.me/2020HitFM/029. The Melody.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "ELLA陳嘉樺 - A CA ELLA",
        url: 'https://notp.synology.me/2020HitFM/030. A CA ELLA.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "炎亞綸 feat. JULIA 吳卓源 - 不安室的奈美惠",
        url: 'https://notp.synology.me/2020HitFM/031. 不安室的奈美惠.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Taylor Swift - Willow",
        url: 'https://notp.synology.me/2020HitFM/032. Willow.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "林俊傑 - 修煉愛情  (Jazz Version)",
        url: 'https://notp.synology.me/2020HitFM/033. 修煉愛情  (Jazz Version).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "IU - Give You My Heart",
        url: 'https://notp.synology.me/2020HitFM/034. Give You My Heart.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "八三夭 - 想見你想見你想見你",
        url: 'https://notp.synology.me/2020HitFM/035. 想見你想見你想見你.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Justin Bieber & Benny Blanco - Lonely",
        url: 'https://notp.synology.me/2020HitFM/036. Lonely.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "周興哲 - 我很快樂",
        url: 'https://notp.synology.me/2020HitFM/037. 我很快樂.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "韋禮安 - 貓咪共和國",
        url: 'https://notp.synology.me/2020HitFM/038. 貓咪共和國.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Ed Sheeran - Afterglow",
        url: 'https://notp.synology.me/2020HitFM/039. Afterglow.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "婁峻碩 - Colorful",
        url: 'https://notp.synology.me/2020HitFM/040. Colorful.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "TWICE - More & More",
        url: 'https://notp.synology.me/2020HitFM/041. More & More.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "楊丞琳 - 像是一顆星星",
        url: 'https://notp.synology.me/2020HitFM/042. 像是一顆星星.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "APINK - 에이핑크 덤더럼(Dumhdurum)",
        url: 'https://notp.synology.me/2020HitFM/043. 에이핑크 덤더럼(Dumhdurum).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "ELLA 陳嘉樺 - 娛樂無限公司",
        url: 'https://notp.synology.me/2020HitFM/044. 娛樂無限公司.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "吳青峰 - 一點點",
        url: 'https://notp.synology.me/2020HitFM/045. 一點點.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "ITZY - Wannabe",
        url: 'https://notp.synology.me/2020HitFM/046. Wannabe.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Billie Eilish - No Time To Die",
        url: 'https://notp.synology.me/2020HitFM/047. No Time To Die.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "SELINA 任家萱 - 四季",
        url: 'https://notp.synology.me/2020HitFM/048. 四季.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "太妍 - What Do I Call You",
        url: 'https://notp.synology.me/2020HitFM/049. What Do I Call You.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "李友廷 - 誰",
        url: 'https://notp.synology.me/2020HitFM/050. 誰.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "米津玄師 - 感電",
        url: 'https://notp.synology.me/2020HitFM/051. 感電.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "周杰倫 - Mojito",
        url: 'https://notp.synology.me/2020HitFM/052. Mojito.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Lady Gaga, Ariana Grande - Rain On Me",
        url: 'https://notp.synology.me/2020HitFM/053. Rain On Me.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "韋禮安 - 這樣好嗎",
        url: 'https://notp.synology.me/2020HitFM/054. 這樣好嗎.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "AIMYON 愛繆 - 朝陽",
        url: 'https://notp.synology.me/2020HitFM/055. 朝陽.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "魚丁糸 - 沙發裡有沙發 Radio",
        url: 'https://notp.synology.me/2020HitFM/056. 沙發裡有沙發 Radio.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "W0LF(S) 五堅情 - All Day",
        url: 'https://notp.synology.me/2020HitFM/057. All Day.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "BTS 防彈少年團 - Black Swan",
        url: 'https://notp.synology.me/2020HitFM/058. Black Swan.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "楊丞琳 王心凌 - 女孩們",
        url: 'https://notp.synology.me/2020HitFM/059. 女孩們.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Dua Lipa - Physical",
        url: 'https://notp.synology.me/2020HitFM/060. Physical.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "徐若瑄 - 別人的",
        url: 'https://notp.synology.me/2020HitFM/061. 別人的.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "ARASHI 嵐 - 風箏 カイト",
        url: 'https://notp.synology.me/2020HitFM/062. 風箏 カイト.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "告五人 - 運氣來得若有似無",
        url: 'https://notp.synology.me/2020HitFM/063. 運氣來得若有似無.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "宇多田 ヒカル - Time",
        url: 'https://notp.synology.me/2020HitFM/064. Time.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "A-LIN - 抱歉，我不抱歉",
        url: 'https://notp.synology.me/2020HitFM/065. 抱歉，我不抱歉.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "蘇慧倫 - 真面目",
        url: 'https://notp.synology.me/2020HitFM/066. 真面目.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Ava Max - OMG What's Happening",
        url: 'https://notp.synology.me/2020HitFM/067. OMG Whats Happening.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "蘇打綠 - Tomorrow will be fine.",
        url: 'https://notp.synology.me/2020HitFM/068. Tomorrow will be fine..mp3',
        cover: '/cover.jpg'
      },
      {
        name: "IZ*ONE - Fiesta",
        url: 'https://notp.synology.me/2020HitFM/069. Fiesta.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "周興哲 - 受夠",
        url: 'https://notp.synology.me/2020HitFM/070. 受夠.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "NCT 2020 - Resonance",
        url: 'https://notp.synology.me/2020HitFM/071. Resonance.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "瘦子E.SO - Change",
        url: 'https://notp.synology.me/2020HitFM/072. Change.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Sam Smith - Diamonds",
        url: 'https://notp.synology.me/2020HitFM/073. Diamonds.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "W0LF四堅情 - 速食愛情",
        url: 'https://notp.synology.me/2020HitFM/074. 速食愛情.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "KING & PRINCE - Mazy Nighto",
        url: 'https://notp.synology.me/2020HitFM/075. Mazy Nighto.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "TANK - 你的情歌",
        url: 'https://notp.synology.me/2020HitFM/076. 你的情歌.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Cardi B feat. Megan Thee Stallion - Wap",
        url: 'https://notp.synology.me/2020HitFM/077. Wap.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "王心凌 - MY! CYNDI!",
        url: 'https://notp.synology.me/2020HitFM/078. MY! CYNDI!.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "GJ蔣卓嘉 - 遠距離",
        url: 'https://notp.synology.me/2020HitFM/079. 遠距離.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "TWICE - I Can't Stop Me",
        url: 'https://notp.synology.me/2020HitFM/080. I Can_t Stop Me.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "JULIA吳卓源 feat. 婁峻碩 - 七十億分之一加一",
        url: 'https://notp.synology.me/2020HitFM/081. 七十億分之一加一.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "許光漢 - 別再想見我",
        url: 'https://notp.synology.me/2020HitFM/082. 別再想見我.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "閻奕格 feat. 高爾宣OSN - 愛上現在的我",
        url: 'https://notp.synology.me/2020HitFM/083. 愛上現在的我.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Jawsh 685, Jason Derulo, BTS防彈少年團 - Savage Love(Laxed - Siren Beat) [BTS Remix]",
        url: 'https://notp.synology.me/2020HitFM/084. Savage Love(Laxed - Siren Beat) [BTS Remix].mp3',
        cover: '/cover.jpg'
      },
      {
        name: "(G)I-DLE - 덤디덤디 (DUMDi DUMDi)",
        url: 'https://notp.synology.me/2020HitFM/085. 덤디덤디 (DUMDi DUMDi).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "文慧如 ft. 邱鋒澤 - Messed Up",
        url: 'https://notp.synology.me/2020HitFM/086. Messed Up.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "BAEKHYUN - Candy",
        url: 'https://notp.synology.me/2020HitFM/087. Candy.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "ARIEL 蔡佩軒 - 回不去的海",
        url: 'https://notp.synology.me/2020HitFM/088. 回不去的海.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Charlie Puth - Girlfriend",
        url: 'https://notp.synology.me/2020HitFM/089. Girlfriend.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "黃偉晉 - 背光旅行",
        url: 'https://notp.synology.me/2020HitFM/090. 背光旅行.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "GOT7 - Not By The Moon",
        url: 'https://notp.synology.me/2020HitFM/091. Not By The Moon.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "光良 - 反方向",
        url: 'https://notp.synology.me/2020HitFM/092. 反方向.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "麋先生 - 嗜愛動物",
        url: 'https://notp.synology.me/2020HitFM/093. 嗜愛動物.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Doja Cat feat. Nicki Minaj - Say So",
        url: 'https://notp.synology.me/2020HitFM/094. Say So.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "劉以豪 - U",
        url: 'https://notp.synology.me/2020HitFM/095. U.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "The Weeknd - In Your Eyes",
        url: 'https://notp.synology.me/2020HitFM/096. In Your Eyes.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "GAHO - 開始 Beginning",
        url: 'https://notp.synology.me/2020HitFM/097. 開始 Beginning.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "安溥 - 外婆橋",
        url: 'https://notp.synology.me/2020HitFM/098. 外婆橋.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "孫盛希 - 還不夠",
        url: 'https://notp.synology.me/2020HitFM/099. 還不夠.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "MARZ23 - 那種人",
        url: 'https://notp.synology.me/2020HitFM/100. 那種人.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "畢書盡 - 我比從前想你了",
        url: 'https://notp.synology.me/2019HitFM/001. 畢書盡 - 我比從前想你了.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "周杰倫 - 說好不哭(With 五月天阿信)",
        url: 'https://notp.synology.me/2019HitFM/002. 周杰倫 - 說好不哭(With 五月天阿信).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "SuperJunior - Super Clap",
        url: 'https://notp.synology.me/2019HitFM/003. SuperJunior - Super Clap.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "林俊傑 - 對的時間點",
        url: 'https://notp.synology.me/2019HitFM/004. 林俊傑 - 對的時間點.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Shawn Mendes _ Camila Cabello - Señorita",
        url: 'https://notp.synology.me/2019HitFM/005. Shawn Mendes _ Camila Cabello - Señorita.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "獅子LION - 美麗醜與我",
        url: 'https://notp.synology.me/2019HitFM/006. 獅子LION - 美麗醜與我.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "SuperJunior - I Think I",
        url: 'https://notp.synology.me/2019HitFM/007. SuperJunior - I Think I.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "吳青峰 - 太空人",
        url: 'https://notp.synology.me/2019HitFM/008. 吳青峰 - 太空人.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "鄧紫棋 - 句號",
        url: 'https://notp.synology.me/2019HitFM/009. 鄧紫棋 - 句號.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "AURORA - Into the Unknown",
        url: 'https://notp.synology.me/2019HitFM/010. AURORA - Into the Unknown.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "楊丞琳 - 刪拾",
        url: 'https://notp.synology.me/2019HitFM/011. 楊丞琳 - 刪拾.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "林宥嘉 - 別讓我走遠",
        url: 'https://notp.synology.me/2019HitFM/012. 林宥嘉 - 別讓我走遠.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "S-J D_E - Danger",
        url: 'https://notp.synology.me/2019HitFM/013. S-J D_E - Danger.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "畢書盡 - Better Fly",
        url: 'https://notp.synology.me/2019HitFM/014. 畢書盡 - Better Fly.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "魏如萱 - 彼個所在",
        url: 'https://notp.synology.me/2019HitFM/015. 魏如萱 - 彼個所在.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "BTS - Boy With Luv",
        url: 'https://notp.synology.me/2019HitFM/016. BTS - Boy With Luv.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "周興哲 - 怎麼了",
        url: 'https://notp.synology.me/2019HitFM/017. 周興哲 - 怎麼了.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Billie Eilish - bad guy",
        url: 'https://notp.synology.me/2019HitFM/018. Billie Eilish - bad guy.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "If You Catch Me When I Fall",
        url: 'https://notp.synology.me/2019HitFM/019. If You Catch Me When I Fall.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "獅子LION - 蕭志達",
        url: 'https://notp.synology.me/2019HitFM/020. 獅子LION - 蕭志達.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "梁靜茹 - 慢冷",
        url: 'https://notp.synology.me/2019HitFM/021. 梁靜茹 - 慢冷.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "EXO - Obsession",
        url: 'https://notp.synology.me/2019HitFM/022. EXO - Obsession.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "五月天阿信 - 一半人生",
        url: 'https://notp.synology.me/2019HitFM/023. 五月天阿信 - 一半人生.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "郁可唯 - 路過人間",
        url: 'https://notp.synology.me/2019HitFM/024. 郁可唯 - 路過人間.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Taylor Swift - Lover",
        url: 'https://notp.synology.me/2019HitFM/025. Taylor Swift - Lover.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "楊丞琳 - 節日快樂",
        url: 'https://notp.synology.me/2019HitFM/026. 楊丞琳 - 節日快樂.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "魏如萱 - Ophelia",
        url: 'https://notp.synology.me/2019HitFM/027. 魏如萱 - Ophelia.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "ARASHI嵐 - 5x20",
        url: 'https://notp.synology.me/2019HitFM/028. ARASHI嵐 - 5x20.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "曾沛慈 - 謎之音",
        url: 'https://notp.synology.me/2019HitFM/029. 曾沛慈 - 謎之音.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "吳青峰 - 歌頌者",
        url: 'https://notp.synology.me/2019HitFM/030. 吳青峰 - 歌頌者.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "BTS - A Brand New Day",
        url: 'https://notp.synology.me/2019HitFM/031. BTS - A Brand New Day.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "畢書盡 - Be The One",
        url: 'https://notp.synology.me/2019HitFM/032. 畢書盡 - Be The One.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Naomi Scott - Speechless",
        url: 'https://notp.synology.me/2019HitFM/033. Naomi Scott - Speechless.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "鄧紫棋 - 摩天動物園",
        url: 'https://notp.synology.me/2019HitFM/034. 鄧紫棋 - 摩天動物園.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "BAEKHYUN - UN Village",
        url: 'https://notp.synology.me/2019HitFM/035. BAEKHYUN - UN Village.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "盧廣仲 - 愛情怎麼了嗎",
        url: 'https://notp.synology.me/2019HitFM/036. 盧廣仲 - 愛情怎麼了嗎.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "林宥嘉 - 少女",
        url: 'https://notp.synology.me/2019HitFM/037. 林宥嘉 - 少女.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "黃明志 - 流浪狗",
        url: 'https://notp.synology.me/2019HitFM/038. 黃明志 - 流浪狗.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "太妍 - Spark",
        url: 'https://notp.synology.me/2019HitFM/039. 太妍 - Spark.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "馬念先_9m88 - 你朝我的方向走來",
        url: 'https://notp.synology.me/2019HitFM/040. 馬念先_9m88 - 你朝我的方向走來.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Ed Sheeran - I Don_t Care",
        url: 'https://notp.synology.me/2019HitFM/041. Ed Sheeran - I Don_t Care.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "楊丞琳 - Love Is Love",
        url: 'https://notp.synology.me/2019HitFM/042. 楊丞琳 - Love Is Love.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "梁靜茹 - 我好嗎",
        url: 'https://notp.synology.me/2019HitFM/043. 梁靜茹 - 我好嗎.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "BoA - Starry Night",
        url: 'https://notp.synology.me/2019HitFM/044. BoA - Starry Night.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "周湯豪 - I GO",
        url: 'https://notp.synology.me/2019HitFM/045. 周湯豪 - I GO.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "周興哲 - 終於了解自由",
        url: 'https://notp.synology.me/2019HitFM/046. 周興哲 - 終於了解自由.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "吳青峰 - 太空",
        url: 'https://notp.synology.me/2019HitFM/047. 吳青峰 - 太空.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "AB6IX - BREATHE",
        url: 'https://notp.synology.me/2019HitFM/048. AB6IX - BREATHE.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "高爾宣 - Without You",
        url: 'https://notp.synology.me/2019HitFM/049. 高爾宣 - Without You.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "鼓鼓 - 跪了",
        url: 'https://notp.synology.me/2019HitFM/050. 鼓鼓 - 跪了.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Maroon 5 - Memories",
        url: 'https://notp.synology.me/2019HitFM/051. Maroon 5 - Memories.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "伍佰 - 讓水倒流",
        url: 'https://notp.synology.me/2019HitFM/052. 伍佰 - 讓水倒流.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "圭賢 - The day we meet again",
        url: 'https://notp.synology.me/2019HitFM/053. 圭賢 - The day we meet again.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "丁噹 - 我們不像我們",
        url: 'https://notp.synology.me/2019HitFM/054. 丁噹 - 我們不像我們.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "KANG DANIEL - What are you up to",
        url: 'https://notp.synology.me/2019HitFM/055. KANG DANIEL - What are you up to.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "陳零九 - 天黑請閉眼",
        url: 'https://notp.synology.me/2019HitFM/056. 陳零九 - 天黑請閉眼.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "蕭亞軒 - 當你和心跳一起出現",
        url: 'https://notp.synology.me/2019HitFM/057. 蕭亞軒 - 當你和心跳一起出現.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "藝聲 - Pink Magic",
        url: 'https://notp.synology.me/2019HitFM/058. 藝聲 - Pink Magic.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "頑童MJ116 - 騙吃騙吃",
        url: 'https://notp.synology.me/2019HitFM/059. 頑童MJ116 - 騙吃騙吃.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Ariana Grande - Boyfriend",
        url: 'https://notp.synology.me/2019HitFM/060. Ariana Grande - Boyfriend.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "GOT7 - You Calling My Name",
        url: 'https://notp.synology.me/2019HitFM/061. GOT7 - You Calling My Name.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Julia Wu - Things Things Things",
        url: 'https://notp.synology.me/2019HitFM/062. Julia Wu - Things Things Things.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "CHEN - Make it count",
        url: 'https://notp.synology.me/2019HitFM/063. CHEN - Make it count.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "曾沛慈 - 怎麼能這樣",
        url: 'https://notp.synology.me/2019HitFM/064. 曾沛慈 - 怎麼能這樣.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "吳青峰 - 巴別塔慶典",
        url: 'https://notp.synology.me/2019HitFM/065. 吳青峰 - 巴別塔慶典.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "IZ＊ONE - Violeta",
        url: 'https://notp.synology.me/2019HitFM/066. IZ＊ONE - Violeta.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "茄子蛋 - 這款自作多情",
        url: 'https://notp.synology.me/2019HitFM/067. 茄子蛋 - 這款自作多情.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Alan Walker - On My Way",
        url: 'https://notp.synology.me/2019HitFM/068. Alan Walker - On My Way.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "白安 - 所愛之初",
        url: 'https://notp.synology.me/2019HitFM/069. 白安 - 所愛之初.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "告五人 - 愛人錯過",
        url: 'https://notp.synology.me/2019HitFM/070. 告五人 - 愛人錯過.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Red Velvet - Psycho",
        url: 'https://notp.synology.me/2019HitFM/071. Red Velvet - Psycho.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "家家 - 沒有錯",
        url: 'https://notp.synology.me/2019HitFM/072. 家家 - 沒有錯.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "米津玄師 - 馬と鹿",
        url: 'https://notp.synology.me/2019HitFM/073. 米津玄師 - 馬と鹿.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "蕭煌奇 - 候鳥",
        url: 'https://notp.synology.me/2019HitFM/074. 蕭煌奇 - 候鳥.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Ed Sheeran - Beatiful People",
        url: 'https://notp.synology.me/2019HitFM/075. Ed Sheeran - Beatiful People.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "八三夭 - 蠢蛋",
        url: 'https://notp.synology.me/2019HitFM/076. 八三夭 - 蠢蛋.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "J.Sheon - 輸情歌",
        url: 'https://notp.synology.me/2019HitFM/077. 輸情歌.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "玖壹壹 - 來個蹦蹦",
        url: 'https://notp.synology.me/2019HitFM/078. 玖壹壹 - 來個蹦蹦.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "近畿小子 - 光之跡象",
        url: 'https://notp.synology.me/2019HitFM/079. 光之跡象.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "家家 - 我想要的快樂",
        url: 'https://notp.synology.me/2019HitFM/080. 家家 - 我想要的快樂.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Ava Max - So Am I",
        url: 'https://notp.synology.me/2019HitFM/081. Ava Max - So Am I.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "許書豪 - 別再叫我哥",
        url: 'https://notp.synology.me/2019HitFM/082. 許書豪 - 別再叫我哥.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "鼓鼓 - 超機車",
        url: 'https://notp.synology.me/2019HitFM/083. 鼓鼓 - 超機車.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "羅志祥 - 羅志祥",
        url: 'https://notp.synology.me/2019HitFM/084. 羅志祥 - 羅志祥.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "ITZY - DALLA DALLA",
        url: 'https://notp.synology.me/2019HitFM/085. ITZY - DALLA DALLA.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "李友廷 - 直到我遇見了你",
        url: 'https://notp.synology.me/2019HitFM/086. 李友廷 - 直到我遇見了你.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "熱狗 - 怨偶",
        url: 'https://notp.synology.me/2019HitFM/087. 熱狗 - 怨偶.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "潤娥 - 仲夏夜",
        url: 'https://notp.synology.me/2019HitFM/088. 潤娥 - 仲夏夜.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "蔡旻佑 - 變心記",
        url: 'https://notp.synology.me/2019HitFM/089. 蔡旻佑 - 變心記.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Harry Styles - Lights Up",
        url: 'https://notp.synology.me/2019HitFM/090. Harry Styles - Lights Up.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "(G)I-DLE - Help Me",
        url: 'https://notp.synology.me/2019HitFM/091. (G)I-DLE - Help Me.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "C.T.O - Start It",
        url: 'https://notp.synology.me/2019HitFM/092. C.T.O - Start It.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "傻子與白痴 - 夜長夢少",
        url: 'https://notp.synology.me/2019HitFM/093. 傻子與白痴 - 夜長夢少.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Lil Nas X - Old Town Road(Remix)",
        url: 'https://notp.synology.me/2019HitFM/094. Lil Nas X - Old Town Road(Remix).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "孫燕姿 - 守護永恆的愛",
        url: 'https://notp.synology.me/2019HitFM/095. 孫燕姿 - 守護永恆的愛.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Ariana Grande - 7 rings",
        url: 'https://notp.synology.me/2019HitFM/096. Ariana Grande - 7 rings.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "椎名林檎 - 浪漫和算盤",
        url: 'https://notp.synology.me/2019HitFM/097. 椎名林檎 - 浪漫和算盤.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "楊乃文 - 路痴",
        url: 'https://notp.synology.me/2019HitFM/098. 楊乃文 - 路痴.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "TRASH - 重感情的廢物",
        url: 'https://notp.synology.me/2019HitFM/099. TRASH - 重感情的廢物.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Post Malone - Circles",
        url: 'https://notp.synology.me/2019HitFM/100. Post Malone - Circles.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "蔡依林 - 怪美的",
        url: 'https://notp.synology.me/2018HitFM/001. 怪美的 - 蔡依林.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "田馥甄 - 愛了很久的朋友",
        url: 'https://notp.synology.me/2018HitFM/002. 愛了很久的朋友 - 田馥甄.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "蕭敬騰 - 讓我為你唱情歌",
        url: 'https://notp.synology.me/2018HitFM/003. 讓我為你唱情歌 - 蕭敬騰.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Lady Gaga&Bradley Cooper - Shallow",
        url: 'https://notp.synology.me/2018HitFM/004. Shallow - Lady Gaga&Bradley Cooper.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "S.H.E. - 十七",
        url: 'https://notp.synology.me/2018HitFM/005. 十七 - S.H.E.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "米津玄師 - LEMON",
        url: 'https://notp.synology.me/2018HitFM/006. LEMON - 米津玄師.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Bii畢書盡 - 聊傷",
        url: 'https://notp.synology.me/2018HitFM/007. 聊傷 - Bii畢書盡.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "潘瑋柏 feat. TIA袁婭維 - MOONLIGHT",
        url: 'https://notp.synology.me/2018HitFM/008. MOONLIGHT - 潘瑋柏 feat. TIA袁婭維.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Ariana Grande - thank u, next",
        url: 'https://notp.synology.me/2018HitFM/009. thank u, next - Ariana Grande.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "李榮浩 - 年少有為",
        url: 'https://notp.synology.me/2018HitFM/010. 年少有為 - 李榮浩.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "五月天 - 什麼歌",
        url: 'https://notp.synology.me/2018HitFM/011. 什麼歌 - 五月天.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "周杰倫 - 不愛我就拉倒",
        url: 'https://notp.synology.me/2018HitFM/012. 不愛我就拉倒 - 周杰倫.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "BTS - FAKE LOVE",
        url: 'https://notp.synology.me/2018HitFM/013. FAKE LOVE - BTS.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "田馥甄 - 自己的房間",
        url: 'https://notp.synology.me/2018HitFM/014. 自己的房間 - 田馥甄.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "王心凌 - 在青春迷失的咖啡馆",
        url: 'https://notp.synology.me/2018HitFM/015. 在青春迷失的咖啡馆 - 王心凌.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "蕭敬騰 - 皮囊",
        url: 'https://notp.synology.me/2018HitFM/016. 皮囊 - 蕭敬騰.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "BIGBANG - FLOWER ROAD (꽃 길)",
        url: 'https://notp.synology.me/2018HitFM/017. FLOWER ROAD (꽃 길) - BIGBANG.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "G.E.M.鄧紫棋 - 倒數",
        url: 'https://notp.synology.me/2018HitFM/018. 倒數 - G.E.M.鄧紫棋.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Maroon 5 - Girls Like You (ft. Cardi B)",
        url: 'https://notp.synology.me/2018HitFM/019. Girls Like You (ft. Cardi B) - Maroon 5.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "盧廣仲 - 幾分之幾",
        url: 'https://notp.synology.me/2018HitFM/020. 幾分之幾 - 盧廣仲.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "BoA - ONE SHOT, TWO SHOT",
        url: 'https://notp.synology.me/2018HitFM/021. ONE SHOT, TWO SHOT - BoA.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "炎亞綸 - 親愛的怪物",
        url: 'https://notp.synology.me/2018HitFM/022. 親愛的怪物 - 炎亞綸.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Bruno Mars feat. Cardi B - Finesse (Remix)",
        url: 'https://notp.synology.me/2018HitFM/023. Finesse (Remix) -  Bruno Mars  feat. Cardi B.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "蕭敬騰 - 全是愛",
        url: 'https://notp.synology.me/2018HitFM/024. 全是愛 - 蕭敬騰.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Super Junior ft. Leslie Grace - Lo Siento",
        url: 'https://notp.synology.me/2018HitFM/025. Lo Siento (Ft. Leslie Grace ) -  Super Junior.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "王心凌 - 大眠",
        url: 'https://notp.synology.me/2018HitFM/026. 大眠 - 王心凌.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "鐘鉉(종현) - 我們的春天來臨前(Before Our Spring)",
        url: 'https://notp.synology.me/2018HitFM/027. 我們的春天來臨前(Before Our Spring) - 鐘鉉(종현).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Bii畢書盡 - 從來不知道",
        url: 'https://notp.synology.me/2018HitFM/028. 從來不知道 - Bii畢書盡.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "蕭秉治 - 愛過你多久就有多痛",
        url: 'https://notp.synology.me/2018HitFM/029. 愛過你多久就有多痛 - 蕭秉治.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "BoA寶兒 - 瘋掉(NEGA DOLA)",
        url: 'https://notp.synology.me/2018HitFM/030. 瘋掉(NEGA DOLA) - BoA寶兒.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "楊丞琳 - 忘課",
        url: 'https://notp.synology.me/2018HitFM/031. 忘課 - 楊丞琳.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Charlie Puth - The Way I Am",
        url: 'https://notp.synology.me/2018HitFM/032. The Way I Am - Charlie Puth.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "吴青峰&9m88 - Everybody Woohoo",
        url: 'https://notp.synology.me/2018HitFM/033. Everybody Woohoo - 吴青峰&9m88.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "BLACKPINK - DDU-DU DDU-DU",
        url: 'https://notp.synology.me/2018HitFM/034. DDU-DU DDU-DU - BLACKPINK.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "炎亞綸 - 最想去的地方",
        url: 'https://notp.synology.me/2018HitFM/035. 最想去的地方 - 炎亞綸.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "朱俐静 - 我懂你的獨特",
        url: 'https://notp.synology.me/2018HitFM/036. 我懂你的獨特 - 朱俐静.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "BTS - Let Go",
        url: 'https://notp.synology.me/2018HitFM/037. Let Go - BTS.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "王心凌 - 劈你的雷正在路上",
        url: 'https://notp.synology.me/2018HitFM/038. 劈你的雷正在路上 - 王心凌.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "白安 - 讓我逃離平庸的生活",
        url: 'https://notp.synology.me/2018HitFM/039. 讓我逃離平庸的生活 - 白安.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Jason Mraz - Have It All",
        url: 'https://notp.synology.me/2018HitFM/040. Have It All - Jason Mraz.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "八三夭 - 一事無成的偉大",
        url: 'https://notp.synology.me/2018HitFM/041. 一事無成的偉大 - 八三夭.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "SUPER JUNIOR feat. Reik - One More Time (Otra Vez)",
        url: 'https://notp.synology.me/2018HitFM/042. One More Time (Otra Vez) (Feat. Reik) - SUPER JUNIOR.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "蔡健雅 - 我要給世界最悠長的濕吻",
        url: 'https://notp.synology.me/2018HitFM/043. 我要給世界最悠長的濕吻 - 蔡健雅.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "陳綺貞 - 殘缺的彩虹",
        url: 'https://notp.synology.me/2018HitFM/044. 殘缺的彩虹 - 陳綺貞.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "SUPER JUNIOR-D&E - 'Bout you",
        url: "https://notp.synology.me/2018HitFM/045. 'Bout you - SUPER JUNIOR-D&E.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "陳奕迅 & the duo band - 漸漸",
        url: 'https://notp.synology.me/2018HitFM/046. 漸漸 - 陳奕迅 & the duo band.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "炎亞綸 - 沉睡的巨人",
        url: 'https://notp.synology.me/2018HitFM/047. 沉睡的巨人 - 炎亞綸.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Shawn Mendes - In My Blood",
        url: 'https://notp.synology.me/2018HitFM/048. In My Blood - Shawn Mendes.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "李千那 - 查某囡仔",
        url: 'https://notp.synology.me/2018HitFM/049. 查某囡仔 - 李千那.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "鐘鉉 (종현) - 閃光(Shinin’)",
        url: 'https://notp.synology.me/2018HitFM/050. 閃光(Shinin’) - 鐘鉉 (종현).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Ariana Grande - Breathin",
        url: 'https://notp.synology.me/2018HitFM/051. Breathin - Ariana Grande.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "周杰倫 & 楊瑞代 - 等你下課",
        url: 'https://notp.synology.me/2018HitFM/052. 等你下課 - 周杰倫 & 楊瑞代.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Apink - I'm so sick",
        url: "https://notp.synology.me/2018HitFM/053. I'm so sick - Apink.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "謝和弦 - 備胎",
        url: 'https://notp.synology.me/2018HitFM/054. 備胎 - 謝和弦.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Wanna One - BOOMERANG (부메랑)",
        url: 'https://notp.synology.me/2018HitFM/055. BOOMERANG (부메랑) - Wanna One.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "艾怡良 - Forever Young",
        url: 'https://notp.synology.me/2018HitFM/056. Forever Young - 艾怡良.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "B.C.W & 家家 - 東岸",
        url: 'https://notp.synology.me/2018HitFM/057. 東岸 - B.C.W & 家家.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "AKB48 - Teacher Teacher",
        url: 'https://notp.synology.me/2018HitFM/058. Teacher Teacher - AKB48.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "羅志祥 - No Joke",
        url: 'https://notp.synology.me/2018HitFM/059. No Joke - 羅志祥.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Erika - 天鵝說",
        url: 'https://notp.synology.me/2018HitFM/060. 天鵝說 - Erika.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Lady Gaga - Always Remember Us This Way",
        url: 'https://notp.synology.me/2018HitFM/061. Always Remember Us This Way - Lady Gaga.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "EXO - Tempo",
        url: 'https://notp.synology.me/2018HitFM/062. Tempo - EXO.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "莫文蔚 - 慢慢喜歡你",
        url: 'https://notp.synology.me/2018HitFM/063. 慢慢喜歡你 - 莫文蔚.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Mariah Carey - GTFO",
        url: 'https://notp.synology.me/2018HitFM/064. GTFO - Mariah Carey.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "IU - 夜信(Through the night)",
        url: 'https://notp.synology.me/2018HitFM/065. 夜信(Through the night) - IU.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "頑童MJ116 - 少年董",
        url: 'https://notp.synology.me/2018HitFM/066. 少年董  - 頑童MJ116.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Dua Lipa & BLACKPINK - Kiss and Make Up",
        url: 'https://notp.synology.me/2018HitFM/067. Kiss and Make Up - Dua Lipa & BLACKPINK.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "蕭煌奇 - 晚安",
        url: 'https://notp.synology.me/2018HitFM/068. 晚安 - 蕭煌奇.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "蕭秉治 - 我好想好想你",
        url: 'https://notp.synology.me/2018HitFM/069. 我好想好想你 - 蕭秉治.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "IU & G-Dragon - PALETTE",
        url: 'https://notp.synology.me/2018HitFM/070. PALETTE - IU & G-Dragon.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "陳奕迅 - 我們",
        url: 'https://notp.synology.me/2018HitFM/071. 我們 - 陳奕迅.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "C.T.O - Insomnia",
        url: 'https://notp.synology.me/2018HitFM/072. Insomnia - C.T.O.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "少女時代 OH!GG - Lil` Touch",
        url: 'https://notp.synology.me/2018HitFM/073. Lil` Touch - 少女時代 OH!GG.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Troye Sivan&Ariana Grande - Dance To This",
        url: 'https://notp.synology.me/2018HitFM/074. Dance To This - Troye Sivan&Ariana Grande.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "李佳薇 - 一樣的是",
        url: 'https://notp.synology.me/2018HitFM/075. 一樣的是 - 李佳薇.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "陳勢安 - 你不是我的",
        url: 'https://notp.synology.me/2018HitFM/076. 你不是我的 - 陳勢安.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "太研태연 - Something New",
        url: 'https://notp.synology.me/2018HitFM/077. Something New - 太研태연.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "梁文音 - 和平分手",
        url: 'https://notp.synology.me/2018HitFM/078. 和平分手 - 梁文音.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "宇多田光 - 初戀",
        url: 'https://notp.synology.me/2018HitFM/079. 初戀 - 宇多田光.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "許茹芸 - 花粉症",
        url: 'https://notp.synology.me/2018HitFM/080. 花粉症 - 許茹芸.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Andrea Bocelli & Dua Lipa - If Only",
        url: 'https://notp.synology.me/2018HitFM/081. If Only - Andrea Bocelli & Dua Lipa.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "EXO - Love Shot",
        url: 'https://notp.synology.me/2018HitFM/082. Love Shot - EXO.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "吳卓源Julia - 撥接",
        url: 'https://notp.synology.me/2018HitFM/083. 撥接 - 吳卓源Julia.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "嵐 - Find the Answer",
        url: 'https://notp.synology.me/2018HitFM/084. Find the Answer - 嵐.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "李玉璽 - 沒那麼脆弱",
        url: 'https://notp.synology.me/2018HitFM/085. 沒那麼脆弱 - 李玉璽.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Wanna One - I Promise You (I.P.U.)",
        url: 'https://notp.synology.me/2018HitFM/086. I Promise You (I.P.U.) - Wanna One.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "小球 莊鵑瑛 - 何必記念",
        url: 'https://notp.synology.me/2018HitFM/087. 何必記念 - 小球 莊鵑瑛.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "iKON - LOVE SCENARIO (사랑을 했다)",
        url: 'https://notp.synology.me/2018HitFM/088. LOVE SCENARIO (사랑을 했다) - iKON.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "ØZI & 9m88 - B.O.",
        url: 'https://notp.synology.me/2018HitFM/089. B.O. - ØZI & 9m88.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "李玖哲 - Secrets",
        url: 'https://notp.synology.me/2018HitFM/090. Secrets - 李玖哲.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "TWICE - Candy Pop",
        url: 'https://notp.synology.me/2018HitFM/091. Candy Pop - TWICE.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "李英宏 - 峇里島",
        url: 'https://notp.synology.me/2018HitFM/092. 峇里島 - 李英宏.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "李玉璽 - Sing With Me",
        url: 'https://notp.synology.me/2018HitFM/093. Sing With Me - 李玉璽.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "SHINee - 去接你(Good Evening)",
        url: 'https://notp.synology.me/2018HitFM/094. 去接你(Good Evening) - SHINee.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "異鄉人 & 9m88 - SWAG午覺",
        url: 'https://notp.synology.me/2018HitFM/095. SWAG午覺 - 異鄉人 & 9m88.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "王笠人 - 你是答案",
        url: 'https://notp.synology.me/2018HitFM/096. 你是答案 - 王笠人.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "WINNER - EVERYDAY",
        url: 'https://notp.synology.me/2018HitFM/097. EVERYDAY - WINNER.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "玖壹壹 & 羅志祥 - 我跟你卡好",
        url: 'https://notp.synology.me/2018HitFM/098. 我跟你卡好 - 玖壹壹 & 羅志祥.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Alessia Cara - Growing Pains",
        url: 'https://notp.synology.me/2018HitFM/099. Growing Pains - Alessia Cara.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Red Velvet - RBB(Really Bad Boy)",
        url: 'https://notp.synology.me/2018HitFM/100. RBB(Really Bad Boy) - Red Velvet.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "林俊傑 - 偉大的渺小",
        url: 'https://notp.synology.me/2017HitFM/01.偉大的渺小.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Bii畢書盡 - 我想你了",
        url: 'https://notp.synology.me/2017HitFM/02.我想你了.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "CRUSH - Beautiful(孤單又燦爛的神原聲)",
        url: 'https://notp.synology.me/2017HitFM/03.Beautiful(孤單又燦爛的神原聲).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "aMEI張惠妹 - 連名帶姓",
        url: 'https://notp.synology.me/2017HitFM/04.連名帶姓.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Ed Sheeran - Shape of You",
        url: 'https://notp.synology.me/2017HitFM/05.Shape of You.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "孫燕姿 - 風衣",
        url: 'https://notp.synology.me/2017HitFM/06.風衣.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "獅子合唱團 - 我們的愛",
        url: 'https://notp.synology.me/2017HitFM/07.我們的愛.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "鐘鉉 Feat. 太妍 - Lonely",
        url: 'https://notp.synology.me/2017HitFM/08.Lonely.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "潘瑋柏 - 啞巴",
        url: 'https://notp.synology.me/2017HitFM/09.啞巴.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "李榮浩 - 就這樣",
        url: 'https://notp.synology.me/2017HitFM/10.就這樣.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "盧廣仲 - 魚仔",
        url: 'https://notp.synology.me/2017HitFM/11.魚仔.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Taylor Swift - Look What You Made Me Do",
        url: 'https://notp.synology.me/2017HitFM/12.Look What You Made Me Do.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "楊丞琳 - 青春住了誰",
        url: 'https://notp.synology.me/2017HitFM/13.青春住了誰.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "BTS防彈少年團 - Not Today",
        url: 'https://notp.synology.me/2017HitFM/14.Not Today.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "林俊傑 - 黑夜問白天",
        url: 'https://notp.synology.me/2017HitFM/15.黑夜問白天.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "孫燕姿 - 我很愉快",
        url: 'https://notp.synology.me/2017HitFM/16.我很愉快.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Alessia Cara - How Far I'll Go(海洋奇緣原聲)",
        url: "https://notp.synology.me/2017HitFM/17.How Far I'll Go(海洋奇緣原聲).mp3",
        cover: '/cover.jpg'
      },
      {
        name: "aMEI張惠妹 - 偷故事的人",
        url: 'https://notp.synology.me/2017HitFM/18.偷故事的人.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "WANNA ONE - ENERGETIC",
        url: 'https://notp.synology.me/2017HitFM/19.ENERGETIC.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Luis Fonsi, Daddy Yankee ft. Justin Bieber - Despacito(Remix)",
        url: 'https://notp.synology.me/2017HitFM/20.Despacito(Remix).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "家家 - 家家酒",
        url: 'https://notp.synology.me/2017HitFM/21.家家酒.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Bii畢書盡 - Nothing At All",
        url: 'https://notp.synology.me/2017HitFM/22.Nothing At All.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "The Chainsmokers & Coldplay - Something Just Like This",
        url: 'https://notp.synology.me/2017HitFM/23.Something Just Like This.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "SUPER JUNIOR - Black Suit",
        url: 'https://notp.synology.me/2017HitFM/24.Black Suit.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "獅子合唱團 - 天亮以後說分手",
        url: 'https://notp.synology.me/2017HitFM/25.天亮以後說分手.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "朱俐靜 - 反對眼淚",
        url: 'https://notp.synology.me/2017HitFM/26.反對眼淚.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "徐佳瑩 - 言不由衷",
        url: 'https://notp.synology.me/2017HitFM/27.言不由衷.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "BIGBANG - Fxxk It",
        url: 'https://notp.synology.me/2017HitFM/28.Fxxk It.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "李千娜 - 不曾回來過",
        url: 'https://notp.synology.me/2017HitFM/29.不曾回來過.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "曾沛慈 - 你離開他了嗎",
        url: 'https://notp.synology.me/2017HitFM/30.你離開他了嗎.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Charlie Puth - Attention",
        url: 'https://notp.synology.me/2017HitFM/31.Attention.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "潘瑋柏 - Coming Home",
        url: 'https://notp.synology.me/2017HitFM/32.Coming Home.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "ERIC周興哲 - 如果雨之後",
        url: 'https://notp.synology.me/2017HitFM/33.如果雨之後.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "五月天+岡野昭仁 - Song for you",
        url: 'https://notp.synology.me/2017HitFM/34.Song for you.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "陳奕迅 - 誰來剪月光",
        url: 'https://notp.synology.me/2017HitFM/35.誰來剪月光.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "陳彥允 - 夢中情人",
        url: 'https://notp.synology.me/2017HitFM/36.夢中情人.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Ariana Grande & John Legend - Beauty and the Beast",
        url: 'https://notp.synology.me/2017HitFM/37.Beauty and the Beast.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "鼓鼓 - 為愛而愛",
        url: 'https://notp.synology.me/2017HitFM/38.為愛而愛.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "BTS防彈少年團 - DNA",
        url: 'https://notp.synology.me/2017HitFM/39.DNA.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "孫燕姿 - 跳舞的梵",
        url: 'https://notp.synology.me/2017HitFM/40.跳舞的梵谷.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "EXO CHANYEOL+PUNCH - Stay with me(孤單又燦爛的神原聲)",
        url: 'https://notp.synology.me/2017HitFM/41.Stay with me(孤單又燦爛的神原聲).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Bii畢書盡 - You’re Gone",
        url: 'https://notp.synology.me/2017HitFM/42.You’re Gone.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "aMEI張惠妹+瘦子E-SO - 你說了算",
        url: 'https://notp.synology.me/2017HitFM/43.你說了算.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Camila Cabello ft. Young Thug - Havana",
        url: 'https://notp.synology.me/2017HitFM/44.Havana.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "SUPER JUNIOR - One More Chance",
        url: 'https://notp.synology.me/2017HitFM/45.One More Chance.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "A-Lin - 未單身",
        url: 'https://notp.synology.me/2017HitFM/46.未單身.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "獅子合唱團 - 秘密",
        url: 'https://notp.synology.me/2017HitFM/47.秘密.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Alan Walker ft. Noah CyrusDigital - All Falls Down",
        url: 'https://notp.synology.me/2017HitFM/48.All Falls Down.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "頑童MJ116 - 幹大事",
        url: "https://notp.synology.me/2017HitFM/49.幹大事.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "鄭容和 ft. LOCO - 我的女神",
        url: 'https://notp.synology.me/2017HitFM/50.我的女神.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "宇宙人 - 現在就讓我走",
        url: 'https://notp.synology.me/2017HitFM/51.現在就讓我走.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "小宇-宋念宇 - 所謂的愛",
        url: 'https://notp.synology.me/2017HitFM/52.所謂的愛.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "BIGBANG - LAST DANCE",
        url: 'https://notp.synology.me/2017HitFM/53.LAST DANCE.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "李玖哲 - Will You Remember Me",
        url: 'https://notp.synology.me/2017HitFM/54.Will You Remember Me.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "李榮浩 - 戒菸",
        url: 'https://notp.synology.me/2017HitFM/55.戒菸.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "楊丞琳 - 一千零一個願望(單人版)",
        url: 'https://notp.synology.me/2017HitFM/56.一千零一個願望(單人版).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "WANNA ONE - Beautiful",
        url: 'https://notp.synology.me/2017HitFM/57.Beautiful.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "G-Eazy & Kehlani - Good Life(玩命關頭8原聲)",
        url: 'https://notp.synology.me/2017HitFM/58.Good Life(玩命關頭8原聲).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "潘瑋柏 - 第三類接觸",
        url: 'https://notp.synology.me/2017HitFM/59.第三類接觸.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "G-DRAGON - 無題(UNTITLED, 2014)",
        url: 'https://notp.synology.me/2017HitFM/60.無題(UNTITLED, 2014).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "八三夭+任賢齊+五月天阿信 - 乾啦 乾啦",
        url: 'https://notp.synology.me/2017HitFM/61.乾啦 乾啦.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "王力宏 - 親愛的",
        url: 'https://notp.synology.me/2017HitFM/62.親愛的.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "TWICE - One More Time",
        url: 'https://notp.synology.me/2017HitFM/63.One More Time.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "曾沛慈 - 偏愛",
        url: 'https://notp.synology.me/2017HitFM/64.偏愛.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Maroon 5 ft. SZA - What Lovers Do",
        url: 'https://notp.synology.me/2017HitFM/65.What Lovers Do.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "邱勝翊 - 上位",
        url: 'https://notp.synology.me/2017HitFM/66.上位.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "陳珊妮+魏如萱 - 不要不要",
        url: 'https://notp.synology.me/2017HitFM/67.不要不要.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "CNBLUE - Glory days",
        url: 'https://notp.synology.me/2017HitFM/68.Glory days.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "曾之喬 - 亮了",
        url: 'https://notp.synology.me/2017HitFM/69.亮了.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "郭靜 - 該忘的日子",
        url: 'https://notp.synology.me/2017HitFM/70.該忘的日子.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Ryan Gosling, Emma Stone - City of Stars(樂來越愛你原聲",
        url: 'https://notp.synology.me/2017HitFM/71.City of Stars(樂來越愛你原聲).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "J.SHEON - 別問很可怕",
        url: 'https://notp.synology.me/2017HitFM/72.別問很可怕.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "安那ANNA - Party Crasher",
        url: 'https://notp.synology.me/2017HitFM/73.Party Crasher.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "安室奈美惠 - Showtime",
        url: 'https://notp.synology.me/2017HitFM/74.Showtime.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "徐佳瑩 - 灰色",
        url: 'https://notp.synology.me/2017HitFM/75.灰色.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Ed Sheeran - Castle on the Hill",
        url: 'https://notp.synology.me/2017HitFM/76.Castle on the Hill.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "太妍 - Fine",
        url: 'https://notp.synology.me/2017HitFM/77.Fine.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "MISS KO葛仲珊 - 皇后區的皇后",
        url: 'https://notp.synology.me/2017HitFM/78.皇后區的皇后.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "彭佳慧 - 我想念我自己",
        url: 'https://notp.synology.me/2017HitFM/79.我想念我自己.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "EXO - Ko Ko Bop",
        url: 'https://notp.synology.me/2017HitFM/80.Ko Ko Bop.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "朱俐靜 feat. RPG - 其實沒聊什麼",
        url: "https://notp.synology.me/2017HitFM/81.其實沒聊什麼.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "田馥甄+井柏然 - 美女與野獸",
        url: 'https://notp.synology.me/2017HitFM/82.美女與野獸.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "阿達+LULU黃路梓茵 - 我說寶貝",
        url: 'https://notp.synology.me/2017HitFM/83.我說寶貝.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Clean Bandit feat. Zara Larsson - Symphony",
        url: 'https://notp.synology.me/2017HitFM/84.Symphony.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "EDDY KIM - 當夜晚來臨(同名原聲)",
        url: 'https://notp.synology.me/2017HitFM/85.當夜晚來臨(同名原聲).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "動力火車 - 跟自己合唱",
        url: 'https://notp.synology.me/2017HitFM/86.跟自己合唱.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "吳克群 - 孤獨是會上癮的",
        url: 'https://notp.synology.me/2017HitFM/87.孤獨是會上癮的.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Taylor Swift - ...Ready For It",
        url: 'https://notp.synology.me/2017HitFM/88. ...Ready For It.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "陳奕迅 - 披風",
        url: 'https://notp.synology.me/2017HitFM/89.披風.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "BTS防彈少年團 - SPRING DAY",
        url: 'https://notp.synology.me/2017HitFM/90.SPRING DAY.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "家家 - 還是想念",
        url: 'https://notp.synology.me/2017HitFM/91.還是想念.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "閻奕格 - 閻羅王",
        url: 'https://notp.synology.me/2017HitFM/92.閻羅王.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "少女時代 - Holiday",
        url: 'https://notp.synology.me/2017HitFM/93.Holiday.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "鼓鼓 - 可以唷",
        url: 'https://notp.synology.me/2017HitFM/94.可以唷.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "伍佰&CHINA BLUE - 釘子花",
        url: 'https://notp.synology.me/2017HitFM/95.釘子花.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "嵐 - Doors～勇氣的軌跡～",
        url: 'https://notp.synology.me/2017HitFM/96.Doors～勇氣的軌跡～.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "張信哲+張艾嘉 - 永恆的印記",
        url: 'https://notp.synology.me/2017HitFM/97.永恆的印記.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "小球(莊鵑瑛) - 星之所向",
        url: 'https://notp.synology.me/2017HitFM/98.星之所向.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Hardwell ft. Jolin Tsai - We Are One",
        url: 'https://notp.synology.me/2017HitFM/99.We Are One.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "玖壹壹 - 派對俠",
        url: 'https://notp.synology.me/2017HitFM/100.派對俠.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "林俊傑 - 不為誰而作的歌",
        url: 'https://notp.synology.me/2016HitFM/01.不為誰而作的歌.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "田馥甄 - 餘波盪漾",
        url: 'https://notp.synology.me/2016HitFM/02.餘波盪漾.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "五月天 - 後來的我們",
        url: 'https://notp.synology.me/2016HitFM/03.後來的我們.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "RADWIMPS - 前前前世(你的名子原聲)",
        url: 'https://notp.synology.me/2016HitFM/04.前前前世(你的名子原聲).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "周杰倫+ aMEI - 不該",
        url: 'https://notp.synology.me/2016HitFM/05.不該.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "獅子合唱團 - 最後的請求",
        url: 'https://notp.synology.me/2016HitFM/06.最後的請求.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "JUSTIN TIMBERLAKE - CAN'T STOP THE FEELING!",
        url: "https://notp.synology.me/2016HitFM/07. CAN'T STOP THE FEELING!.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "楊丞琳 - 年輪說",
        url: 'https://notp.synology.me/2016HitFM/08.年輪說.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "尹美萊 - ALWAYS(太陽的後裔原聲)",
        url: 'https://notp.synology.me/2016HitFM/09.ALWAYS(太陽的後裔原聲).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "李榮浩 - 滿座",
        url: 'https://notp.synology.me/2016HitFM/10.滿座.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "林宥嘉 - 天真有邪",
        url: 'https://notp.synology.me/2016HitFM/11.天真有邪.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "PIKO太郎 - PPAP(Pen-Pineapple-Apple-Pen)",
        url: 'https://notp.synology.me/2016HitFM/12.PPAP(Pen-Pineapple-Apple-Pen).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "林俊傑 - 關鍵詞",
        url: 'https://notp.synology.me/2016HitFM/13.關鍵詞.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "田馥甄 - 獨善其身",
        url: 'https://notp.synology.me/2016HitFM/14.獨善其身.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "太妍 - 11點11",
        url: "https://notp.synology.me/2016HitFM/15.11點11.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "BRUNO MARS - 24K Magic",
        url: 'https://notp.synology.me/2016HitFM/16.24K Magic.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Bii畢書盡 - 都是你害的",
        url: 'https://notp.synology.me/2016HitFM/17.都是你害的.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "林俊傑+信+MIKE - 有夢不難",
        url: 'https://notp.synology.me/2016HitFM/18.有夢不難.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "TWICE - Like OOH-AHH",
        url: 'https://notp.synology.me/2016HitFM/19.Like OOH-AHH.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "蕭敬騰 - 一次幸福的機會",
        url: 'https://notp.synology.me/2016HitFM/20.一次幸福的機會.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "CHARLIE PUTH+ SELENA GOMEZ - We Don't Talk Anymore",
        url: "https://notp.synology.me/2016HitFM/21.We Don't Talk Anymore.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "田馥甄 - 人間煙火",
        url: 'https://notp.synology.me/2016HitFM/22.人間煙火.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "EXO - Monster",
        url: "https://notp.synology.me/2016HitFM/23.Monster.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "ERIC周興哲 - 你,好不好",
        url: 'https://notp.synology.me/2016HitFM/24.你,好不好.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "ALESSO+JOLIN TSAI - I Wanna Know",
        url: 'https://notp.synology.me/2016HitFM/25.I Wanna Know.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "獅子合唱團 - LION",
        url: 'https://notp.synology.me/2016HitFM/26.LION.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "EXO CHEN+伯賢+XIUMIN - 為了你(너를 위해)",
        url: 'https://notp.synology.me/2016HitFM/27.為了你(너를 위해)_no.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "王心凌 - 遠在眼前的你",
        url: 'https://notp.synology.me/2016HitFM/28.遠在眼前的你.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "THE CHAINSMOKERS+HALSEY - Closer",
        url: 'https://notp.synology.me/2016HitFM/29.Closer.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "周湯豪 - 帥到分手",
        url: 'https://notp.synology.me/2016HitFM/30.帥到分手.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "GUMMY - You Are My Everything(太陽的後裔原聲)",
        url: "https://notp.synology.me/2016HitFM/31.You Are My Everything(太陽的後裔原聲).mp3",
        cover: '/cover.jpg'
      },
      {
        name: "韋禮安 - 第一個想到你",
        url: 'https://notp.synology.me/2016HitFM/32.第一個想到你.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "FIFTH HARMONY+TY DOLLA $IGN - Work from home",
        url: 'https://notp.synology.me/2016HitFM/33.Work from home.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "周杰倫 - 愛情廢柴",
        url: 'https://notp.synology.me/2016HitFM/34.愛情廢柴.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Bii畢書盡 - Catch Your Double Eye",
        url: 'https://notp.synology.me/2016HitFM/35.Catch Your Double Eye.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "BTS防彈少年團 - 血汗淚",
        url: 'https://notp.synology.me/2016HitFM/36.血汗淚.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "蕭敬騰 - 袖手旁觀",
        url: 'https://notp.synology.me/2016HitFM/37.袖手旁觀.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "MAJOR LAZER+JUSTIN BIEBER+ MØ - Cold Water",
        url: 'https://notp.synology.me/2016HitFM/38.Cold Water.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "ERIKA+小宇 - 當一個天使的憂愁",
        url: "https://notp.synology.me/2016HitFM/39.當一個天使的憂愁.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "五月天 - 派對動物",
        url: 'https://notp.synology.me/2016HitFM/40.派對動物.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "CHEN+ PUNCH - Everytime(太陽的後裔原聲)",
        url: 'https://notp.synology.me/2016HitFM/41.Everytime(太陽的後裔原聲).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "林宥嘉 - 一點點",
        url: 'https://notp.synology.me/2016HitFM/42. 一點點.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "COLDPLAY - Adventure of a Lifetime",
        url: 'https://notp.synology.me/2016HitFM/43.Adventure of a Lifetime.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "S.H.E - 永遠都在",
        url: 'https://notp.synology.me/2016HitFM/44.永遠都在.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "RADWIMPS - 什麼都沒有(你的名子原聲)",
        url: 'https://notp.synology.me/2016HitFM/45.什麼都沒有(你的名子原聲).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "王心凌 - 少女的祈禱",
        url: 'https://notp.synology.me/2016HitFM/46.少女的祈禱.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "CNBLUE - Glory Days",
        url: "https://notp.synology.me/2016HitFM/47.Glory Days.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "李玉璽 - 滿天星",
        url: 'https://notp.synology.me/2016HitFM/48.滿天星.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "五月天 - 頑固",
        url: 'https://notp.synology.me/2016HitFM/49.頑固.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "SHINee - 1 of 1",
        url: 'https://notp.synology.me/2016HitFM/50.1 of 1.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "LADY GAGA - Perfect Illusion",
        url: 'https://notp.synology.me/2016HitFM/51.Perfect Illusion.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "陳星翰+蔡依林 - 戀我癖",
        url: 'https://notp.synology.me/2016HitFM/52.戀我癖.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "周杰倫 - 床邊故事",
        url: "https://notp.synology.me/2016HitFM/53.床邊故事.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "宇多田光 - 道路",
        url: 'https://notp.synology.me/2016HitFM/54.道路.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "魏如萱 - 你啊你啊",
        url: "https://notp.synology.me/2016HitFM/55.你啊你啊.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "ALAN WALKER - Faded",
        url: 'https://notp.synology.me/2016HitFM/56.Faded.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "林宥嘉 - 熱血無賴",
        url: 'https://notp.synology.me/2016HitFM/57.熱血無賴.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "安室奈美惠 - Dear Diary",
        url: 'https://notp.synology.me/2016HitFM/58.Dear Diary.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "SPEXIAL - Boyz On Fire",
        url: 'https://notp.synology.me/2016HitFM/59.Boyz On Fire.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "楊丞琳 - 觀眾",
        url: 'https://notp.synology.me/2016HitFM/60.觀眾.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "嵐 - Don't You Get It",
        url: "https://notp.synology.me/2016HitFM/61.Don't You Get It.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "吳映潔 - SUGAR RUSH(CHN Ver.)",
        url: 'https://notp.synology.me/2016HitFM/62.SUGAR RUSH(CHN Ver.).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "安心亞+羅志祥 - 靚仔",
        url: "https://notp.synology.me/2016HitFM/63.靚仔.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "太妍 - Why",
        url: 'https://notp.synology.me/2016HitFM/64.Why.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "李毓芬 - 是我不夠好",
        url: 'https://notp.synology.me/2016HitFM/65.是我不夠好.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "王詩安 - Home",
        url: 'https://notp.synology.me/2016HitFM/66.Home.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "林芯儀 - 道聽塗說",
        url: 'https://notp.synology.me/2016HitFM/67.道聽塗說.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "楊丞琳 - 單",
        url: 'https://notp.synology.me/2016HitFM/68.單.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "少女時代 - Lion Heart",
        url: 'https://notp.synology.me/2016HitFM/69.Lion Heart.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "韋禮安 - 如果再見",
        url: 'https://notp.synology.me/2016HitFM/70.如果再見.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "范瑋琪 - 很久很久以後",
        url: "https://notp.synology.me/2016HitFM/71.很久很久以後.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "宇多田光+椎名林檎 - 只有兩小時的假期",
        url: 'https://notp.synology.me/2016HitFM/72.只有兩小時的假期.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "魏如昀 - 偶",
        url: 'https://notp.synology.me/2016HitFM/73.偶.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "SHAKIRA - Try Everything(動物方程式原聲)",
        url: 'https://notp.synology.me/2016HitFM/74.Try Everything(動物方程式原聲).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "吳思賢 - 不放手",
        url: 'https://notp.synology.me/2016HitFM/75.不放手.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "蕭敬騰 - 矜持",
        url: 'https://notp.synology.me/2016HitFM/76.矜持.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "楊乃文 - 離心力",
        url: 'https://notp.synology.me/2016HitFM/77.離心力.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "陳勢安 - 好愛好散",
        url: 'https://notp.synology.me/2016HitFM/78.好愛好散.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "EXO+劉在錫 - Dancing King",
        url: "https://notp.synology.me/2016HitFM/79.Dancing King.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "朱俐靜 - My Way",
        url: 'https://notp.synology.me/2016HitFM/80.My Way.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "LUKAS GRAHAM - 7 Years",
        url: 'https://notp.synology.me/2016HitFM/81.7 Years.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "丁噹 - 只是不夠愛自己",
        url: 'https://notp.synology.me/2016HitFM/82.只是不夠愛自己.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "GUMMY - 雲畫的月光(雲畫的月光原聲)",
        url: 'https://notp.synology.me/2016HitFM/83.雲畫的月光(雲畫的月光原聲).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "兄弟本色 - Fly Out",
        url: 'https://notp.synology.me/2016HitFM/84.Fly Out.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "戴佩妮 - 賊",
        url: "https://notp.synology.me/2016HitFM/85.賊.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "李洪基 - 後知後覺",
        url: 'https://notp.synology.me/2016HitFM/86.後知後覺.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "孫燕姿 - 在，也不見",
        url: "https://notp.synology.me/2016HitFM/87.在，也不見.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "MAROON 5 + KENDRICK LAMAR - Don't Wanna Know",
        url: "https://notp.synology.me/2016HitFM/88.Don't Wanna Know.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "張韶涵 - 不害怕",
        url: 'https://notp.synology.me/2016HitFM/89.不害怕.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "ERIC周興哲 - This Is Love",
        url: 'https://notp.synology.me/2016HitFM/90.This Is Love.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "近畿小子 - 無論經過幾年",
        url: 'https://notp.synology.me/2016HitFM/91.無論經過幾年.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "張芸京 - 等我變了之後",
        url: 'https://notp.synology.me/2016HitFM/92.等我變了之後.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "周湯豪 - Turn Up",
        url: 'https://notp.synology.me/2016HitFM/93.Turn Up.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "AKB48 - 你就是旋律",
        url: 'https://notp.synology.me/2016HitFM/94.你就是旋律.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "李榮浩 - 野生動物",
        url: "https://notp.synology.me/2016HitFM/95.野生動物.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "方大同 - 很不低調",
        url: 'https://notp.synology.me/2016HitFM/96.很不低調.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "GJ蔣卓嘉 - 你的愛是什麼形狀",
        url: 'https://notp.synology.me/2016HitFM/97.你的愛是什麼形狀.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "濱崎步 - Mad World",
        url: 'https://notp.synology.me/2016HitFM/98.Mad World.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "艾怡良 - 我們的總和",
        url: 'https://notp.synology.me/2016HitFM/99.我們的總和.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "TROYE SIVAN - YOUTH",
        url: 'https://notp.synology.me/2016HitFM/100.YOUTH.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "田馥甄 - 小幸運",
        url: 'https://notp.synology.me/2015HitFM/1 田馥甄 - 小幸運.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "林俊傑 - 可惜沒如果",
        url: 'https://notp.synology.me/2015HitFM/2 林俊傑 - 可惜沒如果.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "曾沛慈 - 不過失去了一點點",
        url: 'https://notp.synology.me/2015HitFM/3 曾沛慈 - 不過失去了一點點.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "鄭容和+林俊傑 - CHECKMATE",
        url: 'https://notp.synology.me/2015HitFM/4 鄭容和+林俊傑 - CHECKMATE.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "ADELE - HELLO",
        url: 'https://notp.synology.me/2015HitFM/5 ADELE - HELLO.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "羅志祥 - 夠了",
        url: 'https://notp.synology.me/2015HitFM/6 羅志祥 - 夠了.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "CNBLUE - CINDERELLA",
        url: 'https://notp.synology.me/2015HitFM/7 CNBLUE - CINDERELLA.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "周杰倫 - 算什麼男人",
        url: 'https://notp.synology.me/2015HitFM/8 周杰倫 - 算什麼男人.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "SUPER JUNIOR - DEVIL",
        url: 'https://notp.synology.me/2015HitFM/9 SUPER JUNIOR - DEVIL.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "SpeXial - DANGEROUS",
        url: 'https://notp.synology.me/2015HitFM/10 SpeXial - DANGEROUS.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "TAYLOR SWIFT+ KENDRICK LAMAR - BAD BLOOD",
        url: 'https://notp.synology.me/2015HitFM/11 TAYLOR SWIFT+ KENDRICK LAMAR - BAD BLOOD.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Bii畢書盡 - 我還想念你",
        url: 'https://notp.synology.me/2015HitFM/12 Bii畢書盡 - 我還想念你.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "鄭容和 - ONE FINE DAY",
        url: 'https://notp.synology.me/2015HitFM/13 鄭容和 - ONE FINE DAY.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "王力宏 - 你的愛",
        url: 'https://notp.synology.me/2015HitFM/14 王力宏 - 你的愛.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "JUSTIN BIEBER - WHAT DO YOU MEAN",
        url: 'https://notp.synology.me/2015HitFM/15 JUSTIN BIEBER - WHAT DO YOU MEAN.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "蘇打綠 - 下雨的夜晚",
        url: 'https://notp.synology.me/2015HitFM/16 蘇打綠 - 下雨的夜晚.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "EXO - CALL ME BABY",
        url: 'https://notp.synology.me/2015HitFM/17 EXO - CALL ME BABY.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "楊丞琳 - 失憶的金魚",
        url: 'https://notp.synology.me/2015HitFM/18 楊丞琳 - 失憶的金魚.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "MAROON 5 - THIS SUMMER’S GONNA HURT",
        url: 'https://notp.synology.me/2015HitFM/19 MAROON 5 - THIS SUMMER’S GONNA HURT.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "BIGBANG - BANG BANG BANG",
        url: 'https://notp.synology.me/2015HitFM/20 BIGBANG - BANG BANG BANG.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "林俊傑+G.E.M.鄧紫棋 - 手心的薔薇",
        url: 'https://notp.synology.me/2015HitFM/21 林俊傑+G.E.M.鄧紫棋 - 手心的薔薇.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "ELLIE GOULDING - LOVE ME LIKE YOU DO",
        url: 'https://notp.synology.me/2015HitFM/22 ELLIE GOULDING - LOVE ME LIKE YOU DO.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Selina任家萱 - 3.1415",
        url: 'https://notp.synology.me/2015HitFM/23 Selina任家萱 - 3.1415.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "徐佳瑩 - 突然好想你",
        url: 'https://notp.synology.me/2015HitFM/24 徐佳瑩 - 突然好想你.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "圭賢 - 在光化門",
        url: 'https://notp.synology.me/2015HitFM/25 圭賢 - 在光化門.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "林宥嘉 - 兜圈",
        url: 'https://notp.synology.me/2015HitFM/26 林宥嘉 - 兜圈.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Jessie J - Flashlight",
        url: 'https://notp.synology.me/2015HitFM/27 Jessie J - Flashlight.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "福山雅治 - I am a Hero",
        url: 'https://notp.synology.me/2015HitFM/28 福山雅治 - I am a Hero.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "CNBLUE - SUPERNOVA",
        url: 'https://notp.synology.me/2015HitFM/29 CNBLUE - SUPERNOVA.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Bii畢書盡+陳勢安+陳彥允+李玉璽 - 心時代",
        url: 'https://notp.synology.me/2015HitFM/30 Bii畢書盡+陳勢安+陳彥允+李玉璽 - 心時代.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "孫燕姿 - RADIO",
        url: 'https://notp.synology.me/2015HitFM/31 孫燕姿 - RADIO.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "SUPER JUNIOR-D&E - 不要痛(GROWING PAINS)",
        url: 'https://notp.synology.me/2015HitFM/32 SUPER JUNIOR-D&E - 不要痛(GROWING PAINS).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "羅志祥 - 致命傷",
        url: 'https://notp.synology.me/2015HitFM/33 羅志祥 - 致命傷.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "陳珊妮+林宥嘉 - 如同悲傷被下載了兩次",
        url: 'https://notp.synology.me/2015HitFM/34 陳珊妮+林宥嘉 - 如同悲傷被下載了兩次.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "鄧紫棋 - 再見",
        url: 'https://notp.synology.me/2015HitFM/35 鄧紫棋 - 再見.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "ELLA陳嘉樺 - 信愛成癮",
        url: 'https://notp.synology.me/2015HitFM/36 ELLA陳嘉樺 - 信愛成癮.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "CARLY RAE JEPSEN - I REALLY LIKE YOU",
        url: 'https://notp.synology.me/2015HitFM/37 CARLY RAE JEPSEN - I REALLY LIKE YOU.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "MARK RONSON+BRUNO MARS - UPTOWN FUNK",
        url: 'https://notp.synology.me/2015HitFM/38 MARK RONSON+BRUNO MARS - UPTOWN FUNK.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "SpeXial - 貼身",
        url: 'https://notp.synology.me/2015HitFM/39 SpeXial - 貼身.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "AMIT - 母系社會",
        url: 'https://notp.synology.me/2015HitFM/40 AMIT - 母系社會.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "張學友 - 用餘生去愛",
        url: 'https://notp.synology.me/2015HitFM/41 張學友 - 用餘生去愛.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "WIZ KHALIFA + CHARLIE PUTH - SEE YOU AGAIN",
        url: 'https://notp.synology.me/2015HitFM/42 WIZ KHALIFA + CHARLIE PUTH - SEE YOU AGAIN.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "楊丞琳 - 點水",
        url: 'https://notp.synology.me/2015HitFM/43 楊丞琳 - 點水.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "周杰倫 - 手寫的從前",
        url: 'https://notp.synology.me/2015HitFM/44 周杰倫 - 手寫的從前.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Adam Levine - Lost Stars",
        url: 'https://notp.synology.me/2015HitFM/45 Adam Levine - Lost Stars.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "曾沛慈 - 多年後",
        url: 'https://notp.synology.me/2015HitFM/46 曾沛慈 - 多年後.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "韋禮安 - 女孩",
        url: 'https://notp.synology.me/2015HitFM/47 韋禮安 - 女孩.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "濱崎步 - THE GIFT",
        url: 'https://notp.synology.me/2015HitFM/48 濱崎步 - THE GIFT.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "吳克群+宋智孝 - 너 귀엽다 你好可愛",
        url: 'https://notp.synology.me/2015HitFM/49 吳克群+宋智孝 - 너 귀엽다 你好可愛.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Bii畢書盡 - LOVE MORE",
        url: 'https://notp.synology.me/2015HitFM/50 Bii畢書盡 - LOVE MORE.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "JUSTIN BIEBER - SORRY",
        url: 'https://notp.synology.me/2015HitFM/51 JUSTIN BIEBER - SORRY.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "BIGBANG - LET'S NOT FALL IN LOVE",
        url: "https://notp.synology.me/2015HitFM/52 BIGBANG - LET'S NOT FALL IN LOVE.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "嚴爵+PEACE - 輕輕",
        url: 'https://notp.synology.me/2015HitFM/53 嚴爵+PEACE - 輕輕.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Selina任家萱 - 看我的",
        url: 'https://notp.synology.me/2015HitFM/54 Selina任家萱 - 看我的.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "五月天 - YOUR LEGEND~燃燒的生命~",
        url: 'https://notp.synology.me/2015HitFM/55 五月天 - YOUR LEGEND~燃燒的生命~.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "A-Lin - 難得孤寂",
        url: 'https://notp.synology.me/2015HitFM/56 A-Lin - 難得孤寂.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "ELLIE GOULDING - ON MY MIND",
        url: 'https://notp.synology.me/2015HitFM/57 ELLIE GOULDING - ON MY MIND.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "羅志祥+秀智 - 幸福特調",
        url: 'https://notp.synology.me/2015HitFM/58 羅志祥+秀智 - 幸福特調.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "SUPER JUNIOR - MAGIC",
        url: 'https://notp.synology.me/2015HitFM/59 SUPER JUNIOR - MAGIC.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "林俊傑 - 新地球",
        url: 'https://notp.synology.me/2015HitFM/60 林俊傑 - 新地球.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "BIGBANG - SOBER",
        url: 'https://notp.synology.me/2015HitFM/61 BIGBANG - SOBER.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "楊丞琳 - 其實我們值得幸福",
        url: 'https://notp.synology.me/2015HitFM/62 楊丞琳 - 其實我們值得幸福.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "蘇打綠 - 痛快的哀艷",
        url: 'https://notp.synology.me/2015HitFM/63 蘇打綠 - 痛快的哀艷.mp3',
        cover: '/cover.jpg'
      },
            {
        name: "ONE DIRECTION - PERFECT",
        url: 'https://notp.synology.me/2015HitFM/64 ONE DIRECTION - PERFECT.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "莫文蔚 - 不散,不見",
        url: 'https://notp.synology.me/2015HitFM/65 莫文蔚 - 不散,不見.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "少女時代 - CATCH ME IF YOU CAN",
        url: 'https://notp.synology.me/2015HitFM/66 少女時代 - CATCH ME IF YOU CAN.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "曾沛慈 - 黑框眼鏡",
        url: 'https://notp.synology.me/2015HitFM/67 曾沛慈 - 黑框眼鏡.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "宇宙人 - 那你呢",
        url: 'https://notp.synology.me/2015HitFM/68 宇宙人 - 那你呢.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "GD&T.O.P - ZUTTER",
        url: 'https://notp.synology.me/2015HitFM/69 GD&T.O.P - ZUTTER.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "吳汶芳 - 孤獨的總和",
        url: 'https://notp.synology.me/2015HitFM/70 吳汶芳 - 孤獨的總和.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Bii畢書盡 - ACTION GO!",
        url: 'https://notp.synology.me/2015HitFM/71 Bii畢書盡 - ACTION GO!.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Selina任家萱+蕭煌奇 - 一人水一項",
        url: 'https://notp.synology.me/2015HitFM/72 Selina任家萱+蕭煌奇 - 一人水一項.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "ELLA陳嘉樺 - 浪費眼淚",
        url: 'https://notp.synology.me/2015HitFM/73 ELLA陳嘉樺 - 浪費眼淚.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "SpeXial - 暖男製造機",
        url: 'https://notp.synology.me/2015HitFM/74 SpeXial - 暖男製造機.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "SAM SMITH - WRITING'S ON THE WALL",
        url: "https://notp.synology.me/2015HitFM/75 SAM SMITH - WRITING'S ON THE WALL.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "鄧紫棋 - 你不是真正的快樂",
        url: 'https://notp.synology.me/2015HitFM/76 鄧紫棋 - 你不是真正的快樂.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "EXO - LOVE ME RIGHT",
        url: 'https://notp.synology.me/2015HitFM/77 EXO - LOVE ME RIGHT.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "劉若英 - 我懂了",
        url: 'https://notp.synology.me/2015HitFM/78 劉若英 - 我懂了.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "李榮浩 - 不將就",
        url: 'https://notp.synology.me/2015HitFM/79 李榮浩 - 不將就.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "BIGBANG - BAE BAE",
        url: 'https://notp.synology.me/2015HitFM/80 BIGBANG - BAE BAE.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "SpeXial - LOVE KILLAH",
        url: 'https://notp.synology.me/2015HitFM/81 SpeXial - LOVE KILLAH.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "安室奈美惠 - PHOTOGENIC",
        url: 'https://notp.synology.me/2015HitFM/82 安室奈美惠 - PHOTOGENIC.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "王力宏 - 裂心",
        url: 'https://notp.synology.me/2015HitFM/83 王力宏 - 裂心.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "李玉璽 - SHOUT",
        url: 'https://notp.synology.me/2015HitFM/84 李玉璽 - SHOUT.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "SHINee - VIEW",
        url: 'https://notp.synology.me/2015HitFM/85 SHINee - VIEW.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "陳彥允 - 陌生的地方",
        url: 'https://notp.synology.me/2015HitFM/86 陳彥允 - 陌生的地方.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "蘇打綠 - EVERYONE",
        url: 'https://notp.synology.me/2015HitFM/87 蘇打綠 - EVERYONE.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "周杰倫 - 鞋子特大號",
        url: 'https://notp.synology.me/2015HitFM/88 周杰倫 - 鞋子特大號.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "SpeXial - 迷失 IN U",
        url: 'https://notp.synology.me/2015HitFM/89 SpeXial - 迷失 IN U.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "蔡健雅 - 失語者",
        url: 'https://notp.synology.me/2015HitFM/90 蔡健雅 - 失語者.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "黃鴻升 - 拿破崙",
        url: 'https://notp.synology.me/2015HitFM/91 黃鴻升 - 拿破崙.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "圭賢 - 百萬碎片 (A MILLION PIECES)",
        url: 'https://notp.synology.me/2015HitFM/92 圭賢 - 百萬碎片 (A MILLION PIECES).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "TIGER JK+ JINSIL OF MAD SOUL CHILD - RESET",
        url: 'https://notp.synology.me/2015HitFM/93 TIGER JK+ JINSIL OF MAD SOUL CHILD - RESET.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Bii畢書盡 - I WANNA SAY",
        url: 'https://notp.synology.me/2015HitFM/94 Bii畢書盡 - I WANNA SAY.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "嵐 - 心之空",
        url: 'https://notp.synology.me/2015HitFM/95 嵐 - 心之空.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "ROY KIM - 皮諾丘",
        url: 'https://notp.synology.me/2015HitFM/96 ROY KIM - 皮諾丘.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "陳奕迅 - 無條件",
        url: 'https://notp.synology.me/2015HitFM/97 陳奕迅 - 無條件.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "戴愛玲+A-LIN - 我不離開",
        url: 'https://notp.synology.me/2015HitFM/98 戴愛玲+A-LIN - 我不離開.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "MADONNA - LIVING FOR LOVE",
        url: 'https://notp.synology.me/2015HitFM/99 MADONNA - LIVING FOR LOVE.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "謝和弦+王詩安 - 愛不需要裝乖",
        url: 'https://notp.synology.me/2015HitFM/100 謝和弦+王詩安 - 愛不需要裝乖.mp3',
        cover: '/cover.jpg'
      },
	  {
        name: "蔡依林 - 呸",
        url: 'https://notp.synology.me/2014HitFM/001.蔡依林 - 呸.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "孫燕姿 - 克卜勒",
        url: 'https://notp.synology.me/2014HitFM/002.孫燕姿 - 克卜勒.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Demi Lovato - Let it Go",
        url: 'https://notp.synology.me/2014HitFM/003.Demi Lovato - Let it Go.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "CNBLUE - Can't Stop",
        url: "https://notp.synology.me/2014HitFM/004.CNBLUE - Can't Stop.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "蕭亞軒 - 不解釋親吻",
        url: 'https://notp.synology.me/2014HitFM/005.蕭亞軒 - 不解釋親吻.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Super Junior - MAMACITA(哎呀呀)",
        url: 'https://notp.synology.me/2014HitFM/006.Super Junior - MAMACITA(哎呀呀).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "張惠妹 - 三月",
        url: 'https://notp.synology.me/2014HitFM/007.張惠妹 - 三月.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "蔡依林 - 第三人稱",
        url: "https://notp.synology.me/2014HitFM/008.蔡依林 - 第三人稱.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "Taylor Swift - Shake It Off",
        url: 'https://notp.synology.me/2014HitFM/009.Taylor Swift - Shake It Off.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "LYN - My Destiny(我的命運)",
        url: 'https://notp.synology.me/2014HitFM/010.LYN - My Destiny(我的命運).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "五月天 - 步步",
        url: 'https://notp.synology.me/2014HitFM/011.五月天 - 步步.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "蕭敬騰 - Kelly",
        url: "https://notp.synology.me/2014HitFM/012.蕭敬騰 - Kelly.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "FTISLAND 李洪基 - 聽我說 ~金嘆與恩尚定情曲",
        url: 'https://notp.synology.me/2014HitFM/013.FTISLAND 李洪基 - 聽我說 ~金嘆與恩尚定情曲.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Ariana Grande+Iggy Azalea - Problem",
        url: 'https://notp.synology.me/2014HitFM/014.Ariana Grande+Iggy Azalea - Problem.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "孫燕姿 - 天使的指纹",
        url: 'https://notp.synology.me/2014HitFM/015.孫燕姿 - 天使的指纹.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "嵐 - GUTS!",
        url: "https://notp.synology.me/2014HitFM/016.嵐 - GUTS!.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "蕭亞軒 - 浪漫來襲",
        url: 'https://notp.synology.me/2014HitFM/017.蕭亞軒 - 浪漫來襲.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Maroon 5 - Maps",
        url: 'https://notp.synology.me/2014HitFM/018.Maroon 5 - Maps.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "少女時代 - Mr.Mr.",
        url: 'https://notp.synology.me/2014HitFM/019.少女時代 - Mr.Mr.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "炎亞綸 - 這不是我",
        url: "https://notp.synology.me/2014HitFM/020.炎亞綸 - 這不是我.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "EXO-M-上瘾 (Overdose)",
        url: 'https://notp.synology.me/2014HitFM/021.EXO-M-上瘾 (Overdose).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "5 Seconds of Summer - Don't Stop",
        url: "https://notp.synology.me/2014HitFM/022.5 Seconds of Summer - Don't Stop.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "MP魔幻力量 - 我還是愛著你",
        url: 'https://notp.synology.me/2014HitFM/023.MP魔幻力量 - 我還是愛著你.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Super Junior - This is Love",
        url: "https://notp.synology.me/2014HitFM/024.Super Junior - This is Love.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "蕭亞軒 - 感傷",
        url: 'https://notp.synology.me/2014HitFM/025.蕭亞軒 - 感傷.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Coldplay - Magic",
        url: 'https://notp.synology.me/2014HitFM/026.Coldplay - Magic.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "張惠妹 - 這樣你還要愛我嗎",
        url: 'https://notp.synology.me/2014HitFM/027.張惠妹 - 這樣你還要愛我嗎.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "尹美萊 - Touch Love",
        url: "https://notp.synology.me/2014HitFM/028.尹美萊 - Touch Love.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "蕭敬騰 - 吻我吧",
        url: 'https://notp.synology.me/2014HitFM/029.蕭敬騰 - 吻我吧.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "SUPER JUNIOR東海&銀赫 - Mortorcyle",
        url: 'https://notp.synology.me/2014HitFM/030.SUPER JUNIOR東海&銀赫 - Mortorcyle.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "炎亞綸 - 一刀不剪",
        url: 'https://notp.synology.me/2014HitFM/031.炎亞綸 - 一刀不剪.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "庾澄慶 - 缺口",
        url: "https://notp.synology.me/2014HitFM/032.庾澄慶 - 缺口.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "Jason Mraz - Love Someone",
        url: 'https://notp.synology.me/2014HitFM/033.Jason Mraz - Love Someone.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "五月天 怪獸 - 九號球",
        url: 'https://notp.synology.me/2014HitFM/034.五月天 怪獸 - 九號球.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "安室奈美惠+葉加瀨太郎 - Can You Celebrate",
        url: 'https://notp.synology.me/2014HitFM/035.安室奈美惠+葉加瀨太郎 - Can You Celebrate.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "孫燕姿 - 無限大",
        url: "https://notp.synology.me/2014HitFM/036.孫燕姿 - 無限大.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "ERIC周興哲 - 以後別做朋友",
        url: 'https://notp.synology.me/2014HitFM/037.ERIC周興哲 - 以後別做朋友.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Beyoncé+Jay Z - Drunk in Love",
        url: 'https://notp.synology.me/2014HitFM/038.Beyoncé+Jay Z - Drunk in Love.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "潘瑋柏+楊丞琳 - 打呼",
        url: 'https://notp.synology.me/2014HitFM/039.潘瑋柏+楊丞琳 - 打呼.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "徐佳瑩 - 尋人啟事",
        url: "https://notp.synology.me/2014HitFM/040.徐佳瑩 - 尋人啟事.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "AKB048 - 心意告示牌",
        url: 'https://notp.synology.me/2014HitFM/041.AKB048 - 心意告示牌.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "五月天 - Do You Ever Shine",
        url: 'https://notp.synology.me/2014HitFM/042.五月天 - Do You Ever Shine.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "王心凌 - Baby Boy",
        url: 'https://notp.synology.me/2014HitFM/043.王心凌 - Baby Boy.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Pharrell Williams - Happy",
        url: "https://notp.synology.me/2014HitFM/044.Pharrell Williams - Happy.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "Bii畢書盡+陳勢安+陳彥允+李玉璽 - Everything Changes",
        url: 'https://notp.synology.me/2014HitFM/045.Bii畢書盡+陳勢安+陳彥允+李玉璽 - Everything Changes.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "陳奕迅 - 你給我聽好",
        url: 'https://notp.synology.me/2014HitFM/046.陳奕迅 - 你給我聽好.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "EXO - 12月的奇蹟",
        url: 'https://notp.synology.me/2014HitFM/047.EXO - 12月的奇蹟.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "蕭敬騰 - 跟我玩",
        url: "https://notp.synology.me/2014HitFM/048.蕭敬騰 - 跟我玩.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "丁噹 - 我沒那麼愛你",
        url: 'https://notp.synology.me/2014HitFM/049.丁噹 - 我沒那麼愛你.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "CHEN(EXO) - 最佳的幸運",
        url: 'https://notp.synology.me/2014HitFM/050.CHEN(EXO) - 最佳的幸運.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "張惠妹 - 跳進來",
        url: 'https://notp.synology.me/2014HitFM/051.張惠妹 - 跳進來.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "李榮浩 - 喜劇之王",
        url: "https://notp.synology.me/2014HitFM/052.李榮浩 - 喜劇之王.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "家家 - 塵埃",
        url: 'https://notp.synology.me/2014HitFM/053.家家 - 塵埃.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Mariah Carey - You're Mine (Eternal)",
        url: "https://notp.synology.me/2014HitFM/054.Mariah Carey - You're Mine (Eternal).mp3",
        cover: '/cover.jpg'
      },
      {
        name: "陳綺貞 - 流浪者之歌",
        url: 'https://notp.synology.me/2014HitFM/055.陳綺貞 - 流浪者之歌.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "陳彥允 - 基因決定我愛你",
        url: 'https://notp.synology.me/2014HitFM/056.陳彥允 - 基因決定我愛你.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "HENRY(SUPER JUNIOR-M) - Fantastic",
        url: 'https://notp.synology.me/2014HitFM/057.HENRY(SUPER JUNIOR-M) - Fantastic.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "SpeXial - Break It Down",
        url: "https://notp.synology.me/2014HitFM/058.SpeXial - Break It Down.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "韋禮安 - 在你身邊",
        url: 'https://notp.synology.me/2014HitFM/059.韋禮安 - 在你身邊.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "泰民 - 怪盜(Danger)",
        url: 'https://notp.synology.me/2014HitFM/060.泰民 - 怪盜(Danger).mp3',
        cover: '/cover.jpg'
      },
      {
        name: "王心凌 - 陳淑芬與林志豪",
        url: 'https://notp.synology.me/2014HitFM/061.王心凌 - 陳淑芬與林志豪.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "潘瑋柏 - 小丑",
        url: 'https://notp.synology.me/2014HitFM/062.潘瑋柏 - 小丑.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "One Direction - Steal My Girl",
        url: "https://notp.synology.me/2014HitFM/063.One Direction - Steal My Girl.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "朱俐靜 - 濃妝",
        url: "https://notp.synology.me/2014HitFM/064.朱俐靜 - 濃妝.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "楊乃文 - 未接來電",
        url: 'https://notp.synology.me/2014HitFM/065.楊乃文 - 未接來電.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Kinki Kids - 鍵のない箱",
        url: 'https://notp.synology.me/2014HitFM/066.Kinki Kids - 鍵のない箱.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "李佳薇 - 像天堂的懸崖",
        url: 'https://notp.synology.me/2014HitFM/067.李佳薇 - 像天堂的懸崖.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "魏如萱 - 在不確定的世界裡",
        url: "https://notp.synology.me/2014HitFM/068.魏如萱 - 在不確定的世界裡.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "Jessie J+Ariana Grande+Nicki Minaj - Bang Bang",
        url: 'https://notp.synology.me/2014HitFM/069.Jessie J+Ariana Grande+Nicki Minaj - Bang Bang.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Super Junior-M - Swing",
        url: 'https://notp.synology.me/2014HitFM/070.Super Junior-M - Swing.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Beast - Good Luck",
        url: 'https://notp.synology.me/2014HitFM/071.Beast - Good Luck.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "卓文萱 - 啾咪啾咪",
        url: "https://notp.synology.me/2014HitFM/072.卓文萱 - 啾咪啾咪.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "丁噹 - 敢愛敢當",
        url: 'https://notp.synology.me/2014HitFM/073.丁噹 - 敢愛敢當.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "少女時代 - Holler",
        url: 'https://notp.synology.me/2014HitFM/074.少女時代 - Holler.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "李榮浩 - 不搭",
        url: 'https://notp.synology.me/2014HitFM/075.李榮浩 - 不搭.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "2PM - Go Crazy-",
        url: "https://notp.synology.me/2014HitFM/076.2PM - Go Crazy-.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "Sam Smith - Stay With Me",
        url: 'https://notp.synology.me/2014HitFM/077.Sam Smith - Stay With Me.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "078.莫文蔚 - 看看",
        url: 'https://notp.synology.me/2014HitFM/078.莫文蔚 - 看看.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "八三夭 - 大逃殺",
        url: 'https://notp.synology.me/2014HitFM/079.八三夭 - 大逃殺.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Winner - Empty.",
        url: "https://notp.synology.me/2014HitFM/080.Winner - Empty.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "楊培安 - 沉睡的野獸",
        url: 'https://notp.synology.me/2014HitFM/081.楊培安 - 沉睡的野獸.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Taeyang - Eyes,Nose,Lips",
        url: 'https://notp.synology.me/2014HitFM/082.Taeyang - Eyes,Nose,Lips.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "白安 - 若你真的有想過",
        url: 'https://notp.synology.me/2014HitFM/083.白安 - 若你真的有想過.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Maroon 5 - Animals",
        url: "https://notp.synology.me/2014HitFM/084.Maroon 5 - Animals.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "林凡 - 歲月這把刀",
        url: 'https://notp.synology.me/2014HitFM/085.林凡 - 歲月這把刀.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "林宥嘉 - 口的形狀",
        url: "https://notp.synology.me/2014HitFM/086.林宥嘉 - 口的形狀.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "SHINee - Downtown Baby",
        url: 'https://notp.synology.me/2014HitFM/087.SHINee - Downtown Baby.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "MP魔幻力量 - 偷偷的",
        url: "https://notp.synology.me/2014HitFM/088.MP魔幻力量 - 偷偷的.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "方大同 - 特别的人",
        url: 'https://notp.synology.me/2014HitFM/089.方大同 - 特别的人.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "RoyKim - Home",
        url: 'https://notp.synology.me/2014HitFM/090.RoyKim - Home.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "郭靜 - 不還",
        url: 'https://notp.synology.me/2014HitFM/091.郭靜 - 不還.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "李玉璽 - 放下,旅行",
        url: "https://notp.synology.me/2014HitFM/092.李玉璽 - 放下,旅行.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "福山雅治 - 曉",
        url: 'https://notp.synology.me/2014HitFM/093.福山雅治 - 曉.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "Michael Jackson+Justin Timberlake - Love Never Felt So Good",
        url: 'https://notp.synology.me/2014HitFM/094.Michael Jackson+Justin Timberlake - Love Never Felt So Good.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "王大文 - 美麗",
        url: 'https://notp.synology.me/2014HitFM/095.王大文 - 美麗.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "東方神起 - Something",
        url: "https://notp.synology.me/2014HitFM/096.東方神起 - Something.mp3",
        cover: '/cover.jpg'
      },
      {
        name: "Popu Lady - More",
        url: 'https://notp.synology.me/2014HitFM/097.Popu Lady - More.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "AKMU樂童音樂家 - 200%",
        url: 'https://notp.synology.me/2014HitFM/098.AKMU樂童音樂家 - 200%.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "辰亦儒 - 還在夏天呢",
        url: 'https://notp.synology.me/2014HitFM/099.辰亦儒 - 還在夏天呢.mp3',
        cover: '/cover.jpg'
      },
      {
        name: "嵐 - Bittersweet",
        url: "https://notp.synology.me/2014HitFM/100.嵐 - Bittersweet.mp3",
        cover: '/cover.jpg'
      }
    ]
});