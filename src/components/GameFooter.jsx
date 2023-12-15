import React from "react";

const GameFooter = (props) => {
	return (
		<div className="flex gameFoot">
			<div className="score flex">
				<span>X (YOU)</span>
				<span>{props.userScore}</span>
			</div>
			<div className="score flex">
				<span>TIES</span>
				<span>0</span>
			</div>
			<div className="score flex">
				<span>O (CPU)</span>
				<span>{props.pcScore}</span>
			</div>
		</div>
	);
};

export default GameFooter;
