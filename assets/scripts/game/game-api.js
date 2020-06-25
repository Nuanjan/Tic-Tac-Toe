
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

const gamesIndex = function (status) {
  return $.ajax({
    url: config.apiUrl + '/games',
    medthod: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const gameUpdate = function (position, player) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    headers: {
      Authorization: 'Token token=' + store.user.token

    },
    data: {
      game: {
        cell: {
          index: position,
          value: player
        },
        over: store.game.over
      }
    }
  })
}

const gamesShow = function () {
  return $.ajax({
    url: config.apiUrl + '/games?over=' + store.game.over,
    medthod: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  gamesCreate,
  gamesIndex,
  gameUpdate,
  gamesShow
}
