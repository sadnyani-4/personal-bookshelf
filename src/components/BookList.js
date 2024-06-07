import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books, addToBookshelf }) => {
    return (
        <div className="book-list">
            {books.map((book, index) => (
                <BookCard key={index} book={book} addToBookshelf={addToBookshelf} />
            ))}
        </div>
    );
};

export default BookList;
