import "./inputText.scss";

function TextInput({inputLabel, inputType, placeHolder, inputName, inputValue, inputOnChange, errorMessage}){
    return(
        <div className="form-group">
            <label>{inputLabel}</label>
            
            <input
                type={inputType}
                className="form-control"
                placeholder={placeHolder}
                name={inputName}
                value={inputValue}
                onChange={inputOnChange}
            />

            {errorMessage && <span className="error">{errorMessage}</span>}
        </div>
    )
}

export default TextInput;