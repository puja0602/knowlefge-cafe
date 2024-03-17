import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmarks/Bookmark'
import { useState } from 'react'

function App() {
  const[bookmarks,setBookmarks]=useState([]);
  const[readingTime,setReadingTime]=useState(0);

  const handleAddBookmark = blog =>{
    const newBookmarks=[...bookmarks,blog]
    setBookmarks(newBookmarks);
    // console.log(blog);
  }
  const handleMarkAsRead = (id,time) =>{
    const newReadingTime = readingTime+time;
    setReadingTime(newReadingTime);
    //Remove the read blog from bookmark
    // console.log("Remove blog:",id);
    const remainingBookmark=bookmarks.filter(bookmark=>bookmark.id!=id)
    setBookmarks(remainingBookmark)
  }
  return (
    <>
      <Header></Header>
      <main className='md:flex'>
      <Blogs handleAddBookmark={handleAddBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmark bookmarks={bookmarks} readingTime={readingTime}></Bookmark>
      </main>
    </>
  )
}

export default App
