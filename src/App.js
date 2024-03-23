import NavBar from './components/NavBar.component';
import Header from './components/Header.component';
import TjenesterSection from './components/SectionComponents/Tjenester.component';
import AttesterSection from './components/SectionComponents/AttesterSection.component';
import OmMegSection from './components/SectionComponents/OmMegSection.component';
import KontaktSection from './components/SectionComponents/KontaktSection.component';
import Footer from './components/Footer.component';

import { useEffect, useState } from 'react';

function App() {
  const [siteContent, setSiteContent] = useState(null);

  useEffect(() => {
    const fetchSiteContent = async () => {
      var response = await fetch('https://api.benko.no/site-content.json');
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
          <OmMegSection siteContent={siteContent} />
          {siteContent.Kundeanbefalinger.Anbefalinger.length > 0 && (
            <AttesterSection siteContent={siteContent} />
          )}
          <KontaktSection siteContent={siteContent} />
          <Footer />
        </div>
      ) : null}
    </>
  );
}

export default App;
