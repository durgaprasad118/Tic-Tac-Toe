import React, { useState, useRef } from "react";
import "./App.css";
import Logo from "./components/Logo";
import Picker from "./components/Picker";
import { Link } from "react-router-dom";
import Quote from "./components/Quote";


function App() {
	const [showPopup, setShowPopup] = useState(false);
	const timeoutRef = useRef(null);

	

	const handleInviteClick = () => {
		// Show the popup
		setShowPopup(true);

		// Set a new timeout to hide the popup after 6 seconds
		timeoutRef.current = setTimeout(() => {
			setShowPopup(false);
		}, 500	);
	};

	return (
		<div className="app flex">
			<div className="mobile flex flex-col">
				<Logo />
				<Picker />
				<Link to="/game" className="button buttonYellow flex">NEW GAME ( VS CPU )</Link>
				<div className="button buttonCyan flex">
					NEW GAME ( VS HUMAN ) Coming soon
				</div>
				<div
					className="button buttonSmallYellow flex"
					onClick={handleInviteClick}
				>
					Invite your friend
				</div>

				{showPopup && (
					<div className="button buttonInfoAlert flex">Invite link copied</div>
				)}
			</div>
			<Quote/>
		</div>
	);
}

export default App;
