import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AchievementsPage from './pages/AchievementsPage';
import ClientsPage from './pages/ClientsPage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/clients" element={<ClientsPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
