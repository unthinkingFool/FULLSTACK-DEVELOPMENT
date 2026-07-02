import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import AllPosts from './pages/AllPosts'
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/all-posts" element={<AllPosts />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
