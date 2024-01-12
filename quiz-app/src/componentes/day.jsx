import '../style/day.css'
import { HiCheck } from "react-icons/hi";
import useInterval from '../hooks/useInterval';
import UseItervalReturn from '../hooks/useIntervalReturn';
const day = () => {
  //  const [sunday, monday, tuesday, wednesday, thursday, friday, saturday] = useInterval()
  return (
    <div className="day">
      
        <div className="week">
          <h5 className='day-num-h5 seg'>Dom</h5>
          <h5 className='day-num-h5 ter'>Seg</h5>
          <h5 className='day-num-h5'>Ter</h5>
          <h5 className='day-num-h5'>Qua</h5>
          <h5 className='day-num-h5 sex'>Qui</h5>
          <h5 className='day-num-h5'>Sex</h5>
          <h5 className='day-num-h5 dom'>Sáb</h5>
        </div> 
        <div className="days span">
            <div className="void">
                <UseItervalReturn></UseItervalReturn>
            </div>
        </div>
    </div>
  )
}

export default day