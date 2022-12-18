import React, { useEffect, useState } from "react";
import QuotesCard from "./QuoteCard";

function Quotes() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://kavita-quotes-api.glitch.me/quotes")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="container px-4 py-5">
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5 align-middle">
      {data.length === 0 ? (
        <div></div>
      ) : (
        data.map((quote) => {
          return <QuotesCard quote={quote.quote} author={quote.author} />;
        })
      )}
    </div>
    </div>
  );
}

export default Quotes;
