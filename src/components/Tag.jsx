// import React from "react";
import "./Tag.css";
const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    Personal: { backgroundColor: "#fda821" },
    Education: { backgroundColor: "#15d4c8" },
    Work: { backgroundColor: "#d1d" },
    Others: { backgroundColor: "#4c4cfc" },
    default: { backgroundColor: "#f9f9f9" },
  };
  return (
    <button
      type="button"
      className="tag"
      style={selected ? tagStyle[tagName] : tagStyle.default}
      onClick={() => {
        selectTag(tagName);
      }}
    >
      {tagName}
    </button>
  );
};

export default Tag;
