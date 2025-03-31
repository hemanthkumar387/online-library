import React from "react";
import useBooks from "../../utils/useBooks";
import BookList from "../BookList/Booklist";
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
    const { books, loading, error } = useBooks("popular books");
    const categories = ["Fiction", "Language Arts & Disciplines", "Medical", "Computers", "Education"];

    const fictionBooks = books?.filter((book) =>
        book.volumeInfo.categories?.some((category) => category.toLowerCase() === "fiction")
    );

    return (
        <div className="home-container">    
            {/* Welcome Section */}
            <header className="welcome-section">
                <h2>Welcome to the Online Library</h2>
                <p>Explore a world of knowledge and adventure</p>
            </header>

            {/* Categories Section */}
            <section className="categories-section">
                <h3>Book Categories</h3>
                <div className="categories">
                    {categories.map((category) => (
                        <Link key={category} to={`/browse/${category}`} className="category-text">
                        {category}
                      </Link>
                    ))}
                </div>
            </section>

            {/* Popular Books Section */}
            <h2 className="popular-books">Popular Books</h2>
            <BookList books={fictionBooks} loading={loading} error={error} />
        </div>
    );
};

export default Home;