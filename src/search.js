import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import Book from "./books";
import { search } from "./BooksAPI";
const Search = (props) => {
  const [query, setquery] = useState("");
  const [searchedBooks, setsearchedBooks] = useState([]);

  const searchbooksresult = (query) => {
    setquery(query);
    search(query).then((searchBooks) => {
      setsearchedBooks(searchBooks);
    });
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(event) => searchbooksresult(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchedBooks &&
            searchedBooks.length > 0 &&
            searchedBooks.map((book) => (
              <Book key={book.id} book={book} onChange={props.changeshelf} />
            ))}
        </ol>
      </div>
    </div>
  );
};

Search.propTypes = {
  changeshelf: PropTypes.func.isRequired,
};
export default Search;
