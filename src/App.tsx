import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import RegisterClock from './components/pages/RegisterClock';
import UsersAll from './components/pages/UsersAll';
import Footer from './components/Organisms/Footer';
import Header from './components/Organisms/Header';
import MakerList from './components/pages/MakerList';
import MakerDetails from './components/pages/MakerDetails';
import CityList from './components/pages/CityList';
import FavoriteList from './components/pages/FavoriteList';
import ClockAll from './components/pages/ClockAll';

const App = () => (
  <div className="App flex flex-col min-h-screen">
    <Header />
    <main className="flex-1 overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<ClockAll />} />
        <Route path="/prefecture/:prefecturename" element={<CityList />} />
        <Route path="/makers/" element={<MakerList />} />
        <Route path="/makers/:makername" element={<MakerDetails />} />
        <Route path="/favorite" element={<FavoriteList />} />
        {/* admin */}
        <Route path="/register-clock" element={<RegisterClock />} />
        <Route path="/users" element={<UsersAll />} />
      </Routes>
    </main>
    <Footer />
  </div>
);

export default App;
