
exports.min = function min (array) {
  return (arguments.lenght==0 || array.length == 0) ? 0 : Math.min(...array);
}

exports.max = function max (array) {
  return (arguments.legth == 0 || array.length == 0) ? 0 : Math.max(...array);
}

exports.avg = function avg (array) {
  return (arguments.length == 0 || array.length == 0) ? 0 : array.reduce((current, sum) => sum += current) / array.length;
}
