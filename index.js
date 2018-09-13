const uniqueRandomArray = require('unique-random-array')
const quotesBude = require('./quote/data.json')

exports.all = quotesBude
exports.random = uniqueRandomArray(quotesBude)



