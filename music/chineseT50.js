const appp = new APlayer({
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
        name: "任然 - 飛鳥和蟬",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/飛鳥和蟬.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: 'Eric 周興哲, 單依純 - 愛我的時候 (When You Loved Me)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/愛我的時候.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "盧廣仲 - 刻在我心底的名字",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/刻在我心底的名字.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '告五人 - 在這座城市遺失了你',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/在這座城市遺失了你.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "魏如萱 - HAVE A NICE DAY",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/HAVE A NICE DAY.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '阿冗 - 三個字',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/三個字.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "大籽 - 白月光與朱砂痣",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/白月光與朱砂痣.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '阿冗 - 與我無關',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/與我無關.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "程響 - 四季予你",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/四季予你.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '八三夭 - 想見你想見你想見你',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/想見你想見你想見你.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "井朧 - 不刪",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/不刪.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '蔡恩雨 - 阿拉斯加海灣',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/阿拉斯加海灣.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "孫盛希 - 小心翻閱",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/小心翻閱.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '五月天 (Mayday) - 因為你 所以我',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/因為你 所以我.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "井朧 - 丟了你",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/丟了你.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '于文文 - 體面',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/體面.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "艾薇 (Ivy) - 失重前幸褔",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/失重前幸褔.mp3',
		cover: '/cover.jpg'
      },
      {
        name: 'en - 囂張',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/囂張.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "夢然 - 少年",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/少年.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '棉子 - 勇氣',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/勇氣.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "阿冗 - 你的答案",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/你的答案.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '曾沛慈 - 橙色的夢',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/橙色的夢.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "陳零九 - 天黑請閉眼 (feat. 邱鋒澤)",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/天黑請閉眼.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '周興哲 - 怎麼了',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/怎麼了.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "G.E.M. 鄧紫棋 - 句號",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/句號.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '九九 - 假如我是你',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/假如我是你.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "梁靜茹 - 慢冷",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/慢冷.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '于文文 - 餘地',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/餘地.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "邱振哲 - 太陽",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/太陽.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '黃鴻升 - 地球上最浪漫的一首歌',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/地球上最浪漫的一首歌.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "任然 - 無人之島",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/無人之島.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "蕭敬騰 - 不完美的我",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/不完美的我.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '王忻辰 & 蘇星婕 - 清空',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/清空.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "Eric 周興哲 - 如果能幸福",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/如果能幸福.mp3',
		cover: '/cover.jpg'
      },
      {
        name: 'G.E.M. 鄧紫棋 - 平行世界',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/平行世界.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "高爾宣 OSN - Without you",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/Without you.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '雪二 - 漸冷',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/漸冷.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "告五人 - 唯一",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/唯一.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '林鴻宇 - 你怎麼來了',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/你怎麼來了.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "茄子蛋 - 浪子回頭",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/浪子回頭.mp3',
		cover: '/cover.jpg'
      },
      {
        name: 'G.E.M. 鄧紫棋 - 光年之外',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/光年之外.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "艾怡良 - 我這個人",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/我這個人.mp3',
		cover: '/cover.jpg'
      },
      {
        name: 'G.E.M.鄧紫棋 - 很久以後',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/很久以後.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "不是花火呀 - TA",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/TA.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '茄子蛋 - 浪流連',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/浪流連.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "李榮浩 - 年少有為",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/年少有為.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '張惠妹 - 連名帶姓',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/連名帶姓.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "玖壹壹 - 來個蹦蹦 (feat. Ella 陳嘉樺)",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/來個蹦蹦.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '瘦子E.SO - CHANGE',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/CHANGE.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "告五人 - 醜人多作怪",
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/醜人多作怪.mp3',
		cover: '/cover.jpg'
      }
    ]
});