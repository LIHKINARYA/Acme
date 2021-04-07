import React from 'react';
import './App.css';
import Navbar from './Component/navbar';
import First from './Component/first';
import Second from './Component/second';
import Third from './Component/third';
import Footer from './Component/footer';
import { BrowserRouter,Route } from 'react-router-dom';
import Covid from './pages/covid';
import Donate from './pages/donate';
import Contact from './pages/contact';
import About from './pages/about';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Route exact path="/covid" component={Covid} />
        <Route exact path="/" component={First} />
        <Route exact path="/" component={Second} />
        <Route exact path="/" component={Third} />
        <Route exact path="/donate" component={Donate} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Footer></Footer>

      </div>
    </BrowserRouter>
  );
}

export default App;
