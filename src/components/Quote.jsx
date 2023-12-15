import React from "react";

const Quote = () => {
	return (
		<div className="quote flex">
            <p>Quote #1</p>
			<p>“It is better to fail in originality than to succeed in imitation”</p>
			<div className="quoteBottom flex">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="12"
					height="12"
					viewBox="0 0 12 12"
					fill="none"
				>
					<rect width="6" height="6" fill="#192A32" />
					<rect x="6" y="6" width="6" height="6" fill="#192A32" />
				</svg>
			</div>
		</div>
	);
};

export default Quote;
