import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';

const BookSearchPage = ({ addToBookshelf }) => {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);

    useEffect(() => {
        if (query.length > 2) {
            axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
                .then(response => {
                    const booksWithImages = response.data.docs.map(book => {
                        const coverUrl = `http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
                        return { ...book, coverUrl };
                    });
                    setBooks(booksWithImages);
                })
                .catch(error => {
                    console.error("Error fetching data: ", error);
                });
        }
    }, [query]);

    return (
        <div className='BookSearchPage'>
            <SearchBar query={query} setQuery={setQuery} />
            <BookList books={books} addToBookshelf={addToBookshelf} />
        </div>
    );
};

export default BookSearchPage;
