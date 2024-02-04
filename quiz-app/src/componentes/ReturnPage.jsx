import React from 'react';
import { GoArrowLeft } from "react-icons/go";
import '../style/ReturnPage.css';

const ReturnPage = ({ quizName }) => {
  return (
    <div className='quiz-icon'>
      <div>
        <span>
          <GoArrowLeft />
        </span>
      </div>
      <h4>{quizName}</h4>
    </div>
  );
};

export default ReturnPage;
