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
        name: "飛鳥和蟬",
        artist: '任然',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/飛鳥和蟬.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: '愛我的時候 (When You Loved Me)',
        artist: 'Eric 周興哲, 單依純',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/愛我的時候.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "刻在我心底的名字",
        artist: '盧廣仲',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/刻在我心底的名字.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '在這座城市遺失了你',
        artist: '告五人',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/在這座城市遺失了你.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "HAVE A NICE DAY",
        artist: '魏如萱',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/HAVE A NICE DAY.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '三個字',
        artist: '阿冗',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/三個字.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "白月光與朱砂痣",
        artist: '大籽',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/白月光與朱砂痣.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '與我無關',
        artist: '阿冗',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/與我無關.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "四季予你",
        artist: '程響',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/四季予你.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '想見你想見你想見你',
        artist: '八三夭',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/想見你想見你想見你.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "不刪",
        artist: '井朧',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/不刪.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '阿拉斯加海灣',
        artist: '蔡恩雨',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/阿拉斯加海灣.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "小心翻閱",
        artist: '孫盛希',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/小心翻閱.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '因為你 所以我',
        artist: '五月天 (Mayday)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/因為你 所以我.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "丟了你",
        artist: '井朧',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/丟了你.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '體面',
        artist: '于文文',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/體面.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "失重前幸褔",
        artist: '艾薇 (Ivy)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/失重前幸褔.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '囂張',
        artist: 'en',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/囂張.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "少年",
        artist: '夢然',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/少年.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '勇氣',
        artist: '棉子',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/勇氣.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "你的答案",
        artist: '阿冗',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/你的答案.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '橙色的夢',
        artist: '曾沛慈',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/橙色的夢.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "天黑請閉眼 (feat. 邱鋒澤)",
        artist: '陳零九',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/天黑請閉眼.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '怎麼了',
        artist: '周興哲',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/怎麼了.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "句號",
        artist: 'G.E.M. 鄧紫棋',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/句號.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '假如我是你',
        artist: '九九',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/假如我是你.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "慢冷",
        artist: '梁靜茹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/慢冷.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '餘地',
        artist: '于文文',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/餘地.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "太陽",
        artist: '邱振哲',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/太陽.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '地球上最浪漫的一首歌',
        artist: '黃鴻升',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/地球上最浪漫的一首歌.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "無人之島",
        artist: '任然',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/無人之島.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "不完美的我",
        artist: '蕭敬騰',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/不完美的我.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '清空',
        artist: '王忻辰 & 蘇星婕',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/清空.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "如果能幸福",
        artist: 'Eric 周興哲',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/如果能幸福.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '平行世界',
        artist: 'G.E.M. 鄧紫棋',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/平行世界.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "Without you",
        artist: '高爾宣 OSN',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/Without you.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '漸冷',
        artist: '雪二',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/漸冷.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "唯一",
        artist: '告五人',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/唯一.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '你怎麼來了',
        artist: '林鴻宇',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/你怎麼來了.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "浪子回頭",
        artist: '茄子蛋',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/浪子回頭.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '光年之外',
        artist: 'G.E.M. 鄧紫棋',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/光年之外.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "我這個人",
        artist: '艾怡良',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/我這個人.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '很久以後',
        artist: 'G.E.M.鄧紫棋',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/很久以後.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "TA",
        artist: '不是花火呀',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/TA.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '浪流連',
        artist: '茄子蛋',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/浪流連.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "年少有為",
        artist: '李榮浩',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/年少有為.mp3',
		cover: '/cover.jpg'
      },
      {
        name: '連名帶姓',
        artist: '張惠妹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/連名帶姓.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "來個蹦蹦",
        artist: '玖壹壹(feat. Ella 陳嘉樺)',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/來個蹦蹦.mp3',
		cover: '/cover.jpg'
      },
      {
        name: 'CHANGE',
        artist: '瘦子E.SO',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/CHANGE.mp3',
		cover: '/cover.jpg'
      },
	  {
        name: "醜人多作怪",
        artist: '告五人',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/ChineseT50/醜人多作怪.mp3',
		cover: '/cover.jpg'
      }
    ]
});