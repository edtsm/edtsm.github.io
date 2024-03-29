const chinese = new APlayer({
    container: document.getElementById('chinese'),
    fixed: false,
    autoplay: false,
    theme: '#1c03fc',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: '200px',
    lrcType: 0,
    audio: [
      {
        name: "玻璃心",
        artist: '黃明志, 陳芳語',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/001. 黃明志, 陳芳語 - 玻璃心 (feat. 陳芳語).mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: '彼得潘',
        artist: '蕭敬騰',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/002. 蕭敬騰 - 彼得潘.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "最悲傷的事 (比悲傷更悲傷的故事影集版主題曲)",
        artist: 'A-Lin',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/009. A-Lin - 最悲傷的事 (比悲傷更悲傷的故事影集版主題曲).mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: '貪',
        artist: '艾怡良',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/017. 艾怡良 - 貪.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "心悶",
        artist: '美秀集團',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/025. 美秀集團 - 心悶.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "明明就很ㄍㄧㄥ但我還是喜歡妳",
        artist: '洋蔥',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/029. 洋蔥 - 明明就很ㄍㄧㄥ但我還是喜歡妳.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: '偷走青春的歲月',
        artist: '李佳歡',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/039. 李佳歡 - 偷走青春的歲月.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "倫敦的愛情",
        artist: '藍又時',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/020. 藍又時 - 倫敦的愛情.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: '真的傻 (電影一吻定情追愛版主題曲)',
        artist: '徐佳瑩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/042. 徐佳瑩 - 真的傻 (電影一吻定情追愛版主題曲).mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "燒",
        artist: '戴愛玲(ft. 熊仔)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/008. 戴愛玲 - 燒 (feat. 熊仔).mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: 'Pull Up',
        artist: 'PANTHEPACK',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/049. PANTHEPACK - Pull Up.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "下單 我的愛",
        artist: '張語噥, 鼓鼓 呂思緯',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/050. 張語噥, 鼓鼓 呂思緯 - 下單 我的愛 (feat. 鼓鼓 呂思緯).mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "終究還是因為愛",
        artist: 'TRASH 樂團',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/001. TRASH 樂團 - 終究還是因為愛.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: '不搖滾',
        artist: '八三夭 (831), 告五人',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/017. 八三夭 (831), 告五人 - 不搖滾 (feat. 告五人).mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "續寫 (電視劇一生一世主題曲)",
        artist: '單依純',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/025. 單依純 - 續寫 (電視劇一生一世主題曲).mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "Always Be My Always",
        artist: '陳芳語',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/046. 陳芳語 - Always Be My Always.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "癡人說夢",
        artist: '玖壹壹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/008. 玖壹壹 - 癡人說夢.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: '門前雪',
        artist: '于文文',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/010. 于文文 - 門前雪.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "山川",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/015. 李榮浩 - 山川.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "城裡的月光2021",
        artist: '華研眾星 動力火車、林宥嘉、周蕙、郁可唯、閻奕格、文慧如,李友廷、陳昊森、F.I.R.韓睿',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/017. 華研眾星 動力火車、林宥嘉、周蕙、郁可唯、閻奕格、文慧如,李友廷、陳昊森、F.I.R.韓睿 - 城裡的月光2021.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "零距離",
        artist: '五堅情 (邱鋒澤、陳零九、黃偉晉、賴晏駒、婁峻碩)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/023. 五堅情 (邱鋒澤、陳零九、黃偉晉、賴晏駒、婁峻碩) - 零距離.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: '再也沒有你',
        artist: '梁心頤(ft. 陳勢安)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/025. 梁心頤 - 再也沒有你 (feat. 陳勢安).mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "sorry青春",
        artist: '魚丁糸',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/033. 魚丁糸 - sorry青春.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "Mr. Tambourine Man",
        artist: '韋禮安',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/048. 韋禮安 - Mr. Tambourine Man.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "雛形",
        artist: '徐佳瑩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/015. 徐佳瑩 - 雛形.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: 'Doubt',
        artist: '高爾宣 OSN, 李浩瑋',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/020. 高爾宣 OSN, 李浩瑋 - Doubt.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "BUZZ",
        artist: 'PANTHEPACK',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/047. PANTHEPACK - BUZZ.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "今天,半永久",
        artist: '梁靜茹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/048. 梁靜茹 - 今天,半永久.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "要怎麼告訴你我多喜歡",
        artist: '魏嘉瑩（ft. 理想混蛋 雞丁）',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/004. 魏嘉瑩 - 要怎麼告訴你我多喜歡（feat. 理想混蛋 雞丁）.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: '精神分裂',
        artist: '吳卓源',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/011. 吳卓源 - 精神分裂.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "我就想你",
        artist: '理想混蛋',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/040. 理想混蛋 - 我就想你.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "最好的結局",
        artist: '八三夭 (831)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/044. 八三夭 (831) - 最好的結局.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "你好嗎",
        artist: '魏嘉瑩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/001. 魏嘉瑩 - 你好嗎.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: '已讀不回 94 我',
        artist: '蕭敬騰',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/008. 蕭敬騰 - 已讀不回 94 我.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "我們好好的",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/014. 李榮浩 - 我們好好的.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "海語者 (手機遊戲天諭主題曲)",
        artist: 'A-Lin',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/038. A-Lin - 海語者 (手機遊戲天諭主題曲).mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "No Name - EP Version",
        artist: '高爾宣 OSN',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/049. 高爾宣 OSN - No Name - EP Version.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "蚵仔麵線",
        artist: '琳誼 Ring',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/002. 琳誼 Ring - 蚵仔麵線.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: '無人知曉',
        artist: '田馥甄',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/003. 田馥甄 - 無人知曉.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "錄音帶",
        artist: '琳誼 Ring',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/011. 琳誼 Ring - 錄音帶.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "刻在我心底的名字 (Your Name Engraved Herein)",
        artist: '五月天',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/012. 五月天 - 刻在我心底的名字 (Your Name Engraved Herein).mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "微笑分手",
        artist: '邱鋒澤',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/021. 邱鋒澤 - 微笑分手.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: '憂愁',
        artist: '琳誼 Ring(ft. 法蘭)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/038. 琳誼 Ring - 憂愁(feat. 法蘭).mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "沒什麼大不了",
        artist: '陳芳語, 茄子蛋',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/009. 陳芳語, 茄子蛋 - 沒什麼大不了.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: 'Fall',
        artist: '高爾宣 OSN',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/012. 高爾宣 OSN - Fall.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "讓浪漫作主",
        artist: '蔡健雅',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/017. 蔡健雅 - 讓浪漫作主.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "光陰獨白 (電視劇你是我的榮耀片尾曲)",
        artist: '徐佳瑩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/023. 徐佳瑩 - 光陰獨白 (電視劇你是我的榮耀片尾曲).mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "煙火星辰 (電視劇你是我的榮耀片頭曲)",
        artist: '摩登兄弟劉宇寧',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/033. 摩登兄弟劉宇寧 - 煙火星辰 (電視劇你是我的榮耀片頭曲).mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: '簽收我的心 (電影再說一次我願意插曲)',
        artist: '鼓鼓 呂思緯',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/038. 鼓鼓 呂思緯 - 簽收我的心 (電影再說一次我願意插曲).mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "我",
        artist: '蕭敬騰(ft. 馬佳)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/011. 蕭敬騰 - 我 (feat. 馬佳).mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: '沒有什麼大不了',
        artist: '陳芳語, 茄子蛋',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/015. 陳芳語, 茄子蛋 - 沒有什麼大不了.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "人間遊戲",
        artist: '吳汶芳',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/025. 吳汶芳 - 人間遊戲.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "忽然",
        artist: '韋禮安',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/033. 韋禮安 - 忽然.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "第一默契",
        artist: '許凱, 程瀟',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/046. 許凱, 程瀟 - 第一默契.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "勇氣",
        artist: '魏嘉瑩(ft. 魏如昀)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/002. 魏嘉瑩 - 勇氣 (feat. 魏如昀).mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: '我們 (奇蹟前導片插曲)',
        artist: 'Ray 黃霆睿',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/004. Ray 黃霆睿 - 我們 (奇蹟前導片插曲).mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "故作完美",
        artist: '張語噥',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/023. 張語噥 - 故作完美.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "愛情限時批",
        artist: '琳誼 Ring (ft. 許富凱)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/031. 琳誼 Ring - 愛情限時批 (feat. 許富凱).mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "愛的方法 (片尾曲)",
        artist: '鼓鼓 呂思緯, 魏嘉瑩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/043. 鼓鼓 呂思緯, 魏嘉瑩 - 愛的方法 (片尾曲).mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "愛在蔓延時",
        artist: '飛兒樂團 (F.I.R.)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/019. 飛兒樂團 (F.I.R.) - 愛在蔓延時.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: '我存在你的存在 (迷你劇集我的老闆是隻貓片尾曲)',
        artist: '邵羽, 陳忻玥',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/028. 邵羽, 陳忻玥 - 我存在你的存在 (迷你劇集我的老闆是隻貓片尾曲).mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "一直追 (電視劇神之鄉首部曲)",
        artist: '畢書盡 & 陳彥允 & 李玉璽',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/033. 畢書盡 & 陳彥允 & 李玉璽 - 一直追 (電視劇神之鄉首部曲).mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "青空未來 (Future)",
        artist: '阿信',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/035. 阿信 - 青空未來 (Future).mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "縱橫四海",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/018. 李榮浩 - 縱橫四海.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: '毛玻璃 (電視劇神之鄉二部曲)',
        artist: '王識賢 & 李玉璽',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/031. 王識賢 & 李玉璽 - 毛玻璃 (電視劇神之鄉二部曲).mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "告白氣球",
        artist: '周杰倫',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/049. 周杰倫 - 告白氣球.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "出走",
        artist: '蔡健雅',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/035. 蔡健雅 - 出走.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: '當我們的手勇敢緊握 (戀愛無名氏2主題曲)',
        artist: '理想混蛋 雞丁',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/049. 理想混蛋 雞丁 - 當我們的手勇敢緊握 -戀愛無名氏2主題曲 (同志音樂愛情故事系列).mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "你的酒館對我打了烊",
        artist: '陳雪凝',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/050. 陳雪凝 - 你的酒館對我打了烊.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "better off without you",
        artist: '吳卓源, 瘦子E.SO',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/002. 吳卓源, 瘦子E.SO - better off without you.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: '我還是一個人',
        artist: '黃偉晉',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/008. 黃偉晉 - 我還是一個人.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "再見",
        artist: '林凡',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/010. 林凡 - 再見.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "Floaty Shit",
        artist: '吳卓源',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/010. 吳卓源 - Floaty Shit.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: '我們都傷',
        artist: '陳勢安',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/017. 陳勢安 - 我們都傷.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "過得爽爽",
        artist: '大淵MUTA',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/035. 大淵MUTA - 過得爽爽.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "終點起點",
        artist: '魚丁糸',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/006. 魚丁糸 - 終點起點.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: '嘉賓',
        artist: '張遠',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/007. 張遠 - 嘉賓.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "FREEWAY",
        artist: 'CHING G SQUAD',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/008. CHING G SQUAD - FREEWAY.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "我的菜",
        artist: '魏如萱 , 影子計劃',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/030  魏如萱 , 影子計劃 - 我的菜.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "英雄 (Heroes) (動畫電影諸葛四郎－英雄的英雄主題曲 Acoustic Ver.)",
        artist: '盧廣仲',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/042. 盧廣仲 - 英雄 (Heroes) (動畫電影諸葛四郎－英雄的英雄主題曲 Acoustic Ver.).mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: '未發送',
        artist: '阿冗',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/049. 阿冗 - 未發送.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "Changing",
        artist: '李杰明 W.M.L, 陳忻玥, 高爾宣 OSN, 九九 , 王艷薇',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/006. 李杰明 W.M.L, 陳忻玥, 高爾宣 OSN, 九九 , 王艷薇 - Changing.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: '禁愛條款',
        artist: '鄭容和, 蕭敬騰',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/009. 鄭容和, 蕭敬騰 - 禁愛條款.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "變成你",
        artist: 'TRASH',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/012. TRASH - 變成你.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: '熱愛105°C的你',
        artist: '阿肆',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/032. 阿肆 - 熱愛105°C的你.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "憑什麼 (大嘻哈時代主題曲)",
        artist: '大支 & Leo王 & 熊仔',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/040. 大支 & Leo王 & 熊仔 - 憑什麼 (大嘻哈時代主題曲).mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "熱爱105°C的你 - 治愈女生版",
        artist: '予笙',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/002. 予笙 - 熱爱105°C的你 - 治愈女生版.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: '裹著心的光',
        artist: '林俊傑',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/007. 林俊傑 - 裹著心的光.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "D逃",
        artist: '吳汶芳',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/020. 吳汶芳 - D逃.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: '要不要',
        artist: '于文文',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/043. 于文文 - 要不要.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "心愛的再會啦",
        artist: '琳誼 Ring',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/049. 琳誼 Ring - 心愛的再會啦.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "離開你以後 (你的婚禮插曲)",
        artist: 'Eric 周興哲',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/006. Eric 周興哲 - 離開你以後 (你的婚禮插曲).mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: '來不及說再見 (奇蹟前導片主題曲)',
        artist: 'Ray黃霆睿',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/024. Ray黃霆睿 - 來不及說再見 (奇蹟前導片主題曲).mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "名人錄 (電影殺手保鑣 2 中文主題曲)",
        artist: '林凡',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/025. 林凡 - 名人錄 (電影殺手保鑣 2 中文主題曲).mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: '走建國路回家但後座少ㄌ泥',
        artist: '多多 x 以捷',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/028. 多多 x 以捷 - 走建國路回家但後座少ㄌ泥.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "暖心",
        artist: '張語噥',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/040. 張語噥 - 暖心.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "繞 (原創影集火神的眼淚片尾曲)",
        artist: '江美琪',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/012. 江美琪 - 繞 (原創影集火神的眼淚片尾曲).mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: '我們都傷',
        artist: '陳勢安',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/025. 陳勢安 - 我們都傷.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "你是不是有點動心",
        artist: '陳芳語',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/034. 陳芳語 - 你是不是有點動心.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: 'Cold',
        artist: '派偉俊(ft. 莫宰羊)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/044. 派偉俊 - Cold(feat. 莫宰羊).mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "看見愛情 (2021美國棉主題曲)",
        artist: '畢書盡 (Bii)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/046. 畢書盡 (Bii) - 看見愛情 (2021美國棉主題曲).mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: '10,000 HOURS (國際中文版)',
        artist: '鄭容和',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/049. 鄭容和 - 10,000 HOURS (國際中文版).mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "Painted a Picture",
        artist: '陳忻玥',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/006. 陳忻玥 - Painted a Picture.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: '家 Home',
        artist: 'TRASH',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/019. TRASH - 家 Home.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "寫給明天的情書 (愛的奧特萊斯感動宣傳曲)",
        artist: 'TANK 呂建忠',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/030. TANK 呂建忠 - 寫給明天的情書 (愛的奧特萊斯感動宣傳曲).mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: 'Keep Up',
        artist: 'Jocelyn 9.4.0, 呂士軒',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/047. Jocelyn 9.4.0, 呂士軒 - Keep Up (feat. 呂士軒).mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "因為是你 (原創影集火神的眼淚片頭曲)",
        artist: '韋禮安',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/009. 韋禮安 - 因為是你 (原創影集火神的眼淚片頭曲).mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: 'Tides',
        artist: 'DIZZY DIZZO(feat. 高爾宣 OSN)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/011. DIZZY DIZZO - Tides  (feat. 高爾宣 OSN).mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "All For Me",
        artist: '張語噥, 陳芳語',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/013. 張語噥, 陳芳語 - All For Me.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: '第四象限',
        artist: '九澤CP',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/032. 九澤CP - 第四象限.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "Sweet Baby",
        artist: '頑童 MJ116',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/003. 頑童 MJ116 - Sweet Baby.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: '規則就是用來打破的',
        artist: '八三夭',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/006. 八三夭 (831) - 規則就是用來打破的.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "遺失的靈魂 (HIStory4-近距離愛上你插曲)",
        artist: '陳勢安',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/033. 陳勢安 - 遺失的靈魂 (HIStory4-近距離愛上你插曲).mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: '山山 (Original Version)',
        artist: '大淵MUTA(ft. Tipsy)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/047. 大淵MUTA - 山山 (Original Version) ft. Tipsy.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: "Paris",
        artist: '吳卓源',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/049. 吳卓源 - Paris.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "FEEL",
        artist: '婁峻碩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/037. 婁峻碩 - FEEL.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: 'Trash Talk',
        artist: 'DIZZY DIZZO(feat. E.SO)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/049. DIZZY DIZZO - Trash Talk (feat. E.SO).mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "最美的風景",
        artist: 'Marz23 (feat. 莫宰羊)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/03. Marz23 - 最美的風景 (feat. 莫宰羊).mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: 'Fall In Love',
        artist: '九九 (Sophie Chen), 陳忻玥',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/26. 九九 (Sophie Chen), 陳忻玥 - Fall In Love.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: "還是回到這 (聽不見的距離 主題曲)",
        artist: '謝祥寅Eric, 陳芳語',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/34. 謝祥寅Eric, 陳芳語 - 還是回到這 (聽不見的距離 主題曲).mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: '日常',
        artist: '茄子蛋',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/38. 茄子蛋 - 日常.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "FatBoyGang",
        artist: '大淵 MUTA',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/07. 大淵MUTA - FatBoyGang.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: '寫一條歌，寫你我爾爾',
        artist: '蕭煌奇 (ft. 茄子蛋)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/18. 蕭煌奇 - 寫一條歌,寫你我爾爾 (ft. 茄子蛋).mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: "我很好騙",
        artist: '動力火車',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/20. 動力火車 - 我很好騙.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: 'TrashTalk',
        artist: 'Dizzy Dizzo 蔡詩芸 (ft. 瘦子ESO)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/34. Dizzy Dizzo 蔡詩芸 - TrashTalk (ft. 瘦子ESO).mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: "絕美",
        artist: '艾薇',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/37. 艾薇 - 絕美.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "星辰大海",
        artist: '黃霄雲',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/44. 黃霄雲 - 星辰大海.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: '漸冷',
        artist: '雪二',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/46. 雪二 - 漸冷.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "Do Do Do (廢財闖天關片頭曲)",
        artist: 'Karencici',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/49. Karencici - Do Do Do (廢財闖天關片頭曲).mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "各自安好",
        artist: '劉若英',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/劉若英 - 各自安好 (Each Well).mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: 'Kow Tow (Explicit)',
        artist: '陳芳語',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/陳芳語-Kow Tow (Explicit).mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: "超能力",
        artist: '鄧紫棋',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/G.E.M. 鄧紫棋 - 超能力.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: '起風了 (電視劇加油你是最棒的主題曲)',
        artist: '吳青峰',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/吳青峰 - 起風了 - 電視劇加油你是最棒的主題曲.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: "我常常想起你",
        artist: '棉花糖',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/棉花糖 - 我常常想起你.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "兜轉 (《HIStory4-近距離愛上你》片頭曲)",
        artist: '陳勢安',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/陳勢安 - 兜轉 (Round & Round) - 《HIStory4-近距離愛上你》LINE TV片頭曲.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: '緩緩',
        artist: '張惠妹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/張惠妹 (aMEI) - 緩緩.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "愛情你比我想的閣較偉大 (當男人戀愛時電影主題曲)",
        artist: '茄子蛋',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/茄子蛋 - 愛情你比我想的閣較偉大 - 當男人戀愛時電影主題曲.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: '我不需要每一個人都愛我 - A Rock Can Be A Star',
        artist: '八三夭',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/八三夭 (831) - 我不需要每一個人都愛我 - A Rock Can Be A Star.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: "說好不哭",
        artist: '周杰倫(ft. 五月天阿信)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/周杰倫 - 說好不哭(With 五月天阿信).mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: '千年以後 (三立 台視神幻旗艦大戲天巡者片尾曲)',
        artist: '陳零九',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/陳零九 - 千年以後 (三立 台視神幻旗艦大戲天巡者片尾曲).mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: "想啊,想著你 (她們創業的那些鳥事片尾曲)",
        artist: '吳汶芳',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/吳汶芳 - 想啊,想著你 (影視旗艦大戲她們創業的那些鳥事片尾曲).mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: "飛鳥和蟬",
        artist: '任然',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/飛鳥和蟬.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: '愛我的時候 (When You Loved Me)',
        artist: 'Eric 周興哲, 單依純',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/愛我的時候.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: "刻在我心底的名字",
        artist: '盧廣仲',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/刻在我心底的名字.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: '在這座城市遺失了你',
        artist: '告五人',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/在這座城市遺失了你.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: "HAVE A NICE DAY",
        artist: '魏如萱',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/HAVE A NICE DAY.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: '三個字',
        artist: '阿冗',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/三個字.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: "白月光與朱砂痣",
        artist: '大籽',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/白月光與朱砂痣.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: '與我無關',
        artist: '阿冗',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/與我無關.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: "四季予你",
        artist: '程響',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/四季予你.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: '想見你想見你想見你',
        artist: '八三夭',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/想見你想見你想見你.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: "不刪",
        artist: '井朧',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/不刪.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: '阿拉斯加海灣',
        artist: '蔡恩雨',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/阿拉斯加海灣.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: "小心翻閱",
        artist: '孫盛希',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/小心翻閱.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: '因為你 所以我',
        artist: '五月天 (Mayday)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/因為你 所以我.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: "丟了你",
        artist: '井朧',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/丟了你.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: '體面',
        artist: '于文文',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/體面.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: "失重前幸褔",
        artist: '艾薇 (Ivy)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/失重前幸褔.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: '囂張',
        artist: 'en',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/囂張.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: "少年",
        artist: '夢然',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/少年.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: '勇氣',
        artist: '棉子',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/勇氣.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: "你的答案",
        artist: '阿冗',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/你的答案.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: '橙色的夢',
        artist: '曾沛慈',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/橙色的夢.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: "天黑請閉眼 (feat. 邱鋒澤)",
        artist: '陳零九',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/天黑請閉眼.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: '怎麼了',
        artist: '周興哲',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/怎麼了.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: "句號",
        artist: 'G.E.M. 鄧紫棋',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/句號.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: '假如我是你',
        artist: '九九',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/假如我是你.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: "慢冷",
        artist: '梁靜茹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/慢冷.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: '餘地',
        artist: '于文文',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/餘地.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: "太陽",
        artist: '邱振哲',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/太陽.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: '地球上最浪漫的一首歌',
        artist: '黃鴻升',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/地球上最浪漫的一首歌.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: "無人之島",
        artist: '任然',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/無人之島.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: "不完美的我",
        artist: '蕭敬騰',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/不完美的我.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: '清空',
        artist: '王忻辰 & 蘇星婕',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/清空.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: "如果能幸福",
        artist: 'Eric 周興哲',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/如果能幸福.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: '平行世界',
        artist: 'G.E.M. 鄧紫棋',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/平行世界.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: "Without you",
        artist: '高爾宣 OSN',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/Without you.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: '漸冷',
        artist: '雪二',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/漸冷.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: "唯一",
        artist: '告五人',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/唯一.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: '你怎麼來了',
        artist: '林鴻宇',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/你怎麼來了.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: "浪子回頭",
        artist: '茄子蛋',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/浪子回頭.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: '光年之外',
        artist: 'G.E.M. 鄧紫棋',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/光年之外.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: "我這個人",
        artist: '艾怡良',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/我這個人.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: '很久以後',
        artist: 'G.E.M.鄧紫棋',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/很久以後.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: "TA",
        artist: '不是花火呀',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/TA.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: '浪流連',
        artist: '茄子蛋',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/浪流連.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: "年少有為",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/年少有為.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: '連名帶姓',
        artist: '張惠妹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/連名帶姓.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: "來個蹦蹦",
        artist: '玖壹壹(feat. Ella 陳嘉樺)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/來個蹦蹦.mp3',
		cover: '/images/album/kkbox.jpg'
      },
      {
        name: 'CHANGE',
        artist: '瘦子E.SO',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/CHANGE.mp3',
		cover: '/images/album/kkbox.jpg'
      },
	  {
        name: "醜人多作怪",
        artist: '告五人',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/醜人多作怪.mp3',
		cover: '/images/album/kkbox.jpg'
      }
    ]
});