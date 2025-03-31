import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../../utils/bookSlice";
import { useNavigate, useParams } from "react-router-dom";
import "./AddBookForm.css";

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { category: selectedCategory } = useParams(); 

  const books = useSelector((state) => state.books); 
  const lastId = books.length > 0 ? books[books.length - 1].id : 0;

  const [book, setBook] = useState({
    title: "",
    author: "",
    category: selectedCategory || "",
    description: "",
    image: "",
  });

  const categories = ["Fiction", "Language Arts & Disciplines", "Medical", "Computers", "Education"];

  const [errors, setErrors] = useState({});

 
  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBook((prevBook) => ({ ...prevBook, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const generateId = () => {
    return lastId + 1;
  };

  // Form Validation
  const validateForm = () => {
    let formErrors = {};
    if (!book.title) formErrors.title = "Title is required";
    if (!book.author) formErrors.author = "Author is required";
    if (!book.category) formErrors.category = "Category is required";
    if (!book.description) formErrors.description = "Description is required";
    return formErrors;
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      const newBook = {
        id: generateId(),
        category: book.category, // Store selected category
        volumeInfo: {
          title: book.title,
          authors: [book.author],
          categories: [book.category],
          description: book.description,
          imageLinks: { thumbnail: book.image || "https://via.placeholder.com/128" },
        },
      };

      dispatch(addBook(newBook)); // Dispatch book to Redux store
      navigate(`/browse/${book.category}`); // Redirect to category page
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="add-book-container">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={book.title}
          onChange={handleChange}
        />
        {errors.title && <span className="error">{errors.title}</span>}

        <input
          type="text"
          name="author"
          placeholder="Author Name"
          value={book.author}
          onChange={handleChange}
        />
        {errors.author && <span className="error">{errors.author}</span>}

        {/* Category Selector */}
        <select name="category" value={book.category} onChange={handleChange}>
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        {errors.category && <span className="error">{errors.category}</span>}

        <textarea
          name="description"
          placeholder="Book Description"
          value={book.description}
          onChange={handleChange}
        ></textarea>
        {errors.description && <span className="error">{errors.description}</span>}

        <input type="file" accept="image/*" onChange={handleImageChange} />
        {book.image && <img src={book.image} alt="Preview" className="preview-image" />}

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
