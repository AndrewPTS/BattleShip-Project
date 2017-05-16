// JavaScript Document

function newGame() {
	"use strict";
	var playerBoard = new Board("Placeholder");
	var opBoard = new Board("anon");

	playerBoard.createPlayerBoard();
	opBoard.createOpBoard();
}

function Board(name) {
	"use strict";
	this.board = new Array(10);
	for (var i = 0; i < 10; i++) {
		this.board[i] = new Array(10);
	}
	this.name = name;	
}


Board.prototype.createPlayerBoard = function() {
	"use strict";
	var title = document.createElement("h2");
	var playerName = document.createTextNode(this.name+ "'s Board");
	title.appendChild(playerName);
	document.body.appendChild(title);
	var boardDiv = document.createElement("div");
	boardDiv.id = "playerBoard";
	document.body.appendChild(boardDiv);
	for (var i = 0; i < 100; i++) {
		var tile = document.createElement("div");
		tile.id = "playerTile";
		document.getElementById("playerBoard").appendChild(tile);
	}
};

Board.prototype.createOpBoard = function() {
	"use strict";
	var title = document.createElement("h4");
	var opName = document.createTextNode("Opponent's Board");
	title.appendChild(opName);
	document.body.appendChild(title);
	var boardDiv = document.createElement("div");
	boardDiv.id = "opBoard";
	document.body.appendChild(boardDiv);
	for (var i = 0; i < 100; i++) {
		var tile = document.createElement("div");
		tile.id = "opTile";
		document.getElementById("opBoard").appendChild(tile);
	}
};

