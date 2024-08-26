import NavBar from "../../components/NavBar";
import errorImage from "../../assets/error.png";


const Error = () => {

    return (
        <>
            <NavBar />
            <div className="container justify-content-center">
                <div className="row">
                    <div className="alert alert-danger mt-5">Page indisponible.</div>
                </div>
                <div className="row">
                    <img src={errorImage} alt="image 404" className="mx-auto" style={{ height: "60vh", width: "auto" }}/>
                </div>
            </div>
        </>
    );
}

export default Error;