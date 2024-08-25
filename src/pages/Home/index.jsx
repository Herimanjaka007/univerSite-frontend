import NavBar from "../../components/NavBar";
import BannerSection from "../../components/BannerSection";
import InformationSection from "../../components/InformationSection";
import UniversitySection from "../../components/UniversitySection";

const Home = () => {
    return (
        <>
            <NavBar />
            <BannerSection />
            <InformationSection />
            <UniversitySection title="Quelques Etablissements recents"/>
        </>
    )
}

export default Home;