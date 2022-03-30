let zSpacing = -1000, // расстояине по оси Z минус вглубь
  lastPos = zSpacing / 10, // для стартовой позиции эл-ов
  $frames = document.getElementsByClassName("frame"), // все эл-ы
  frames = Array.from($frames),
  zVals = []; // массив для значений оси Z

window.onscroll = function () {
  let top = document.documentElement.scrollTop, // сверху до текущей позиции
    delta = lastPos - top; // вычисл посл позицию
  lastPos = top;

  //n текущий эл-нт
  //i - индекс
  frames.forEach(function (n, i) {
    zVals.push(i * zSpacing + zSpacing);
    zVals[i] += delta * -5; //-5 для скорости пролистывания
    let frame = frames[i],
      transform = `translateZ(${zVals[i]}px)`;
    opacity = zVals[i] < Math.abs(zSpacing) / 1.5 ? 1 : 0;
    frame.setAttribute("style", `transform: ${transform}; opacity: ${opacity}`);
    frame.setAttribute("style", `transform: ${transform}; opacity: ${opacity}`);
  });
};

window.scrollTo(0, 1);
