import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PostList from './pages/PostList';

const App = () => {
    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/posts" element={<Home />} />
                    <Route path="/" element={<PostList />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
