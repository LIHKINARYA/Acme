import React from 'react';
import './App.css';
import Navbar from './Component/navbar';
import First from './Component/first';
import Second from './Component/second';
import Third from './Component/third';
import Footer from './Component/footer';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <First></First>
      <Second></Second>
      <Third></Third>
      <Footer></Footer>

    </div>
  );
}

export default App;
