Board = require('./board.js');
const readLine = require('readline')

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout

});

const newBoard = new Board();
newBoard.printBoard();

while (newBoard.gameOn) {
  rl.question(">>OK Player ", newBoard.nextMove, " you're up!  ", (answer) => {
     newBoard.move(answer)

   })
}

