import { Link, Route, Routes } from "react-router-dom";
import Quotes from "./Quotes";
import HomePage from "./HomePage";
import "./App.css";
import RandomQuote from './RandomQuote';

function App() {
  return (
    <>
<nav className="navbar navbar-expand-sm bg-info  navbar-dark  ">
  <div className="navbar-header">
    <ul className="navbar-nav "> 
      <li className="nav-item">
        <Link to={"/"} className="nav-link fw-bold link-dark">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to={"/quotes"} className="nav-link fw-bold link-dark">
          All Quotes
        </Link>
      </li>
      <li className="nav-item">
        <Link to={"/randomQuote"} className="nav-link fw-bold link-dark">
          Random Quote
        </Link>
      </li>
    </ul>
  </div>
</nav>

    {/* <div className="d-flex justify-content-center py-3"> */}
      {/* <nav className="navbar navbar-expand-lg bg-blue">
        <Link to={"/"} className="nav-item">
          Home
        </Link>
        <Link to={"/quotes"} className="nav-item">
          All Quotes
        </Link>
        <Link to={"/randomQuote"} className="nav-item">
          Random Quote
        </Link>
      </nav> */}

       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/randomQuote" element={<RandomQuote />} />
      </Routes>
    {/* </div> */}
    </>
  );
}

export default App;
