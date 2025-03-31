# Online Library System

### A simple online library system built with React.js that allows users to browse, view, and add books.

## 🚀 Features
✅ Home Page with book categories and popular books  
✅ Browse Books with search and category filters  
✅ Book Details Page with complete book information  
✅ Add Book Page with Redux state management  
✅ Dynamic Routing for books  
✅ 404 Page for undefined routes  

## 🛠️ Tech Stack
- React.js (Frontend)
- Vite (Development & Bundler) 
- Redux (State Management)
- React Router (Navigation)
- Google Books API (Book Data Fetching)
- CSS (Styling)

## 📌 Folder Structure
```
src/
│── components/
│   ├── AddBookForm/
│   │   ├── AddBookForm.jsx
│   │   ├── AddBookForm.css
│   ├── BookDetailsPage/
│   │   ├── BookDetailsPage.jsx
│   │   ├── BookDetailsPage.css
│   ├── BookList/
│   │   ├── Booklist.jsx
│   │   ├── Booklist.css
│   ├── BrowseBooks/
│   │   ├── BrowseBooks.jsx
│   │   ├── BrowseBooks.css
│   ├── ErrorPage/
│   │   ├── ErrorPage.jsx
│   │   ├── ErrorPage.css
│   ├── Home/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│── utils/
│   ├── bookSlice.js
│   ├── bookStore.js
│   ├── useBooks.js
│── App.jsx
│── App.css
│── index.js
│── README.md
```

## 🔧 Installation & Setup
```bash
# 1️⃣ Clone the Repository
git clone https://github.com/hemanthkumar387/online-library

# 2️⃣ Navigate to the Project Directory
cd online-library

# 3️⃣ Install Dependencies
npm install

# 4️⃣ Start the Application
npm run dev
```
This will launch the app at `http://localhost:5173/`.

## 📜 Usage Instructions
- **Browse Books:** Navigate to the Browse Books page to see all available books.  
- **View Details:** Click on a book to view more details fetched from the Google Books API.  
- **Search:** Use the search bar to find books by title or author.  
- **Add a Book:** Fill in the form to add a new book (stored in Redux state).  
- **Navigate:** Use the navbar to go to Home, Browse Books, or Add Book pages.  

## 📜 API Used
- Google Books API: `https://www.googleapis.com/books/v1/volumes`

