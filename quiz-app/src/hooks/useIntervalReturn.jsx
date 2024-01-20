import React, { useEffect, useState } from 'react'
import '../style/day.css'
import useInterval from './useInterval'
import { AiOutlineClose } from "react-icons/ai";
import { VscCheckAll } from "react-icons/vsc";
// import UseProgress from './useProgressBar'
import anime from 'animejs/lib/anime.es.js';



const useItervalReturn = () => {
   
      const [sunday, monday, tuesday, wednesday, thursday, friday, saturday, completedDay, loginMondayCompleted, loginSundayCompleted, loginTuesdayCompleted, loginWednesdayCompleted, loginThursdayCompleted, loginFridayCompleted, loginSaturdayCompleted] = useInterval()

      const [progresss, setProgresss]  = useState(0)

     const [finishedSunday, setFinishedSunday] = useState(1)
     const [finishedMonday, setFinishedModay] = useState(2)
     const [finishedTuesday, setFinishedTuesday] = useState(3)
     const [finishedWednesday, setFinishedWednesday] = useState(4)
     const [finishedThursday, setFinishedThursday] = useState(5)
     const [finishedFriday, setFinishedFriday] = useState(6)
     const [finishedSaturday, setFinishedSaturday] = useState(7)
     
     useEffect(() => {
      const progressDay = () =>{
       
        const currentDate = new Date();
        const currentHour = currentDate.getHours();
        const currentMinute = currentDate.getMinutes();
        const totalMinutes = currentHour * 60 + currentMinute;
        const progress = (totalMinutes/ (24 * 60)) * 100;
        setProgresss(progress);
        
          
      }
      progressDay();
       // Atualizar a barra de progresso a cada minuto
       const interval = setInterval(progressDay, 60000);
  
       // Atualizar a barra de progresso quando o componente montar
       progressDay()
       // Limpar intervalo quando o componente for desmontado
       return () => clearInterval(interval);
     }, []);
    
  return (
   
    <div className="content">
      {/* sunday */}
      <h4 className={
      finishedSunday <= completedDay ?
      loginSundayCompleted ?  ' day-num-h4  finally-day' :
      ' day-num-h4 incomplete-day' : 'day-num-h4'
      }> <span>{ finishedSunday <= completedDay ?
      (loginSundayCompleted ? <VscCheckAll/> : <AiOutlineClose/>)
      : sunday }</span></h4>

      {/* monday */}
      <h4 className={
      finishedMonday <= completedDay ?
      loginMondayCompleted ?  ' day-num-h4  finally-day' :
      ' day-num-h4 incomplete-day' : 'day-num-h4'
      }> <span>{ finishedMonday <= completedDay ?
      (loginMondayCompleted ? <VscCheckAll/> : <AiOutlineClose/>)
      : monday }</span></h4>


      {/* Tuesday */}
      <h4 className={
      finishedTuesday <= completedDay ?
      loginTuesdayCompleted ?  ' day-num-h4  finally-day' :
      ' day-num-h4 incomplete-day' : 'day-num-h4'
      }> <span>{ finishedTuesday <= completedDay ?
      (loginTuesdayCompleted ? <VscCheckAll/> : <AiOutlineClose/>)
      : tuesday }</span></h4>

      {/* wednesday */}
      <h4 className={
      finishedWednesday <= completedDay ?
      loginWednesdayCompleted ?  ' day-num-h4  finally-day' :
      ' day-num-h4 incomplete-day' : 'day-num-h4'
      }> <span>{ finishedWednesday <= completedDay ?
      (loginWednesdayCompleted ? <VscCheckAll/> : <AiOutlineClose/>)
      : wednesday }</span></h4>

      {/* thursday */}
      <h4 className={
      finishedThursday <= completedDay ?
      loginThursdayCompleted ?  ' day-num-h4  finally-day' :
      ' day-num-h4 incomplete-day' : 'day-num-h4'
      }> <span>{ finishedThursday <= completedDay ?
      (loginThursdayCompleted ? <VscCheckAll/> : <AiOutlineClose/>)
      : thursday }</span></h4>

      {/* friday  */}
      <h4 className={
      finishedFriday <= completedDay ?
      loginFridayCompleted ?  ' day-num-h4  finally-day' :
      ' day-num-h4 incomplete-day' : 'day-num-h4'
      }> <span>{ finishedFriday <= completedDay ?
      (loginFridayCompleted ? <VscCheckAll/> : <AiOutlineClose/>)
      : friday }</span></h4>

      {/* saturday */}
      <h4 className={
      finishedSaturday <= completedDay ?
      loginSaturdayCompleted ?  ' day-num-h4  finally-day' :
      ' day-num-h4 incomplete-day' : 'day-num-h4'
      }> <span>{ finishedSaturday <= completedDay ?
      (loginSaturdayCompleted ? <VscCheckAll/> : <AiOutlineClose/>)
      : saturday }</span></h4>  
    </div>
    
  )
}

export default useItervalReturn