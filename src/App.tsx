import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'; // ✅ Correct import

// Pages
import Home from './pages/Home';
import AchievementsPage from './pages/AchievementsPage';
import ClientsPage from './pages/ClientsPage';
import Store from './pages/Store';
import EbooksPage from './pages/EbooksPage';

// Policy Pages
import PrivacyPolicy from './pages/policies/PrivacyPolicy';
import RefundPolicy from './pages/policies/RefundPolicy';
import ShippingPolicy from './pages/policies/ShippingPolicy';
import TermsandConditions from './pages/policies/TermsandConditions';
import PricingPolicy from './pages/policies/PricingPolicy';
import ContactUs from './pages/policies/ContactUs';

// Razorpay Pages
import Success from './razorpay_pages/Success';
import Failure from './razorpay_pages/Failure';

const App = () => {
  return (
    <Router>
      {/* Global Toast Notification System */}
      <Toaster position="top-center" reverseOrder={false} />

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/store" element={<Store />} />
        <Route path="/ebooks" element={<EbooksPage />} />

        {/* Policy Pages */}
        <Route path="/pricingpolicy" element={<PricingPolicy />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/refund" element={<RefundPolicy />} />
        <Route path="/shipping" element={<ShippingPolicy />} />
        <Route path="/termsandconditions" element={<TermsandConditions />} />
        <Route path="/contactus" element={<ContactUs />} />

        {/* Razorpay Result Pages */}
        <Route path="/success" element={<Success />} />
        <Route path="/failure" element={<Failure />} />
      </Routes>
    </Router>
  );
};

export default App;
