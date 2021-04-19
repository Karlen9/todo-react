import './filtering.css';
import React from 'react';

interface FilteringProps {
	setStatus: React.Dispatch<React.SetStateAction<boolean | null>>;
}

export default function Filtering({ setStatus }: FilteringProps) {
	return (
		<div>
			<div className="selection-bar">
				<button className="button all-button" onClick={() => setStatus(null)} value="all">
					All
				</button>
				<button className="button done-button" onClick={() => setStatus(true)} value="done">
					Done
				</button>
				<button
					className="button undone-button"
					onClick={() => setStatus(false)}
					value="undone"
				>
					Undone
				</button>
			</div>
		</div>
	);
}
