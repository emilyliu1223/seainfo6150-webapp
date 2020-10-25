import React from "react";
import PropTypes from "prop-types";

const List = (props) => {
  const myList = props.list;

  const mappedList = myList.map((listItem) => (
    <li key={listItem.id}>{listItem.article}</li>
  ));

  return (
    <>
      <div>
        <h2>Mapped list outside of the JSX</h2>
        <ul>{mappedList}</ul>
      </div>
    </>
  );
};

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      article: PropTypes.object.isRequired,
    })
  ).isRequired,
};
export default List;
