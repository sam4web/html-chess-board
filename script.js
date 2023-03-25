const chessBoard = document
  .querySelector('.chess-board')
  .querySelector('tbody');

let chessBoardTemplate = '';
chessBoardTemplate += '<tr>';

// sets up the chessBoardTemplate
for (let i = 0; i < 8; i++) {
  // count will define the color of square
  // if count === even ? white : white
  let count = 0;
  if (i % 2 === 0) {
    count = 1;
  }

  for (let j = 0; j < 8; j++) {
    count += 1;
    let color = count % 2 === 0 ? 'white' : 'black';
    chessBoardTemplate += `<td class="chess-board__square ${color}"></td>`;
  }
  chessBoardTemplate += '</tr>';
}

chessBoard.innerHTML = chessBoardTemplate;
