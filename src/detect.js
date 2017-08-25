var webP = {};

function dectect(callback) {
  var image = new Image();
  image.src = 'data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA';
  image.onload = image.onerror = function () {
    callback(image.height === 2);
  };
}

dectect(function (supported) {
  if (webP.supported === undefined) {
    webP.supported = supported ? true : false;
  }
});

setTimeout(() => {
  if (webP.supported !== true) {
    webP.supported = false;
  }
}, 50);

exports.defaults = webP;
