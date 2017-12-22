import { detect, _webSupported } from './detect';


/**
 *
 * param Object {
 *   webpUrl,
 *   imageUrl,
 *   bizType = '',
 *   type = 'webp'
 * }
 */
function webp(param) {
  var suffix = '@.webp';
  var webpUrl, imageUrl;
  if (arguments.length === 1 && typeof param === 'string') {
    imageUrl = arguments[0];
    webpUrl = param + suffix;
  } else if (arguments.length === 2) {
    imageUrl = arguments[0];
    webpUrl = arguments[1];
  } else {
    webpUrl = param.webpUrl;
    imageUrl = param.imageUrl;
    if (param.bizType === 'qt') {
      if (imageUrl && !webpUrl) {
        webpUrl = imageUrl + suffix;
      }
    }
  }

  if (_webSupported.supported) {
    return webpUrl;
  } else {
    return imageUrl;
  }
}


// 处理css
detect(function (webpSupported) {
  document.body.className += '_webp_supported';
});


export default webp;
