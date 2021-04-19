import Button from '@material-ui/core/Button';
import { ImArrowUp } from 'react-icons/im';
import { ImArrowDown } from 'react-icons/im';
import { sortEnum } from '../../ToDoList';
import React from 'react';
import './sorting.css';

interface SortingProps {
	setSortBy: React.Dispatch<React.SetStateAction<sortEnum>>;
}

export default function Sorting({ setSortBy }: SortingProps) {
	return (
		<div>
			<div className="sort">
				<h3>Sort by Dаte</h3>
				<div className="arrows">
					<Button onClick={() => setSortBy(sortEnum.asc)} variant="contained">
						<ImArrowUp className="up-arrow" size="1rem" />
					</Button>
					<Button onClick={() => setSortBy(sortEnum.desc)} variant="contained">
						<ImArrowDown className="down-arrow" size="1rem" />
					</Button>
				</div>
			</div>
		</div>
	);
}
