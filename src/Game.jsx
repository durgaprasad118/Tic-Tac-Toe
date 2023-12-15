import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import GameHeader from "./components/GameHeader";
import GameFooter from "./components/GameFooter";
import Quote from "./components/Quote";
import Circle from "./asset/image/Circle.png";
import Cross from "./asset/image/Cross.png";
import { Link } from "react-router-dom";

let chance = 1;

const Board = () => {
	const [marks, setMarks] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

	let user = 1
	const [winner, setWinner] = useState(0);

	// setUser(1)

	let pc = user === 2 ? 1 : 2;

	const m = useMemo(() => {
		return [...marks];
	}, [marks]);

	useEffect(() => {
		const combinations = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		const playpc = () => {
			// Get random value from 0 to 8
			let ran = Math.floor(Math.random() * 9);
			if (m[ran] === 0) {
				m[ran] = pc;
				setTimeout(() => {
					setMarks(m);
					chance++;
				}, 500);
			} else {
				playpc();
			}
		};

		for (let c of combinations) {
			if (marks[c[0]] === 1 && marks[c[1]] === 1 && marks[c[2]] === 1) {
				setWinner(1);
				chance = 1;
			}
			if (marks[c[0]] === 2 && marks[c[1]] === 2 && marks[c[2]] === 2) {
				setWinner(2);
				chance = 1;
			}
			if (chance === 9) {
				setWinner(3);
			}
		}

		if (chance % 2 === 0 && chance <= 9 && winner === 0) {
			playpc();
		}
	}, [marks, m, pc, winner]);

	const changeMark = (i) => {
		if (m[i] === 0 && chance % 2 !== 0) {
			chance++;
			m[i] = user;
			setMarks(m);
		}
	};

	return (
		<div className="board">
			<div className="boardRow">
				<Block mark={marks[0]} changeMark={changeMark} position={0} />
				<Block mark={marks[1]} changeMark={changeMark} position={1} />
				<Block mark={marks[2]} changeMark={changeMark} position={2} />
			</div>
			<div className="boardRow">
				<Block mark={marks[3]} changeMark={changeMark} position={3} />
				<Block mark={marks[4]} changeMark={changeMark} position={4} />
				<Block mark={marks[5]} changeMark={changeMark} position={5} />
			</div>
			<div className="boardRow">
				<Block mark={marks[6]} changeMark={changeMark} position={6} />
				<Block mark={marks[7]} changeMark={changeMark} position={7} />
				<Block mark={marks[8]} changeMark={changeMark} position={8} />
			</div>
			{winner !== 0 ? <Winner winner={winner} /> : null}
		</div>
	);
};

const Block = ({ mark, changeMark, position }) => {
	return (
		<div
			className={`block mark${mark}`}
			onClick={(e) => {
				changeMark(position);
			}}
		></div>
	);
};

const Winner = ({ winner }) => {
	const replayGame = () => {
		window.location.reload();
	};

	return (
		<div className="whoWon flex">
			<div className="winner flex">
				<p>{winner === 1 ? "PC WON!" : "User WON!"} </p>
				<h1 style={winner === 1 ? { color: "#f7b336" } : { color: "#32c4c3" }}>
					{winner === 1 ? (
						<img src={Circle} alt="Circle" />
					) : (
						<img src={Cross} alt="Cross" />
					)}
					{winner === 3 ? "Tie Brake" : "Takes a round"}
				</h1>
				<div className="winnerButtons">
					<Link to="/" className="button buttonCyan flex">
						QUIT
					</Link>
					<div className="button buttonSmallYellow flex" onClick={replayGame}>
						PLAY AGAIN
					</div>
				</div>
			</div>
		</div>
	);
};

const Game = () => {
	const [userScore, setUserScore] = useState(0);
	const [pcScore, setPCScore] = useState(0);

	return (
		<div className="app flex">
			<div className="mobile flex flex-col">
				<GameHeader />
				<Board userScore = {setUserScore} pcScore = {setPCScore}/>
				<GameFooter userScore={userScore} pcScore={pcScore} />
			</div>
			<Quote />
		</div>
	);
};

export default Game;
