import React from 'react'
import { GoArrowLeft } from "react-icons/go";


const ReturnPage = ({quizName}) => {
  return (
    <div className='quiz-icon' >
        <span>
            <GoArrowLeft/>
        </span>
        <h4>{quizName}</h4>
    </div>
  )
}

export default ReturnPage