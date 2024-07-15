import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Property from './pages/Property';
import ProfilePage from './pages/Profile';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import About from './pages/About';
import MeetOurAgents from './pages/Agents';

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <div className="min-h-screen bg-slate-500">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/property/:id" element={<Property />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/agents" element={<MeetOurAgents />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/frequently-asked-questions" element={<Faq />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
};

export default App;
