import React, { useState } from 'react';
import './ReviewForm.css'; // Make sure to import your CSS file

const ReviewForm = () => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission logic here, like sending the review to a server
    console.log('Submitting review:', { rating, comment });
  };

  return (
    <div className="review-form-container">
      <h2>Leave a Review</h2>
      <form onSubmit={handleSubmit} className="review-form">
        <div className="rating">
          <label>Rating:</label>
          <div className="rating-stars">
            {[1, 2, 3, 4, 5].map((value) => (
              <span
                key={value}
                className={value <= rating ? 'star active' : 'star'}
                onClick={() => handleRatingChange(value)}
              >
                &#9733;
              </span>
            ))}
          </div>
        </div>
        <div className="comment">
          <label>Comment:</label>
          <textarea
            value={comment}
            onChange={handleCommentChange}
            placeholder="Leave your comment here..."
          />
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
