/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  const { title } = bookmarks;
  return (
    <div className="md:w-1/3 bg-gray-300 p-4 m-4  rounded-xl">
      <div>
        <h4 className="text-4xl">Reading Time: {readingTime}</h4>
      </div>
      <h2 className="text-3xl">Bookmarks: {bookmarks.length}</h2>
      {bookmarks.map((bookmark) => (
        <Bookmark bookmark={bookmark} key={bookmark.id}></Bookmark>
      ))}
    </div>
  );
};

export default Bookmarks;
