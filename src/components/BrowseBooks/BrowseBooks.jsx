import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux"; // Import Redux selector
import useBooks from "../../utils/useBooks";
import BookList from "../BookList/Booklist";
import "./BrowseBooks.css";

const BrowseBooks = () => {
  const categories = ["Fiction", "Language Arts & Disciplines", "Medical", "Computers", "Education"];
  const { category } = useParams(); // Get category from URL
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  const { books: fetchedBooks, loading, error } = useBooks(category || "all"); // Books from API
  const reduxBooks = useSelector((state) => state.books); // Books from Redux

  // Combine Redux books and API books
  useEffect(() => {
    let combinedBooks = [...reduxBooks, ...(fetchedBooks || [])];

    // Filter books by category
    if (category && category !== "all") {
      combinedBooks = combinedBooks.filter((book) =>
        book.category ? book.category === category : book.volumeInfo.categories?.includes(category)
      );
    }

    setBooks(combinedBooks);
  }, [fetchedBooks, reduxBooks, category]);

  // Filter books based on search query
  const filteredBooks = books.filter((book) => {
    const title = book.volumeInfo?.title?.toLowerCase() || book.title?.toLowerCase() || "";
    const authors = book.volumeInfo?.authors?.join(", ").toLowerCase() || book.author?.toLowerCase() || "";
    return title.includes(search.toLowerCase()) || authors.includes(search.toLowerCase());
  });

  return (
    <div className="browse-container">
      <h2>Browse {category || "Books"}</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by title or author"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      {/* Category Links */}
      <section className="categories-section">
        <h3>Book Categories</h3>
        <div className="categories">
          {categories.map((cat) => (
            <Link key={cat} to={`/browse/${cat}`} className="category-text">
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* Book List */}
      <BookList books={filteredBooks} loading={loading} error={error} />
    </div>
  );
};

export default BrowseBooks;
