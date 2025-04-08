import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
          {/* Public Routes with Header */}
          <Route
            path="/"
            element={
              <div className="app-container">
                <Header />
                <div className="main-content standalone">
                  <Register />
                </div>
              </div>
            }
          />
          <Route
            path="/login"
            element={
              <div className="app-container">
                <Header />
                <div className="main-content standalone">
                  <Login />
                </div>
              </div>
            }
          />
          <Route
            path="/projects"
            element={
              <div className="app-container">
                <Header />
                <div className="main-content standalone">
                  <Projects />
                </div>
              </div>
            }
          />

          {/* Protected Routes with Header and Sidebar */}
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

          {/* Default Route for Unmatched Paths */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;