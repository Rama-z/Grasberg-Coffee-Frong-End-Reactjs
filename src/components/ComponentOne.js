import { useState } from "react";

function ComponentOne() {
  const [description, setDescription] = useState(true);
  const [reviews, setReviews] = useState(false);
  const descriptionHandler = () => {
    setDescription(true);
    setReviews(false);
  };
  const reviewsHandler = () => {
    setDescription(false);
    setReviews(true);
  };
  return (
    <>
      <div>Apakah berhasil?</div>
      <div>
        <button onClick={descriptionHandler}>Descriptions</button>
        <button onClick={reviewsHandler}>Reviews</button>
        {description && (
          <p>
            This is a <b>descriptive</b> button
            <h3>Descriptions:</h3>
          </p>
        )}
        {reviews && (
          <p>
            This is a <b>Review</b> button
            <h3>Reviews:</h3>
          </p>
        )}
      </div>
    </>
  );
}

export default ComponentOne;
