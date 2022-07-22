import "./App.css";
import PropTypes from "prop-types";

const ShelfChanger = (props) => {
  return (
    <div className="book-shelf-changer">
      <select
        onChange={(event) => {
          props.onChange(props.book, event.target.value);
        }}
        value={props.book.shelf}
      >
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};
ShelfChanger.propTypes = {
  book: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};
export default ShelfChanger;
