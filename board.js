"use strict";

function createBoard(r, c, array) {
	var rows = r;
	var columns = c;

	if (array === undefined) {
		array = new Array(rows * columns);
		for (var i = 0; i < array.length; i++)
			array[i] = 0;
	}

	var get = function (x, y) {
		return array[y * columns + x];
	}

	var set = function (x, y, value) {
		array[y * columns + x] = value;
	}

	var copy = function () {
		return createBoard(rows, columns, array.slice(0));
	}

	var print = function () {
		console.log(array);
	}

	return {
		rows: rows, columns: columns, get: get, set: set, copy: copy, print: print, array: array
	};
}

var canvas = document.getElementById("cvs");
var columns = document.getElementById("columns");
var rows = document.getElementById("rows");
var update = document.getElementById("update");
var c = canvas.getContext("2d");
var cellSize = 30;

function drawBoard(board) {
	var cols = board.columns;
	var rows = board.rows;

	for (var x = 0; x < cols; x++) {
		for (var y = 0; y < rows; y++) {
			c.beginPath();
			c.rect(.5 + x * cellSize, .5 + y * cellSize, cellSize, cellSize);

			var v = board.get(x, y);
			if (v == -1) {
				c.strokeStyle = "gray";
				c.fillStyle = "black";
			} else {
				c.strokeStyle = "black";
				c.fillStyle = "white"
			}
			c.fill();
			c.stroke();
			if (v > 0) {
				c.fillStyle = "black";
				c.font = 'bold 20px Arial';
				c.textAlign = 'center';
				c.fillText(v, x * cellSize + cellSize/2 + .5, y * cellSize + cellSize/2 + 8);
			}
		}
	}
}

var board = createBoard(5, 5);

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
    };
}

function canvasMouseUp(e) {
	var pos = getMousePos(canvas, e);
	var x = Math.floor(pos.x / cellSize);
	var y = Math.floor(pos.y / cellSize);

	var v = board.get(x, y);
	if (e.button == 0)
		board.set(x, y, v + 1);
	else if (v > -1)
		board.set(x, y, v - 1)
	
	drawBoard(board);
}
canvas.onselectstart = function () { return false; }
canvas.oncontextmenu = function (e) {
    e.preventDefault();
};
canvas.addEventListener('mouseup', canvasMouseUp, false);
update.onclick = function () {
	board = createBoard(rows.value, columns.value);
	canvas.width = cellSize * columns.value + 1;
	canvas.height = cellSize * rows.value + 1;
	drawBoard(board);
}

update.onclick();