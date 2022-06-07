document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div');
  const result = document.getElementById('result');
  const displayCurrentPLayer = document.getElementById('current-player');
  let currentPlayer = 1;
  for (let i = 0; i < squares.length; i++) {
    squares[i].onclick = () => {
      if (squares[i + 7].classList.contains('taken')) {
        if (currentPlayer === 1) {
          squares[i].classList.add('taken');
          squares[i].classList.add('player-one');
          currentPlayer = 2;
          displayCurrentPLayer.textContent = currentPlayer;
        } else if (currentPlayer === 2) {
          squares[i].classList.add('taken');
          squares[i].classList.add('player-two');
          currentPlayer = 1;
          displayCurrentPLayer.textContent = currentPlayer;
        }
      } else alert('Can not go there');
    };
  }
});
