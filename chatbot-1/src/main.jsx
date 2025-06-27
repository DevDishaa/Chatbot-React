import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar } from "./component/Navbar.jsx";
import About from "./component/About.jsx";
import Home from "./component/Home.jsx";
import Menu from "./component/Menu.jsx";
import Product from "./component/Product.jsx";
import Contact from "./component/Contact.jsx";
import Vlogs from "./component/Vlogs.jsx";
import Footer from "./component/Footer.jsx";





createRoot(document.getElementById("root")).render(
  <StrictMode>

    <Navbar />
    <Home />
    <About />
    <Menu />
    <Product />
    <Contact />
    <Vlogs/>
   <Footer/>

    <App />
  </StrictMode>
);
