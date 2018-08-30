import React from 'react';
import ReactDOM from 'react-dom';
import MonthName from './month_name';
import { Weekdays } from './weekdays';

function Root() {
	return (
		<div>
			<MonthName />
			<Weekdays />
		</div>
	);
}

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<Root />, root);
});
