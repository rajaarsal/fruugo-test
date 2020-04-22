import React, { useState, useEffect } from "react";

const Context = React.createContext();
const Provider = props => {
  const [reviewsData, setReviewsData] = useState({});
  const [personalReviews, setPersonalReviews] = useState({});

  const apiKey = "CkGqKAS2ICoJWAp6UzoRLscwa8qY6Ey4";
  const unitId = "5815935f0000ff000596c22a";


  useEffect(() => {
      const getData = async () => {
        const fetchDataUrl = `https://api.trustpilot.com/v1/business-units/${unitId}?apikey=${apiKey}`;
        const personalReviews = `https://api.trustpilot.com/v1/business-units//${unitId}/reviews?apikey=${apiKey}`;

        const responseReviews = await fetch(fetchDataUrl).catch(err =>
          console.log("Error", err)
        );
        const dataReviews = await responseReviews.json();
        const fetchpersonalReviews = await fetch(personalReviews).catch(err =>
          console.log("Error", err)
        );
        const datapersonalReviews = await fetchpersonalReviews.json();
        setReviewsData(dataReviews);
        setPersonalReviews(datapersonalReviews);
      };
    getData();
  }, []);

  const combineReucer = {
    reviewsData,
    personalReviews
  };

  return (
    <>
      <Context.Provider value={combineReucer}>
        {props.children}
      </Context.Provider>
    </>
  );
};

export { Provider, Context };
