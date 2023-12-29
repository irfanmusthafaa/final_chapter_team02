import React, { useState } from 'react'
import { addRating } from '../../services/rating/add-rating';
import { toast } from 'react-toastify';

export const AddRating = (props) => {
  const [rating, setRating] = useState(0);
  const semuaChapterIsPreview = props.chapters?.every((chapter) => chapter.is_preview);

  const handleRatingClick = async (value) => {
      setRating(value);
      try {
          await addRating({
              value:value
          }, props.classCode);
          toast.success("Berhasil menambah rating");
      } catch (error) {
          console.error(error);
          return null;
      }
  };

  return (
    <div className='text-center md:text-left'>
      {semuaChapterIsPreview && (
        <>
          <h3 className="text-purple-700 my-0">Rate This Class</h3>
          {[1, 2, 3, 4, 5].map((starValue) => (
            <span
              key={starValue}
              onClick={() => handleRatingClick(starValue)}
              style={{
                cursor: 'pointer',
                color: starValue <= rating ? 'gold' : 'gray',
                fontSize: '24px',
              }}
              className='pe-1'
            >
              ★
            </span>
          ))}
        </>
      )}
    </div>
  )
}
