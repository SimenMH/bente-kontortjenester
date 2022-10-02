import NavBar from './components/NavBar/NavBar.component';
import Header from './components/Header/HeaderComponent';
import TjenesterSection from './components/SectionComponents/TjenesterSection/TjenesterSectionComponent';
import KundeanbefalingerSection from './components/SectionComponents/KundeanbefalingerSection/KundeanbefalingerSectionComponent';
import OmMegSection from './components/SectionComponents/OmMegSection/OmMegSectionComponent';
import KontaktSection from './components/SectionComponents/KontaktSection/KontaktSectionComponent';
import Footer from './components/Footer/FooterComponent';

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <TjenesterSection />
      <KundeanbefalingerSection />
      <OmMegSection />
      <KontaktSection />
      <Footer />
    </div>
  );
}

export default App;
