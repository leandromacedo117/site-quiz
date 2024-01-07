import React, { useState, useEffect } from 'react';

const useInterval = () => {
    const [sunday, setSunday] = useState(null);
    const [monday, setMonday] = useState(null);
    const[tuesday,setTuesday] = useState(null);
    const[wednesday,setWednesday] = useState(null);
    const[thursday,setThursday] = useState(null);
    const[friday,setFriday] = useState(null);
    const[saturday,setSaturday] = useState(null);

    const countDown = () => {
        const today = new Date();
        const currentDay = today.getDay(); 
    
        setSunday(today.getDate());
            
        // dias seguintes
        let firstDay = new Date(today)
        let segundDay = new Date(today)
        let thirdDay = new Date(today)
        let fourDay = new Date(today)
        let fifthDay = new Date(today)
        let sixthDay = new Date(today)
        

        // next days
        firstDay.setDate(today.getDate() + 1); 
        setMonday(firstDay.getDate());

        segundDay.setDate(today.getDate() + 2); 
        setTuesday(segundDay.getDate());
        
        thirdDay.setDate(today.getDate() + 3); 
        setWednesday(thirdDay.getDate());

        fourDay.setDate(today.getDate() + 4); 
        setThursday(fourDay.getDate());

        fifthDay.setDate(today.getDate() + 5); 
        setFriday(fifthDay.getDate());

        sixthDay.setDate(today.getDate() + 6); 
        setSaturday(sixthDay.getDate());

        // buscando qual dia da semana é hoje com API
        let options = { weekday: 'long' };
        let mapDate = new Intl.DateTimeFormat('pt-BR', options);

        // current day
        const nameCurrentDay = mapDate.format(currentDay);

        // next days
        const nameDayFirst = mapDate.format(firstDay);
        const nameDaySegund = mapDate.format(segundDay);
        const nameDayThird = mapDate.format(thirdDay);
        const nameDayFour = mapDate.format(fourDay);
        const nameDayFifth = mapDate.format(fifthDay);
        const nameDaySixth = mapDate.format(sixthDay);
        
    };

    
    useEffect(() => {
      const interval = setInterval(countDown, 1000);
      
      const oneWeek = (24 * 60 * 60 * 1000) * 7;
      const intervalWeek = setInterval(countDown, oneWeek);

        // Clear interval on component unmount
        return () => clearInterval(intervalWeek);
    }, []);

    return [sunday, monday, tuesday, wednesday, thursday, friday, saturday];
};

export default useInterval;
