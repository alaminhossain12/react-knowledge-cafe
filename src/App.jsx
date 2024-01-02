/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleAddToBookmarks = (blog) => {
    // console.log("Adding bookmarks");
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };
  const handleMarkAsRead = (time, id) => {
    // console.log("Reading time", time);
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    console.log("Reading time", id);
  };
  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs
          handleAddToBookmarks={handleAddToBookmarks}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
