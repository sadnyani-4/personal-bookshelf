import React from 'react';

const BookshelfPage = ({ bookshelf }) => {
    return (
        <div>
            <h2 className='shelf-h'>My Bookshelf</h2>
            <div className="bookshelf-list">
                {bookshelf.map((book, index) => (
                    <div key={index} className="bookshelf-book book-card">
                        {book.coverUrl && <img className='book-cover' src={book.coverUrl} alt={book.title} />}
                        
                        <div className='book-info'>
                            <h3 className='book-card-h'>{book.title}</h3>
                            <p className='book-author'>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookshelfPage;