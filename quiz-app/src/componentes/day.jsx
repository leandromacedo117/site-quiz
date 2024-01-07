import '../style/day.css'
import { HiCheck } from "react-icons/hi";

const day = () => {
  return (
    <div className="day">
        <div className="week">
          <h5 className='day-num-h5 seg quiz-completed'>Seg</h5>
          <h5 className='day-num-h5 ter'>Ter</h5>
          <h5 className='day-num-h5'>Qua</h5>
          <h5 className='day-num-h5'>Qui</h5>
          <h5 className='day-num-h5 sex'>Sex</h5>
          <h5 className='day-num-h5'>Sab</h5>
          <h5 className='day-num-h5 dom'>dom</h5>
        </div>
        <div className="days span">
            <div className="void">
                <div className="content">
                    <h4 className='day-num-h4'>1</h4>
                    <h4 className='day-num-h4' >2</h4>
                    <h4 className='day-num-h4'>3</h4>
                    <h4 className='day-num-h4'>4</h4>
                    <h4 className='day-num-h4' >5</h4>
                    <h4 className='day-num-h4'>6</h4>
                    <h4 className='day-num-h4'>7</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default day