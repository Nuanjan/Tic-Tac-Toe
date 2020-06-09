
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

// const gamesIndex = function () {
//   return $.ajax({
//     url: config.apiUrl + '/games',
//     medthod: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: {
//       games: []
//     }
//   })
// }

const gameUpdate = function (position, player) {
  console.log(position, player)
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
        over: false
      }
    }
  })
}

module.exports = {
  gamesCreate,
  // gamesIndex,
  gameUpdate
}
