import NavBar from "../../components/NavBar";
import BannerSection from "../../components/BannerSection";
import InformationSection from "../../components/InformationSection";
import UniversitySection from "../../components/UniversitySection";
import Footer from "../../components/Footer";

const Home = () => {
    return (
        <>
            <NavBar />
            <BannerSection />
            <InformationSection />
            <UniversitySection title="Quelques Etablissements recents"/>
            <Footer />
        </>
    )
}

export default Home;