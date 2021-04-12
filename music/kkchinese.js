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
      },
      {
        name: "小幸運",
        artist: '田馥甄',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/001. 田馥甄 - 小幸運.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "告白氣球",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/002. 周杰倫 - 告白氣球.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "演員",
        artist: '薛之謙',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/003. 薛之謙 - 演員.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "如果雨之後",
        artist: '周興哲',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/004. 周興哲 - 如果雨之後.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "那些你很冒險的夢",
        artist: '林俊傑',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/005. 林俊傑 - 那些你很冒險的夢.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "你，好不好？",
        artist: '周興哲',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/006. 周興哲 - 你，好不好？.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "終於結束的起點",
        artist: '五月天',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/007. 五月天 - 終於結束的起點.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "可惜沒如果",
        artist: '林俊傑',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/008. 林俊傑 - 可惜沒如果.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "後來的我們",
        artist: '五月天',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/009. 五月天 - 後來的我們.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "追光者",
        artist: '岑寧兒',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/010. 岑寧兒 - 追光者.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "不該",
        artist: '周杰倫(ft. 張惠妹)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/011. 周杰倫 - 不該 (with 張惠妹).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "修煉愛情",
        artist: '林俊傑',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/012. 林俊傑 - 修煉愛情.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "連名帶姓",
        artist: '張惠妹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/013. 張惠妹 - 連名帶姓.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "她說",
        artist: '林俊傑',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/014.林俊傑 -她說.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "你還要我怎樣",
        artist: '薛之謙',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/015. 薛之謙 - 你還要我怎樣.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "說散就散",
        artist: 'JC',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/016. JC - 說散就散.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "相依為命",
        artist: '陳小春',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/017.陳小春-相依為命.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "突然好想你",
        artist: '五月天',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/018.五月天-突然好想你.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "說好的幸福呢",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/019.周杰倫-說好的幸福呢.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "不為誰而作的歌",
        artist: '林俊傑',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/020. 林俊傑 - 不為誰而作的歌.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "剛剛好",
        artist: '薛之謙',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/021. 薛之謙 - 剛剛好.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "晴天",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/022. 周杰倫 - 晴天.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "以後別做朋友",
        artist: '周興哲',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/023.周興哲-以後別做朋友.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "醜八怪",
        artist: '薛之謙',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/024. 薛之謙 - 醜八怪.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "偉大的渺小",
        artist: '林俊傑',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/025. 偉大的渺小.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "淘汰(國)",
        artist: '陳奕迅',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/026. 陳奕迅 - 淘汰(國).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我多喜歡你 你會知道",
        artist: '王俊琪',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/027.王俊琪 - 我多喜歡你 你會知道.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "珊瑚海",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/028. 周杰倫 - 珊瑚海.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "擱淺",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/029.周杰倫-擱淺.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "安靜",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/030. 周杰倫 - 安靜.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "明明就",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/031.周杰倫-明明就.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "不能說的祕密",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/032.周杰倫-不能說的祕密.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "算什麼男人",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/033. 周杰倫 - 算什麼男人.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "曖昧",
        artist: '薛之謙',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/034. 薛之謙 - 曖昧.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "演員 (Live)",
        artist: '田馥甄',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/035. 田馥甄 - 演員 (Live).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "風衣",
        artist: '孫燕姿',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/036. 孫燕姿 - 風衣.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "有點甜",
        artist: '汪蘇瀧',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/037.汪蘇瀧-有點甜.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "飄向北方",
        artist: '黃明志vs王力宏',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/038. 黃明志vs王力宏 - 飄向北方.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "蒲公英的約定",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/039.周杰倫-蒲公英的約定.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "彩虹",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/040.周杰倫-彩虹.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "一千零一個願-單人版",
        artist: '楊丞琳',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/041.楊丞琳 - 一千零一個願-單人版.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "讓我留在你身邊",
        artist: '陳奕迅',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/042. 陳奕迅 - 讓我留在你身邊.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "光年之外",
        artist: 'G.E.M. 鄧紫棋',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/043.G.E.M. 鄧紫棋 - 光年之外.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "一路向北",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/044.周杰倫-一路向北.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "開不了口",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/045.周杰倫-開不了口.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "說謊",
        artist: '林宥嘉',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/046.林宥嘉-說謊.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "給我一首歌的時間",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/047.周杰倫-給我一首歌的時間.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "龍捲風",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/048.周杰倫 - 龍捲風.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "最長的電影",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/049.周杰倫 - 最長的電影.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "戒菸",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/050. 李榮浩 - 戒菸.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "說了再見",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/051. 周杰倫-說了再見.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我不願讓你一個人",
        artist: '五月天',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/052. 五月天-我不願讓你一個人.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "獨家記憶",
        artist: '陳小春',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/053.  陳小春 - 獨家記憶.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "青春住了誰",
        artist: '楊丞琳',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/054.  楊丞琳 - 青春住了誰.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "你不是真正的快樂",
        artist: '五月天',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/055. 五月天-你不是真正的快樂.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "偷故事的人",
        artist: '張惠妹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/056. 張惠妹 - 偷故事的人.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "失落沙洲",
        artist: '徐佳莹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/057. 徐佳莹-失落沙洲.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "派對動物",
        artist: '五月天',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/058. 五月天 - 派對動物.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "給我一個理由忘記",
        artist: 'A-lin',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/059. Alin-給我一個理由忘記.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "記得",
        artist: '林俊傑',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/060. 林俊傑-記得.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "好好(想把你寫成一首歌)",
        artist: '五月天',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/061. 好好(想把你寫成一首歌).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "剛好遇見你",
        artist: '李玉剛',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/062. 李玉剛 - 剛好遇見你.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "江南",
        artist: '林俊傑',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/063. 林俊傑-江南.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "愛笑的眼睛",
        artist: '林俊傑',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/064. 林俊傑-愛笑的眼睛.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "如果我們不曾相遇",
        artist: '五月天',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/065. 五月天 - 如果我們不曾相遇.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "言不由衷",
        artist: '徐佳瑩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/066. 徐佳瑩 - 言不由衷.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我不配",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/067. 周杰倫-我不配.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "紳士後",
        artist: '薛之謙',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/068. 薛之謙-紳士後.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "背對背擁抱",
        artist: '林俊傑',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/069. 林俊傑-背對背擁抱.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "夜曲",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/070. 周杰倫-夜曲.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "洋蔥",
        artist: '五月天',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/071. 五月天-洋蔥.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "當你",
        artist: '林俊傑',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/072. 林俊傑-當你.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "愛你",
        artist: '陳芳語',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/073. 陳芳語-愛你.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "永不失聯的愛",
        artist: '周興哲',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/074. 周興哲 - 永不失聯的愛.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我們不一樣",
        artist: '大壯',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/075. 大壯 - 我們不一樣.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "取消資格",
        artist: '陳小春',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/076. 陳小春-取消資格.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "聽見下雨的聲音",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/077. 周杰倫 - 聽見下雨的聲音.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "誰來剪月光",
        artist: '陳奕迅',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/078. 陳奕迅-誰來剪月光.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我好想你",
        artist: '蘇打綠',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/079. 蘇打綠-我好想你.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我懷念的",
        artist: '孫燕姿',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/080. 孫燕姿-我懷念的.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "寂寞寂寞就好",
        artist: '田馥甄',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/081. 田馥甄-寂寞寂寞就好.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "不將就",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/082. 李榮浩-不將就.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "學不會",
        artist: '林俊傑',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/083. 林俊傑-學不會.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "遇見",
        artist: '孫燕姿',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/084. 孫燕姿-遇見.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "浪費",
        artist: '林宥嘉',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/085. 林宥嘉-浪費.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我多喜歡你 你會知道",
        artist: '王俊琪',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/086. 王俊琪 - 我多喜歡你 你會知道.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "李白",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/087. 李榮浩 - 李白.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "那些年",
        artist: '胡夏',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/088. 胡夏-那些年.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我的歌聲裡",
        artist: '曲婉婷',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/089. 曲婉婷-我的歌聲裡.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "不會有事的",
        artist: '連詩雅',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/090. 連詩雅-不會有事的.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "回到過去",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/091. 周杰倫-回到過去.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "身後",
        artist: '張惠妹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/092. 張惠妹 - 身後.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "小情歌",
        artist: '蘇打綠',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/093. 蘇打綠-小情歌.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "年輪說",
        artist: '楊丞琳',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/094. 楊丞琳 - 年輪說.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "星晴",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/095. 周杰倫-星晴.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "愛你沒差",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/096. 周杰倫-愛你沒差.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "楓",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/097. 周杰倫-楓.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "你就不要想起我",
        artist: '田馥甄',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/098. 田馥甄-你就不要想起我.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "頑固",
        artist: '五月天',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/099. 五月天-頑固.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我知道要微笑",
        artist: '周興哲',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2017/100. 周興哲-我知道要微笑.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "像天堂的懸崖 (韓劇主君的太陽片頭曲)",
        artist: '李佳薇',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/001. 李佳薇 (Jess Lee)_像天堂的懸崖 (韓劇主君的太陽片頭曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我還是愛著你【三立華劇[幸福兌換券]片尾曲】",
        artist: 'MP魔幻力量',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/002. MP魔幻力量（Magic Power）_我還是愛著你【三立華劇[幸福兌換券]片尾曲】.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "缺口 (電影等一個人咖啡主題曲)",
        artist: '庾澄慶',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/003. 缺口 (電影等一個人咖啡主題曲) (庾澄慶).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "以後別做朋友 (電視劇 16個夏天 片尾曲)",
        artist: '周興哲',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/004. 16個夏天 電視原聲帶_以後別做朋友 [片尾曲] - Eric 周興哲.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "在你身邊 (電視劇愛的生存之道片頭曲)",
        artist: '韋禮安',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/005. 韋禮安 (William Wei)_在你身邊 (電視劇愛的生存之道片頭曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "身不由己 (戲劇「步步驚情」主題曲)",
        artist: '丁噹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/006. 丁噹（Della）_身不由己 (戲劇「步步驚情」主題曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "克卜勒",
        artist: '孫燕姿',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/007. 孫燕姿 (Yanzi Sun)_克卜勒.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "等一個人 (電影等一個人咖啡主題曲)",
        artist: '林芯儀',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/008. 等一個人 (電影等一個人咖啡主題曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "想你的夜 (未眠版)",
        artist: '關喆',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/009. 關喆 (Grady Guan)_想你的夜 (未眠版).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "偷偷的【三立華劇[幸福兌換券]插曲】",
        artist: 'MP魔幻力量',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/010. MP魔幻力量（Magic Power）_偷偷的【三立華劇[幸福兌換券]插曲】.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我沒那麼愛你",
        artist: '丁噹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/011. 丁噹（Della）_我沒那麼愛你.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "歲月這把刀 (「女人30 情定水舞間」片尾曲 )",
        artist: '林凡',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/012. 林凡_歲月這把刀 (「女人30 情定水舞間」片尾曲 ).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "敢愛敢當",
        artist: '丁噹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/013. 丁噹（Della）_敢愛敢當.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我在你身旁 (女人30情定水舞間片頭曲)",
        artist: '羅美玲',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/014. 羅美玲 (Irene Luo)_我在你身旁 (女人30情定水舞間片頭曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "愛存在 (『終極X宿舍』 電視原聲帶 片尾曲)",
        artist: '王詩安',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/015. 『終極X宿舍』電視原聲帶_愛存在-王詩安 (『終極X宿舍』 電視原聲帶 片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "尋人啟事",
        artist: '徐佳瑩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/016. 徐佳瑩 (Lala Hsu)_尋人啟事.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "面具",
        artist: '韋禮安',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/017. 韋禮安 (William Wei)_面具.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "甩開 (TVBS「A咖的路」插曲)",
        artist: '丁噹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/018. 丁噹（Della）_甩開 (TVBS「A咖的路」插曲、東風「錯嫁」片頭).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "1/2 (三立都會偶像劇 愛上兩個我 片頭曲)",
        artist: '炎亞綸',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/019. 炎亞綸 (Aaron Yan)_12 (三立都會偶像劇 愛上兩個我 片頭曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "基因決定我愛你 (偶像劇 喜歡．一個人 插曲)",
        artist: '陳彥允',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/020. 陳彥允 (Ian Chen)_基因決定我愛你 (偶像劇 喜歡．一個人 插曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "第三人稱",
        artist: '蔡依林',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/021. 蔡依林 (Jolin Tsai)_第三人稱.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "愛．這件事情 (韓劇愛在異鄉片頭曲)",
        artist: '傅又宣',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/022. 傅又宣_愛．這件事情 (FOX衛視中文台韓劇 愛在異鄉片頭曲、八大韓劇 愛上恢單女片頭曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "都對也都錯",
        artist: '張惠妹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/023. a MEI (張惠妹)_都對也都錯.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "這不是我 (三立都會偶像劇「愛上兩個我」片尾曲)",
        artist: '炎亞綸',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/024. 炎亞綸 (Aaron Yan)_這不是我 (三立都會偶像劇「愛上兩個我」片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "打呼 (電視劇媽咪的男朋友片頭曲)",
        artist: '潘瑋柏(feat. 楊丞琳)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/025. 潘瑋柏 (Wilber Pan)_打呼-feat. 楊丞琳 (電視劇媽咪的男朋友片頭曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "下一次擁抱 (偶像劇 再說一次我願意 插曲)",
        artist: '朱俐靜',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/026. 朱俐靜 (Miu Chu)_下一次擁抱 (偶像劇 再說一次我願意 插曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "愛其實很殘忍",
        artist: '梁文音',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/027. 梁文音 (Rachel Liang)_愛其實很殘忍.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "你給我聽好",
        artist: '陳奕迅',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/028. 陳奕迅 (Eason Chan)_你給我聽好.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "將軍令 (電影「黃飛鴻」主題曲)",
        artist: '五月天',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/029. 五月天 (Mayday)_將軍令 - 電影「黃飛鴻」主題曲.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "PLAY我呸",
        artist: '蔡依林',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/030. 蔡依林 (Jolin Tsai)_PLAY我呸.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "天使的指紋",
        artist: '孫燕姿',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/031. 孫燕姿 (Yanzi Sun)_天使的指紋.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "愛到站了 (電視劇 熱海戀歌 主題曲)",
        artist: '李千娜',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/032. 李千娜 (Chloe Lee)_愛 到站了 (電視劇 熱海戀歌 主題曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "不解釋親吻",
        artist: '蕭亞軒',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/033. 蕭亞軒 (ELVA Hsiao)_不解釋親吻.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "到不了的地方《電影 『到不了的地方』主題曲》",
        artist: '蕭敬騰',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/034. 蕭敬騰_到不了的地方 《電影 『到不了的地方』主題曲》.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "隨時都在 (偶像劇 喜歡．一個人 片尾曲)",
        artist: '品冠',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/035. 品冠（Victor）_隨時都在  (偶像劇 喜歡．一個人 片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "三月",
        artist: '張惠妹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/036. a MEI (張惠妹)_三月.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "喜劇之王",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/037. 李榮浩_喜劇之王.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "不懂寂寞 (女人30情定水舞間插曲)",
        artist: '羅美玲',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/038. 羅美玲 (Irene Luo)_不懂寂寞 (三立、東森華劇-女人30情定水舞間插曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "咖啡在等一個人 (電影等一個人咖啡主題曲)",
        artist: '周慧敏',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/039. 咖啡在等一個人 (電影等一個人咖啡主題曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "若你真的有想過",
        artist: '白安',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/040. 白安 (Ann)_若你真的有想過.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "接下來是什麼",
        artist: '白安',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/041. 白安 (Ann)_接下來是什麼.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "忍不住想念 (韓劇奇皇后片尾曲)",
        artist: '李佳薇',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/042. 李佳薇 (Jess Lee)_忍不住想念 (韓劇奇皇后片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "為愛而活",
        artist: '張韶涵',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/043. 張韶涵_為愛而活.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Kelly 《韓劇 『來自星星的你』片尾曲》",
        artist: '蕭敬騰',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/044. 蕭敬騰_Kelly 《韓劇 『來自星星的你』片尾曲》.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "新宿 (偶像劇妹妹片尾曲)",
        artist: '安心亞',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/045. 安心亞_新宿 (偶像劇妹妹片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "特別的人",
        artist: '方大同',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/046. 方大同 (Khalil Fong)_特別的人.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "點水",
        artist: '楊丞琳',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/047. 楊丞琳 (Rainie Yang)_點水.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "這樣你還要愛我嗎",
        artist: '張惠妹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/048. a MEI (張惠妹)_這樣你還要愛我嗎.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "跳進來",
        artist: '張惠妹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/049. a MEI (張惠妹)_跳進來.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我不知道愛是什麼 (電視劇 16個夏天 插曲)",
        artist: '艾怡良',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/050. 16個夏天 電視原聲帶_我不知道愛是什麼 [插曲] - 艾怡良 (Eve Ai).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "笑到流淚",
        artist: '李佳薇',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/051. 李佳薇 (Jess Lee) - 笑到流淚.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "敢傷",
        artist: '蕭亞軒',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/052. 蕭亞軒 (ELVA Hsiao)_敢傷.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "狼",
        artist: '韋禮安',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/053. 韋禮安 (William Wei)_狼.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "九號球【電影[逆轉勝]主題曲】",
        artist: '五月天 怪獸',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/054. [逆轉勝] 五月天∕怪獸 原聲原創紀_九號球【電影[逆轉勝]主題曲】(五月天 怪獸).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "陳淑芬與林志豪",
        artist: '王心凌',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/055. 王心凌_陳淑芬與林志豪.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Just Believe",
        artist: '頑童 MJ116',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/056. 頑童 MJ116_Just Believe.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "再見陌生人 (電視劇 深圳合租記 片尾曲)",
        artist: '羅志祥',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/057. 羅志祥_再見陌生人 (電視劇 深圳合租記 片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "鈴鈴 (韓劇 繼承者們片頭曲)",
        artist: '蕭敬騰(feat.范瑋琪)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/058. 蕭敬騰_鈴鈴 - feat.范瑋琪 (韓劇 繼承者們片頭曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "可不可以你也剛好喜歡我",
        artist: 'FS (Fuying & Sam)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/059. FS (Fuying  Sam)_可不可以你也剛好喜歡我.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "不過失去了一點點 (八大綜合台戲劇終極惡女片尾曲)",
        artist: '曾沛慈',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/060. 曾沛慈_不過失去了一點點 (八大綜合台戲劇終極惡女片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "套不住 (「女人30 情定水舞間」插曲 )",
        artist: '林凡(feat.符致逸)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/061. 林凡_套不住 - feat.符致逸 (「女人30 情定水舞間」插曲 ).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "浪漫來襲",
        artist: '蕭亞軒',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/062. 蕭亞軒 (ELVA Hsiao)_浪漫來襲.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "明天的事情  (韓劇 『未來的選擇』中文片頭曲)",
        artist: '徐佳瑩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/063. 徐佳瑩 (Lala Hsu)_明天的事情  (韓劇 『未來的選擇』中文片頭曲、電影『情慾三重奏』中文宣傳曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Baby Boy (OT: Yipppe)",
        artist: '王心凌',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/064. 王心凌_Baby boy (OT Yipppe).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "放下, 旅行 (偶像劇再說一次我願意片尾曲)",
        artist: '李玉璽',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/065. 李玉璽_放下, 旅行 (偶像劇再說一次我願意片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "不搭 (韓劇奇皇后片尾曲)",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/066. 李榮浩 - 不搭 - (韓劇奇皇后片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "像我一樣愛你的人",
        artist: '蘇盈之',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/067. 蘇盈之 (Soo Wincci)_像我一樣愛你的人.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "偏執面",
        artist: '張惠妹(feat. 蛋堡)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/068. a MEI (張惠妹)_偏執面-feat. 蛋堡.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "祝你幸福",
        artist: '李聖傑',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/069. 李聖傑 (Sam Lee)_祝你幸福.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "可以了",
        artist: '陳奕迅',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/070. 陳奕迅 (Eason Chan)_可以了.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我只是害怕不在妳身旁 (「女人30情定水舞間」插曲)",
        artist: '陳零九',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/071. 「女人30情定水舞間」電視原聲帶_我只是害怕不在妳身旁／陳零九 (「女人30情定水舞間」插曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "失憶的金魚",
        artist: '楊丞琳',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/072. 楊丞琳 (Rainie Yang)_失憶的金魚.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "小人物大公主 (偶像劇「喜歡．一個人」片頭曲)",
        artist: '陳彥允',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/073. 陳彥允 (Ian Chen)_小人物大公主 (偶像劇「喜歡．一個人」片頭曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "用餘生去愛",
        artist: '張學友',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/074. 張學友 (Jacky Cheung)_用餘生去愛.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "強求",
        artist: '李佳薇',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/075. 李佳薇 (Jess Lee)_強求.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "戰神",
        artist: 'MP魔幻力量',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/076. MP魔幻力量（Magic Power）_戰神.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "小蘋果",
        artist: '筷子兄弟',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/077. 筷子兄弟_小蘋果.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "尚好的青春",
        artist: '孫燕姿',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/078. 孫燕姿 (Yanzi Sun)_尚好的青春.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "無限大",
        artist: '孫燕姿',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/079. 孫燕姿 (Yanzi Sun)_無限大.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "每一次戀愛 (三立華劇 媽咪的男朋友 片尾曲)",
        artist: '梁文音',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/080. 梁文音_每一次戀愛 (三立華劇 媽咪的男朋友 片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "有感情歌 (「巷弄裡的那家書店」片尾曲)",
        artist: '黃鴻升',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/081. 黃鴻升 (Alien Huang)_有感情歌 (「巷弄裡的那家書店」片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "自虐",
        artist: '張惠妹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/082. a MEI (張惠妹)_自虐.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "愛就是 (三立華劇 幸福兌換券 片頭曲)",
        artist: '胡宇威',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/083. 胡宇威 (George Hu)_愛就是 (三立華劇 幸福兌換券 片頭曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "I'm Not Yours",
        artist: '蔡依林(feat.安室奈美惠)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/084. 蔡依林 (Jolin Tsai)_Im Not Yours - feat.安室奈美惠NAMIE AMURO.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "渴",
        artist: '孫燕姿',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/085. 孫燕姿 (Yanzi Sun)_渴.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "說不出的味道",
        artist: '王心凌',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/086. 王心凌_說不出的味道.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "算什麼男人",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/087. 周杰倫 (Jay Chou)_算什麼男人.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "娛樂天空",
        artist: '陳奕迅',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/088. 陳奕迅 (Eason Chan)_娛樂天空.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "不做壞人很久了",
        artist: '陳威全',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/089. 陳威全_不做壞人很久了.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "下個轉彎是你嗎",
        artist: '楊丞琳',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/090. 楊丞琳 (Rainie Yang)_下個轉彎是你嗎.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "濃妝",
        artist: '朱俐靜',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/091. 朱俐靜 (Miu Chu)_濃妝.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "可惜沒如果",
        artist: '林俊傑',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/092. 林俊傑 (JJ Lin)_可惜沒如果.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我就是愛你 (ASUS ZenFone 2014年度代言歌曲)",
        artist: '蕭敬騰',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/093. 蕭敬騰_我就是愛你( ASUS ZenFone 2014年度代言歌曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "恆溫",
        artist: '孫盛希',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/094. 孫盛希_恆溫.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "飛高高",
        artist: '張惠妹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/095. a MEI (張惠妹)_飛高高.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "真的我 (「謊言遊戲」戲劇片尾曲)",
        artist: '陳嘉樺',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/096. 陳嘉樺 (Ella Chen)_真的我 (「謊言遊戲」戲劇片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "匆匆那年",
        artist: '王菲',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/097. 王菲 (Faye Wong)_匆匆那年.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "美杜莎",
        artist: '蔡依林',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/098. 蔡依林 (Jolin Tsai)_美杜莎.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "結巴 (戲劇步步驚情插曲)",
        artist: '嚴爵+郭雪芙',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/099. 步步驚情電視原聲帶_結巴 - 嚴爵+郭雪芙 (戲劇步步驚情插曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "狗",
        artist: '張惠妹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2014/100. a MEI (張惠妹)_狗.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "傷心的人別聽慢歌",
        artist: '五月天',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/001. 五月天（Mayday）_傷心的人別聽慢歌 (貫徹快樂).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "手掌心 (中視古裝大戲「蘭陵王」片尾曲)",
        artist: '丁噹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/002. 蘭陵王電視原聲帶_手掌心 (演唱：丁噹)【中視古裝大戲「蘭陵王」片尾曲】.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "一個人想著一個人",
        artist: '曾沛慈',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/003. 曾沛慈_一個人想著一個人.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "修煉愛情",
        artist: '林俊傑',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/004. 林俊傑 (JJ Lin)_修煉愛情.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "一千萬次的淚水(韓劇『我的野蠻情人』片尾曲)",
        artist: '朱俐靜',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/005. 朱俐靜_一千萬次的淚水 (三立偶像劇「真愛黑白配」插曲、緯來戲劇台韓劇『我的野蠻情人』片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "幸福不是情歌 (三立偶像劇[兩個爸爸]片尾曲)",
        artist: '劉若英',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/006. 劉若英（Rene）_幸福不是情歌【三立偶像劇[兩個爸爸]片尾曲】.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "命運 (中視古裝大戲「蘭陵王」插曲)",
        artist: '家家',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/007. 蘭陵王電視原聲帶_命運 （演唱：家家）【中視古裝大戲「蘭陵王」插曲】.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Come back to me (三立偶像劇「真愛黑白配」片頭曲)",
        artist: '畢書盡',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/008. 畢書盡 (Bii)_Come back to me (三立偶像劇「真愛黑白配」片頭曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "入陣曲 (中視古裝大戲「蘭陵王」片頭曲)",
        artist: '五月天',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/009. 蘭陵王電視原聲帶_入陣曲(演唱：五月天)【中視古裝大戲「蘭陵王」片頭曲】.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我好想你",
        artist: '蘇打綠',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/010. 蘇打綠 (Sodagreen)_我好想你.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "不應該勇敢 (電視劇 美味的想念 片尾曲)",
        artist: '蘇盈之',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/011. 美味的想念 電視原聲帶_不應該勇敢 (演唱：蘇盈之WINCCI 片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "黑暗騎士",
        artist: '林俊傑(feat. 五月天)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/012. 林俊傑 (JJ Lin)_黑暗騎士 (feat. 五月天).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "因你而在",
        artist: '林俊傑',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/013. 林俊傑 (JJ Lin)_因你而在.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "好的情人 (TVBS「飛越龍門客棧」片尾曲)",
        artist: '嚴爵',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/014. 嚴爵（Yen-j）_好的情人【TVBS「飛越龍門客棧」片尾曲】.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "存在的力量 (韓劇『我的野蠻情人』片頭曲)",
        artist: '朱俐靜',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/015. 朱俐靜_存在的力量 (緯來戲劇台韓劇『我的野蠻情人』片頭曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "親愛的路人 (TVBS[姐姐立正向前走]片尾曲)",
        artist: '劉若英',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/016. 劉若英（Rene）_親愛的路人【TVBS[姐姐立正向前走]片尾曲】.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "有點甜",
        artist: '汪蘇瀧(feat. By2)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/017. 汪蘇瀧_有點甜 (feat.By2)(中視中天綜合台-借用一下你的愛插曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "潔癖 ([綠箭口香糖DOUBLEMINT]廣告曲)",
        artist: '嚴爵 (ft. 五月天)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/018. 嚴爵（Yen-j）_潔癖 (嚴爵+五月天合唱版) 【五月天[綠箭口香糖DOUBLEMINT]廣告曲】.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "聽見下雨的聲音",
        artist: '魏如昀',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/019. 聽見下雨的聲音 電影原聲帶_聽見下雨的聲音 (演唱：魏如昀).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "好好先生",
        artist: '蕭煌奇',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/020. 蕭煌奇_好好先生.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Easy Come Easy Go",
        artist: '蔡健雅(feat. MC HotDog熱狗)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/021. 蔡健雅 (Tanya Chua)_Easy Come Easy Go (feat. MC HotDog熱狗).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "其實都沒有",
        artist: '楊宗緯',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/022. 楊宗緯_其實都沒有.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "從未到過的地方 (三立華劇『幸福選擇題』主題曲)",
        artist: '王心凌',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/023. 王心凌_從未到過的地方 (三立華劇『幸福選擇題』主題曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "悄悄告訴你 (『被偷走的那五年』電影主題曲)",
        artist: '范瑋琪',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/024. 范瑋琪_悄悄告訴你 (『被偷走的那五年』電影主題曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "幸福無關 (三立偶像劇「真愛黑白配」片尾曲)",
        artist: '畢書盡 (Bii)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/025. 畢書盡 (Bii)_幸福無關 (三立偶像劇「真愛黑白配」片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "為愛啟程",
        artist: '楊丞琳',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/026. 楊丞琳 (Rainie Yang)_為愛啟程.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "能不能",
        artist: '李玟',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/027. 李玟(CoCo Lee)_能不能.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "步步 (戲劇「步步驚情」主題曲)",
        artist: '五月天',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/028. 五月天（Mayday）_步步【戲劇「步步驚情」主題曲】.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "你眼中的我 (三立華劇《幸福選擇題》片尾曲)",
        artist: '郭靜',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/029. 郭靜 (Claire)_你眼中的我 (三立華劇《幸福選擇題》片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "分手後不要做朋友 (三立偶像劇「回到愛以前」片尾曲)",
        artist: '梁文音',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/030. 梁文音_分手後不要做朋友 (三立偶像劇「回到愛以前」片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "至少我有我",
        artist: '嚴爵',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/031. 嚴爵（Yen-j）_至少我有我【嚴爵[鋼鐵情人]世界巡迴演唱會主題曲】.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "你就不要想起我",
        artist: '田馥甄',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/032. 田馥甄(Hebe)_你就不要想起我.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "身不由己 (戲劇步步驚情主題曲)",
        artist: '丁噹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/033. 步步驚情電視原聲帶_身不由己 -  丁噹 (戲劇步步驚情主題曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "不哭了",
        artist: 'BY2',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/034. BY2_不哭了.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "忘了我",
        artist: '楊宗緯',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/035. 楊宗緯_忘了我.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我會在你身邊 (三立偶像劇「真愛黑白配」插曲)",
        artist: '畢書盡 (Bii)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/036. 畢書盡 (Bii)_我會在你身邊 (三立偶像劇「真愛黑白配」插曲、紳士的品格片頭曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "捨不得 (電視劇『幸福選擇題』插曲)",
        artist: '李唯楓',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/037. 李唯楓_捨不得 (電視劇『幸福選擇題』插曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "非你不可（電視劇『幸福街第3號出口』片頭曲）",
        artist: '陳勢安',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/038. 陳勢安_非你不可（電視劇『幸福街第3號出口』片頭曲）.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "零度的親吻",
        artist: '林俊傑',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/039. 林俊傑 (JJ Lin)_零度的親吻.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "就這樣嗎",
        artist: 'BY2',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/040. 我租了一個情人 電視原聲帶_就這樣嗎 (BY2).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "不變 (電視劇「金大花的華麗冒險」插曲)",
        artist: 'Olivia Ong (王儷婷)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/041. Olivia Ong (王儷婷)_不變 (電視劇「金大花的華麗冒險」插曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我不懂,愛",
        artist: '丁衣凡',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/042. 美味的想念 電視原聲帶_我不懂,愛 (演唱：丁衣凡 插曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "心裡的孩子",
        artist: '梁文音',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/043. 梁文音_心裡的孩子.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "在你身邊 (電視劇愛的生存之道片頭曲)",
        artist: '韋禮安',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/044. 韋禮安_在你身邊 (電視劇愛的生存之道片頭曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "你好嗎",
        artist: '王詩安',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/045. 王詩安 (Diana)_你好嗎.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "愛情怎麼喊停",
        artist: '曾沛慈',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/046. 原來是美男 電視原聲帶_愛情怎麼喊停 (曾沛慈).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "一念之間",
        artist: '陶喆',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/047. 陶喆_一念之間.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "山丘",
        artist: '李宗盛',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/048. 李宗盛_山丘.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "勇敢很好 (緯來戲劇[需要浪漫2]片尾曲)",
        artist: '楊丞琳',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/049. 楊丞琳 (Rainie Yang)_勇敢很好 (緯來戲劇[需要浪漫2]片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "都給妳（我租了一個情人 片頭曲）",
        artist: '宥勝',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/050. 宥勝_都給妳（我租了一個情人 片頭曲）.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "什麼風把你吹來的",
        artist: '范逸臣',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/051. 范逸臣_什麼風把你吹來的.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "再遇見",
        artist: '蘇打綠',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/052. 蘇打綠 (Sodagreen)_再遇見.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "放心不下",
        artist: '黃小琥',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/053. 黃小琥_放心不下.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "渺小",
        artist: '田馥甄',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/054. 田馥甄(Hebe)_渺小.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Me & U (大紅帽與小野狼片尾曲)",
        artist: '鄧福如',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/055. 鄧福如_Me  U(大紅帽與小野狼片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "天使之翼",
        artist: '楊丞琳',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/056. 楊丞琳 (Rainie Yang)_天使之翼.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "想對你說",
        artist: '楊宗緯',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/057. 楊宗緯_想對你說.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Me & U (大紅帽與小野狼片尾曲)",
        artist: '鄧福如, 陳道賢, 陸侲曦',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/058. 鄧福如 陳道賢 陸侲曦_Me  U (演唱：鄧福如)(大紅帽與小野狼片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我會在你身邊 (三立偶像劇「真愛黑白配」插曲)",
        artist: '朱俐靜',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/059. 朱俐靜_我會在你身邊(三立偶像劇「真愛黑白配」插曲、韓劇『紳士的品格』片頭曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "貳零零零年",
        artist: '嚴爵',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/060. 嚴爵（Yen-j）_貳零零零年.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "轉角那個女孩 (電視劇『幸福選擇題』插曲)",
        artist: '李唯楓',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/061. 李唯楓_轉角那個女孩 (電視劇『幸福選擇題』插曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "幸福就是",
        artist: '劉若英',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/062. 劉若英（Rene）_幸福就是.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "等等",
        artist: 'Olivia Ong (王儷婷)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/063. Olivia Ong (王儷婷)_等等.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "裂縫中的陽光",
        artist: '林俊傑',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/064. 林俊傑 (JJ Lin)_裂縫中的陽光.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "艾琳娜",
        artist: '動力火車',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/065. 動力火車_艾琳娜.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "想你的距離",
        artist: '戴愛玲',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/066. 戴愛玲_想你的距離.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "眼淚的名字 (偶像劇「我愛你愛你愛我」插曲)",
        artist: '謝安琪',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/067. 謝安琪 (Kay Tse)_眼淚的名字 (民視年度偶像劇「我愛你愛你愛我」插曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "一念執著",
        artist: '胡歌、阿蘭',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/068. 步步驚心主題曲原聲EP_一念執著 (演唱：胡歌、阿蘭).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "友人說",
        artist: '林俊傑(feat.懷秋)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/069. 林俊傑 (JJ Lin)_友人說 (feat.懷秋).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "等你的季節",
        artist: '劉詩詩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/070. 步步驚心主題曲原聲EP_等你的季節 (演唱：劉詩詩).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "美味的想念",
        artist: '唐禹哲',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/071. 美味的想念 電視原聲帶_美味的想念 (演唱：唐禹哲 片頭曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "逆流的淚",
        artist: '溫嵐',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/072. 溫嵐 (Landy Wen)_逆流的淚.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Let Me Love You (電視劇『幸福選擇題』插曲)",
        artist: '李唯楓',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/073. 李唯楓_Let Me Love You (電視劇『幸福選擇題』插曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "I Know (三立偶像劇「真愛黑白配」插曲)",
        artist: '畢書盡 (Bii)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/074. 畢書盡 (Bii)_I Know (三立偶像劇「真愛黑白配」插曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "一切都是因為愛",
        artist: '倪安東',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/075. 倪安東_一切都是因為愛.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "單戀曲",
        artist: '蔡健雅',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/076. 蔡健雅 (Tanya Chua)_單戀曲.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "十萬毫升淚水",
        artist: '蔡健雅',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/077. 蔡健雅_十萬毫升淚水.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "關不掉的月光",
        artist: '庾澄慶',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/078. 庾澄慶(哈林)_關不掉的月光.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "旅程",
        artist: '蔡依林',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/079. 蔡依林_旅程.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "過我的生活",
        artist: '蕭煌奇',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/080. 蕭煌奇_過我的生活.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "早熟",
        artist: '王詩安',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/081. 王詩安 (Diana)_早熟.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "回憶裡的瘋狂",
        artist: '光良',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/082. 光良_回憶裡的瘋狂.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "流星飛過 (韓劇「愛上王世子」片頭曲)",
        artist: '畢書盡 (Bii)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/083. 畢書盡 (Bii)_流星飛過 (韓劇「愛上王世子」片頭曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "勿忘我",
        artist: '陶喆',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/084. 陶喆_勿忘我.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "穩穩的幸福",
        artist: '陳奕迅',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/085. 陳奕迅 (Eason Chan)_穩穩的幸福.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "超有感",
        artist: '黃鴻升',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/086. 黃鴻升_超有感.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "無聲抗議",
        artist: '黃美珍',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/087. 黃美珍_無聲抗議.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "皮膚",
        artist: '陳勢安',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/088. 陳勢安_皮膚.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "愛著愛著就永遠",
        artist: '田馥甄',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/089. 田馥甄(Hebe)_愛著愛著就永遠.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "千分之一 (三立週五華劇「就是要你愛上我」插曲）",
        artist: '黃鴻升',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/090. 黃鴻升_千分之一 (三立週五華劇「就是要你愛上我」插曲）.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "幸福的可能 (TVBS「媽，親一下」片尾曲)",
        artist: '丁噹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/091. 丁噹（Della）_幸福的可能 (TVBS「媽，親一下」片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "數不盡的星空",
        artist: '曾沛慈',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/092. 曾沛慈_數不盡的星空.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "以後要做的事",
        artist: '林俊傑',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/093. 林俊傑 (JJ Lin)_以後要做的事.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "純屬意外",
        artist: '戴佩妮',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/094. 戴佩妮_純屬意外.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "好好說再見",
        artist: '陶喆(feat. 關詩敏)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/095. 陶喆_好好說再見 (feat. 關詩敏).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "醒了 (《電視劇帝王》片尾曲 )",
        artist: '戴愛玲',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/096. 戴愛玲_醒了 (《電視劇帝王》片尾曲 ).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "姐姐",
        artist: '謝金燕',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/097. 謝金燕_姐姐.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "何苦 (偶像劇『金大花的華麗冒險』插曲)",
        artist: '溫昇豪',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/098. 溫昇豪_何苦 (偶像劇『金大花的華麗冒險』插曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "呼呼",
        artist: '安心亞',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/099. 安心亞_呼呼.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Sorry (韓劇「想你」片尾曲)",
        artist: '陳妍希',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2013/100. 陳妍希_Sorry (韓劇「想你」片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我不願讓你一個人 (三立「真愛找麻煩」片尾曲)",
        artist: '五月天',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/001. 五月天（Mayday）_我不願讓你一個人【三立「真愛找麻煩」片尾曲】.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "愛你 (偶像劇翻糖花園片尾曲)",
        artist: '陳芳語',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/002. 陳芳語 (Kimberley)_愛你(偶像劇翻糖花園片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "不是你的錯 (三立[真愛找麻煩]插曲)",
        artist: '丁噹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/003. 丁噹（Della）_不是你的錯【三立[真愛找麻煩]插曲】.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "星空 (幾米繪本電影「星空」同名主題曲)",
        artist: '五月天',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/004. 五月天（Mayday）_星空【幾米繪本電影「星空」同名主題曲】.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "對摺",
        artist: '任賢齊',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/005. 任賢齊_對摺.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "學不會",
        artist: '林俊傑',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/006. 林俊傑 (JJ Lin)_學不會.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "不具名的悲傷",
        artist: '羅志祥',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/007. 羅志祥_不具名的悲傷.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "愛久見人心",
        artist: '梁靜茹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/008. 梁靜茹_愛久見人心.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "天后 (八大韓劇【同伊】片尾主題曲)",
        artist: '陳勢安',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/009. 陳勢安_天后 (八大韓劇【同伊】片尾主題曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "還是會",
        artist: '韋禮安',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/010. 韋禮安_還是會.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "煎熬",
        artist: '李佳薇',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/011. 李佳薇_煎熬.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "微加幸福（小資女孩向前衝片尾曲）",
        artist: '郁可唯',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/012. 郁可唯_微加幸福（小資女孩向前衝片尾曲）.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "勢在必行 ([勇士們] 主題曲 )",
        artist: '陳勢安 + Bii',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/013. 陳勢安 + Bii_勢在必行 ([勇士們] 主題曲 ).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "一個人不可能 (三立[真愛找麻煩]插曲)",
        artist: '丁噹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/014. 丁噹（Della）_一個人不可能【三立[真愛找麻煩]插曲】.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "那些年",
        artist: '胡夏',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/015. 那些年，我們一起追的女孩 電影原聲帶_那些年 (胡夏).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "暫時的男朋友",
        artist: '嚴爵',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/016. 嚴爵（Yen-j）_暫時的男朋友.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "途中 (三立華劇[愛上巧克力]片尾曲)",
        artist: '黃美珍',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/017. 黃美珍_途中(三立華劇[愛上巧克力]片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我的歌聲裡",
        artist: '曲婉婷',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/018. 曲婉婷 (Wanting Qu)_我的歌聲裡  (You Exist in My Song).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "好難得 (三立「螺絲小姐要出嫁」片尾曲)",
        artist: '丁噹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/019. 丁噹（Della）_好難得【三立「螺絲小姐要出嫁」片尾曲】.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我不會喜歡你 (我可能不會愛上妳插曲)",
        artist: '陳柏霖',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/020. 陳柏霖_我不會喜歡你(我可能不會愛上妳插曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "勿忘我",
        artist: '陶喆',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/021. 陶喆_勿忘我.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "心‧洞 (韓劇 [真心給我一滴淚]片尾曲)",
        artist: '陳勢安',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/022. 陳勢安_心‧洞(韓劇 [真心給我一滴淚]片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "大藝術家",
        artist: '蔡依林',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/023. 蔡依林 (Jolin Tsai)_大藝術家.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "喜歡寂寞",
        artist: '蘇打綠',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/024. 蘇打綠 (Sodagreen)_喜歡寂寞.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "諾亞方舟",
        artist: '五月天',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/025. 五月天（Mayday）_諾亞方舟【2012世界巡迴演唱會「諾亞方舟」主題曲】.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "乾杯",
        artist: '五月天',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/026. 五月天（Mayday）_乾杯.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "翅膀 (我可能不會愛上妳片尾曲)",
        artist: '林依晨',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/027. 林依晨_翅膀(我可能不會愛上妳片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "偶陣雨",
        artist: '梁靜茹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/028. 梁靜茹_偶陣雨.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "忘了",
        artist: '楊丞琳',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/029. 楊丞琳 (Rainie Yang)_忘了.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "因為妳是女人",
        artist: '吳克羣',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/030. 吳克羣_因為妳是女人.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "傻子",
        artist: '林宥嘉',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/031. 林宥嘉_傻子.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "胡鬧",
        artist: '吳克羣',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/032. 吳克羣_胡鬧.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "逞強",
        artist: '蕭亞軒',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/033. 蕭亞軒 (ELVA Hsiao)_逞強.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "還是要幸福",
        artist: '田馥甄',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/034. 田馥甄(Hebe)_還是要幸福.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "一個人生活 (2012幸福蛻變版)",
        artist: '林凡',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/035. 林凡_一個人生活 (2012幸福蛻變版).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "你並不懂我",
        artist: 'BY2',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/036. BY2_你並不懂我.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "魔鬼中的天使",
        artist: '田馥甄',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/037. 田馥甄(Hebe)_魔鬼中的天使.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "You don't know (三立『剩女保鏢』電視劇片尾曲)",
        artist: '李唯楓',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/038. 李唯楓_You dont know- 三立『剩女保鏢』電視劇片尾曲.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "踮起腳尖愛",
        artist: '洪佩瑜',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/039. 洪佩瑜_踮起腳尖愛.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "好的事情 (三立台視偶像劇[醉後決定愛上你]片尾曲)",
        artist: '嚴爵',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/040. 嚴爵（Yen-j）_好的事情【三立台視偶像劇[醉後決定愛上你]片尾曲】.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Mine Mine",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/041. 周杰倫 (Jay Chou)_Mine Mine.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "末班車",
        artist: '蕭煌奇',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/042. 蕭煌奇_末班車.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "幸福難不難",
        artist: '郁可唯',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/043. 郁可唯_幸福難不難.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "好不好 (三立『剩女保鏢』電視劇插曲)",
        artist: '李唯楓',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/044. 李唯楓_好不好- 三立『剩女保鏢』電視劇插曲.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "詩人漫步 (俏皮機長 片頭曲)",
        artist: '蔡依林',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/045. 蔡依林 (Jolin Tsai)_詩人漫步 (俏皮機長 片頭曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "有我在",
        artist: '羅志祥',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/046. 羅志祥_有我在.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "只能想念你",
        artist: '蕭敬騰',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/047. 蕭敬騰_只能想念你.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "再愛一遍 (韓劇 城市獵人片尾曲)",
        artist: '陳勢安',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/048. 陳勢安_再愛一遍 (韓劇 城市獵人片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "最親愛的你",
        artist: '范瑋琪',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/049. 范瑋琪_最親愛的你.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "狂風裡擁抱",
        artist: '信, A-Lin',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/050. 信_狂風裡擁抱(信‧A-Lin).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "傷不起 (台視三立小資女孩向前衝插曲)",
        artist: '郁可唯',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/051. 郁可唯_傷不起(台視三立小資女孩向前衝插曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "打噴嚏 (過敏慢版)",
        artist: '嚴爵',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/052. 嚴爵（Yen-j）_打噴嚏(過敏慢版)【三立偶像劇「螺絲小姐要出嫁」插曲】.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Love U U",
        artist: '林俊傑',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/053. 林俊傑 (JJ Lin)_Love U U.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "那些你很冒險的夢",
        artist: '林俊傑',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/054. 林俊傑 (JJ Lin)_那些你很冒險的夢.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "她說",
        artist: '林俊傑',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/055. 林俊傑 (JJ Lin)_她說.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "不難",
        artist: '徐佳瑩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/056. 徐佳瑩 (Lala Hsu)_不難.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "陪著我的時候想著她",
        artist: '郭靜',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/057. 郭靜 (Claire)_陪著我的時候想著她.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "不習慣喊痛",
        artist: '陳勢安',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/058. 勢安_不習慣喊痛(勇士們 片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我很忙 (東森綜合台【城市獵人】片頭曲)",
        artist: 'A-Lin',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/059. A-Lin_我很忙 (東森綜合台【城市獵人】片頭曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "全部都給你",
        artist: '吳克羣',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/060. 吳克羣_全部都給你.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Maybe的機率 (偶像劇”翻糖花園”片頭曲)",
        artist: '大嘴巴',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/061. 大嘴巴_Maybe的機率 (偶像劇”翻糖花園”片頭曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "失敗的分手",
        artist: '倪安東',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/062. 倪安東_失敗的分手.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "最近好嗎 (緯來戲劇 後宮甄環傳 片尾曲)",
        artist: '張韶涵',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/063. 張韶涵_最近好嗎(東森戲劇台-芙蓉閣之戀、緯來戲劇台-后宮甄環傳片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "不要不要  (小資女孩向前衝片頭曲)",
        artist: '卓文萱',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/064. 卓文萱_不要不要(小資女孩向前衝片頭曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "變成陌生人",
        artist: '王心凌',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/065. 王心凌_變成陌生人.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "想幸福的人",
        artist: '楊丞琳',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/066. 楊丞琳 (Rainie Yang)_想幸福的人.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "OAOA (現在就是永遠)",
        artist: '五月天',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/067. 五月天（Mayday）_OAOA(現在就是永遠).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "倉頡",
        artist: '五月天',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/068. 五月天（Mayday）_倉頡.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "寂寞來了怎麼辦？",
        artist: '吳克羣',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/069. 吳克羣_寂寞 來了怎麼辦？.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "不存在的情人",
        artist: '林俊傑',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/070. 林俊傑 (JJ Lin)_不存在的情人.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "給我一個理由忘記 (八大電視台【我的女友是九尾狐】片尾曲)",
        artist: 'A-Lin',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/071. A-Lin_給我一個理由忘記 (八大電視台【我的女友是九尾狐】片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "單細胞",
        artist: '嚴爵',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/072. 嚴爵（Yen-j）_單細胞.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "依然愛你",
        artist: '王力宏',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/073. 王力宏 (Leehom Wang)_依然愛你.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "痛癢(公視『小孩大人』片尾曲)",
        artist: '林凡',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/074. 林凡_痛癢(公視『小孩大人』片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "大大的擁抱 (中天綜合台「絕配冤家」片頭曲)",
        artist: 'A-Lin',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/075. A-Lin_大大的擁抱 (中天綜合台「絕配冤家」片頭曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "淋雨一直走",
        artist: '張韶涵',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/076. 張韶涵_淋雨一直走.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "吾在場證明",
        artist: '嚴爵',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/077. 嚴爵（Yen-j）_吾在場證明.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "不快樂 (八大戲劇”守護老闆”片尾曲)",
        artist: '曾靜玟',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/078. 曾靜玟_不快樂(八大戲劇台”守護老闆”片尾曲 ).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "你敢不敢",
        artist: '徐佳瑩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/079. 徐佳瑩 (Lala Hsu)_你敢不敢.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "突然好想你",
        artist: '五月天',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/080. 五月天（Mayday）_突然好想你.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "給他",
        artist: '郭采潔',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/081. 郭采潔_給他.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我們會更好的 (中天娛樂台「愛相隨」片頭曲)",
        artist: 'A-Lin',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/082. A-Lin_我們會更好的 (中天娛樂台「愛相隨」片頭曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "公主病",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/083. 周杰倫 (Jay Chou)_公主病.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "你被寫在我的歌裡",
        artist: '蘇打綠',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/084. 蘇打綠 (Sodagreen)_你被寫在我的歌裡.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "燃點",
        artist: '胡夏',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/085. 胡夏_燃點.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "你好嗎",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/086. 周杰倫 (Jay Chou)_你好嗎.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我最親愛的",
        artist: '張惠妹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/087. 張惠妹(A-Mei)_我最親愛的.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "掉了",
        artist: '張惠妹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/088. 張惠妹(A-Mei)_掉了.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "淚崩了 (緯來戲劇 後宮甄嬛傳 片尾曲)",
        artist: '亦帆',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/089. 亦帆_淚崩了 (緯來戲劇台-後宮甄嬛傳片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "第二人生",
        artist: '五月天',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/090. 五月天（Mayday）_第二人生.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "會過去的",
        artist: '梁靜茹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/091. 梁靜茹_會過去的.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "最好的結局 (中天[閣樓上的王子]片頭曲)",
        artist: '八三夭樂團',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/092. 八三夭樂團_最好的結局【中天[閣樓上的王子]片頭曲】.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "說好的幸福呢",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/093. 周杰倫 (Jay Chou)_說好的幸福呢.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "喘息（IVVI版）",
        artist: '張芸京',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/094. 張芸京_喘息（IVVI版）.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "王見王",
        artist: '羅志祥(feat. 楊丞琳)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/095. 羅志祥_王見王(feat.楊丞琳).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "該忘了",
        artist: '郭采潔',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/096. 郭采潔_該忘了.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "有些事現在不做 一輩子都不會做了",
        artist: '五月天',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/097. 五月天（Mayday）_有些事現在不做 一輩子都不會做了.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "給我一首歌的時間",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/098. 周杰倫 (Jay Chou)_給我一首歌的時間.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "全部都給你 (合唱版)",
        artist: '吳克羣',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/099. 吳克羣_全部都給你(合唱版).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "寂寞寂寞就好",
        artist: '田馥甄',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2012/100. 田馥甄(Hebe)_寂寞寂寞就好.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "天后 (八大韓劇【同伊】片尾主題曲)",
        artist: '陳勢安',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/001. 陳勢安_天后 (八大韓劇【同伊】片尾主題曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "指望",
        artist: '郁可唯',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/002. 郁可唯_指望.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "好的事情 (偶像劇 醉後決定愛上你 片尾曲)",
        artist: '嚴爵',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/003. 嚴爵（Yen-j）_好的事情【三立台視偶像劇[醉後決定愛上你]片尾曲】.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "那些年",
        artist: '胡夏',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/004. 那些年，我們一起追的女孩 電影原聲帶_那些年 (胡夏).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "末班車",
        artist: '蕭煌奇',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/005. 蕭煌奇_末班車.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "給我一個理由忘記 (八大 我的女友是九尾狐 片尾曲)",
        artist: 'A-Lin',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/006. A-Lin_給我一個理由忘記 (八大電視台【我的女友是九尾狐】片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我最親愛的",
        artist: '張惠妹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/007. 張惠妹(A-Mei)_我最親愛的.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "她說",
        artist: '林俊傑',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/008. 林俊傑 (JJ Lin)_她說.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "重傷",
        artist: '林凡',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/009. 林凡_重傷.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "一半 (中天戲劇 雙面膠 片頭曲)",
        artist: '丁噹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/010. 丁噹（Della）_一半 (中天娛樂戲劇【雙面膠】片頭曲）.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "五天幾年 (犀利人妻 電視劇片頭曲)",
        artist: '林凡',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/011. 林凡_五天幾年 (犀利人妻 電視劇片頭曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我們都傻 (電視劇 醉後決定愛上你 插曲)",
        artist: '楊丞琳',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/012. 楊丞琳 (Rainie Yang)_我們都傻 (電視劇【醉後決定愛上你】插曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "只能想念你",
        artist: '蕭敬騰',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/013. 蕭敬騰_只能想念你.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "寂寞不痛 (中天電視 還想結婚的女子 片頭曲)",
        artist: 'A-Lin',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/014. A-Lin_寂寞不痛 (中天電視【還想結婚的女子】片頭曲、東風電視【女人的戰爭】片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "陪著我的時候想著她",
        artist: '郭靜',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/015. 郭靜 (Claire)_陪著我的時候想著她.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "勢在必行 (勇士們 主題曲)",
        artist: '陳勢安 + Bii',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/016. 陳勢安 + Bii_勢在必行 ([勇士們] 主題曲 ).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "獨一無二",
        artist: '羅志祥',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/017. 羅志祥_獨一無二.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "散場的擁抱",
        artist: '倪安東',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/018. 倪安東_散場的擁抱.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "微加幸福 (小資女孩向前衝片尾曲)",
        artist: '郁可唯',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/019. 郁可唯_微加幸福（小資女孩向前衝片尾曲）.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "煎熬",
        artist: '李佳薇',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/020. 李佳薇_煎熬.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "狂想曲",
        artist: '蕭敬騰',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/021. 蕭敬騰_狂想曲.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "暖心",
        artist: '郁可唯',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/022. 郁可唯_暖心.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "未填詞",
        artist: '鄧福如',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/023. 鄧福如_未填詞.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "當冬夜漸暖",
        artist: '孫燕姿',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/024. 孫燕姿 (Stefanie Sun)_當冬夜漸暖.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "只能勇敢",
        artist: '蕭煌奇',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/025. 蕭煌奇_只能勇敢.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "如果有如果",
        artist: '鄧福如',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/026. 鄧福如_如果有如果.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "你",
        artist: '蕭敬騰',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/027. 蕭敬騰_你.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "還是要幸福",
        artist: '田馥甄',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/028. 田馥甄(Hebe)_還是要幸福.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "最重要的決定",
        artist: '范瑋琪',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/029. 范瑋琪_最重要的決定.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "冷血動物 (中天綜合韓劇 公主回來了 片尾曲)",
        artist: '丁噹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/030. 丁噹（Della）_冷血動物 (電玩【阿洛斯online】廣告主題曲、中天綜合韓劇【公主回來了】片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "這樣愛你好可怕 (犀利人妻 電視劇插曲)",
        artist: '林凡',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/031. 林凡_這樣愛你好可怕 (犀利人妻 電視劇插曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "聲聲慢",
        artist: '鄧福如',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/032. 鄧福如_聲聲慢.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "星空 (幾米繪本電影「星空」同名主題曲)",
        artist: '五月天',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/033. 五月天（Mayday）_星空【幾米繪本電影「星空」同名主題曲】.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "愛笑的眼睛",
        artist: '林俊傑',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/034. 林俊傑 (JJ Lin)_愛笑的眼睛.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "寂寞寂寞就好",
        artist: '田馥甄',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/035. 田馥甄(Hebe)_寂寞寂寞就好.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Nothing On You (A fu Version)",
        artist: '鄧福如',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/036. 鄧福如_Nothing On You (A fu Version) (OT Nothing On You).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "喜歡寂寞",
        artist: '蘇打綠',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/037. 蘇打綠 (Sodagreen)_喜歡寂寞.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "你不知道的事",
        artist: '王力宏',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/038. 王力宏 (Leehom Wang)_你不知道的事.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "情人知己 (中天 我的甜蜜情人 片尾曲)",
        artist: '梁文音',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/039. 梁文音_情人知己 (中天【我的甜蜜情人】 衛視【瑪莉外宿中】片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Sorry That I Loved You",
        artist: '倪安東',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/040. 倪安東_Sorry That I Loved You.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "想自由",
        artist: '林宥嘉',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/041. 林宥嘉_想自由.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "還有眼淚就好",
        artist: '張惠妹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/042. 張惠妹(A-Mei)_還有眼淚就好.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "仰望",
        artist: '楊丞琳',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/043. 楊丞琳 (Rainie Yang)_仰望.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "不哭 (偶像劇美樂。加油片頭曲)",
        artist: '王心凌',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/044. 王心凌_不哭 (偶像劇美樂。加油片頭曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "怎麼說我不愛你",
        artist: '蕭敬騰',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/045. 蕭敬騰_怎麼說我不愛你.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "那個男人 (韓劇「秘密花園」中文主題曲)",
        artist: '楊宗緯',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/046. 楊宗緯_那個男人 (韓劇「秘密花園」中文主題曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "沒關係",
        artist: '吳克羣',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/047. 吳克羣_沒關係.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "愛太空 (八大韓劇 麵包王金卓求 片頭曲)",
        artist: '王心凌',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/048. 王心凌_愛太空 (八大韓劇麵包王金卓求片頭曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "比較愛",
        artist: '梁靜茹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/049. 梁靜茹_比較愛.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "複製人",
        artist: '蕭敬騰',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/050. 蕭敬騰_複製人.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "魔鬼中的天使",
        artist: '田馥甄',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/051. 田馥甄(Hebe)_魔鬼中的天使.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "怕安靜",
        artist: '羅志祥',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/052. 羅志祥_怕安靜.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "Mine Mine",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/053. 周杰倫 (Jay Chou)_Mine Mine.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "又不是這樣就不孤獨 (偶像劇 醉後決定愛上你 插曲)",
        artist: '嚴爵',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/054. 嚴爵（Yen-j）_又不是這樣就不孤獨【三立台視偶像劇[醉後決定愛上你]插曲】.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "世說心語",
        artist: '孫燕姿',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/055. 孫燕姿 (Stefanie Sun)_世說心語.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "孩子氣",
        artist: '陳妍希',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/056. 那些年，我們一起追的女孩 電影原聲帶_孩子氣 (陳妍希).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "好朋友只是朋友 (小資女孩向前衝 插曲)",
        artist: '郁可唯',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/057. 郁可唯_好朋友只是朋友(台視三立小資女孩向前衝插曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我能給的",
        artist: '吳克羣',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/058. 吳克羣_我能給的.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "錯的人",
        artist: '蕭亞軒',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/059. 蕭亞軒 (ELVA Hsiao)_錯的人.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "轉身之後 (偶像劇 鍾無艷 片尾曲)",
        artist: '畢書盡',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/060. 畢書盡 (Bii)_轉身之後(台視、三立偶像劇「鍾無艷」片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "不按牌理出牌 (偶像劇 醉後決定愛上你 片頭曲)",
        artist: 'MP魔幻力量',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/061. MP魔幻力量（Magic Power）_不按牌理出牌（偶像劇【醉後決定愛上你】片頭曲）.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "拼什麼",
        artist: '羅志祥',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/062. 羅志祥_拼什麼.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "一點點喜歡",
        artist: '鄧福如 (feat. Suffa受罪)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/063. 鄧福如_一點點喜歡 (feat.Suffa受罪).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "翅膀 (我可能不會愛上妳 片尾曲)",
        artist: '林依晨',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/064. 林依晨_翅膀 (我可能不會愛上妳片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "人海中遇見你",
        artist: '林育羣',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/065. 那些年，我們一起追的女孩 電影原聲帶_人海中遇見你 (林育羣).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "My Love",
        artist: '田馥甄',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/066. 田馥甄(Hebe)_My Love.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "說了再見",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/067. 周杰倫 (Jay Chou)_說了再見.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "沒那麼簡單",
        artist: '黃小琥',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/068. 黃小琥_沒那麼簡單.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "重來",
        artist: '黃小琥',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/069. 黃小琥_重來.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "記得",
        artist: '林俊傑',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/070. 林俊傑 (JJ Lin)_記得.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "疑心病",
        artist: '曾昱嘉',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/071. 曾昱嘉_疑心病.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "都什麼時候了",
        artist: '張惠妹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/072. 張惠妹(A-Mei)_都什麼時候了.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "還是會",
        artist: '韋禮安',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/073. 韋禮安_還是會.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "心‧洞 (韓劇 真心給我一滴淚 片尾曲)",
        artist: '陳勢安',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/074. 陳勢安_心‧洞(韓劇 [真心給我一滴淚]片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "不要不要 (小資女孩向前衝 片頭曲)",
        artist: '卓文萱',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/075. 卓文萱_不要不要(小資女孩向前衝片頭曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "OAOA (現在就是永遠)",
        artist: '五月天',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/076. 五月天（Mayday）_OAOA(現在就是永遠).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "懷珠",
        artist: '楊宗緯',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/077. 楊宗緯_懷珠.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "好想對你說 (殺手歐陽盆栽 電影主題曲)",
        artist: '蕭敬騰',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/078. 蕭敬騰_好想對你說 (殺手歐陽盆栽電影主題曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "愛情掉在哪裡 (韓劇 雅典娜 片尾主題曲)",
        artist: '井柏然',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/079. 井柏然_愛情掉在哪裡 (韓劇【雅典娜】片尾主題曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "不習慣喊痛 (勇士們 片尾曲)",
        artist: '陳勢安',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/080. 陳勢安_不習慣喊痛(勇士們 片尾曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "當你",
        artist: '林俊傑',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/081. 林俊傑 (JJ Lin)_當你.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "我不會喜歡你 (我可能不會愛上妳 插曲)",
        artist: '陳柏霖',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/082. 陳柏霖_我不會喜歡你 (我可能不會愛上妳插曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "依然愛你",
        artist: '王力宏',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/083. 王力宏 (Leehom Wang)_依然愛你.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "掉了",
        artist: '張惠妹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/084. 張惠妹(A-Mei)_掉了.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "說好的幸福呢",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/085. 周杰倫 (Jay Chou)_說好的幸福呢.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "星空戀曲",
        artist: '鄧福如',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/086. 鄧福如_星空戀曲.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "放了自己 (醉後決定愛上你 插曲)",
        artist: 'MP魔幻力量',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/087. 醉後決定愛上你 電視原聲帶_放了自己 (醉後決定愛上你插曲  演唱 MP魔幻力量).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "當冬夜漸暖",
        artist: '吳建豪(feat. Ryan Tedder)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/088. 吳建豪 (Vanness Wu)_Is This All feat. Ryan Tedder of OneRepublic.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "亞特蘭提斯",
        artist: '飛兒樂團',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/089. 飛兒樂團 (F.I.R.)_亞特蘭提斯.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "蔚藍海岸",
        artist: '梁靜茹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/090. 梁靜茹_蔚藍海岸.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "很愛過 (韓劇 公主回來了 片頭曲)",
        artist: '丁噹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/091. 丁噹（Della）_很愛過（中天綜合韓劇【公主回來了】片頭曲）.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "踮起腳尖愛",
        artist: '洪佩瑜',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/092. 洪佩瑜_踮起腳尖愛.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "背對背擁抱",
        artist: '林俊傑',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/093. 林俊傑 (JJ Lin)_背對背擁抱.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "給我一首歌的時間",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/094. 周杰倫 (Jay Chou)_給我一首歌的時間.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "暮光",
        artist: '范瑋琪',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/095. 范瑋琪_暮光.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "洋蔥",
        artist: '丁噹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/096. 丁噹（Della）_洋蔥.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "你好嗎",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/097. 周杰倫 (Jay Chou)_你好嗎.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "傷不起 (小資女孩向前衝 插曲)",
        artist: '郁可唯',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/098. 郁可唯_傷不起(台視三立小資女孩向前衝插曲).mp3',
		cover: '/cover.jpg'
      },
      {
        name: "愛了就沉淪",
        artist: '張心傑',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/099. 張心傑_愛了就沉淪.mp3',
		cover: '/cover.jpg'
      },
      {
        name: "絕對不放",
        artist: '吳克羣',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/KKBOX_Chinese/2011/100. 吳克羣_絕對不放.mp3',
		cover: '/cover.jpg'
      }

    ]
});