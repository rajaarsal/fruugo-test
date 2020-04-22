import React, { useContext } from "react";
import { Context } from "../../Provider";

const PersonalReviews = () => {
  const data = useContext(Context);
  const { personalReviews = {} } = data;
  const { reviews = null } = personalReviews;
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
              reviews.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.stars}</td>
                  <td>{item.consumer.displayName}</td>
                  <td>{item.text}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </>
    )
  );
};

export default PersonalReviews;
