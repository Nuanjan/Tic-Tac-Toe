'use strict'
const api = require('./game-api')
const ui = require('./game-ui')
const store = require('./../store')
// const winner = require('./gameOver')

const getFormFields = require('../../../lib/get-form-fields.js')
const onGamesCreate = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log('this is data and form s =' + data + form)
  api.gamesCreate(data)
    .then(ui.createSuccess)
    .catch(ui.createFailure)
}

// let xWon = 0
// let oWon = 0
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
    console.log(store.game.cells[i])
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
        //    arrGameHistory.push(store.game.cells[i])
        $('.board').hide()
        $('.box').text('X WON!').css('font-size', '2em')
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
        $('.board').hide()
        $('.box').text('O WON!').css('font-size', '2em')
      }
    }
  }
  // if every cells has value
  if (store.game.cells.every(gameTie)) {
    // if (store.game.cells.every(e => e !== '')  also work
    $('.board').hide()
    $('.box').text('Tie Game!').css('font-size', '1.5em')
    console.log('tie!!!!!!!')
    //  arrGameHistory.push(store.game.cells)
    store.game.over = true
  }

  if (store.game.over === true) {
    $('.hidden-newGame').show()
    $('.btn-show-history').show()
    $('.box').off('click')
  }
  // check if space is empty
  if ($(div).text() === '') {
  //  store.game.player = currentPlayer
  // add x to the board
    $('.letter-o').css('background-color', '#d4320e').text('O')
    $('.letter-x').css('background-color', '#1d7d9e').text('X TURN!')
    $(div).text(currentPlayer).css('font-size', '3em')
    if (currentPlayer === 'x') {
      $('.letter-o').css('background-color', '#1d7d9e').text('O TURN!')
      $('.letter-x').css('background-color', '#d4320e').text('X')
      currentPlayer = 'o'
    } else {
      currentPlayer = 'x'
    }
  }
}

const onNewGame = function (event) {
  console.log(store.game._id + 'id')
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  // after button newGame clicked call back function updateGame again to rebind box click
  $('.box').one('click', onGamesUpdate)
  $('.board').show()

  api.newGame(data)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onGamesIndex = function (event) {
  api.gamesIndex()
    .then(ui.indexSuccess)
    .catch(ui.indexFailure)
}

module.exports = {
  onGamesCreate,
  onGamesIndex,
  onGamesUpdate,
  onNewGame
}
