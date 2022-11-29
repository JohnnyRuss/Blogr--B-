import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Hero from "./components/hero/Hero";
import Future from "./components/future/Future";
import ArtInfrastructure from "./components/artInfrastructure/ArtInfrastructure";
import UntitledSection from "./components/untitledSection/UntitledSection";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header>
        <Navigation />
        <Hero />
      </Header>
      <Future />
      <ArtInfrastructure />
      <UntitledSection />
      <Footer />
    </>
  );
}

export default App;
