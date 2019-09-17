const http = require('http');
const cheerio = require('cheerio');

const DOMAIN = 'http://www.mp4ba.com';

const get = url => 
  new Promise(done => http.get(url, done));

const readStream = stream => {
  var buffer = '';
  return new Promise((resolve, reject) => {
    stream
      .on('error', reject)
      .on('data', chunk => buffer += chunk)
      .on('end', () => resolve(buffer))
  });
};

const parseList = $ => {
  const items = $('.detail li > a[title]');
  return items.map((index, item) => {
    const link = $(item).attr('href');
    const title = $(item).attr('title');
    return {
      link,
      index,
      title,
    }
  }).get();
};

const i18n = {
  '导演': 'director',
  '编剧': 'writers',
  '主演': 'stars',
  '类型': 'categories',
  '语言': 'language',
  '片长': 'duration',
  '又名': 'alias',
  'IMDb链接': 'IMDb',
  '上映日期': 'releaseDate',
  '制片国家/地区': 'country',
  '豆瓣评分': 'rate'
};

const parseLine = str => {
  const a = str.split('/');;
  return a.length > 1 ? a : a[0];
};

const parsePage = $ => {
  const info = $('.info_con');
  const img = $(info).find('.cover img').attr('src');
  const name = $(info).find('.cover h4').text();
  const basic = $(info).find('.cover').text();
  const intro = $(info)
    .find('.info_detail > p')
    .text()
    .trim();
  const screenshots = $(info)
    .find('.swiper-slide img')
    .map((i, img) => $(img).attr('src'))
    .get();
  const resources = $('.dow_con:first-child .btn-group a[href]')
    .map((i, a) => $(a).attr('href'))
    .get();
  const baidupan = $('.btn-group.cloud')
    .map((i, li) => {
      const link = $(li).find('a').attr('href');
      const code = $(li).find('p').text().replace('提取码：', '');
      return {
        link,
        code
      };
    })
    .get()
  
  return basic
    .trim()
    .replace(/\t/g, '')
    .split('\n')
    .map(x => x.trim())
    .filter(Boolean)
    .slice(1)
    .reduce((obj, line) => {
      const idx = line.indexOf('：');
      if(idx !== -1) {
        const key = line.slice(0, idx);
        obj[i18n[key]||key] = parseLine(line.slice(idx + 1));
      }
      return obj;
  }, {
    img,
    name,
    intro,
    screenshots,
    resources,
    baidupan
  });
};

const page = link => {
  return Promise
  .resolve()
  .then(() => get(link))
  .then(readStream)
  .then(cheerio.load)
  .then(parsePage)
};

const mp4ba = (category = 'dianying', n = 1) => {
  return Promise
  .resolve()
  .then(() => get(`${DOMAIN}/${category}/list_${n}.html`))
  .then(readStream)
  .then(cheerio.load)
  .then(parseList)
  .then(list => list.map(x => page(x.link)))
  .then(x => Promise.all(x))
};

mp4ba.page = page;

module.exports = mp4ba;