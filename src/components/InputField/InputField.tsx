import TextField from '@material-ui/core/TextField';
import './inputfield.css';

interface InputFieldInterface {
	handlerInputText: () => void;
}
export default function InputField({ handlerInputText }: InputFieldInterface) {
	return (
		<div className="input">
			<TextField
				onChange={handlerInputText}
				onKeyPress={handlerInputText}
				type="text"
				autoComplete="off"
				className="main-input"
				id="outlined-basic"
				label="I want to..."
				variant="outlined"
			/>
		</div>
	);
}
