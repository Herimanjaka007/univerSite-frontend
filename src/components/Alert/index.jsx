/* eslint-disable react/prop-types */
const Alert = ({ message, handler }) => {
    return (
        <div className="alert alert-danger d-flex">
            <p>{message}</p>
            <span className="btn text-secondary ms-auto" onClick={handler}>X</span>
        </div>
    );
}

export default Alert;