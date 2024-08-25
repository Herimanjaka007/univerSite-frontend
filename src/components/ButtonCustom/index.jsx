import "./index.scss";


const ButtonCustom = ({ buttonText, ...rest }) => {
    return (
        <button className="btn-custom" {...rest}>{buttonText}</button>
    )
}

export default ButtonCustom;