import React from 'react';
import './BookCard.css';

const BookCard = ({ book, addToBookshelf }) => {
    return (
        <div className="book-card">
            {book.coverUrl && <img className='book-cover' src={book.coverUrl} alt={book.title} />}

            <div className='book-info'>
                <h3 className='book-card-h'>{book.title}</h3>
                <p className='book-author'>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
                <button className='add-book' onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
            </div>
        </div>
    );
};

export default BookCard;