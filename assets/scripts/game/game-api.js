
const config = require('./../config')
const store = require('./../store')

const gamesCreate = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    // data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const gamesIndex = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    medthod: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      games: []
    }
  })
}

module.exports = {
  gamesCreate,
  gamesIndex
}
