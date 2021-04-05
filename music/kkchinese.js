const kkc = new APlayer({
    container: document.getElementById('kkchinese'),
    fixed: false,
    autoplay: false,
    theme: '#1c03fc',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: '250px',
    lrcType: 0,
    audio: [
      {
        name: "想見你想見你想見你 (電視劇想見你片尾曲)",
        artist: '八三夭',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/001. 八三夭 - 想見你想見你想見你 (電視劇想見你片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "句號",
        artist: 'G.E.M. 鄧紫棋',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/002. G.E.M. 鄧紫棋 - 句號.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "與我無關",
        artist: '阿冗',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/003. 阿冗 - 與我無關.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "你的答案",
        artist: '阿冗',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/004. 阿冗 - 你的答案.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "夢然",
        artist: '少年',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/005. 夢然 - 少年.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "刻在我心底的名字 (電影刻在你心底的名字主題曲)",
        artist: '盧廣仲',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/006. 盧廣仲 - 刻在我心底的名字 (電影刻在你心底的名字主題曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "CHANGE",
        artist: '瘦子E.SO',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/007. 瘦子E.SO - CHANGE.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "你的情歌 (電影你的情歌主題曲)",
        artist: 'Tank 呂建忠',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/008. Tank 呂建忠 - 你的情歌(電影你的情歌主題曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "透明",
        artist: 'G.E.M.鄧紫棋',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/009. G.E.M.鄧紫棋 - 透明.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "很久以後",
        artist: 'G.E.M.鄧紫棋',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/010. G.E.M.鄧紫棋 - 很久以後.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "愛上現在的我",
        artist: '閻奕格(feat. 高爾宣 OSN)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/011. 閻奕格 - 愛上現在的我 (feat. 高爾宣 OSN).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "她沒在看我",
        artist: '瘦子E.SO',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/012. 瘦子E.SO - 她沒在看我.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "摩天動物園",
        artist: 'G.E.M.鄧紫棋',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/013. G.E.M.鄧紫棋 - 摩天動物園.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "飛鳥和蟬",
        artist: '任然',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/014. 任然 - 飛鳥和蟬.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "小時候的我們",
        artist: '周興哲',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/015. 周興哲 - 小時候的我們.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "COLORFUL",
        artist: '婁峻碩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/016. 婁峻碩 - COLORFUL.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "別勉強",
        artist: 'G.E.M.鄧紫棋(ft. 周興哲)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/017. G.E.M.鄧紫棋 - 別勉強 (with 周興哲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "太陽",
        artist: '瘦子E.SO',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/018. 瘦子E.SO - 太陽.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我很快樂",
        artist: '周興哲',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/019. 周興哲 - 我很快樂.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "炙愛 (女聲版)",
        artist: '陳忻玥',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/020. 陳忻玥 - 炙愛 (女聲版).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Mojito",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/021. 周杰倫 - Mojito.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "勇氣",
        artist: '棉子',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/022. 棉子 - 勇氣.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "麻雀",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/023. 李榮浩 - 麻雀.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "溫柔 #MaydayBlue20th",
        artist: '五月天(feat. 孫燕姿)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/024. 五月天 - 溫柔 #MaydayBlue20th (feat. 孫燕姿).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "No Name",
        artist: '高爾宣 OSN',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/025. 高爾宣 OSN - No Name.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "WAIT",
        artist: '瘦子E.SO',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/026. 瘦子E.SO - WAIT.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "當你和心跳一起出現",
        artist: '蕭亞軒',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/027. 蕭亞軒 - 當你和心跳一起出現.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "兵變",
        artist: '邱鋒澤&陳零九&四堅情&黃偉晉&小賴',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/028. 邱鋒澤&陳零九&四堅情&黃偉晉&小賴 - 兵變.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "全世界的朋友都讓我失望",
        artist: '吳卓源',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/029. 吳卓源 - 全世界的朋友都讓我失望.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "扛得住",
        artist: '黃鴻升(feat. 柯有倫 & 竇智孔)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/030. 黃鴻升 - 扛得住 (feat. 柯有倫 & 竇智孔).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "So Bad",
        artist: '高爾宣OSN',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/031. 高爾宣OSN  - So Bad.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "丟了你",
        artist: '井朧',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/032. 井朧 - 丟了你.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我是如此相信",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/033. 周杰倫 - 我是如此相信.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "受夠",
        artist: '周興哲',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/034. 周興哲 - 受夠.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "彼個所在",
        artist: '魏如萱',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/035. 魏如萱 - 彼個所在.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "稱讚她的美",
        artist: '瘦子E.SO',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/036. 瘦子E.SO - 稱讚她的美.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "懸日",
        artist: '田馥甄',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/037. 田馥甄 - 懸日.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "速食愛情",
        artist: '四堅情WOLF (邱鋒澤、陳零九、黃偉晉、賴晏駒)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/038. 四堅情WOLF (邱鋒澤、陳零九、黃偉晉、賴晏駒) - 速食愛情.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "好想好想妳",
        artist: 'G.E.M. 鄧紫棋',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/039. G.E.M. 鄧紫棋 - 好想好想妳.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Something I Don't Need",
        artist: '瘦子E.SO',
        url: "https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/040. 瘦子E.SO - Something I Don't Need.mp3",
		cover: '/cover.jpg'
      },
      {
        name: "後來遇見他",
        artist: '胡66',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/041. 胡66 - 後來遇見他.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "離開我的依賴",
        artist: '王艷薇',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/042. 王艷薇 - 離開我的依賴.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "猴籠",
        artist: '蕭敬騰',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/043. 蕭敬騰 - 猴籠.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "再也不要",
        artist: '陳零九(feat. 韋禮安)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/044. 陳零九 - 再也不要 (feat. 韋禮安).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "I Wish I Was There",
        artist: '瘦子E.SO',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/045. 瘦子E.SO - I Wish I Was There.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "馬子狗",
        artist: '八三夭(feat. 玖壹壹)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/046. 八三夭 - 馬子狗 (feat. 玖壹壹).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "默念你",
        artist: '小宇-宋念宇',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/047. 小宇-宋念宇 - 默念你.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "伯父",
        artist: '瘦子E.SO',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/048. 瘦子E.SO - 伯父.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "輸情歌 (Ballad)",
        artist: 'J.Sheon',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/049. J.Sheon - 輸情歌 (Ballad).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "飄洋過海來看你",
        artist: '梁靜茹&艾怡良',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/050. 梁靜茹&艾怡良 - 飄洋過海來看你.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "看見妳的聲音 (電視劇想見你插曲)",
        artist: '陳零九',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/051. 陳零九 - 看見妳的聲音 (電視劇想見你插曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "七十億分之一加一",
        artist: '吳卓源(feat. 婁峻碩)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/052. 吳卓源 - 七十億分之一加一 ((1  7(10^9)) + 1)(feat. 婁峻碩).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "依然睡公主",
        artist: 'G.E.M. 鄧紫棋',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/053. G.E.M. 鄧紫棋 - 依然睡公主.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "好想愛這個世界啊",
        artist: '華晨宇',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/054. 華晨宇 - 好想愛這個世界啊.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "少了一件牛仔褲 (三立華劇跟鯊魚接吻片尾曲)",
        artist: '閻奕格',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/055. 閻奕格 - 少了一件牛仔褲 (Where are my jeans) - 三立華劇跟鯊魚接吻片尾曲.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "差不多姑娘",
        artist: 'G.E.M. 鄧紫棋',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/056. G.E.M. 鄧紫棋 - 差不多姑娘.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "一天 (電視劇《想見你》插曲)",
        artist: '黃宣',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/057. 黃宣 - 一天(電視劇《想見你》插曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "交換餘生",
        artist: '林俊傑',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/058. 林俊傑 - 交換餘生.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Don't Worry About Me",
        artist: '瘦子E.SO',
        url: "https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/059. 瘦子E.SO - Don't Worry About Me.mp3",
		cover: '/cover.jpg'
      },
      {
        name: "如果的事",
        artist: '李佳歡(feat. 許維芳)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/060. 李佳歡 - 如果的事 (feat. 許維芳).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Follow You",
        artist: '瘦子E.SO',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/061. 瘦子E.SO - Follow You.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "刪拾",
        artist: '楊丞琳',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/062. 楊丞琳 - 刪拾.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "全放空",
        artist: '文慧如(feat. 鼓鼓 呂思緯)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/063. 文慧如 - 全放空 (feat. 鼓鼓 呂思緯).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "迷人的危險",
        artist: '蔡黃汝',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/064. 蔡黃汝 - 迷人的危險.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "不敢聽的歌",
        artist: '李千那',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/065. 李千那 - 不敢聽的歌.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "別人的 (電影孤味片尾曲)",
        artist: '徐若瑄',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/066. 徐若瑄 - 別人的 (電影孤味片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Fly Away",
        artist: 'G.E.M. 鄧紫棋',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/067. G.E.M. 鄧紫棋 - Fly Away.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "皆可",
        artist: '田馥甄',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/068. 田馥甄 - 皆可.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "心如止水",
        artist: '任家萱',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/069. 任家萱 - 心如止水.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "自信勇敢咱的名",
        artist: '滅火器 (Fire EX.)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/070. 滅火器 (Fire EX.) - 自信勇敢咱的名.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "幸福藏在哪裡 (天堂的微笑片頭曲)",
        artist: '鄭心慈',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/071. 鄭心慈 - 幸福藏在哪裡(天堂的微笑片頭曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Don’t Wanna Lie",
        artist: '派偉俊(feat. 8lak, Hosea)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/072. 派偉俊 - Don’t Wanna Lie (feat. 8lak, Hosea).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Take Me Back",
        artist: '吳卓源',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/073. 吳卓源 - Take Me Back.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "無人知曉",
        artist: '田馥甄',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/074. 田馥甄 - 無人知曉.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "像是一顆星星",
        artist: '楊丞琳',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/075 楊丞琳 - 像是一顆星星.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "希望你回來",
        artist: 'TRASH',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/076. TRASH - 希望你回來.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "時間的輪",
        artist: '陳忻玥',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/077. 陳忻玥 - 時間的輪.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Things Things Things",
        artist: '吳卓源',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/078. 吳卓源 - Things Things Things.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "諷刺的情書",
        artist: '田馥甄',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/079. 田馥甄 - 諷刺的情書.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Am I Who I Am",
        artist: '陳忻玥',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/080. 陳忻玥  - Am I Who I Am.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "偽裝",
        artist: '李友廷(feat. 吳霏&楊碧琪)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/081. 李友廷 - 偽裝 (feat. 吳霏&楊碧琪).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "別再想見我",
        artist: '許光漢',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/082. 許光漢 - 別再想見我.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "永遠不再 (做工的人戲劇片尾曲)",
        artist: '動力火車',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/083. 動力火車 - 永遠不再 (做工的人戲劇片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "等著等著就老了",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/084. 李榮浩 - 等著等著就老了.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "有一種悲傷叫蠢蛋",
        artist: '八三夭(feat. A-Lin)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/085. 八三夭 - 有一種悲傷叫蠢蛋 (feat. A-Lin).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "女士優先",
        artist: '老莫 ILL MO(feat.壞特)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/086. 老莫 ILL MO - 女士優先 (feat.壞特).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Better",
        artist: '吳卓源(feat. 陳芳語)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/087. 吳卓源 - Better (feat. 陳芳語).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Be Alright",
        artist: 'IVAN 艾文(feat. 李艾薇 Ivy Lee)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/088. IVAN 艾文 - Be Alright (feat. 李艾薇 Ivy Lee).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "節日快樂",
        artist: '楊丞琳',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/089 楊丞琳 - 節日快樂.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我的未來不是夢",
        artist: '茄子蛋',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/090. 茄子蛋 - 我的未來不是夢.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "你存在",
        artist: '梁文音',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/091. 梁文音 - 你存在.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "前任",
        artist: '采子(feat. 黃偉晉)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/092. 采子 - 前任 (feat. 黃偉晉).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "太陽 (堅持守護希望版)",
        artist: '邱振哲',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/093. 邱振哲 - 太陽 (堅持守護希望版).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "不在乎",
        artist: '張語噥',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/094. 張語噥 - 不在乎.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "逆光",
        artist: '陳芳語',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/095. 陳芳語 - 逆光.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Better Than Love",
        artist: 'CHING G SQUAD, 高爾宣 OSN, 婁峻碩, ChrisFlow, RED芮德, Julia Wu, Karencici, Pi Hai Ryan',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/096. CHING G SQUAD, 高爾宣 OSN, 婁峻碩, ChrisFlow, RED芮德, Julia Wu, Karencici, Pi Hai Ryan - Better Than Love.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "雙棲動物",
        artist: '韋禮安',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/097. 韋禮安 - 雙棲動物.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "LOCAL",
        artist: '玖壹壹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/098. 玖壹壹 - LOCAL.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "逃 (電視劇想見你插曲)",
        artist: '孫盛希',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/099. 孫盛希 - 逃 (電視劇想見你插曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "恰似你的溫柔",
        artist: '茄子蛋',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2020/100. 茄子蛋 - 恰似你的溫柔.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "怎麼了",
        artist: '周興哲',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/001. 周興哲 - 怎麼了.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Without you",
        artist: '高爾宣 OSN',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/002. 高爾宣 OSN - Without you.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "怪美的",
        artist: '蔡依林',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/003. 蔡依林 - 怪美的.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "備胎",
        artist: '謝和弦(feat. Eetu Kalavainen)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/004 謝和弦 - 備胎 (feat. Eetu Kalavainen).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "綠色",
        artist: '陳雪凝',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/005. 陳雪凝 - 綠色.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Why You Gonna Lie？",
        artist: '高爾宣 OSN',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/006. 高爾宣 OSN - Why You Gonna Lie？.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "最後一次",
        artist: '高爾宣 OSN',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/007. 高爾宣 OSN - 最後一次.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "路過人間 (電視劇我們與惡的距離插曲)",
        artist: '郁可唯',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/008. 郁可唯 - 路過人間 (電視劇我們與惡的距離插曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "說好不哭",
        artist: '周杰倫(ft. 五月天阿信)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/009. 周杰倫 - 說好不哭(With 五月天阿信).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "岩石裡的花",
        artist: 'G.E.M.鄧紫棋',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/010. G.E.M.鄧紫棋 - 岩石裡的花.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "真的傻 (電影一吻定情追愛版主題曲)",
        artist: '徐佳瑩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/011. 徐佳瑩 - 真的傻 (電影一吻定情追愛版主題曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "備胎",
        artist: '謝和弦(feat. Eetu Kalavainen)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/012. 蔡依林 - 腦公.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "天黑請閉眼",
        artist: '陳零九 (feat. 邱鋒澤)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/013 陳零九 - 天黑請閉眼 (feat. 邱鋒澤).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "那女孩對我說",
        artist: '梁文音',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/014. 梁文音 - 那女孩對我說.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "你的酒館對我打了烊",
        artist: '陳雪凝',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/015. 陳雪凝 - 你的酒館對我打了烊.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "玫瑰少年",
        artist: '蔡依林',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/016. 蔡依林 - 玫瑰少年.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "終於了解自由",
        artist: '周興哲',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/017. 周興哲 - 終於了解自由.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "別讓我走遠 (電視劇我們與惡的距離主題曲)",
        artist: '林宥嘉',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/018. 林宥嘉 - 別讓我走遠 (電視劇我們與惡的距離主題曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "至少我還記得",
        artist: '周興哲',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/019. 周興哲 - 至少我還記得.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "消極掰",
        artist: '蔡依林',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/020. 蔡依林 - 消極掰.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "慢冷",
        artist: '梁靜茹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/021. 梁靜茹 - 慢冷.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "起風了 (電視劇加油你是最棒的主題曲)",
        artist: '吳青峰',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/022. 吳青峰 - 起風了 (電視劇加油你是最棒的主題曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "愛情怎麼了嗎",
        artist: '盧廣仲',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/023. 盧廣仲 - 愛情怎麼了嗎.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "差不多姑娘",
        artist: 'G.E.M.鄧紫棋',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/024. G.E.M.鄧紫棋 - 差不多姑娘.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "在青春迷失的咖啡館",
        artist: '王心凌',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/025. 王心凌 - 在青春迷失的咖啡館.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "大眠",
        artist: '王心凌',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/026. 王心凌 - 大眠.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "沙漠駱駝",
        artist: '展展&羅羅',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/027. 展展&羅羅 - 沙漠駱駝.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我好嗎",
        artist: '梁靜茹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/028. 梁靜茹 - 我好嗎.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Runaway",
        artist: '高爾宣 OSN',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/029. 高爾宣 OSN - Runaway.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "騙吃騙吃",
        artist: '頑童 MJ116',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/030. 頑童 MJ116 - 騙吃騙吃.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "你是真的離開我",
        artist: '謝和弦',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/031. 謝和弦 - 你是真的離開我.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Be Alright",
        artist: '高爾宣 OSN',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/032. 高爾宣 OSN - Be Alright.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "走了嗎",
        artist: '張若凡',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/033. 張若凡 - 走了嗎.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "來個蹦蹦",
        artist: '玖壹壹(feat. Ella 陳嘉樺)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/034. 玖壹壹 - 來個蹦蹦 (feat. Ella 陳嘉樺).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "怨偶",
        artist: 'MC HotDog熱狗(feat. 艾怡良)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/035. MC HotDog熱狗 - 怨偶 (feat. 艾怡良).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我要給世界最悠長的濕吻",
        artist: '蔡健雅',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/036. 蔡健雅 - 我要給世界最悠長的濕吻.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "I Go",
        artist: '周湯豪',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/037. 周湯豪 - I Go.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "像我不是白馬王子",
        artist: '謝和弦(feat.高爾宣 & 李杰明)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/038. 謝和弦 - 像我不是白馬王子 (feat.高爾宣 & 李杰明).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "感謝你曾來過",
        artist: 'Ayo97+阿涵',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/039. Ayo97+阿涵 - 感謝你曾來過.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "可不可以 (女聲版)",
        artist: '季彦霖',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/040. 季彦霖 - 可不可以 - 女聲版.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我比從前想你了",
        artist: '畢書盡(Bii)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/041. 畢書盡(Bii)  - 我比從前想你了.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "查某囡仔",
        artist: '李千那',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/042. 李千那 -查某囡仔.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "往後餘生",
        artist: '王貳浪',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/043. 王贰浪 - 往後餘生.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "讓我逃離平庸的生活",
        artist: '白安',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/044. 白安 - 讓我逃離平庸的生活.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "終於勇敢了",
        artist: '袁詠琳',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/045. 袁詠琳 - 終於勇敢了.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "如果我沒有傷口",
        artist: '蔡依林',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/046. 蔡依林 - 如果我沒有傷口.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "R&B Girl",
        artist: '頑童 MJ116(feat. J.Sheon)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/047. 頑童 MJ116 - R&B Girl (feat. J.Sheon).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "有一種悲傷(電影比悲傷更悲傷的故事主題曲)",
        artist: 'A-Lin',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/048. A-Lin - 有一種悲傷(電影比悲傷更悲傷的故事主題曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Why You Gonna Lie",
        artist: '高爾宣 OSN',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/049. 高爾宣 OSN - Why You Gonna Lie.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "你也有今天",
        artist: '蔡依林',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/050. 蔡依林 - 你也有今天.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "轉眼(2018 自傳最終章)",
        artist: '五月天',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/051. 五月天 - 轉眼(2018 自傳最終章).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "殘缺的彩虹",
        artist: '陳綺貞',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/052. 陳綺貞 - 殘缺的彩虹.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Forever Young",
        artist: '艾怡良',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/053. 艾怡良 - Forever Young.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "甜秘密",
        artist: '蔡依林',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/054. 蔡依林 - 甜秘密.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "失眠飛行",
        artist: '接個吻，開一槍+沈以誠+薛明媛',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/055. 接個吻，開一槍+沈以誠+薛明媛 - 失眠飛行.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "歌頌者",
        artist: '吳青峰',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/056. 吳青峰 - 歌頌者.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "無名之輩 (電視劇親愛的，熱愛的主題曲)",
        artist: '陳雪燃',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/057. 陳雪燃 - 無名之輩 (電視劇親愛的，熱愛的主題曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "你懂我說的嗎",
        artist: '呂薔',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/058. 呂薔 - 你懂我說的嗎.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "自由之歌",
        artist: '飛兒樂團 (F.I.R.)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/059. 飛兒樂團 (F.I.R.) - 自由之歌.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "玫瑰少年",
        artist: '五月天',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/060. 五月天 - 玫瑰少年.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "No Play",
        artist: '高爾宣 OSN',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/061. 高爾宣 OSN - No Play.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "請先說你好",
        artist: '賀一航',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/062. 賀一航 - 請先說你好.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "遺書",
        artist: '蔡健雅',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/063. 蔡健雅 - 遺書.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "心跳的證明(電影一吻定情心動版主題曲)",
        artist: '劉人語',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/064. 劉人語 - 心跳的證明(電影一吻定情心動版主題曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我們不像我們",
        artist: '丁噹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/065. 丁噹 - 我們不像我們.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "一半人生 (韓寒電影飛馳人生主題曲)",
        artist: '阿信',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/066. 阿信 - 一半人生 (韓寒電影飛馳人生主題曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "不痛",
        artist: '李佳歡',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/067. 李佳歡 - 不痛.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "直到我遇見了你",
        artist: '李友廷',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/068. 李友廷 - 直到我遇見了你.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "你朝我的方向走來",
        artist: '馬念先 & 9m88',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/069. 馬念先 & 9m88 - 你朝我的方向走來.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "候鳥",
        artist: '蕭煌奇',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/070. 蕭煌奇 - 候鳥.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "對的時間點",
        artist: '林俊傑',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/071. 林俊傑 - 對的時間點.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "少女",
        artist: '林宥嘉',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/072. 林宥嘉 - 少女.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "愛情的模樣 [Life Live]",
        artist: '五月天(feat. 田馥甄)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/073. 五月天 - 愛情的模樣 (feat. 田馥甄) [Life Live].mp3',
		cover: '/cover.jpg'
      },
      {
        name: "鄉下來的",
        artist: '玖壹壹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/074. 玖壹壹 - 鄉下來的.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "It's you",
        artist: '謝和弦(feat. 王艷薇)',
        url: "https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/075. 謝和弦 - It's you (feat. 王艷薇).mp3",
		cover: '/cover.jpg'
      },
      {
        name: "天亮請睜眼",
        artist: '陳零九(feat. 邱鋒澤)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/076. 陳零九 - 天亮請睜眼 (feat. 邱鋒澤).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Without You (Acoustic Version)",
        artist: '高爾宣 OSN(Feat. 陳忻玥)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/077. 高爾宣 OSN -  Without You (Acoustic Version)(Feat. 陳忻玥).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Old Me",
        artist: '高爾宣 OSN',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/078. 高爾宣 OSN -  Old Me.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "流浪狗",
        artist: '黃明志(feat. 蕭敬騰)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/079. 黃明志 - 流浪狗 (feat. 蕭敬騰).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "愛的羅曼死",
        artist: '蔡依林',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/080. 蔡依林 - 愛的羅曼死.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "自導自演(電視劇《延禧攻略》片頭曲)",
        artist: '慢慢說(MURMURSHOW)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/081. 慢慢說(MURMURSHOW) - 自導自演(電視劇《延禧攻略》片頭曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "紅衣女孩",
        artist: '蔡依林',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/082. 蔡依林 - 紅衣女孩.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "初戀",
        artist: '梁文音',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/083. 梁文音 - 初戀.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "芒種",
        artist: '音闕詩聽、趙方婧',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/084. 音闕詩聽、趙方婧 - 芒種.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "都幾歲了(電視劇幸福一家人片尾曲)",
        artist: '陳嘉樺Ella',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/085. 陳嘉樺Ella - 都幾歲了(電視劇幸福一家人片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "COCONUT TREE",
        artist: 'CHING G SQUAD',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/086. CHING G SQUAD - COCONUT TREE.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "台北某個地方",
        artist: '陳綺貞',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/087. 陳綺貞 - 台北某個地方.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "進階",
        artist: '林俊傑',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/088. 林俊傑 - 進階.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "一千個晚安 (電視劇一千個晚安片頭曲)",
        artist: '方泂鑌(阿鑌)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/089. 方泂鑌(阿鑌) - 一千個晚安 (電視劇一千個晚安片頭曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Benz Booty feat. SOWUT",
        artist: '高爾宣 OSN',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/090. 高爾宣 OSN - Benz Booty feat. SOWUT.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "毒蘋果",
        artist: 'G.E.M.鄧紫棋',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/091. G.E.M.鄧紫棋 - 毒蘋果.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "大風吹 (韓劇我身後的陶斯片尾曲)",
        artist: '曾沛慈',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/092. 曾沛慈 - 大風吹 (韓劇我身後的陶斯片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "#敢 有色眼光",
        artist: '高爾宣 OSN',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/093. 高爾宣 OSN - #敢 有色眼光.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "何妨",
        artist: '家家(feat.茄子蛋)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/094. 家家 - 何妨  (feat.茄子蛋).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Without You",
        artist: '高爾宣 OSN',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/095. 高爾宣 OSN -  Without You.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "像水一樣",
        artist: '謝和弦',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/096. 謝和弦 - 像水一樣.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "太空人",
        artist: '吳青峰',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/097. 吳青峰 - 太空人.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Watermelon",
        artist: 'CHING G SQUAD',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/098. CHING G SQUAD - Watermelon.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "走到飛",
        artist: '呂士軒, ØZI, 吳卓源, 熊仔, B.C.W, Barry, 大支',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/099. 呂士軒, ØZI, 吳卓源, 熊仔, B.C.W, Barry, 大支 - 走到飛.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "羅志祥",
        artist: '羅志祥',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2019/100. 羅志祥 - 羅志祥.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "體面",
        artist: '于文文',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/001.體面.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "連名帶姓",
        artist: '張惠妹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/002.連名帶姓.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "等你下課",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/003.等你下課 (Waiting For You).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "如果雨之後",
        artist: '周興哲',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/004.如果雨之後 (The Chaos After You).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "幾分之幾 - 電影＜花甲大人轉男孩＞主題曲",
        artist: '盧廣仲',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/005.幾分之幾 (You Complete Me) - 電影＜花甲大人轉男孩＞主題曲.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我們不一樣",
        artist: '大壯',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/006.我們不一樣.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "偉大的渺小",
        artist: '林俊傑',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/007.偉大的渺小 (Little Big Us).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "黑夜問白天 (53 Dawns)",
        artist: '林俊傑',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/008.黑夜問白天 (53 Dawns).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "慢慢喜歡你",
        artist: '莫文蔚',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/009.慢慢喜歡你 (Growing Fond of You).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "SPOTLIGHT",
        artist: '頑童MJ116',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/010.SPOTLIGHT.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "辣台妹 HOT CHICK",
        artist: '頑童MJ116',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/011.辣台妹 HOT CHICK.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "年少有為",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/012.年少有為.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Will You Remember Me - 台視＜孤單又燦爛的神-鬼怪＞片頭曲",
        artist: '李玖哲',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/013.Will You Remember Me - 緯來戲劇＜三流之路＞片頭曲、八大戲劇台＜擁抱太陽的月亮』片尾曲、台視＜孤單又燦爛的神-鬼怪＞片頭曲.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "不愛我就拉倒",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/014.不愛我就拉倒 (If You Don’t Love Me, It’s Fine).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "讓我為你唱情歌",
        artist: '蕭敬騰',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/015.讓我為你唱情歌.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "說散就散 - ”前任3：再見前任”電影主題曲",
        artist: '袁婭維',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/016.說散就散 - ”前任3：再見前任”電影主題曲.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "倒數",
        artist: 'G.E.M.鄧紫棋',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/017.倒數.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "身後",
        artist: '張惠妹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/018.身後.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "學貓叫",
        artist: '小潘潘 (潘柚彤)+小峰峰 (陳峰)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/019.學貓叫.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "戒菸",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/020.戒菸 (Quit Smoking).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "愛了很久的朋友",
        artist: '田馥甄',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/021.愛了很久的朋友.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "SOUTH SIDE",
        artist: '頑童MJ116',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/022.SOUTH SIDE.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "偷故事的人",
        artist: '張惠妹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/023.偷故事的人.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "無窮 - 韓劇＜當你沉睡時＞片頭曲",
        artist: '吳汶芳',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/024.無窮 (Endlessness) - 韓劇＜當你沉睡時＞片頭曲、＜沒有名字的女人＞片尾曲.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "成全",
        artist: '林宥嘉',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/025.成全.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我多喜歡你，你會知道 - 網劇＜致我們單純的小美好＞推廣曲",
        artist: '王俊琪',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/026.我多喜歡你，你會知道 - 網劇＜致我們單純的小美好＞推廣曲.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "愛過你有多久就有多痛",
        artist: '蕭秉治',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/027.愛過你有多久就有多痛 (Love Hurts).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "追光者",
        artist: '蔡佩軒',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/028.追光者 (The Light Runner).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "2030",
        artist: '頑童MJ116',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/029.2030.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "星火 - 電影＜鬥魚＞主題曲",
        artist: '飛兒樂團 (F.I.R.)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/030.星火 - 電影＜鬥魚＞主題曲.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "少年董 (DON)",
        artist: '頑童MJ116',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/031.少年董 (DON).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "漂向北方 - Live at 13th KKBOX Music Awards",
        artist: '黃明志, G.E.M.鄧紫棋',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/032.漂向北方 (Stranger in the North) - Live at 13th KKBOX Music Awards.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "言不由衷",
        artist: '徐佳瑩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/033.言不由衷 (The Prayer).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "傲嬌",
        artist: '張惠妹, 艾怡良, 徐佳瑩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/034.傲嬌.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Despacito 緩緩 - Mandarin Version",
        artist: 'Luis Fonsi, 林俊傑',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/035.Despacito 緩緩 - Mandarin Version.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我們 -《後來的我們》電影主題曲",
        artist: '陳奕迅',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/036.我們 - 《後來的我們》電影主題曲.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我好想好想你",
        artist: '蕭秉治',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/037.我好想好想你 (Missing You).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "走心",
        artist: '賀敬軒',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/038.走心.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "123我愛你",
        artist: '新樂塵符',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/039.我愛你.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "半句再見",
        artist: '孫燕姿',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/040.半句再見.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "你說了算",
        artist: '張惠妹, 瘦子E.SO',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/041.你說了算.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "什麼歌 - 電影＜捉妖記2＞主題曲",
        artist: '五月天',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/042.什麼歌 (What A Song) - 電影＜捉妖記2＞主題曲.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "忘課 - 電視劇＜前男友不是人＞片尾曲",
        artist: '楊丞琳',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/043.忘課 (Lessons in Love) - 電視劇＜前男友不是人＞片尾曲.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "終於愛情 - 電影＜脫單告急＞主題曲",
        artist: '陳嘉樺',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/044.終於愛情 - 電影＜脫單告急＞主題曲.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "和平分手",
        artist: '梁文音, 蕭煌奇',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/045.和平分手.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "十七",
        artist: 'S.H.E',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/046.十七 (17).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "稻草 - (電視劇《高塔公主》片頭曲)",
        artist: '鄭茵聲',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/047.稻草 (Straw) - (電視劇《高塔公主》片頭曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "有去無回",
        artist: '陳零九, 小男孩樂團',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/048.有去無回 (Messages Seen).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我的事不關你的事 - 八大古裝電視劇＜那年花開月正圓＞片頭曲",
        artist: '賴慈泓, 孫盛希',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/049.我的事不關你的事 (Not Your Business) - 八大古裝電視劇＜那年花開月正圓＞片頭曲.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "買榜",
        artist: '吳卓源, 熊仔',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/050.買榜.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "黏黏",
        artist: '周興哲, 許瑋甯',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/051.黏黏 (The Way You Make Me Feel).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "全是愛",
        artist: '蕭敬騰',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/052.全是愛.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "走跳",
        artist: '頑童MJ116',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/053.走跳 (Zou Tiao).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "壞的好人",
        artist: '張惠妹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/054.壞的好人.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "自然凋謝 - 三立＜姊的時代＞插曲",
        artist: '孫盛希',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/055.自然凋謝 (Almost) - 三立週五華劇＜姊的時代＞插曲.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "小瓶子 - 電影＜假如王子睡著了＞印象曲",
        artist: '林俊傑',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/056.小瓶子 (Message In A Bottle) - 電影＜假如王子睡著了＞印象曲.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "最暖的憂傷 - 電視劇＜溫暖的弦＞主題曲",
        artist: '田馥甄',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/057.最暖的憂傷 - 電視劇＜溫暖的弦＞主題曲.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "不需要知道 - 電視劇＜我的男孩＞片尾曲",
        artist: '韋禮安',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/058.不需要知道 - 電視劇＜我的男孩＞片尾曲.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "灰色",
        artist: '徐佳瑩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/059.灰色 (The Gray).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "地痞",
        artist: '瘦子E.SO',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/060.地痞 (Hooligan).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "另一個童話",
        artist: 'G.E.M.鄧紫棋',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/061.另一個童話.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "就這樣",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/062.就這樣 (That Is It).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "走到飛",
        artist: '熊仔, 大支, 呂士軒, ØZI, 吳卓源, Barry',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/063.走到飛.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "裝醉",
        artist: '張惠妹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/064.裝醉.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "聊傷 - 電視劇＜1006的房客＞片尾曲",
        artist: '畢書盡 (Bii)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/065.聊傷 (Scars) - 電視劇＜1006的房客＞片尾曲.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "你會在哪呢",
        artist: '蕭敬騰',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/066.你會在哪呢.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "凡人",
        artist: '蕭秉治',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/067.凡人 (Mortal).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "飆高速 BIAOGAOSU",
        artist: '頑童MJ116',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/068.飆高速 BIAOGAOSU.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Better Believe Me (Remix)",
        artist: '陳嘉唯, 頑童MJ116',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/069.Better Believe Me (Remix).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "沒那麼脆弱 - 韓劇＜名不虛傳＞片尾曲",
        artist: '李玉璽',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/070.沒那麼脆弱 (Fragile) - 韓劇＜名不虛傳＞片尾曲.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "說散就散 - 官方對唱",
        artist: '何維健, 潘嘉麗',
        url: "https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/071.說散就散 - 官方對唱.mp3",
		cover: '/cover.jpg'
      },
      {
        name: "我依然是我 - 電視劇＜我的男孩＞插曲",
        artist: '王笠人',
        url: "https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/072.我依然是我 (I'm Still Here) - 電視劇＜我的男孩＞插曲.mp3",
		cover: '/cover.jpg'
      },
      {
        name: "溫柔的奇蹟 - 電視劇《我的男孩》片頭曲",
        artist: '范瑋琪',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/073.溫柔的奇蹟 - 電視劇《我的男孩》片頭曲.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "幸褔路上 - 電影《幸福路上》主題曲",
        artist: '蔡依林',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/074.幸褔路上 - 電影《幸福路上》主題曲.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "可樂",
        artist: '林采欣',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/075.可樂 (Cola).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "脫罪 ACQUITTAL",
        artist: '頑童MJ116',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/076.脫罪 ACQUITTAL.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "因為曾經愛過 - 電影＜決戰千王＞推廣曲",
        artist: '蔡佩軒',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/077.因為曾經愛過 - 電影＜決戰千王＞推廣曲.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "耳朵",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/078.耳朵.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "王牌冤家",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/079.王牌冤家.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "什麼什麼 - 電影＜捉妖記 2＞主題曲",
        artist: '蔡依林',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/080.什麼什麼 (Stand up) - 電影＜捉妖記 2＞主題曲.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "對的人 - 電視劇＜美好生活＞主題曲",
        artist: '莊心妍',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/081.對的人 - 電視劇＜美好生活＞主題曲.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "風衣",
        artist: '孫燕姿',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/082.風衣.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "致青春 - 瑯琊榜3D手遊主題曲",
        artist: '八三夭',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/083.致青春 (Young Guns) - 瑯琊榜3D手遊主題曲.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "差一步",
        artist: '大壯',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/084.差一步.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "眉飛色舞PLUS",
        artist: '鄭秀文+八三夭',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/085.眉飛色舞PLUS.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "恐怖情人",
        artist: '玖壹壹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/086.恐怖情人 (Horrifying Lover).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "一千零一個願望 - 單人版",
        artist: '楊丞琳',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/087.一千零一個願望 - 單人版.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "一愛難求 - 電視劇＜扶搖＞片尾曲",
        artist: '徐佳瑩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/088.一愛難求 - 電視劇＜扶搖＞片尾曲.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "最美的期待",
        artist: '南征北戰',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/089.最美的期待.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "奉陪",
        artist: '于文文',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/090.奉陪.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "就這麼錯過 - 電視劇【翻牆的記憶】片尾曲",
        artist: '馬仕釗',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/091.就這麼錯過 - 電視劇【翻牆的記憶】片尾曲.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "飛雲之下",
        artist: '韓紅 & 林俊傑',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/092.飛雲之下.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "早應該",
        artist: '李毓芬',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/093.早應該 (We Should Have).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "一樣的是",
        artist: '李佳薇',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/094.一樣的是.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "B.O.",
        artist: 'ØZI, 9m88',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/095.B.O..mp3',
		cover: '/cover.jpg'
      },
      {
        name: "如果我是你",
        artist: '邱鋒澤, 吳心緹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/096.如果我是你 (If I Were You).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "有太多人",
        artist: '高進',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/097.有太多人.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "後來的我們 - （電影《後來的我們》片名曲）眼淚未乾版",
        artist: '五月天',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/098.後來的我們 (Here, After, Us) - （電影《後來的我們》片名曲）眼淚未乾版.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "王妃 2.0",
        artist: '蕭敬騰',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/099.王妃 2.0.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "當每顆星星 阿信版",
        artist: '阿信',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2018/100.當每顆星星 阿信版 (Every Star (Ashin Version)).mp3',
		cover: '/cover.jpg'
      }

    ]
});