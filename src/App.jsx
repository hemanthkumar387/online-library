import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import BrowseBooks from "./components/BrowseBooks/BrowseBooks";
import BookDetailsPage from "./components/BookDetailsPage/BookDetailsPage";
import AddBookForm from "./components/AddBookForm/AddBookForm";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import './App.css'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browsebooks" element={<BrowseBooks />} />
        <Route path="/book/:id" element={<BookDetailsPage />} />
        <Route path="/browse/:category" element={<BrowseBooks />} />
        <Route path="/add" element={<AddBookForm />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;