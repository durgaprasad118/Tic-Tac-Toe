import React, { useState } from "react";
// import "./TicTacToe.css";

const INITIAL_STATE = Array(9).fill(null);

const calculateWinner = (squares) => {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}

	return null;
};

const Square = ({ value, onClick }) => (
	<button className="square" onClick={onClick}>
		{value}
	</button>
);

const Board = ({ squares, onClick }) => (
	<div className="board">
		{squares.map((value, index) => (
			<Square key={index} value={value} onClick={() => onClick(index)} />
		))}
	</div>
);

const TicTacToe = () => {
	const [history, setHistory] = useState([INITIAL_STATE]);
	const [stepNumber, setStepNumber] = useState(0);
	const xIsNext = stepNumber % 2 === 0;
	const currentSquares = history[stepNumber];
	const winner = calculateWinner(currentSquares);

	const handleClick = (index) => {
		if (winner || currentSquares[index]) {
			return;
		}

		const newSquares = [...currentSquares];
		newSquares[index] = xIsNext ? "X" : "O";

		setHistory([...history.slice(0, stepNumber + 1), newSquares]);
		setStepNumber(stepNumber + 1);
	};

	const jumpTo = (step) => {
		setStepNumber(step);
	};

	const moves = history.map((step, move) => (
		<li key={move}>
			<button onClick={() => jumpTo(move)}>
				{move === 0 ? "Go to game start" : `Go to move #${move}`}
			</button>
		</li>
	));

	const status = winner
		? `Winner: ${winner}`
		: `Next player: ${xIsNext ? "X" : "O"}`;

	return (
		<div className="game">
			<div className="game-board">
				<Board squares={currentSquares} onClick={handleClick} />
			</div>
			<div className="game-info">
				<div>{status}</div>
				<ol>{moves}</ol>
			</div>
		</div>
	);
};

export default TicTacToe;
