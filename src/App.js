import "./App.css";
import { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Bookshelf from "./bookshelf";
import { getAll, update } from "./BooksAPI";
import Search from "./search";

function App() {
  let [books, setbooks] = useState([]);
  let [switcher, setswitcher] = useState([false]);

  useEffect(() => {
    const getBooks = async () => {
      const books = await getAll();
      setbooks(books);
    };

    getBooks();
  }, []);
  const changeshelf = (book, shelf) => {
    if (books.includes(book)) {
      book.shelf = shelf;
    } else {
      books.push(book);
      book.shelf = shelf;
    }
    update(book, shelf);
    setbooks(books);
    setswitcher(!switcher);
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Bookshelf
                id="currentlyReading"
                shelf="Currently Reading"
                books={books.filter(
                  (book) => book.shelf === "currentlyReading"
                )}
                onChange={changeshelf}
              />
              <Bookshelf
                id="wantToRead"
                shelf="Want to read"
                books={books.filter((book) => book.shelf === "wantToRead")}
                onChange={changeshelf}
              />
              <Bookshelf
                id="read"
                shelf="Read"
                books={books.filter((book) => book.shelf === "read")}
                onChange={changeshelf}
              />
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        }
      />
      <Route path="/search" element={<Search changeshelf={changeshelf} />} />
    </Routes>
  );
}

export default App;
