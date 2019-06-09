import React from 'react';
/*import CustomBackground from './Components/CustomBackground';*/
import CustomHeader from './Components/CustomHeader';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Components/Home';
import HeroPageRoutes from './Components/HeroPageRoutes'
import './App.css';
import CustomFooter from './Components/CustomFooter';
import AboutPage from './Components/Info-Pages/AboutPage/AboutPage';
import FAQPage from './Components/Info-Pages/FAQPage/FAQPage';
import ScrollToTop from './Components/ScrollToTop';



function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <CustomHeader />
          <Route path="/about" component={AboutPage}/>
          <Route path="/faq" component={FAQPage}/>
          <Route path="/" exact component={Home} />
          <HeroPageRoutes/>
          <CustomFooter/>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
