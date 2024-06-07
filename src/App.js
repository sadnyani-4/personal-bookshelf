import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import BookSearchPage from './pages/BookSearchPage';
import BookshelfPage from './pages/BookshelfPage';
import './App.css';

const App = () => {
    const [bookshelf, setBookshelf] = useState(() => {
        const savedBookshelf = localStorage.getItem('bookshelf');
        return savedBookshelf ? JSON.parse(savedBookshelf) : [];
    });

    const addToBookshelf = (book) => {
        const updatedBookshelf = [...bookshelf, book];
        setBookshelf(updatedBookshelf);
        localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
    };

    return (
        <Router>
            <nav>
                <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive ? 'active' : undefined}
                >
                    Search Books
                </NavLink>
                <NavLink 
                    to="/bookshelf" 
                    className={({ isActive }) => isActive ? 'active' : undefined}
                >
                    My Bookshelf
                </NavLink>
            </nav>
            <Routes>
                <Route exact path="/" element={<BookSearchPage addToBookshelf={addToBookshelf} />} />
                <Route path="/bookshelf" element={<BookshelfPage bookshelf={bookshelf} />} />
            </Routes>
        </Router>
    );
};

export default App;
