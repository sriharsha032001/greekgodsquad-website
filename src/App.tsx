import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AchievementsPage from './pages/AchievementsPage';
import ClientsPage from './pages/ClientsPage';
import React from 'react';
import EbooksPage from './pages/EbooksPage';
import PrivacyPolicy from './pages/policies/PrivacyPolicy';
import RefundPolicy from './pages/policies/RefundPolicy';
import ShippingPolicy from './pages/policies/ShippingPolicy';
import TermsandConditions from './pages/policies/TermsandConditions';
import PricingPolicy from './pages/policies/PricingPolicy';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/clients" element={<ClientsPage/>} />
        <Route path="/ebooks" element={<EbooksPage/>}/>
        <Route path="/pricingpolicy" element={<PricingPolicy/>}/>
        <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
        <Route path="/Refund" element={<RefundPolicy/>}/>
        <Route path="/shipping" element={<ShippingPolicy/>}/>
        <Route path="/termsandconditions" element={<TermsandConditions/>}/>
      </Routes>
    </Router>
  );
};

export default App;
