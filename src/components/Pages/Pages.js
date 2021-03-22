import Pagination from '@material-ui/lab/Pagination';


export default function Pages({handlePageChange, handlerPageCounter}) {  
  return (
    <div>
      <Pagination 
        onChange={handlePageChange}
        className="pages"
        count={handlerPageCounter}
      />
    </div>
  );
}
