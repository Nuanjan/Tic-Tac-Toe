'use strict'

const api = require('./game-api')
const ui = require('./game-ui')
const store = require('./../store')

const getFormFields = require('../../../lib/get-form-fields.js')
const onGamesCreate = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.gamesCreate(data)
    .then(ui.createSuccess)
    .catch(ui.createFailure)
}

// const onGamesIndex = function (event) {
//   api.gamesIndex()
//     .then(ui.indexSuccess)
//     .catch(ui.indexFailure)
// }
let currentPlayer = 'x'
const onGamesUpdate = function (event) {
  event.preventDefault()
  const div = event.target
  const position = $(div).data('cell-index')

  // rotate the return
  api.gameUpdate(position, currentPlayer)
    .then(ui.updateSuccess)
    .catch(ui.updateFailure)
  console.log(store.game.cells)
  // the postion is the number from the div.data from the html element that I set.
  // now the currentPlayer will becaome the value at that game tile you click.
  store.game.cells[position] = currentPlayer
  // check if space is empty
  if ($(div).text() === '') {
  //  store.game.player = currentPlayer
  // add x to the board
    $('.letter-o').css('background-color', '#d4320e').text('O')
    $('.letter-x').css('background-color', '#1d7d9e').text('X TURN!')
    $(div).text(currentPlayer)
    if (currentPlayer === 'x') {
      $('.letter-o').css('background-color', '#1d7d9e').text('O TURN!')
      $('.letter-x').css('background-color', '#d4320e').text('X')
      currentPlayer = 'o'
    } else {
      currentPlayer = 'x'
    }
  }
}
module.exports = {
  onGamesCreate,
  // onGamesIndex,
  onGamesUpdate
}
