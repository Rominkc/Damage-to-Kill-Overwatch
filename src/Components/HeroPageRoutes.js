import React from 'react';
import { Route } from 'react-router-dom';
import AnaPage from './Hero-Pages/Ana/AnaPage';
import AshePage from './Hero-Pages/Ashe/AshePage';
import BaptistePage from './Hero-Pages/Baptiste/BaptistePage';
import BastionPage from './Hero-Pages/Bastion/BastionPage';
import BrigittePage from './Hero-Pages/Brigitte/BrigittePage';
import DoomfistPage from './Hero-Pages/Doomfist/DoomfistPage';
import DVaPage from './Hero-Pages/DVa/DVaPage';
import GenjiPage from './Hero-Pages/Genji/GenjiPage';
import HanzoPage from './Hero-Pages/Hanzo/HanzoPage';
import JunkratPage from './Hero-Pages/Junkrat/JunkratPage';
import LúcioPage from './Hero-Pages/Lúcio/LúcioPage';
import McCreePage from './Hero-Pages/McCree/McCreePage';
import MeiPage from './Hero-Pages/Mei/MeiPage';
import MercyPage from './Hero-Pages/Mercy/MercyPage';
import MoiraPage from './Hero-Pages/Moira/MoiraPage';
import OrisaPage from './Hero-Pages/Orisa/OrisaPage';
import PharahPage from './Hero-Pages/Pharah/PharahPage';
import ReaperPage from './Hero-Pages/Reaper/ReaperPage';
import ReinhardtPage from './Hero-Pages/Reinhardt/ReinhardtPage';
import RoadhogPage from './Hero-Pages/Roadhog/RoadhogPage';
import SigmaPage from './Hero-Pages/Sigma/SigmaPage'; // First new hero added since creation, August 15,2019
import Soldier76Page from './Hero-Pages/Soldier76/Soldier76Page';
import SombraPage from './Hero-Pages/Sombra/SombraPage';
import SymmetraPage from './Hero-Pages/Symmetra/SymmetraPage';
import TorbjörnPage from './Hero-Pages/Torbjörn/TorbjörnPage';
import TracerPage from './Hero-Pages/Tracer/TracerPage';
import WidowmakerPage from './Hero-Pages/Widowmaker/WidowmakerPage';
import WinstonPage from './Hero-Pages/Winston/WinstonPage';
import WreckingballPage from './Hero-Pages/Wreckingball/WreckingballPage';
import ZaryaPage from './Hero-Pages/Zarya/ZaryaPage';
import ZenyattaPage from './Hero-Pages/Zenyatta/ZenyattaPage';
import './Hero-Pages/Hero-Pages.css';
const HeroPageRoutes = props => (
  <>
    <Route path='/Ana' component={AnaPage} />
    <Route path='/Ashe' component={AshePage} />
    <Route path='/Baptiste' component={BaptistePage} />
    <Route path='/Bastion' component={BastionPage} />
    <Route path='/Brigitte' component={BrigittePage} />
    <Route path='/Doomfist' component={DoomfistPage} />
    <Route path='/D.Va' component={DVaPage} />
    <Route path='/Genji' component={GenjiPage} />
    <Route path='/Hanzo' component={HanzoPage} />
    <Route path='/Junkrat' component={JunkratPage} />
    <Route path='/Lúcio' component={LúcioPage} />
    <Route path='/McCree' component={McCreePage} />
    <Route path='/Mei' component={MeiPage} />
    <Route path='/Mercy' component={MercyPage} />
    <Route path='/Moira' component={MoiraPage} />
    <Route path='/Orisa' component={OrisaPage} />
    <Route path='/Pharah' component={PharahPage} />
    <Route path='/Reaper' component={ReaperPage} />
    <Route path='/Reinhardt' component={ReinhardtPage} />
    <Route path='/Roadhog' component={RoadhogPage} />
    <Route path='/Sigma' component={SigmaPage} />
    <Route path='/Soldier76' component={Soldier76Page} />
    <Route path='/Sombra' component={SombraPage} />
    <Route path='/Symmetra' component={SymmetraPage} />
    <Route path='/Torbjörn' component={TorbjörnPage} />
    <Route path='/Tracer' component={TracerPage} />
    <Route path='/Widowmaker' component={WidowmakerPage} />
    <Route path='/Winston' component={WinstonPage} />
    <Route path='/Wrecking Ball' component={WreckingballPage} />
    <Route path='/Zarya' component={ZaryaPage} />
    <Route path='/Zenyatta' component={ZenyattaPage} />
  </>
);

export default HeroPageRoutes;
