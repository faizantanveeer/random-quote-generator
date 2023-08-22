import axios from "axios";
import React, { useEffect, useState } from "react";

import Share from "./Component/Share";

function App() {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    axios.get("https://api.quotable.io/random/").then((response) => {
      console.log(response);
      setQuote(response.data);
    });
  }, []);

  const fetchData = async () => {
    let response = await axios.get("https://api.quotable.io/random/");
    setQuote(response.data);
  };

  return (
    <>
      <div className=" background">
        <div className="container  text-center">
          <h1 className="heading mt-5 mb-3">Random Quote Generator</h1>
        </div>
        <div className="container wrapper">
          <div className="white_back text-center">
            <h2 className="author mb-4">{quote.author}</h2>
            <div className="content-div">
              <p className="content mb-4">"{quote.content}"</p>
            </div>

            <div className="btn-holder">
              <button className="button mb-5 " onClick={fetchData}>
                New Quote
              </button>
            </div>
            <div className="mt-5 share-holder p-2"></div>
          </div>
        </div>
        <div className="footer">
          <p>Made with ❤️ by Faizan Tanveer</p>
        </div>
      </div>
    </>
  );
}

export default App;
