import React, { useContext } from "react";
import { Context } from "../../Provider";

const UnitReviews = () => {
  const data = useContext(Context);
  const { reviewsData } = data;
  const { displayName, numberOfReviews = {} } = reviewsData;
  const { fiveStars = null, total } = numberOfReviews;
  const averageScore = Math.round((fiveStars / total) * 5);
  const reviewVerdict = averageScore === 5 ? "Excellent" : "Great";

  return (
    fiveStars && (
      <>
        <table>
          <tbody>
            <tr>
              <th>Display Name</th>
              <td>{displayName}</td>
            </tr>
            <tr>
              <th>Stars out of 5</th>
              <td>{averageScore}</td>
            </tr>
            <tr>
              <th>Number of 5 star reviews</th>
              <td>{fiveStars}</td>
            </tr>
          </tbody>
        </table>
        <h1>{reviewVerdict}</h1>
      </>
    )
  );
};

export default UnitReviews;
