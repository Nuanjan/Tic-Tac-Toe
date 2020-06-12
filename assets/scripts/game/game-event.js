'use strict'
const api = require('./game-api')
const ui = require('./game-ui')
const store = require('./../store')
// const winner = require('./gameOver')
const getFormFields = require('../../../lib/get-form-fields.js')

const onGamesCreate = function (event) {
  $('.letter-o').css('background-color', '#d4320e').text('O')
  $('.letter-x').css('background-color', '#1d7d9e').text('X TURN!')
  if (store.game.over === true) {
    $('.box').one('click', onGamesUpdate)
  }
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.gamesCreate(data)
    .then(ui.createSuccess)
    .catch(ui.createFailure)
}

let xWon = false
let oWon = false
let currentPlayer = 'x'
// let arrGameHistory = []
// check if currentPlayer have a value
const gameTie = (tie) => tie !== ''

const onGamesUpdate = function (event) {
  event.preventDefault()
  const div = event.target
  const position = $(div).data('cell-index')
  // rotate the return
  api.gameUpdate(position, currentPlayer)
    .then(ui.updateSuccess)
    .catch(ui.updateFailure)
  // the postion is the number from the div.data from the html element that I set.
  // now the currentPlayer will be store to the index of the postion when click .
  store.game.cells[position] = currentPlayer
  // GOAl Check if x/o won so x/o have to match the index of horizontal and vertical and slope
  for (let i = 0; i < store.game.cells.length; i++) {
    if (store.game.cells[i] === 'x') {
      if ((store.game.cells[i] === store.game.cells[0] && store.game.cells[i] === store.game.cells[1] && store.game.cells[i] === store.game.cells[2]) ||
    (store.game.cells[i] === store.game.cells[3] && store.game.cells[i] === store.game.cells[4] && store.game.cells[i] === store.game.cells[5]) ||
     (store.game.cells[i] === store.game.cells[6] && store.game.cells[i] === store.game.cells[7] && store.game.cells[i] === store.game.cells[8]) ||
     (store.game.cells[i] === store.game.cells[0] && store.game.cells[i] === store.game.cells[3] && store.game.cells[i] === store.game.cells[6]) ||
     (store.game.cells[i] === store.game.cells[1] && store.game.cells[i] === store.game.cells[4] && store.game.cells[i] === store.game.cells[7]) ||
     (store.game.cells[i] === store.game.cells[2] && store.game.cells[i] === store.game.cells[5] && store.game.cells[i] === store.game.cells[8]) ||
     (store.game.cells[i] === store.game.cells[0] && store.game.cells[i] === store.game.cells[4] && store.game.cells[i] === store.game.cells[8]) ||
     (store.game.cells[i] === store.game.cells[2] && store.game.cells[i] === store.game.cells[4] && store.game.cells[i] === store.game.cells[6])) {
        console.log('x won')
        //    xWon = 0
        store.game.over = true
        xWon = true
        //    arrGameHistory.push(store.game.cells[i])
        $('#head-board').hide()
        $('.box').text('X WON!')
      }
    } else if (store.game.cells[i] === 'o') {
      if ((store.game.cells[i] === store.game.cells[0] && store.game.cells[i] === store.game.cells[1] && store.game.cells[i] === store.game.cells[2]) ||
      (store.game.cells[i] === store.game.cells[3] && store.game.cells[i] === store.game.cells[4] && store.game.cells[i] === store.game.cells[5]) ||
      (store.game.cells[i] === store.game.cells[6] && store.game.cells[i] === store.game.cells[7] && store.game.cells[i] === store.game.cells[8]) ||
      (store.game.cells[i] === store.game.cells[0] && store.game.cells[i] === store.game.cells[3] && store.game.cells[i] === store.game.cells[6]) ||
      (store.game.cells[i] === store.game.cells[1] && store.game.cells[i] === store.game.cells[4] && store.game.cells[i] === store.game.cells[7]) ||
      (store.game.cells[i] === store.game.cells[2] && store.game.cells[i] === store.game.cells[5] && store.game.cells[i] === store.game.cells[8]) ||
      (store.game.cells[i] === store.game.cells[0] && store.game.cells[i] === store.game.cells[4] && store.game.cells[i] === store.game.cells[8]) ||
      (store.game.cells[i] === store.game.cells[2] && store.game.cells[i] === store.game.cells[4] && store.game.cells[i] === store.game.cells[6])) {
        console.log('o won')
        //  oWon = 0
        store.game.over = true
        oWon = true
        $('#head-board').hide()
        $('.box').text('O WON!')
        currentPlayer = 'x'
      }
    }
  }
  // if every cells has value
  if (store.game.cells.every(gameTie) && (!xWon || !oWon)) {
    // if (store.game.cells.every(e => e !== '')  also work
    $('#head-board').hide()
    $('.box').text('Tie Game!')
    store.game.over = true
  }

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

const onGamesIndex = function (event) {
  api.gamesIndex(status)
    .then(ui.indexSuccess)
    .catch(ui.indexFailure)
}

module.exports = {
  onGamesCreate,
  onGamesIndex,
  onGamesUpdate

}
