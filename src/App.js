import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Projects from './components/Projects';
import Dashboard from './components/Dashboard';
import Workers from './components/Workers';
import Materials from './components/Materials';
import Payment from './components/Payment';
import Profile from './components/Profile';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/projects" element={<Projects />} />

          {/* Protected Routes (Dashboard and related pages) */}
          <Route
            path="/dashboard"
            element={
              <div className="app-container">
                <Header />
                <div className="main-content">
                  <Sidebar />
                  <div className="content">
                    <Dashboard />
                  </div>
                </div>
              </div>
            }
          />
          <Route
            path="/workers"
            element={
              <div className="app-container">
                <Header />
                <div className="main-content">
                  <Sidebar />
                  <div className="content">
                    <Workers />
                  </div>
                </div>
              </div>
            }
          />
          <Route
            path="/materials"
            element={
              <div className="app-container">
                <Header />
                <div className="main-content">
                  <Sidebar />
                  <div className="content">
                    <Materials />
                  </div>
                </div>
              </div>
            }
          />
          <Route
            path="/payment"
            element={
              <div className="app-container">
                <Header />
                <div className="main-content">
                  <Sidebar />
                  <div className="content">
                    <Payment />
                  </div>
                </div>
              </div>
            }
          />
          <Route
            path="/profile"
            element={
              <div className="app-container">
                <Header />
                <div className="main-content">
                  <Sidebar />
                  <div className="content">
                    <Profile />
                  </div>
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;