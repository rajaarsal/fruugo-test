import React, { useContext } from "react";
import { Context } from "../../Provider";

const PersonalReviews = () => {
  const data = useContext(Context);
  const { personalReviews = {} } = data;
  const { reviews = null } = personalReviews;
  console.log(reviews);
  return (
    reviews && (
      <>
        <table>
          <thead>
            <tr>
              <th>Stars out of 5</th>
              <th>Author</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>
            {reviews &&
              reviews.map((item, idx) => {
                 console.log(item.stars === 5)
                    return (item.stars === 5 || item.stars === 4) && (
                        <tr key={idx}>
                        <td>{item.stars}</td>
                        <td>{item.consumer.displayName}</td>
                        <td>{item.text}</td>
                      </tr>
                    )
              })}
          </tbody>
        </table>
      </>
    )
  );
};

export default PersonalReviews;
