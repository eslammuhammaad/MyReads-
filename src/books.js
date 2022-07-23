import "./App.css";
import PropTypes from "prop-types";
import ShelfChanger from "./shelfchanger";

const Book = (props) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                props.book.imageLinks ? props.book.imageLinks.thumbnail : ""
              })`,
            }}
          ></div>
          <ShelfChanger book={props.book} onChange={props.onChange} />
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.authors}</div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};
export default Book;
