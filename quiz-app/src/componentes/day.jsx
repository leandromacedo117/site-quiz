import '../style/day.css'
import { HiCheck } from "react-icons/hi";
import useInterval from '../hooks/useInterval';

const day = () => {
  const [sunday, monday, tuesday, wednesday, thursday, friday, saturday] = useInterval()
  return (
    <div className="day">
      {/* <useInterval></useInterval> */}
        {/* <div className="week">
          <h5 className='day-num-h5 seg quiz-completed'>Seg</h5>
          <h5 className='day-num-h5 ter'>Ter</h5>
          <h5 className='day-num-h5'>Qua</h5>
          <h5 className='day-num-h5'>Qui</h5>
          <h5 className='day-num-h5 sex'>Sex</h5>
          <h5 className='day-num-h5'>Sab</h5>
          <h5 className='day-num-h5 dom'>dom</h5>
        </div> */}
        <div className="days span">
            <div className="void">
                <div className="content">
                    <h4 className='day-num-h4' number = {sunday}>{sunday}</h4>
                    <h4 className='day-num-h4' number ={monday} >{monday}</h4>
                    <h4 className='day-num-h4'>{tuesday}</h4>
                    <h4 className='day-num-h4'>{wednesday}</h4>
                    <h4 className='day-num-h4' >{thursday}</h4>
                    <h4 className='day-num-h4'>{friday}</h4>
                    <h4 className='day-num-h4 sete'>{saturday}</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default day