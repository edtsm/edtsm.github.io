const nineoneone = new APlayer({
    container: document.getElementById('nineoneone'),
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
        name: "癡情的男子漢",
        artist: '玖壹壹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/911/玖壹壹-癡情的男子漢.mp3',
        lrc: '/music_lrcover/911_lrc/玖壹壹-癡情的男子漢.lrc',
		cover: '/images/album/911.jpg'
      },
      {
        name: "明天再擱來",
        artist: '玖壹壹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/911/玖壹壹-明天再擱來.mp3',
        lrc: '/music_lrcover/911_lrc/玖壹壹-明天再擱來.lrc',
		cover: '/images/album/911.jpg'
      },
      {
        name: "我是冠軍",
        artist: '玖壹壹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/911/玖壹壹-我是冠軍.mp3',
        lrc: '/music_lrcover/911_lrc/玖壹壹-我是冠軍.lrc',
		cover: '/images/album/911.jpg'
      },
      {
        name: "我的路",
        artist: '玖壹壹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/911/玖壹壹-我的路.mp3',
        lrc: '/music_lrcover/911_lrc/玖壹壹-我的路.lrc',
		cover: '/images/album/911.jpg'
      },
      {
        name: "癡情男子漢",
        artist: '玖壹壹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/911/玖壹壹-癡情男子漢.mp3',
        lrc: '/music_lrcover/911_lrc/玖壹壹-癡情男子漢.lrc',
		cover: '/images/album/911.jpg'
      },
      {
        name: "回來我身邊",
        artist: '玖壹壹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/911/玖壹壹-回來我身邊.mp3',
        lrc: '/music_lrcover/911_lrc/玖壹壹-回來我身邊.lrc',
		cover: '/images/album/911.jpg'
      },
      {
        name: "鄉下來的",
        artist: '玖壹壹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/911/玖壹壹-鄉下來的.mp3',
        lrc: '/music_lrcover/911_lrc/玖壹壹-鄉下來的.lrc',
		cover: '/images/album/911.jpg'
      },
      {
        name: "再會中港路",
        artist: '玖壹壹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/911/玖壹壹-再會中港路.mp3',
        lrc: '/music_lrcover/911_lrc/玖壹壹-再會中港路.lrc',
		cover: '/images/album/911.jpg'
      },
      {
        name: "角頭(Remix)",
        artist: '玖壹壹&周湯豪',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/911/玖壹壹&周湯豪-角頭(Remix).mp3',
        lrc: '/music_lrcover/911_lrc/玖壹壹&周湯豪-角頭(Remix).lrc',
		cover: '/images/album/911.jpg'
      },
      {
        name: "男子漢的浪漫",
        artist: '玖壹壹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/911/玖壹壹-男子漢的浪漫.mp3',
        lrc: '/music_lrcover/911_lrc/玖壹壹-男子漢的浪漫.lrc',
		cover: '/images/album/911.jpg'
      },
      {
        name: "嘻哈莊腳情",
        artist: '玖壹壹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/911/玖壹壹-嘻哈莊腳情.mp3',
        lrc: '/music_lrcover/911_lrc/玖壹壹-嘻哈莊腳情.lrc',
		cover: '/images/album/911.jpg'
      },
      {
        name: "再會中港路(Remix)",
        artist: '玖壹壹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/911/玖壹壹-再會中港路(Remix).mp3',
        lrc: '/music_lrcover/911_lrc/玖壹壹-再會中港路(Remix).lrc',
		cover: '/images/album/911.jpg'
      },
      {
        name: "9453",
        artist: '玖壹壹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/911/玖壹壹-9453.mp3',
        lrc: '/music_lrcover/911_lrc/玖壹壹-9453.lrc',
		cover: '/images/album/911.jpg'
      },
      {
        name: "來個蹦蹦",
        artist: '玖壹壹&Ella陳嘉樺',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/911/玖壹壹&Ella陳嘉樺-來個蹦蹦.mp3',
        lrc: '/music_lrcover/911_lrc/玖壹壹&Ella陳嘉樺-來個蹦蹦.lrc',
		cover: '/images/album/911.jpg'
      },
      {
        name: "LOCAL",
        artist: '玖壹壹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/911/玖壹壹-LOCAL.mp3',
        lrc: '/music_lrcover/911_lrc/玖壹壹-LOCAL.lrc',
		cover: '/images/album/911.jpg'
      },
      {
        name: "下輩子",
        artist: '玖壹壹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/911/玖壹壹-下輩子.mp3',
        lrc: '/music_lrcover/911_lrc/玖壹壹-下輩子.lrc',
		cover: '/images/album/911.jpg'
      },
      {
        name: "大顯神威",
        artist: '玖壹壹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/911/玖壹壹-大顯神威.mp3',
        lrc: '/music_lrcover/911_lrc/玖壹壹-大顯神威.lrc',
		cover: '/images/album/911.jpg'
      },
      {
        name: "嫁給我吧",
        artist: '玖壹壹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/911/玖壹壹-嫁給我吧.mp3',
        lrc: '/music_lrcover/911_lrc/玖壹壹-嫁給我吧.lrc',
		cover: '/images/album/911.jpg'
      },
      {
        name: "派對俠",
        artist: '玖壹壹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/911/玖壹壹-派對俠.mp3',
        lrc: '/music_lrcover/911_lrc/玖壹壹-派對俠.lrc',
		cover: '/images/album/911.jpg'
      },
      {
        name: "溜浪",
        artist: '玖壹壹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/911/玖壹壹-溜浪.mp3',
        lrc: '/music_lrcover/911_lrc/玖壹壹-溜浪.lrc',
		cover: '/images/album/911.jpg'
      },
      {
        name: "我跟你卡好",
        artist: '玖壹壹&羅志祥',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/911/玖壹壹&羅志祥-我跟你卡好.mp3',
        lrc: '/music_lrcover/911_lrc/玖壹壹&羅志祥-我跟你卡好.lrc',
		cover: '/images/album/911.jpg'
      },
      {
        name: "討債情歌",
        artist: '玖壹壹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/911/玖壹壹-討債情歌.mp3',
        lrc: '/music_lrcover/911_lrc/玖壹壹-討債情歌.lrc',
		cover: '/images/album/911.jpg'
      },
      {
        name: "癡人說夢",
        artist: '玖壹壹',
        url: 'https://notp.ddns.net/wordpress/wp-content/music/artists/911/玖壹壹-癡人說夢.mp3',
		cover: '/images/album/kkbox.jpg'
      }


    ]
});