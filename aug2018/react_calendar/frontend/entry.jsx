import React from 'react';
import ReactDOM from 'react-dom';
import MonthName from './month_name';

function Root() {
	return (
		<div>
			<MonthName />
		</div>
	);
}

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<Root />, root);
});
