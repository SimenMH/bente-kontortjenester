import NavBar from './components/NavBar/NavBar.component';
import Header from './components/Header/HeaderComponent';
import TjenesterSection from './components/SectionComponents/TjenesterSection/TjenesterSectionComponent';
import KundeanbefalingerSection from './components/SectionComponents/KundeanbefalingerSection/KundeanbefalingerSectionComponent';
import OmMegSection from './components/SectionComponents/OmMegSection/OmMegSectionComponent';
import KontaktSection from './components/SectionComponents/KontaktSection/KontaktSectionComponent';
import Footer from './components/Footer/FooterComponent';

import { useEffect, useState } from 'react';

function App() {
  const [siteContent, setSiteContent] = useState(null);

  useEffect(() => {
    const fetchSiteContent = async () => {
      var response = await fetch('https://www.benko.no/site-content.json');
      var json = await response.json();
      setSiteContent(json);
    };
    fetchSiteContent();
  }, []);

  return (
    <>
      {siteContent ? (
        <div>
          <NavBar siteContent={siteContent} />
          <Header siteContent={siteContent} />
          <TjenesterSection siteContent={siteContent} />
          <KundeanbefalingerSection siteContent={siteContent} />
          <OmMegSection siteContent={siteContent} />
          <KontaktSection siteContent={siteContent} />
          <Footer />
        </div>
      ) : null}
    </>
  );
}

export default App;
