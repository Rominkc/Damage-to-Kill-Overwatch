import React from 'react';
import CustomBackground from './Components/CustomBackground';
import CustomHeader from './Components/CustomHeader';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Components/Home';
import AnaPage from './Components/Hero-Pages/Ana/AnaPage'
import AshePage from './Components/Hero-Pages/Ashe/AshePage'
import BaptistePage from './Components/Hero-Pages/Baptiste/BaptistePage';
import BastionPage from './Components/Hero-Pages/Bastion/BastionPage';
import BrigittePage from './Components/Hero-Pages/Brigitte/BrigittePage';
import DoomfistPage from './Components/Hero-Pages/Doomfist/DoomfistPage';
import DVaPage from './Components/Hero-Pages/DVa/DVaPage';
import GenjiPage from './Components/Hero-Pages/Genji/GenjiPage';
import HanzoPage from './Components/Hero-Pages/Hanzo/HanzoPage';
import JunkratPage from './Components/Hero-Pages/Junkrat/JunkratPage';
import LúcioPage from './Components/Hero-Pages/Lúcio/LúcioPage'
import McCreePage from './Components/Hero-Pages/McCree/McCreePage'
import MeiPage from './Components/Hero-Pages/Mei/MeiPage'
import MercyPage from './Components/Hero-Pages/Mercy/MercyPage'
import MoiraPage from './Components/Hero-Pages/Moira/MoiraPage'
import OrisaPage from './Components/Hero-Pages/Orisa/OrisaPage'
import PharahPage from './Components/Hero-Pages/Pharah/PharahPage'
import ReaperPage from './Components/Hero-Pages/Reaper/ReaperPage'
import ReinhardtPage from './Components/Hero-Pages/Reinhardt/ReinhardtPage'
import RoadhogPage from './Components/Hero-Pages/Roadhog/RoadhogPage'
import Soldier76Page from './Components/Hero-Pages/Soldier76/Soldier76Page'
import SombraPage from './Components/Hero-Pages/Sombra/SombraPage';
import SymmetraPage from './Components/Hero-Pages/Symmetra/SymmetraPage';
import TorbjörnPage from './Components/Hero-Pages/Torbjörn/TorbjörnPage';
import TracerPage from './Components/Hero-Pages/Tracer/TracerPage';
import WidowmakerPage from './Components/Hero-Pages/Widowmaker/WidowmakerPage';
import WinstonPage from './Components/Hero-Pages/Winston/WinstonPage';
import WreckingballPage from './Components/Hero-Pages/Wreckingball/WreckingballPage';
import ZaryaPage from './Components/Hero-Pages/Zarya/ZaryaPage';
import ZenyattaPage from './Components/Hero-Pages/Zenyatta/ZenyattaPage';
import './Components/Hero-Pages/Hero-Pages.css';
import './App.css';





function App() {
  return (
    <Router>
      <div className="App">
        <CustomHeader />
        <CustomBackground />
        <Route path="/" exact component={Home} />
        <Route path="/Ana" component={AnaPage} />
        <Route path="/Ashe" component={AshePage} />
        <Route path="/Baptiste" component={BaptistePage} />
        <Route path="/Bastion" component={BastionPage} />
        <Route path="/Brigitte" component={BrigittePage} />
        <Route path="/Doomfist" component={DoomfistPage} />
        <Route path="/D.Va" component={DVaPage} />
        <Route path="/Genji" component={GenjiPage} />
        <Route path="/Hanzo" component={HanzoPage} />
        <Route path="/Junkrat" component={JunkratPage} />
        <Route path="/Lúcio" component={LúcioPage} />
        <Route path="/McCree" component={McCreePage} />
        <Route path="/Mei" component={MeiPage} />
        <Route path="/Mercy" component={MercyPage} />
        <Route path="/Moira" component={MoiraPage} />
        <Route path="/Orisa" component={OrisaPage} />
        <Route path="/Pharah" component={PharahPage} />
        <Route path="/Reaper" component={ReaperPage} />
        <Route path="/Reinhardt" component={ReinhardtPage} />
        <Route path="/Roadhog" component={RoadhogPage} />
        <Route path="/Soldier76" component={Soldier76Page}/>
        <Route path="/Sombra" component={SombraPage}/>
        <Route path="/Symmetra" component={SymmetraPage}/>
        <Route path="/Torbjörn" component={TorbjörnPage}/>
        <Route path="/Tracer" component={TracerPage} />
        <Route path="/Widowmaker" component={WidowmakerPage}/>
        <Route path="/Winston" component={WinstonPage} />
        <Route path="/Wrecking Ball" component={WreckingballPage} />
        <Route path="/Zarya" component={ZaryaPage} />
        <Route path="/Zenyatta" component={ZenyattaPage} />
      </div>
    </Router>
  );
}

export default App;
