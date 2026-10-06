import "./button.scss";

function Button({buttonType, buttonClass, buttonName}) {
    return(
        <button
            type={buttonType}
            className={buttonClass}
        >
            {buttonName}
        </button>
    )
}

export default Button;