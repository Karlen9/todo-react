import Button from '@material-ui/core/Button';
import { ImArrowUp } from 'react-icons/im';
import { ImArrowDown } from 'react-icons/im';
import './Sorting.css';

export default function Sorting(props) {  
  return (
    <div>
       <div className="sort">
          <h3>Sort by Date</h3>
          <div className="arrows">
            <Button variant="contained">
              <ImArrowUp className="up-arrow" size="1rem"/>
            </Button>
            <Button variant="contained">
              <ImArrowDown className="down-arrow" size="1rem"/>
            </Button>
          </div>
        </div>
    </div>
  );
}
