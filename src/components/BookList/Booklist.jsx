import React from "react";
import "./BookList.css";

const BookList = ({ books, loading, error }) => {
  return (
    <section className="books-section">
      {loading && <p className="loading">Loading books...</p>}
      {error && <p className="error">{error}</p>}
      <div className="books-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            {/* {console.log(book)} */}
            <img
              src={book.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/128"}
              alt={book.volumeInfo?.title || "No Title Available"}
              className="book-image"
            />
            <h4 className="book-title">{book.volumeInfo.title}</h4>
            <p className="book-author">{book.volumeInfo.authors?.join(", ") || "Unknown Author"}</p>
            <a href={`/book/${book.id}`} className="view-details">View Details</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookList;
