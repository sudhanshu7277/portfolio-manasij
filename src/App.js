import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";

function App() {
    return (
        <Router>
            <Navigation/>
              <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />}/>
                  <Route path="/skills" element={<Skills />}/>
                  <Route path="/contact" element={<Contact />}/>
                  <Route path="*" element={<Home />} />
              </Routes>
            <Footer/>
        </Router>
    );
}

export default App;