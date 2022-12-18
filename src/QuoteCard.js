import React from "react";

function QuotesCard({ quote, author }) {
  return (

<div className="card m-3 text-center bg-light shadow-sm ">
  <div className="card-body">
    <p className="card-text">{quote}</p>
    <h5 className="card-title">{author}</h5>
  </div>
  </div>
  );
}   

export default QuotesCard;

