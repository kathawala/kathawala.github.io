document.addEventListener('WebComponentsReady', function() {
  document.getElementById("bob").addEventListener('click', _onTap);
});
function _onTap(e) {
  var target = e.target;
  if (!target.down) {
    target.elevation += 1;
    if (target.elevation === 5) {
      target.down = true;
    }
  } else {
    target.elevation -= 1;
    if (target.elevation === 0) {
      target.down = false;
    }
  }
};