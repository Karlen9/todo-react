import TextField from '@material-ui/core/TextField';
import './InputField.css';

export default function InputField(props) {  
  return (
    <div className="input">
      <TextField onChange={ props.handlerInputText } onKeyPress={ props.handlerInputText } type="text" autoComplete= "off" className="main-input" id="outlined-basic" label="I want to..." variant="outlined"/>
    </div>
  );
}
