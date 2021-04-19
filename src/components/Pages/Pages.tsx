import './pages.css';
import Pagination from '@material-ui/lab/Pagination';

interface PagesProps {
	handlerPageChange: (page: number) => void;
	amountOfPages: number;
}

export default function Pages({ handlerPageChange, amountOfPages }: PagesProps) {
	return (
		<Pagination
			onChange={(page: number) => {
				handlerPageChange(page);
			}}
			count={amountOfPages}
		/>
	);
}
