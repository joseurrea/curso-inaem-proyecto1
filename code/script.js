/** @format */

const player0 = document.querySelector('.player-0'),
  player1 = document.querySelector('.player-1'),
  score0 = document.querySelector('#score-0'),
  score1 = document.getElementById('score-1'),
  current0 = document.getElementById('current-0'),
  current1 = document.getElementById('current-1'),
  dice = document.querySelector('.dice'),
  btnNew = document.querySelector('.btn-new'),
  btnRoll = document.querySelector('.btn-roll'),
  btnHold = document.querySelector('.btn-hold');
let scores, currentScore, activePlayer, playing;
const init = function () {
    (scores = [0, 0]),
      (currentScore = 0),
      (activePlayer = 0),
      (playing = !0),
      (score0.textContent = 0),
      (score1.textContent = 0),
      (current0.textContent = 0),
      (current1.textContent = 0),
      dice.classList.add('hidden'),
      player0.classList.remove('player-winner'),
      player1.classList.remove('player-winner'),
      player0.classList.add('player-active'),
      player1.classList.remove('player-active');
  },
  playerChange =
    (init(),
    function () {
      (document.getElementById('current-' + activePlayer).textContent = 0),
        (currentScore = 0),
        console.log('aqui cambia jugador'),
        (activePlayer = 0 === activePlayer ? 1 : 0),
        player0.classList.toggle('player-active'),
        player1.classList.toggle('player-active');
    });

btnRoll.addEventListener('click', function () {
  var diceMove;
  playing &&
    ((diceMove = Math.trunc(6 * Math.random()) + 1),
    dice.classList.remove('hidden'),
    (dice.src = `dice-${diceMove}.png`),
    (document.getElementsByClassName('dice')[0].style.display = 'none'),
    (document.getElementsByClassName('diceTurning')[0].style.display = 'block'),
    console.log('aqui se lanza el dado '),
    console.log('aqui se lanzo el audio que tenia en stand-by '),
    document.getElementById('mp3').play(),
    console.log('Ahora Estoy esperando 3 segundos'),
    setTimeout(function () {
      document.getElementsByClassName('diceTurning')[0].style.display = 'none';
      document.getElementsByClassName('dice')[0].style.display = 'block';
      diceMove !== 1
        ? ((currentScore += diceMove),
          (document.getElementById('current-' + activePlayer).textContent =
            currentScore))
        : playerChange();
    }, 1500),
    diceMove !== 1 ? (bb = 1) : (bb = 2));
}),
  btnHold.addEventListener('click', function () {
    playing &&
      ((scores[activePlayer] += currentScore),
      (document.getElementById('score-' + activePlayer).textContent =
        scores[activePlayer]),
      console.log('aqui se hace se hace HOLD'),
      100 <= scores[activePlayer]
        ? ((playing = !1),
          dice.classList.add('hidden'),
          document
            .querySelector('.player-' + activePlayer)
            .classList.add('player-winner'),
          document
            .querySelector('.player-' + activePlayer)
            .classList.remove('player-active'))
        : playerChange());
  }),
  btnNew.addEventListener('click', init);
