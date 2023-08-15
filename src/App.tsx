import React from 'react';
import { Navigate, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import MainPage from './pages/main-page/main-page';
import DetailsPage from './pages/details-page/details-page';
import './App';
import Header from './components/header/header';
import { ToastContainer } from 'react-toast';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/details/:id" element={<DetailsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </Router>
      <ToastContainer delay={6000} position="top-left" />
    </div>
  );
}

export default App;
