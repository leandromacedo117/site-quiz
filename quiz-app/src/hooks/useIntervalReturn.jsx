import React, { useEffect, useState } from 'react'
import '../style/day.css'
import useInterval from './useInterval'
import { AiOutlineClose } from "react-icons/ai";
import { VscCheckAll } from "react-icons/vsc";

const useItervalReturn = () => {
   
      const [sunday, monday, tuesday, wednesday, thursday, friday, saturday, completedDay] = useInterval()

     const [finishedSunday, setFinishedSunday] = useState(1)
     const [finishedModay, setFinishedModay] = useState(2)
     const [finishedTuesday, setFinishedTuesday] = useState(3)
     const [finishedWednesday, setFinishedWednesday] = useState(4)
     const [finishedThursday, setFinishedThursday] = useState(5)
     const [finishedFriday, setFinishedFriday] = useState(6)
     const [finishedSaturday, setFinishedSaturday] = useState(7)
     

     console.log( typeof completedDay)

     useEffect(() => {
      if (finishedThursday ) {
        console.log('finishedThursday é true');
        // Coloque sua lógica aqui para o caso em que finishedThursday é true
      } else {
        console.log('finishedThursday é false');
        // Coloque sua lógica aqui para o caso em que finishedThursday é false
      }
  
      
    }, []); 
  
   
      
       
  return (
   
    <div className="content">
     
        <h4 className={finishedSunday <= completedDay ? ' day-num-h4 incomplete-day' : 'day-num-h4'}
        ><div className='icone-h4'><AiOutlineClose></AiOutlineClose></div></h4>
        <h4 className={finishedModay <= completedDay ? ' day-num-h4 finally-day' : 'day-num-h4'}><div className ='icone-h4'>< VscCheckAll></VscCheckAll></div></h4> 
        <h4 className={finishedTuesday <= completedDay ? ' day-num-h4 finally-day' : 'day-num-h4'}>{tuesday}</h4>
        <h4 className={finishedWednesday <= completedDay ? ' day-num-h4 finally-day' : 'day-num-h4'}>{wednesday}</h4>
        <h4 className={finishedThursday  <= completedDay ? ' day-num-h4 finally-day' : 'day-num-h4'}>{thursday}</h4>
        <h4 className={finishedFriday <= completedDay ? ' day-num-h4 finally-day' : 'day-num-h4'}>{friday}</h4>
        <h4 className={finishedSaturday <= completedDay ? ' day-num-h4 finally-day' : 'day-num-h4'}>{saturday}</h4>  
    </div>
    
  )
}

export default useItervalReturn