import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import RegisterClock from './components/pages/RegisterClock';
import UsersAll from './components/pages/UsersAll';
import RegisterPlace from './components/pages/RegisterPlace';
import Footer from './components/Organisms/Footer';
import Header from './components/Organisms/Header';
import RegisterMaker from './components/pages/RegisterMaker';
import PrefectureList from './components/pages/PrefectureList';
import MakerList from './components/pages/MakerList';
import MakerDetails from './components/pages/MakerDetails';
import ClockPlace from './components/pages/ClockPlace';
import CityList from './components/pages/CityList';
import FavoriteList from './components/pages/FavoriteList';

const App = () => (
  <div className="App flex flex-col min-h-screen">
    <Header />
    <main className="flex-1 overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prefecture" element={<PrefectureList />} />
        <Route path="/prefecture/:prefecturename" element={<CityList />} />
        <Route path="/makers" element={<MakerList />} />
        <Route path="/makers/:makername" element={<MakerDetails />} />
        <Route path="/makers/:makername/:clockname" element={<ClockPlace />} />
        <Route path="/favorite" element={<FavoriteList />} />
        {/* admin */}
        <Route path="/register-clock" element={<RegisterClock />} />
        <Route path="/register-place" element={<RegisterPlace />} />
        <Route path="/register-maker" element={<RegisterMaker />} />
        <Route path="/users" element={<UsersAll />} />
      </Routes>
    </main>
    <Footer />
  </div>
);

export default App;
