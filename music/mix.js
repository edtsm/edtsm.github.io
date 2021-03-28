const ap_mix = new APlayer({
    container: document.getElementById('mix'),
    fixed: false,
    autoplay: false,
    theme: '#20c3ff',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: '200px',
    lrcType: 3,
    audio: [
      {
        name: "前前前世",
        artist: 'RADWIMPS',
        url: 'https://notp.synology.me/Mix/前前前世.mp3',
        cover: '/music_lrcover/cover/前前前世.jpg',
		lrc: '/music_lrcover/lyrics/前前前世.lrc',
		theme: '#3c586e'
      },
      {
        name: 'Butter-Fly',
        artist: '和田光司 (By コバソロ & 七穂)',
        url: 'https://notp.synology.me/Mix/Butter-Fly.mp3',
        cover: '/music_lrcover/cover/Butter-Fly.jpg',
		lrc: '/music_lrcover/lyrics/Butter-Fly.lrc',
		theme: '#60affe'
      },
      {
        name: 'Catch the Moment',
        artist: 'LiSA',
        url: 'https://notp.synology.me/Mix/Catch the Moment.mp3',
        cover: '/music_lrcover/cover/Catch the Moment.jpg',
		lrc: '/music_lrcover/lyrics/Catch the Moment.lrc',
		theme: '#1973dc'
      },
	  {
        name: "Baby Don't Know Why",
        artist: 'Ms.OOJA (NC)',
        url: 'https://notp.synology.me/Mix/Baby Dont Know Why.mp3',
        cover: '/music_lrcover/cover/Baby Dont Know Why.jpg',
		lrc: '/music_lrcover/lyrics/Baby Dont Know Why.lrc',
		theme: '#b38972'
      },
	  {
        name: 'LOSER',
        artist: '米津玄師',
        url: 'https://notp.synology.me/Mix/LOSER.mp3',
        cover: '/music_lrcover/cover/LOSER.jpg',
		lrc: '/music_lrcover/lyrics/LOSER.lrc',
		theme: '#18131a'
      },
	  {
        name: '打上花火',
        artist: 'DAOKO × 米津玄師',
        url: 'https://notp.synology.me/Mix/打上花火.mp3',
        cover: '/music_lrcover/cover/打上花火.jpg',
		lrc: '/music_lrcover/lyrics/打上花火.lrc',
		theme: '#864378'
      },
	  {
        name: '光年之外',
        artist: '鄧紫棋',
        url: 'https://notp.synology.me/Mix/光年之外.mp3',
        cover: '/music_lrcover/cover/光年之外.jpg',
		lrc: '/music_lrcover/lyrics/光年之外.lrc',
		theme: '#616061'
      },
	  {
        name: '再見',
        artist: '鄧紫棋',
        url: 'https://notp.synology.me/Mix/再見.mp3',
        cover: '/music_lrcover/cover/再見.jpg',
		lrc: '/music_lrcover/lyrics/再見.lrc',
		theme: '#4f1b22'
      },
	  {
        name: '句號',
        artist: '鄧紫棋',
        url: 'https://notp.synology.me/Mix/句號.mp3',
        cover: '/music_lrcover/cover/句號.jpg',
		lrc: '/music_lrcover/lyrics/句號.lrc',
		theme: '#82454e'
      },
	  {
        name: '來自天堂的魔鬼',
        artist: '鄧紫棋',
        url: 'https://notp.synology.me/Mix/來自天堂的魔鬼.mp3',
        cover: '/music_lrcover/cover/再見.jpg',
		lrc: '/music_lrcover/lyrics/來自天堂的魔鬼.lrc',
		theme: '#4f1b22'
      },
	  {		
        name: '漂向北方',
        artist: '黃明志 (ft.王力宏)',
        url: 'https://notp.synology.me/Mix/漂向北方.mp3',
        cover: '/music_lrcover/cover/漂向北方.jpg',
		lrc: '/music_lrcover/lyrics/漂向北方.lrc',
		theme: '#50213d'
      },
	  {
        name: '等你下課',
        artist: '周杰倫 (ft.楊瑞代)',
        url: 'https://notp.synology.me/Mix/等你下課.mp3',
        cover: '/music_lrcover/cover/等你下課.jpg',
		lrc: '/music_lrcover/lyrics/等你下課.lrc',
		theme: '#241e21'
      },
	  {
        name: '告白氣球',
        artist: '周杰倫',
        url: 'https://notp.synology.me/Mix/告白氣球.mp3',
        cover: '/music_lrcover/cover/告白氣球.jpg',
		lrc: '/music_lrcover/lyrics/告白氣球.lrc',
		theme: '#533634'
      },
	  {
        name: 'I Really Like You',
        artist: 'Carly Rae Jepsen (NC)',
        url: 'https://notp.synology.me/Mix/I Really Like You.mp3',
        cover: '/music_lrcover/cover/I Really Like You.jpg',
		lrc: '/music_lrcover/lyrics/I Really Like You.lrc',
		theme: '#090b0a'
      },
	  {
        name: '終わりの世界から',
        artist: '麻枝 准×やなぎなぎ',
        url: 'https://notp.synology.me/Mix/終わりの世界から.mp3',
        cover: '/music_lrcover/cover/終わりの世界から.jpg',
		lrc: '/music_lrcover/lyrics/終わりの世界から.lrc',
		theme: '#2e477e'
      },
	  {
        name: '好想你 2.0',
        artist: '黃明志 (feat.四葉草)',
        url: 'https://notp.synology.me/Mix/好想你2.0.mp3',
        cover: '/music_lrcover/cover/漂向北方.jpg',
		lrc: '/music_lrcover/lyrics/好想你2.0.lrc',
		theme: '#50213d'
      },
	  {
        name: '體面',
        artist: '于文文',
        url: 'https://notp.synology.me/Mix/體面.mp3',
        cover: '/music_lrcover/cover/體面.jpg',
		lrc: '/music_lrcover/lyrics/體面.lrc',
		theme: '#4b4f4c'
      },
	  {
        name: '追光者',
        artist: '汪蘇瀧',
        url: 'https://notp.synology.me/Mix/追光者.mp3',
        cover: '/music_lrcover/cover/追光者.jpg',
		lrc: '/music_lrcover/lyrics/追光者.lrc',
		theme: '#282e39'
      },
	  {
        name: '剛好遇見你',
        artist: '李玉剛',
        url: 'https://notp.synology.me/Mix/剛好遇見你.mp3',
        cover: '/music_lrcover/cover/剛好遇見你.jpg',
		lrc: '/music_lrcover/lyrics/剛好遇見你.lrc',
		theme: '#dbd6b8'
      },
	  {
        name: 'Faded',
        artist: 'Alan Walker',
        url: 'https://notp.synology.me/Mix/Faded.mp3',
        cover: '/music_lrcover/cover/Faded.jpg',
		lrc: '/music_lrcover/lyrics/Faded.lrc',
		theme: '#a5b199'
      },
	  /*{
        name: 'TT',
        artist: 'TWICE',
        url: 'https://notp.synology.me/Mix/TT.mp3',
        cover: '/music_lrcover/cover/TT.jpg',
		lrc: '/music_lrcover/lyrics/TT.lrc',
		theme: '#fb609e'
      },
	  {
        name: '나팔바지(NAPAL BAJI)',
        artist: 'PSY',
        url: 'https://notp.synology.me/Mix/NAPAL BAJI.mp3',
        cover: '/music_lrcover/cover/NAPAL BAJI.jpg',
		lrc: '/music_lrcover/lyrics/NAPAL BAJI.lrc',
		theme: '#077834'
      },*/
	  {
        name: 'Break Beat Bark!',
        artist: '神田沙也加',
        url: 'https://notp.synology.me/Mix/Break Beat Bark.mp3',
        cover: '/music_lrcover/cover/Break Beat Bark.jpg',
		lrc: '/music_lrcover/lyrics/Break Beat Bark.lrc',
		theme: '#0b2065'
      },
	  {
        name: 'Wild Rose',
        artist: "May'n (NC)",
        url: 'https://notp.synology.me/Mix/Wild Rose.mp3',
        cover: '/music_lrcover/cover/Wild Rose.jpg',
		lrc: '/music_lrcover/lyrics/Wild Rose.lrc',
		theme: '#e6c5cd'
      },
	  {
        name: '布拉格廣場',
        artist: '蔡依林',
        url: 'https://notp.synology.me/Mix/布拉格廣場.mp3',
        cover: '/music_lrcover/cover/布拉格廣場.jpg',
		lrc: '/music_lrcover/lyrics/布拉格廣場.lrc',
		theme: '#7e91c2'
      },
	  {
        name: '說愛你',
        artist: '蔡依林',
        url: 'https://notp.synology.me/Mix/說愛你.mp3',
        cover: '/music_lrcover/cover/布拉格廣場.jpg',
		lrc: '/music_lrcover/lyrics/說愛你.lrc',
		theme: '#7e91c2'
      },
	  {
        name: 'My Days',
        artist: '鈴木このみ',
        url: 'https://notp.synology.me/Mix/My Days.mp3',
        cover: '/music_lrcover/cover/My Days.jpg',
		lrc: '/music_lrcover/lyrics/My Days.lrc',
		theme: '#544093'
      },
	  {
        name: '派對動物',
        artist: '五月天',
        url: 'https://notp.synology.me/Mix/派對動物.mp3',
        cover: '/music_lrcover/cover/派對動物.jpg',
		lrc: '/music_lrcover/lyrics/派對動物.lrc',
		theme: '#5d9b61'
      },
	  {
        name: 'Me and My Broken Heart',
        artist: 'Rixton (NC)',
        url: 'https://notp.synology.me/Mix/Me and My Broken Heart.mp3',
        cover: '/music_lrcover/cover/Me and My Broken Heart.jpg',
		lrc: '/music_lrcover/lyrics/Me and My Broken Heart.lrc',
		theme: '#414449'
      },
	  {
        name: '幸福了 然後呢',
        artist: 'A-Lin',
        url: 'https://notp.synology.me/Mix/幸福了 然後呢.mp3',
        cover: '/music_lrcover/cover/幸福了 然後呢.jpg',
		lrc: '/music_lrcover/lyrics/幸福了 然後呢.lrc',
		theme: '#e2bf22'
      },
	  {
        name: '帥到分手',
        artist: '周湯豪',
        url: 'https://notp.synology.me/Mix/帥到分手.mp3',
        cover: '/music_lrcover/cover/帥到分手.jpg',
		lrc: '/music_lrcover/lyrics/帥到分手.lrc',
		theme: '#919191'
      },
	  {
        name: 'Lemon',
        artist: '米津玄師',
        url: 'https://notp.synology.me/Mix/Lemon.mp3',
        cover: '/music_lrcover/cover/Lemon.jpg',
		lrc: '/music_lrcover/lyrics/Lemon.lrc',
		theme: '#bfdcda'
      },
	  {
        name: '學貓叫',
        artist: '小潘潘&小峰峰',
        url: 'https://notp.synology.me/Mix/學貓叫.mp3',
        cover: '/music_lrcover/cover/學貓叫.jpg',
		lrc: '/music_lrcover/lyrics/學貓叫.lrc',
		theme: '#f5c6de'
      },
	  {
        name: '雨愛',
        artist: '楊丞琳',
        url: 'https://notp.synology.me/Mix/雨愛.mp3',
        cover: '/music_lrcover/cover/雨愛.jpg',
		lrc: '/music_lrcover/lyrics/雨愛.lrc',
		theme: '#7a512e'
      },
	  {
        name: '聲聲慢',
        artist: '鄧福如',
        url: 'https://notp.synology.me/Mix/聲聲慢.mp3',
        cover: '/music_lrcover/cover/聲聲慢.jpg',
		lrc: '/music_lrcover/lyrics/聲聲慢.lrc',
		theme: '#e73980'
      },
	  {
        name: '稻香',
        artist: '周杰倫',
        url: 'https://notp.synology.me/Mix/稻香.mp3',
        cover: '/music_lrcover/cover/稻香.jpg',
		lrc: '/music_lrcover/lyrics/稻香.lrc',
		theme: '#85541b'
      },
	  {
        name: '123我愛你',
        artist: '新樂塵符-賀子玲',
        url: 'https://notp.synology.me/Mix/123我愛你.mp3',
        cover: '/music_lrcover/cover/123我愛你.jpg',
		lrc: '/music_lrcover/lyrics/123我愛你.lrc',
		theme: '#9788be'
      },
	  {
        name: '私奔到月球',
        artist: '五月天 (feat.陳綺貞)',
        url: 'https://notp.synology.me/Mix/私奔到月球.mp3',
        cover: '/music_lrcover/cover/私奔到月球.jpg',
		lrc: '/music_lrcover/lyrics/私奔到月球.lrc',
		theme: '#113c37'
      },
	  {
        name: '演員',
        artist: '薛之謙',
        url: 'https://notp.synology.me/Mix/演員.mp3',
        cover: '/music_lrcover/cover/演員.jpg',
		lrc: '/music_lrcover/lyrics/演員.lrc',
		theme: '#2f3130'
      },
	  {
        name: '我是誰 我是誰 我是誰',
        artist: 'MP魔幻力量',
        url: 'https://notp.synology.me/Mix/我是誰我是誰我是誰.mp3',
        cover: '/music_lrcover/cover/我是誰我是誰我是誰.jpg',
		lrc: '/music_lrcover/lyrics/我是誰我是誰我是誰.lrc',
		theme: '#4b5356'
      },
	  {
        name: '偷偷的',
        artist: 'MP魔幻力量',
        url: 'https://notp.synology.me/Mix/偷偷的.mp3',
        cover: '/music_lrcover/cover/偷偷的.jpg',
		lrc: '/music_lrcover/lyrics/偷偷的.lrc',
		theme: '#121219'
      },
	  {
        name: '感覺犯',
        artist: 'MP魔幻力量',
        url: 'https://notp.synology.me/Mix/感覺犯.mp3',
        cover: '/music_lrcover/cover/感覺犯.jpg',
		lrc: '/music_lrcover/lyrics/感覺犯.lrc',
		theme: '#878b89'
      },
	  {
        name: '沒有如果',
        artist: '梁靜茹',
        url: 'https://notp.synology.me/Mix/沒有如果.mp3',
        cover: '/music_lrcover/cover/沒有如果.jpg',
		lrc: '/music_lrcover/lyrics/沒有如果.lrc',
		theme: '#b9b19f'
      },
	  /*{
        name: 'Hacking to the Gate',
        artist: '伊藤香奈子',
        url: 'https://notp.synology.me/Mix/Hacking to the Gate.mp3',
        cover: '/music_lrcover/cover/Hacking to the Gate.jpg',
		lrc: '/music_lrcover/lyrics/Hacking to the Gate.lrc',
		theme: '#b09456'
      },*/
	  {
        name: 'Last Christmas',
        artist: 'Glee Cast',
        url: 'https://notp.synology.me/Mix/Last Christmas.mp3',
        cover: '/music_lrcover/cover/Last Christmas.jpg',
		lrc: '/music_lrcover/lyrics/Last Christmas.lrc',
		theme: '#20bf00'
      },
	  {
        name: 'Alone',
        artist: 'Alan Walker',
        url: 'https://notp.synology.me/Mix/Alone.mp3',
        cover: '/music_lrcover/cover/Alone.jpg',
		lrc: '/music_lrcover/lyrics/Alone.lrc',
		theme: '#3c4748'
      },
	  {
        name: 'Faded (即刻電音版)',
        artist: 'RocketGirls 101 (火箭少女)',
        url: 'https://notp.synology.me/Mix/Faded (即刻電音版).mp3',
        cover: '/music_lrcover/cover/Faded (即刻電音版).jpg',
		lrc: '/music_lrcover/lyrics/Faded (即刻電音版).lrc',
		theme: '#3d039b'
      },
	  {
        name: 'Closer (Aash Mehta Flip)',
        artist: 'The Chainsmokers (ft. Halsey)',
        url: 'https://notp.synology.me/Mix/Closer (Aash Mehta Flip).mp3',
        cover: '/music_lrcover/cover/Closer (Aash Mehta Flip).jpg',
		lrc: '/music_lrcover/lyrics/Closer (Aash Mehta Flip).lrc',
		theme: '#b50302'
      },
	  {
        name: '歐若拉',
        artist: '張韶涵',
        url: 'https://notp.synology.me/Mix/歐若拉.mp3',
        cover: '/music_lrcover/cover/歐若拉.jpg',
		lrc: '/music_lrcover/lyrics/歐若拉.lrc',
		theme: '#73877e'
      },
	  {
        name: '親愛的那不是愛情',
        artist: '張韶涵',
        url: 'https://notp.synology.me/Mix/親愛的那不是愛情.mp3',
        cover: '/music_lrcover/cover/親愛的那不是愛情.jpg',
		lrc: '/music_lrcover/lyrics/親愛的那不是愛情.lrc',
		theme: '#948c7f'
      },
	  {
        name: '好心分手',
        artist: '盧巧音&王力宏',
        url: 'https://notp.synology.me/Mix/好心分手.mp3',
        cover: '/music_lrcover/cover/好心分手.jpg',
		lrc: '/music_lrcover/lyrics/好心分手.lrc',
		theme: '#f5b3b7'
      },
	  {
        name: '小さな恋のうた',
        artist: 'コバソロ & 杏沙子',
        url: 'https://notp.synology.me/Mix/小さな恋のうた.mp3',
        cover: '/music_lrcover/cover/小さな恋のうた.jpg',
		lrc: '/music_lrcover/lyrics/小さな恋のうた.lrc',
		theme: '#117cdc'
      },
	  {
        name: 'あとひとつ',
        artist: 'コバソロ & こぴ',
        url: 'https://notp.synology.me/Mix/あとひとつ.mp3',
        cover: '/music_lrcover/cover/あとひとつ.jpg',
		lrc: '/music_lrcover/lyrics/あとひとつ.lrc',
		theme: '#55524b'
      },
	  {
        name: 'I Believe',
        artist: '范逸臣',
        url: 'https://notp.synology.me/Mix/I_Believe.mp3',
        cover: '/music_lrcover/cover/I_Believe.jpg',
		lrc: '/music_lrcover/lyrics/I_Believe.lrc',
		theme: '#38a8c1'
      },
	  {
        name: 'Love More',
        artist: '畢書盡',
        url: 'https://notp.synology.me/Mix/Love_More.mp3',
        cover: '/music_lrcover/cover/Love_More.jpg',
		lrc: '/music_lrcover/lyrics/Love_More.lrc',
		theme: '#121211'
      },
	  {
        name: '分手後不要做朋友',
        artist: '梁文音',
        url: 'https://notp.synology.me/Mix/分手後不要做朋友.mp3',
        cover: '/music_lrcover/cover/分手後不要做朋友.jpg',
		lrc: '/music_lrcover/lyrics/分手後不要做朋友.lrc',
		theme: '#bddef5'
      },
	  {
        name: '天后',
        artist: '陳勢安',
        url: 'https://notp.synology.me/Mix/天后.mp3',
        cover: '/music_lrcover/cover/天后.jpg',
		lrc: '/music_lrcover/lyrics/天后.lrc',
		theme: '#b49a8e'
      },
	  {
        name: '好朋友只是朋友',
        artist: '郁可唯',
        url: 'https://notp.synology.me/Mix/好朋友只是朋友.mp3',
        cover: '/music_lrcover/cover/好朋友只是朋友.jpg',
		lrc: '/music_lrcover/lyrics/好朋友只是朋友.lrc',
		theme: '#996c57'
      },
	  {
        name: '家家酒',
        artist: '家家',
        url: 'https://notp.synology.me/Mix/家家酒.mp3',
        cover: '/music_lrcover/cover/家家酒.jpg',
		lrc: '/music_lrcover/lyrics/家家酒.lrc',
		theme: '#494540'
      },
	  {
        name: '涼涼',
        artist: '楊宗緯 & 張碧晨',
        url: 'https://notp.synology.me/Mix/涼涼.mp3',
        cover: '/music_lrcover/cover/涼涼.jpg',
		lrc: '/music_lrcover/lyrics/涼涼.lrc',
		theme: '#e8dddb'
      },
	  {
        name: '猜不透',
        artist: '丁噹',
        url: 'https://notp.synology.me/Mix/猜不透.mp3',
        cover: '/music_lrcover/cover/猜不透.jpg',
		lrc: '/music_lrcover/lyrics/猜不透.lrc',
		theme: '#012f2f'
      },
	  {
        name: '等一個人',
        artist: '林芯儀',
        url: 'https://notp.synology.me/Mix/等一個人.mp3',
        cover: '/music_lrcover/cover/等一個人.jpg',
		lrc: '/music_lrcover/lyrics/等一個人.lrc',
		theme: '#5c6860'
      },
	  {
        name: '勢在必行',
        artist: '陳勢安 & 畢書盡',
        url: 'https://notp.synology.me/Mix/勢在必行.mp3',
        cover: '/music_lrcover/cover/勢在必行.jpg',
		lrc: '/music_lrcover/lyrics/勢在必行.lrc',
		theme: '#011524'
      },
	  {
        name: '愛你',
        artist: '陳芳語',
        url: 'https://notp.synology.me/Mix/愛你.mp3',
        cover: '/music_lrcover/cover/愛你.jpg',
		lrc: '/music_lrcover/lyrics/愛你.lrc',
		theme: '#302220'
      },
	  {
        name: '我懷念的',
        artist: '蕭敬騰',
        url: 'https://notp.synology.me/Mix/我懷念的.mp3',
        cover: '/music_lrcover/cover/我懷念的.jpg',
		lrc: '/music_lrcover/lyrics/我懷念的.lrc',
		theme: '#050304'
      },
	  {
        name: '夢一場',
        artist: '蕭敬騰',
        url: 'https://notp.synology.me/Mix/夢一場.mp3',
        cover: '/music_lrcover/cover/我懷念的.jpg',
		lrc: '/music_lrcover/lyrics/夢一場.lrc',
		theme: '#050304'
      },
	  {
        name: '讓我為你唱情歌',
        artist: '蕭敬騰',
        url: 'https://notp.synology.me/Mix/讓我為你唱情歌.mp3',
        cover: '/music_lrcover/cover/讓我為你唱情歌.jpg',
		lrc: '/music_lrcover/lyrics/讓我為你唱情歌.lrc',
		theme: '#6e757d'
      },
	  {
        name: '妄想感傷代償連盟',
        artist: 'YuNi',
        url: 'https://notp.synology.me/Mix/妄想感傷代償連盟.mp3',
        cover: '/music_lrcover/cover/妄想感傷代償連盟.jpg',
		lrc: '/music_lrcover/lyrics/妄想感傷代償連盟.lrc',
		theme: '#c94b70'
      },
	  {
        name: "Can't You Say",
        artist: 'Roys',
        url: 'https://notp.synology.me/Mix/Cant You Say.mp3',
        cover: '/music_lrcover/cover/Cant You Say.jpg',
		lrc: '/music_lrcover/lyrics/Cant You Say.lrc',
		theme: '#588d2a'
      },
	  {
        name: '#thatPOWER',
        artist: 'will.i.am (ft. Justin Bieber)',
        url: 'https://notp.synology.me/Mix/thatPOWER.mp3',
        cover: '/music_lrcover/cover/thatPOWER.jpg',
		lrc: '/music_lrcover/lyrics/thatPOWER.lrc',
		theme: '#030303'
      },
	  {
        name: '浪子回頭',
        artist: '茄子蛋',
        url: 'https://notp.synology.me/Mix/浪子回頭.mp3',
        cover: '/music_lrcover/cover/浪子回頭.jpg',
		lrc: '/music_lrcover/lyrics/浪子回頭.lrc',
		theme: '#f9de1f'
      },
	  {
        name: '浪流連',
        artist: '茄子蛋',
        url: 'https://notp.synology.me/Mix/浪流連.mp3',
        cover: '/music_lrcover/cover/浪流連.jpg',
		lrc: '/music_lrcover/lyrics/浪流連.lrc',
		theme: '#0e0e18'
      },
	  {
        name: 'Happy!!! 運將情歌',
        artist: '茄子蛋',
        url: 'https://notp.synology.me/Mix/Happy!!! 運將情歌.mp3',
        cover: '/music_lrcover/cover/Happy!!! 運將情歌.jpg',
		lrc: '/music_lrcover/lyrics/Happy!!! 運將情歌.lrc',
		theme: '#de2a35'
      },
	  {
        name: 'キセキ',
        artist: '高橋李依',
        url: 'https://notp.synology.me/Mix/キセキ.mp3',
        cover: '/music_lrcover/cover/キセキ.jpg',
		lrc: '/music_lrcover/lyrics/キセキ.lrc',
		theme: '#f8e7aa'
      },
	  {
        name: '小さな恋のうた',
        artist: '高橋李依',
        url: 'https://notp.synology.me/Mix/小さな恋のうた_高橋李依.mp3',
        cover: '/music_lrcover/cover/小さな恋のうた_高橋李依.jpg',
		lrc: '/music_lrcover/lyrics/小さな恋のうた_高橋李依.lrc',
		theme: '#ed885b'
      },
	  {
        name: '言わないけどね。',
        artist: '高橋李依',
        url: 'https://notp.synology.me/Mix/言わないけどね。.mp3',
        cover: '/music_lrcover/cover/キセキ.jpg',
		lrc: '/music_lrcover/lyrics/言わないけどね。.lrc',
		theme: '#f8e7aa'
		
      },
	  {
        name: '愛唄',
        artist: '高橋李依',
        url: 'https://notp.synology.me/Mix/愛唄.mp3',
        cover: '/music_lrcover/cover/小さな恋のうた_高橋李依.jpg',
		lrc: '/music_lrcover/lyrics/愛唄.lrc',
		theme: '#ed885b'
		
      },
	  {
        name: 'PopLove',
        artist: 'Robin Skouteris',
        url: 'https://notp.synology.me/Mix/PopLove.mp3',
        cover: '/music_lrcover/cover/PopLove.jpg',
		lrc: '/music_lrcover/lyrics/PopLove.lrc',
		theme: '#e604e0'
      },
	  {
        name: 'Yearmix 2017',
        artist: 'NEXU',
        url: 'https://notp.synology.me/Mix/Yearmix_2017.mp3',
        cover: '/music_lrcover/cover/Yearmix_2017.jpg',
		lrc: '/music_lrcover/lyrics/Yearmix_2017.lrc',
		theme: '#000002'
      },
	  {
        name: 'Good Time',
        artist: 'Owl City',
        url: 'https://notp.synology.me/Mix/Good_Time.mp3',
        cover: '/music_lrcover/cover/Good_Time.jpg',
		lrc: '/music_lrcover/lyrics/Good_Time.lrc',
		theme: '#603d2a'
      },
	  {
        name: '愛上現在的我',
        artist: '閻奕格 (ft. 高爾宣 OSN)',
        url: 'https://notp.synology.me/Mix/愛上現在的我.mp3',
        cover: '/music_lrcover/cover/愛上現在的我.jpg',
		lrc: '/music_lrcover/lyrics/愛上現在的我.lrc',
		theme: '#080403'
      },
	  {
        name: '綠色',
        artist: '陳雪凝',
        url: 'https://notp.synology.me/Mix/綠色.mp3',
        cover: '/music_lrcover/cover/綠色.jpg',
		lrc: '/music_lrcover/lyrics/綠色.lrc',
		theme: '#5e7354'
      },
	  {
        name: '怎麼了',
        artist: '周興哲',
        url: 'https://notp.synology.me/Mix/怎麼了.mp3',
        cover: '/music_lrcover/cover/怎麼了.jpg',
		lrc: '/music_lrcover/lyrics/怎麼了.lrc',
		theme: '#3e3e3e'
      },
	  {
        name: '太陽',
        artist: '邱振哲',
        url: 'https://notp.synology.me/Mix/太陽.mp3',
        cover: '/music_lrcover/cover/太陽.jpg',
		lrc: '/music_lrcover/lyrics/太陽.lrc',
		theme: '#fef339'
      },
	  {
        name: '奏 (和聲版)',
        artist: '高橋李依 x 雨宫天',
        url: 'https://notp.synology.me/Mix/奏.mp3',
        cover: '/music_lrcover/cover/奏.jpg',
		lrc: '/music_lrcover/lyrics/奏.lrc',
		theme: '#a68461'
      },
	  {
        name: '生きていたんだよな',
        artist: 'あいみょん',
        url: 'https://notp.synology.me/Mix/生きていたんだよな.mp3',
        cover: '/music_lrcover/cover/生きていたんだよな.jpg',
		lrc: '/music_lrcover/lyrics/生きていたんだよな.lrc',
		theme: '#df192b'
      },
	  {
        name: '空の青さを知る人よ',
        artist: 'あいみょん',
        url: 'https://notp.synology.me/Mix/空の青さを知る人よ.mp3',
        cover: '/music_lrcover/cover/空の青さを知る人よ.jpg',
		lrc: '/music_lrcover/lyrics/空の青さを知る人よ.lrc',
		theme: '#10530c'
      },
	  {
        name: '心做し',
        artist: '鹿乃',
        url: 'https://notp.synology.me/Mix/心做し.mp3',
        cover: '/music_lrcover/cover/心做し.jpg',
		lrc: '/music_lrcover/lyrics/心做し.lrc',
		theme: '#283c5b'
      },
	  {
        name: '夜空中最亮的星',
        artist: '逃跑計劃',
        url: 'https://notp.synology.me/Mix/夜空中最亮的星.mp3',
        cover: '/music_lrcover/cover/夜空中最亮的星.jpg',
		lrc: '/music_lrcover/lyrics/夜空中最亮的星.lrc',
		theme: '#6a79ae'
      },
	  {
        name: '途中',
        artist: '黃美珍',
        url: 'https://notp.synology.me/Mix/途中.mp3',
        cover: '/music_lrcover/cover/途中.jpg',
		lrc: '/music_lrcover/lyrics/途中.lrc',
		theme: '#757061'
      },
	  {
        name: 'あの世行きのバスに乗ってさらば。',
        artist: 'ツユ',
        url: 'https://notp.synology.me/Mix/あの世行きのバスに乗ってさらば。.mp3',
        cover: '/music_lrcover/cover/あの世行きのバスに乗ってさらば。.jpg',
		lrc: '/music_lrcover/lyrics/あの世行きのバスに乗ってさらば。.lrc',
		theme: '#232a60'
      },
	  {
        name: '願い～あの頃のキミへ～',
        artist: '當山みれい',
        url: 'https://notp.synology.me/Mix/願い～あの頃のキミへ～.mp3',
        cover: '/music_lrcover/cover/願い～あの頃のキミへ～.jpg',
		lrc: '/music_lrcover/lyrics/願い～あの頃のキミへ～.lrc',
		theme: '#163472'
      },
	  {
        name: '茜さす',
        artist: 'Aimer',
        url: 'https://notp.synology.me/Mix/茜さす.mp3',
        cover: '/music_lrcover/cover/茜さす.jpg',
		lrc: '/music_lrcover/lyrics/茜さす.lrc',
		theme: '#ec3a36'
      },
	  {
        name: '過客',
        artist: '周思涵',
        url: 'https://notp.synology.me/Mix/過客.mp3',
        cover: '/music_lrcover/cover/過客.jpg',
		lrc: '/music_lrcover/lyrics/過客.lrc',
		theme: '#003b43'
      },
	  {
        name: '聽見下雨的聲音',
        artist: '魏如昀',
        url: 'https://notp.synology.me/Mix/聽見下雨的聲音.mp3',
        cover: '/music_lrcover/cover/聽見下雨的聲音.jpg',
		lrc: '/music_lrcover/lyrics/聽見下雨的聲音.lrc',
		theme: '#185278'
      },
	  {
        name: 'Sweet but Psycho',
        artist: 'Ava Max',
        url: 'https://notp.synology.me/Mix/Sweet_but_Psycho.mp3',
        cover: '/music_lrcover/cover/Sweet_but_Psycho.jpg',
		lrc: '/music_lrcover/lyrics/Sweet_but_Psycho.lrc',
		theme: '#a0263a'
      },
	  {
        name: '920',
        artist: 'A-Lin (ft. 小宇)',
        url: 'https://notp.synology.me/Mix/920.mp3',
        cover: '/music_lrcover/cover/幸福了 然後呢.jpg',
		lrc: '/music_lrcover/lyrics/920.lrc',
		theme: '#e2bf22'
      },
	  {
        name: '囂張',
        artist: 'en',
        url: 'https://notp.synology.me/Mix/囂張.mp3',
        cover: '/music_lrcover/cover/囂張.jpg',
		lrc: '/music_lrcover/lyrics/囂張.lrc',
		theme: '#1f2b45'
      },
	  {
        name: '與我無關',
        artist: '阿冗',
        url: 'https://notp.synology.me/Mix/與我無關.mp3',
        cover: '/music_lrcover/cover/與我無關.jpg',
		lrc: '/music_lrcover/lyrics/與我無關.lrc',
		theme: '#42458a'
      },
	  {
        name: '你的答案',
        artist: '阿冗',
        url: 'https://notp.synology.me/Mix/你的答案.mp3',
        cover: '/music_lrcover/cover/你的答案.jpg',
		lrc: '/music_lrcover/lyrics/你的答案.lrc',
		theme: '#9b7e60'
      },
	  {
        name: '少年',
        artist: '夢然',
        url: 'https://notp.synology.me/Mix/少年.mp3',
        cover: '/music_lrcover/cover/少年.jpg',
		lrc: '/music_lrcover/lyrics/少年.lrc',
		theme: '#0d1b3e'
      },
	  {
        name: '芒種',
        artist: '音闕詩聽+趙方婧',
        url: 'https://notp.synology.me/Mix/芒種.mp3',
        cover: '/music_lrcover/cover/芒種.jpg',
		lrc: '/music_lrcover/lyrics/芒種.lrc',
		theme: '#1f1c0d'
      },
	  {
        name: '多想在平庸的生活擁抱你',
        artist: '隔壁老樊',
        url: 'https://notp.synology.me/Mix/多想在平庸的生活擁抱你.mp3',
        cover: '/music_lrcover/cover/多想在平庸的生活擁抱你.jpg',
		lrc: '/music_lrcover/lyrics/多想在平庸的生活擁抱你.lrc',
		theme: '#010713'
      },
	  {
        name: '失眠飛行',
        artist: '接個吻，開一槍+沈以誠+薛明媛',
        url: 'https://notp.synology.me/Mix/失眠飛行.mp3',
        cover: '/music_lrcover/cover/失眠飛行.jpg',
		lrc: '/music_lrcover/lyrics/失眠飛行.lrc',
		theme: '#f1d4d6'
      },
	  {
        name: '只是太愛你',
        artist: '丁芙妮',
        url: 'https://notp.synology.me/Mix/只是太愛你.mp3',
        cover: '/music_lrcover/cover/只是太愛你.jpg',
		lrc: '/music_lrcover/lyrics/只是太愛你.lrc',
		theme: '#2fbdec'
      },
	  {
        name: 'Rain',
        artist: '秦基博 (Motohiro Hata)',
        url: 'https://notp.synology.me/Mix/Rain.mp3',
        cover: '/music_lrcover/cover/Rain.jpg',
		lrc: '/music_lrcover/lyrics/Rain.lrc',
		theme: '#10530c'
      },
	  {
        name: 'remember',
        artist: 'Uru',
        url: 'https://notp.synology.me/Mix/remember.mp3',
        cover: '/music_lrcover/cover/remember.jpg',
		lrc: '/music_lrcover/lyrics/remember.lrc',
		theme: '#a19cba'
      },
	  {
        name: '年少有為',
        artist: '李榮浩',
        url: 'https://notp.synology.me/Mix/年少有為.mp3',
        cover: '/music_lrcover/cover/年少有為.jpg',
		lrc: '/music_lrcover/lyrics/年少有為.lrc',
		theme: '#137b8e'
      },
	  {
        name: '李白',
        artist: '李榮浩',
        url: 'https://notp.synology.me/Mix/李白.mp3',
        cover: '/music_lrcover/cover/李白.jpg',
		lrc: '/music_lrcover/lyrics/李白.lrc',
		theme: '#41423c'
      },
	  {
        name: '麻雀',
        artist: '李榮浩',
        url: 'https://notp.synology.me/Mix/麻雀.mp3',
        cover: '/music_lrcover/cover/麻雀.jpg',
		lrc: '/music_lrcover/lyrics/麻雀.lrc',
		theme: '#0b121c'
      },
	  {
        name: '不將就',
        artist: '李榮浩',
        url: 'https://notp.synology.me/Mix/不將就.mp3',
        cover: '/music_lrcover/cover/不將就.jpg',
		lrc: '/music_lrcover/lyrics/不將就.lrc',
		theme: '#2e4b5d'
      },
	  {
        name: '飛鳥和蟬',
        artist: '任然',
        url: 'https://notp.synology.me/Mix/飛鳥和蟬.mp3',
        cover: '/music_lrcover/cover/飛鳥和蟬.jpg',
		lrc: '/music_lrcover/lyrics/飛鳥和蟬.lrc',
		theme: '#16424f'
      },
	  {
        name: '青春住了誰',
        artist: '楊丞琳',
        url: 'https://notp.synology.me/Mix/青春住了誰.mp3',
        cover: '/music_lrcover/cover/青春住了誰.jpg',
		lrc: '/music_lrcover/lyrics/青春住了誰.lrc',
		theme: '#73777b'
      }
    ]
});