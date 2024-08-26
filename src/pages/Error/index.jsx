import NavBar from "../../components/NavBar";
import errorImage from "../../assets/error.png";


const Error = () => {

    return (
        <>
            <NavBar />
            <div className="container">
                <img src={errorImage} alt="image 404" />
            </div>
        </>
    );
}

export default Error;