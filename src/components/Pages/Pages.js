import './pages.css';
import Pagination from "@material-ui/lab/Pagination";

export default function Pages({handlerPageChange, amountOfPages}) {
  return (
    <Pagination 
      onChange={handlerPageChange}
      count={amountOfPages}
    />
  )
}