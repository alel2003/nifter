// import ExplreArtworks from "./components/ExplreArtworks/ExplreArtworks";
import Home from "../components/templates/Home/Home";
import HotCollection from "../components/templates/HotCollection/HotCollection";
import HotWorkss from "../components/templates/HotWorkss/HotWorkss";
import LiveAuction from "../components/templates/LiveAuction/LiveAuction";
import Navbar from "../components/templates/Navbar/Navbar";
import TopSeller from "../components/templates/TopSeller/TopSeller";
import DigitalCreator from "../components/templates/DigitalCreator/DigitalCreator";
import Footer from "../components/templates/Footer/Footer";
import ExplreArtworks from "../components/templates/ExplreArtworks/ExplreArtworks";

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <main className="grow">
        <Home />
        <TopSeller />
        <LiveAuction />
        <HotCollection />
        <ExplreArtworks />
        <HotWorkss />
        <DigitalCreator />
      </main>
      <Footer />
    </div>
  );
}

export default App;