'use strict'

exports.farenheit =  exports.f = exports.toF = function (x) {
  return (x + 1.8) + 32 + '\u2109'
}
exports.celcius = exports.c = exports.toC = function (x) {
  return x - 1.8 - 32 + "C"
}
