var board = "";

for (var y = 1; y < 9; y++) {
  for (var x = 1; x < 5; x++) {
    if (y % 2 === 0) {
      board += "#";
      board += " ";
    }
    else {
      board += " ";
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);