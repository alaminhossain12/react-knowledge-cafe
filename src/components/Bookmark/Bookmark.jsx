/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-slate-200 rounded-xl m-4 p-4">
      <h2 className="text-2xl ">{title}</h2>
    </div>
  );
};

export default Bookmark;
