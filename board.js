
class Board {
    constructor(props) {
    this.grid = [['','', ''],['','',''],['','','']];
    this.gameOn = true;
    this.nextMove = 1;

  }

  printBoard() {
    console.log('\n\n')
    this.grid.forEach((row) => {
      console.log(row[0], '\t|', row[1], '\t|', row[2], '\t|');
    })
  }

  gridReset() {
    this.grid = [['','', ''],['','',''],['','','']];
  }

  checkRows() {
    let conflict = false;
    this.grid.forEach((row) => {
      if (row.every((square) => square === 'x') ||
        row.every((square) => square === 'o')) {
        conflict = true;
      }
    })
    return conflict;
  }

  checkColumns() {
    let conflict = false;
    for (let i = 0; i < 3; i++) {
      if ((this.grid[0][i] === 'x' && this.grid[1][i] === 'x' && this.grid[2][i] === 'x') ||
        (this.grid[0][i] === 'o' && this.grid[1][i] === 'o' && this.grid[2][i] === 'o')) {
        conflict = true;
      }
    }
    return conflict;
  }

  checkDiag() {
    let conflict = false;
    if ((this.grid[0][0] === 'x' && this.grid[1][1] === 'x' && this.grid[2][2] === 'x') ||
      (this.grid[0][0] === 'o' && this.grid[1][1] === 'o' && this.grid[2][2] === 'o') ||
      (this.grid[0][2] === 'x' && this.grid[1][1] === 'x' && this.grid[2][0] === 'x') ||
      (this.grid[0][2] === 'o' && this.grid[1][1] === 'o' && this.grid[2][0] === 'o')) {
      conflict = true;
    }
    return conflict;
  }

  move(theMove) {
    const player = theMove[0];
    const x = theMove[1];
    const y = theMove[2];
    if (this.grid[x][y]) {
      console.log('go again! cant go there.');
      return;
    }
    if (player[0] === 1) {
      this.grid[x][y] = 'x'
      this.nextMove = 2;
    } else {
      this.grid[x][y] = 'o'
      this.nextMove = 1;
    }
    this.printBoard();

    if (this.checkRows() || this.checkColumns() || this.checkDiag()) {
      console.log('game over! Nice work');
      this.gridReset();
      this.gameOn = false;
    }
  }
}

module.exports = Board;