import React from "react";
import Book from "./book";

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: this.props.books };
  }

  zebraClass(index) {
    return index % 2 ? 'even' : 'odd';
  }

  render() {
    const { books } = this.state;
    return (
      <ul className="book-list">
        {
          books.map((book, index) => {
            return <Book key={book.id} zebraClass={this.zebraClass(index)} {...book} />
          })
        }
      </ul>
    );
  }
}

BookList.propTypes = {
  books: React.PropTypes.arrayOf(React.PropTypes.object)
}

BookList.defaultProps = {
  books: []
}

export default BookList;
