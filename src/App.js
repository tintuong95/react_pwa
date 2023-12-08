import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AddFriendForm } from './components/AddFriendForm';
import FriendList from './components/FriendList';

function App() {
  return (
    <div className="App">
      <h1>My simple Dexie app</h1>

      <h2>Add Friend</h2>
      <AddFriendForm defaultAge={21} />

      <h2>Friend List</h2>
      <FriendList minAge={18} maxAge={65} />

    </div>
  );
}

export default App;
