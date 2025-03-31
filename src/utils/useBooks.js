import { useState, useEffect } from "react";

const useBooks = (query = "") => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        let url = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40`;
        const response = await fetch(url);
        const data = await response.json();
        setBooks(data.items || []);
      } catch (err) {
        setError("Failed to fetch books");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [query]);

  return { books, loading, error };
};

export default useBooks;
