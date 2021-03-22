import Pagination from '@material-ui/lab/Pagination';
import React from 'react'

export default function Pages({handlerPageChange, handlerPageCounter}) {  

  return (
    <div>
      <Pagination
      onChange={handlerPageChange}
      className="pages"
      count={handlerPageCounter}
    />
    </div>
    
  );
}
