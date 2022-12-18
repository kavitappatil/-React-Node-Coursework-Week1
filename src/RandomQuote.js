import React, { useEffect, useState } from "react";
import QuotesCard from "./QuoteCard";

function RandomQuote() {
  const [isClicked, setIsClicked] = useState(true);
  const [data, setData] = useState({});
  const RandomClickHandel = () => {
    setIsClicked(!isClicked);
  };
  useEffect(() => {
    fetch(`https://kavita-quotes-api.glitch.me/quotes/random`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [isClicked]);
  return (
    <div className="d-flex flex-column align-items-center g-4 py-5 gap-2">
      <QuotesCard quote={data.quote} author={data.author} />
      <button onClick={RandomClickHandel} className="btn btn-info btn-md" id="searchInput">
        Random Quote
      </button>
    </div>
  );
}
export default RandomQuote;
