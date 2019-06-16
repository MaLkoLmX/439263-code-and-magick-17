'use strict';

window.renderStatistics = function (ctx, names, times) {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var BAR_WIDTH = 40;
  var BAR_HEIGHT = 150;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;

  function renderCloud(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  }

  function getMaxElement(arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  }

  renderCloud(CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили', 120, 50);
  ctx.fillText('Список результатов:', 120, 70);

  var HEIGHT_BAR = -BAR_HEIGHT / getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(' + (Math.random()) + ', 0, ' + (Math.random()) + ', ' + (Math.random()) + ')';
    }
    ctx.fillRect(150 + 70 * i, 250, BAR_WIDTH, times[i] * HEIGHT_BAR);
    ctx.fillText(names[i], 150 + 70 * i, 250 + 20);
    ctx.fillText(Math.round(times[i]), 150 + 70 * i, 90);
  }
};
