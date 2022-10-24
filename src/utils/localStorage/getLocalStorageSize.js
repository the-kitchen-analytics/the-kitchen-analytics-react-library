const getLocalStorageSize = () => {
  var _lsTotal = 0
  var _xLen
  var _x

  for (_x in window.localStorage) {
    if (!window.localStorage.hasOwnProperty(_x)) {
      continue
    }
    _xLen = (window.localStorage[_x].length + _x.length) * 2
    _lsTotal += _xLen
  }

  return (_lsTotal / 1024).toFixed(2)
}

export default getLocalStorageSize
