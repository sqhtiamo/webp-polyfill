import webp from '../dist/webp';
import './webp.less';

var imageUrl = 'https://gw.alipayobjects.com/zos/rmsportal/ASfENrGxKQVHBqFwxKoS.png';

document.querySelector('#test1').style.backgroundImage = 'url(' + imageUrl + ')';

setTimeout(function () {
  var webpUrl = webp('https://gw.alipayobjects.com/zos/rmsportal/ASfENrGxKQVHBqFwxKoS.png');
  document.querySelector('#test2').style.backgroundImage = 'url(' + webpUrl + ')';
}, 0);
