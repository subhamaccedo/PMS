import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Components
import Sidebar from './Components/SideBar/Sidebar';
import Topbar from './Components/TopBar/Topbar';

// Pages
import Admin_Support from './pages/Admin_Support';
import Device from './pages/Device';
import HMSCustomization from './pages/HMSCustomization';
import Hotel_Admin from './pages/Hotel_Admin';
import Hotel_Chain from './pages/Hotel_Chain';
import HMSCustomViewAssets from './pages/HMSCustomViewAssets';
import Hotel from './pages/Hotel';
import Onboarding_Hotel from './pages/Onboarding_Hotel';
import PMS_Service from './pages/PMS_Service';
import Hotel_Environment from './pages/Hotel_Environment';
import Room_Event from './pages/Room_Event';
import Room from './pages/Room';
import Stream_Events from './pages/Stream_Events';
import User from './pages/User';
import User_Onboarding from './pages/User_Onboarding'; 
import LoginPage from './Components/Login/LoginPage';

export const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOnboarded, setIsOnboarded] = useState(false);

  return (
    <Router>
      <Routes>
        {/* 🔐 Public Route - Login */}
        <Route path="/" element={<LoginPage onLogin={() => setIsLoggedIn(true)} />} />

        {/* 🔐 Protected Route - Onboarding */}
        <Route
          path="/User_Onboarding"
          element={
            isLoggedIn ? (
              <User_Onboarding onComplete={() => setIsOnboarded(true)} />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* 🔐 Protected Routes - Dashboard (Sidebar + Topbar + Pages) */}
        <Route
          path="/*"
          element={
            isLoggedIn && isOnboarded ? (
              <div className="d-flex">
                <Sidebar />
                <div className="flex-grow-1 d-flex flex-column min-vh-100">
                  <Topbar />
                  <main className="flex-grow-1 overflow-auto bg-light p-4">
                    <Routes>
                      <Route path="/Admin_Support" element={<Admin_Support />} />
                      <Route path="/Device" element={<Device />} />
                      <Route path="/HMSCustomization" element={<HMSCustomization />} />
                      <Route path="/HMSCustomViewAssets" element={<HMSCustomViewAssets />} />
                      <Route path="/Hotel_Admin" element={<Hotel_Admin />} />
                      <Route path="/Hotel_Chain" element={<Hotel_Chain />} />
                      <Route path="/Hotel_Environment" element={<Hotel_Environment />} />
                      <Route path="/Hotel" element={<Hotel />} />
                      <Route path="/Onboarding_Hotel" element={<Onboarding_Hotel />} />
                      <Route path="/PMS_Service" element={<PMS_Service />} />
                      <Route path="/Room_Event" element={<Room_Event />} />
                      <Route path="/Room" element={<Room />} />
                      <Route path="/Stream_Events" element={<Stream_Events />} />
                      <Route path="/User" element={<User />} />
                    </Routes>
                  </main>
                </div>
              </div>
            ) : (
              <Navigate to={isLoggedIn ? '/User_Onboarding' : '/'} />
            )
          }
        />
      </Routes>
    </Router>
  );
};
