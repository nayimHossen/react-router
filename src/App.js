import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import FriendDetail from './components/FriendDetails/FriendDetail';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="/friend/:friendId" element={<FriendDetail />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
