"use strict";

function desiredWhiteCount(board) {
	var d = 0;
	board.array.forEach(function (element) {
		if (element > -1)
			d += element;
	}, this);

	return d;
}

function getNumbersPositions(board) {
	var stack = [];
	for (var x = 0; x < board.columns; x++) {
		for (var y = 0; y < board.rows; y++) {
			var v = board.get(x, y);
			if (v > 0)
				stack.push({ x: x, y: y, val: v });
		}
	}

	return stack;
}

var marker = -256;
function fill(board, x, y, error) {
	var counter = 0;

	var old = board.get(x, y);
	var stack = [];
	stack.push({ x: x, y: y });

	while (stack.length > 0) {
		var pos = stack.pop();
		if (pos.x >= 0 && pos.y >= 0 &&
			pos.x < board.columns && pos.y < board.rows) {
			var v = board.get(pos.x, pos.y);
			if (v > 0 && error)
				return 100000;
			if (v == old) {
				board.set(pos.x, pos.y, marker);
				counter++;
				stack.push({ x: pos.x + 1, y: pos.y });
				stack.push({ x: pos.x, y: pos.y + 1 });
				stack.push({ x: pos.x - 1, y: pos.y });
				stack.push({ x: pos.x, y: pos.y - 1 });
			}
		}
	}

	return counter;
}

function checkForBoxes(board) {
	for (var x = 0; x < board.columns - 1; x++) {
		for (var y = 0; y < board.rows - 1; y++) {
			var v1 = board.get(x, y) == -1;
			var v2 = board.get(x + 1, y) == -1;
			var v3 = board.get(x + 1, y + 1) == -1;
			var v4 = board.get(x, y + 1) == -1;

			if (v1 && v2 && v3 && v4) {
				return false;
			}
		}
	}

	return true;
}

function checkBlack(board, offset) {
	var b = board.copy();
	var y = Math.floor(offset / board.columns);
	var x = offset - y * board.columns;
	return fill(b, x, y, false);
}

function checkNumber(board, x, y) {
	board.set(x, y, 0)
	return fill(board, x, y, true);
}

var solveBtn = document.getElementById("solve");
solveBtn.onclick = function () {
	var whiteCount = desiredWhiteCount(board);
	var blackCount = board.array.length - whiteCount;
	var positions = getNumbersPositions(board);

	var lastBoard = null;
	function solve(board, offset, bc) {
		lastBoard = board;
		if (!checkForBoxes(board)) {
			return false;
		}

		var solved = true;
		var b = board.copy();
		if (bc == blackCount) {
			if (checkBlack(b, offset - 1) < blackCount) {
				return false;
			}
		} else {
			solved = false;
		}
		for (var i = 0; i < positions.length; i++) {
			var p = positions[i];
			var n = checkNumber(b, p.x, p.y);
			if (n < p.val) {
				return false;
			}
			if (n > p.val) {
				solved = false;
				break;
			}
		}
		if (solved) {
			return true;
		}


		for (var i = offset; i < board.array.length; i++) {
			if (board.array[i] == 0) {
				var b = board.copy();
				b.array[i] = -1;
				if (solve(b, i + 1, bc + 1)) {
					return true;
				}
			}
		}

		return false;
	}

	var result = solve(board, 0, 0);
	console.log(result);
	if (result) {
		board = lastBoard;
		drawBoard(board);
	}
}