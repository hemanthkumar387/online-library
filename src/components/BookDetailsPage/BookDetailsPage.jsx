import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import "./BookDetailsPage.css";

const BookDetails = () => {
  const { id } = useParams(); // Get book ID from URL
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const books = useSelector((state) => state.books);
  const bookFromRedux = books.find((b) => b.id.toString() === id);

  useEffect(() => {
    if (bookFromRedux) {
      setBook(bookFromRedux)
      setLoading(false);
    } else {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
        if (!response.ok) throw new Error("Book not found");
        const data = await response.json();
        setBook(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }

  }, [id,bookFromRedux]);
  

  if (loading) return <p className="loading">Loading book details...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!book) return <p className="error">No book details found.</p>;

  const { title, authors, description, publishedDate, imageLinks } = book.volumeInfo;

  return (
    <div className="book-details-container">
      <button className="back-button" onClick={() => navigate(-1)}>Back to Browse</button>
      <div className="book-details">
        <img
          src={imageLinks?.thumbnail || "https://via.placeholder.com/150"}
          alt={title}
          className="book-cover"
        />
        <div className="book-info">
          <h2>{title}</h2>
          <p className="book-author">By: {authors?.join(", ") || "Unknown Author"}</p>
          <p className="book-description">{description || "No description available."}</p>
          <p className="book-date">Published Date: {publishedDate || "Unknown"}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
