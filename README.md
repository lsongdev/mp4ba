## mp4ba [![mp4ba](https://img.shields.io/npm/v/mp4ba.svg)](https://npmjs.org/mp4ba)

> Simple JavaScript API for [Mp4ba](http://mp4ba.com)

### Installation

```bash
$ npm install mp4ba
```

### Example

```js
const mp4ba = require('mp4ba');

(async () => {
  const list = await mp4ba();
  console.log(list);
})();

// [{ img: 'http://i2.tiimg.com/692913/3df621d8083338b1.png',
//   name: '昨日奇迹BD英语中英双字',
//   intro:
//    '杰克（希米什·帕特尔饰）是英国一个海滨小镇上苦苦挣扎的创作型歌手，有着好友艾莉（莉莉·詹姆斯饰）的一直支持。在一次神秘的全球大停电中发生了一起奇怪的公交车事故，杰克醒来后发现披头士乐队根本从未存在过。他正面临着非常复杂的问题。',
//   screenshots:
//    [ 'http://i2.tiimg.com/692913/8b87b514b51a8f79.png',
//      'http://i2.tiimg.com/692913/ec2bce1418cf9d7b.png',
//      'http://i2.tiimg.com/692913/3efa3a3d0f9b1aed.png',
//      'http://i2.tiimg.com/692913/bae43ef112190124.png' ],
//   resources:
//      'magnet:?xt=urn:btih:E9BCC658078B3D820D30A719E48550B431E61108',
//      'magnet:?xt=urn:btih:9AA408DF8D6F05E6870B9D8DAC10ED599BF9B1B4' ],
//   baidupan:
//    [ { link: 'https://pan.baidu.com/s/1ZRokYO0t7n6m5P_DWA1CGQ',
//        code: 'q2cf' },
//      { link: 'https://pan.baidu.com/s/1Slo-NWUP6VaiSIIDrX0BIg',
//        code: 'ek33' } ],
//   director: '丹尼·博伊尔',
//   writers: [ '杰克·巴斯', '理查德·柯蒂斯' ],
//   stars:
//    [ '希米什·帕特尔',
//      '莉莉·詹姆斯',
//      '艾德·希兰',
//      '凯特·麦克金农',
//      '阿历克斯·阿诺',
//      '乔尔·弗莱',
//      '詹姆斯·柯登',
//      '卡米利·陈' ],
//   categories: [ '喜剧', '音乐', '奇幻' ],
//   country: '英国',
//   language: '英语',
//   releaseDate:
//    [ '2019-08-16(中国大陆)', '2019-05-05(翠贝卡电影节)', '2019-06-28(英国)' ],
//   duration: '116分钟',
//   alias:
//    [ '缘來自昨天(港)', '靠谱歌王(台)', '昨天', '昨日', '你需要的只是爱', 'AllYouNeedisLove' ],
//   IMDb: 'tt8079248',
//   rate: '6.6' }]
```

### Contributing
- Fork this Repo first
- Clone your Repo
- Install dependencies by `$ npm install`
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Publish your local branch, Open a pull request
- Enjoy hacking <3

### MIT

This work is licensed under the [MIT license](./LICENSE).

---