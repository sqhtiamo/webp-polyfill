var _webp = {};

function detect(callback) {
  var image = new Image();
  image.src = 'data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA';
  image.onload = image.onerror = function () {
    callback(image.height === 2);
  };
}

detect(function (supported) {
  if (_webp.supported === undefined) {
    window._webpSupport = _webp.supported = supported ? true : false;
  }
});

setTimeout(function () {
  if (_webp.supported !== true) {
    _webp.supported = false;
  }
}, 50);
// export detect;
export { detect, _webp as _webSupported };
