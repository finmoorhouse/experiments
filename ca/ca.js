let currentRow = [false, true, false, false, true, false, false, true, false, false, true, false, false];
let append = [];
let allRows = [];

function nextRow(row) {
  append = row[0] ? [true, true, false, true] : [false, false];
  return row.slice(3).concat(append);
}

let counter = 0;
while (counter < 80) {
  allRows.push(currentRow);
  currentRow = nextRow(currentRow);
  // printRow(currentRow);
  counter += 1;
}

function printRow(row) {
  let line = "";
  for (i = 0; i < row.length; i++) {
    line += row[i] ? "0" : "1";
  }
}

function drawRows() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  allRows.forEach((row, index) => {
    for (i = 0; i < row.length; i++) {
      ctx.fillStyle = row[i] ? "purple" : "hotpink";
      ctx.fillRect(index * 10, i * 10, 10, 10);
    }
  });
}

drawRows();
