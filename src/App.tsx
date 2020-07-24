import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import TodoPage from './pages/TodoPage';

function App() {
  return (
    <div className="app--container">
      <Header></Header>
      <TodoPage></TodoPage>
      <Footer></Footer>
    </div>
  );
}

export default App;
