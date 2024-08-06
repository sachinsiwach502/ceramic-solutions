import './App.css';
import Faq from './components/Faq';
import GetInTouch from './components/GetInTouch';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import OurBlog from './components/OurBlog';
import WhatWeDo from './components/WhatWeDo';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import Customers from './components/Customers';
import Services from './components/Services';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Header />
      <WhatWeDo />
      <WhyChooseUs />
      <Customers />
      <HowItWorks />
      <GetInTouch />
      <OurBlog />
      <Faq />
      <Services />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
