import React from "react";
import { convertToUSD } from "../util";

const Book = ({ title, price, zebraClass }) => {
  return (
    <li className={`one-book ${zebraClass}`}>
      {title}, {convertToUSD(price)}
    </li>
  )
};

Book.propTypes = {
  zebraClass: React.PropTypes.string.isRequired,
  title: React.PropTypes.string,
  price: React.PropTypes.number,
}

export default Book;
