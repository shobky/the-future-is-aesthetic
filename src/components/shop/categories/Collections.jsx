import React, { useEffect } from "react";
import "./categories.css";
import PropTypes from "prop-types";
import { CollectionsOutlined } from "@mui/icons-material";

const Collections = (collection) => {
  const data = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Victor Wayne" },
    { id: 3, name: "Jane Doe" },
  ];

  return (
    <div id="myList">
      {data.map((user) => (
        <div className="user">{user}</div>
      ))}
    </div>
  );
};

export default Collections;

Collections.propTypes = {
  collection: PropTypes.array,
};
