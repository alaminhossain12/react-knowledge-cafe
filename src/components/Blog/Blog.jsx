/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmarks, handleMarkAsRead }) => {
  //   console.log(blog);
  const {
    title,
    cover,
    author_img,
    reading_time,
    author,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-20 space-y-4">
      <img
        className="w-full mb-8 rounded"
        src={cover}
        alt={`Cover Picture Of the ${title}`}
      />
      <div className="flex justify-between mb-4">
        <div className="flex">
          <img className="w-14 rounded" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-3xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} Min Read</span>
          <button
            onClick={() => handleAddToBookmarks(blog)}
            className="text-2xl text-red-600 ml-2"
          >
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-3xl">Title: {title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(reading_time)}
        className="text-purple-600 underline font-bold"
      >
        Mark As Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
