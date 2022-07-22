import "./App.css";
import PropTypes from "prop-types";
import Book from "./books";
const Bookshelf = (props) => {
  const shelfbooks = props.books.filter((book) => book.shelf === props.id);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {shelfbooks.map((book) => (
            <Book key={book.id} book={book} onChange={props.onChange} />
          ))}
        </ol>
      </div>
    </div>
  );
};
Bookshelf.propTypes = {
  id: PropTypes.string,
  shelf: PropTypes.string,
  books: PropTypes.array,
  onChange: PropTypes.func.isRequired,
};
export default Bookshelf;
