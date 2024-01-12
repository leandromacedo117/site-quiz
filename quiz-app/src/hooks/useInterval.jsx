import React, { useState, useEffect } from 'react';

const useInterval = () => {
    // days of the week 
    const [sunday, setSunday] = useState(null);
    const [monday, setMonday] = useState(null);
    const [tuesday,setTuesday] = useState(null);
    const [wednesday,setWednesday] = useState(null);
    const [thursday,setThursday] = useState(null);
    const [friday,setFriday] = useState(null);
    const [saturday,setSaturday] = useState(null);

    // full days 
    const [completedDay, setCompletedDay] = useState(null);

    // user login 
    const [loginToday, setLoginToday] = useState(false)

    const countDown = () => {
        let today = new Date();
        let currentDay = new Date(today)
        
            
        // dias seguintes
        let firstDay = new Date(today)
        let segundDay = new Date(today)
        let thirdDay = new Date(today)
        let fourDay = new Date(today)
        let fifthDay = new Date(today)
        let sixthDay = new Date(today)
        

         // buscando qual o nome do dia da semana é hoje com API
         let options = { weekday: 'long' };
         let mapDate = new Intl.DateTimeFormat('pt-BR', options);
 
         // current day
         const nameCurrentDay = mapDate.format(currentDay);
         console.log(nameCurrentDay)
         // next days
         const nameDayFirst = mapDate.format(firstDay);
         const nameDaySegund = mapDate.format(segundDay);
         const nameDayThird = mapDate.format(thirdDay);
         const nameDayFour = mapDate.format(fourDay);
         const nameDayFifth = mapDate.format(fifthDay);
         const nameDaySixth = mapDate.format(sixthDay);

        const checkingDay = (nameCurrentDay) => {

            let hoje = new Date(today)

            // verificando qual dia da semana é hoje 
            switch(nameCurrentDay){
                case 'domingo':
                    setSunday(today.getDate());

                    firstDay.setDate(today.getDate() + 1); 
                    segundDay.setDate(today.getDate() + 2); 
                    thirdDay.setDate(today.getDate() + 3); 
                    fourDay.setDate(today.getDate() + 4); 
                    fifthDay.setDate(today.getDate() + 5); 
                    sixthDay.setDate(today.getDate() + 6); 
                    setCompletedDay(1)
                    
                    break

                case 'segunda-feira':
                    hoje.setDate(today.getDate() -1); 
                    setSunday(hoje.getDate());
                    hoje.value = today

                    firstDay.setDate(today.getDate() + 0); 
                    segundDay.setDate(today.getDate() + 1); 
                    thirdDay.setDate(today.getDate() + 2); 
                    fourDay.setDate(today.getDate() + 3); 
                    fifthDay.setDate(today.getDate() + 4); 
                    sixthDay.setDate(today.getDate() + 5); 
                    setCompletedDay(2)
                    
                    break

                case 'terça-feira':
                    hoje.setDate(today.getDate() -2); 
                    setSunday(hoje.getDate());
                    hoje.value = today

                    firstDay.setDate(today.getDate() -1); 
                    segundDay.setDate(today.getDate() + 0); 
                    thirdDay.setDate(today.getDate() + 1); 
                    fourDay.setDate(today.getDate() + 2); 
                    fifthDay.setDate(today.getDate() + 3); 
                    sixthDay.setDate(today.getDate() + 4); 
                    setCompletedDay(3)
                    
                    break  

                case 'quarta-feira':
                    hoje.setDate(today.getDate() -3); 
                    setSunday(hoje.getDate());
                    hoje.value = today

                    firstDay.setDate(today.getDate() -2); 
                    segundDay.setDate(today.getDate() - 1); 
                    thirdDay.setDate(today.getDate() + 0); 
                    fourDay.setDate(today.getDate() + 1 ); 
                    fifthDay.setDate(today.getDate() + 2); 
                    sixthDay.setDate(today.getDate() + 3); 
                    setCompletedDay(4)
                    
                    break  

                case 'quinta-feira':
                    hoje.setDate(today.getDate() -4); 
                    setSunday(hoje.getDate());
                    hoje.value = today

                    firstDay.setDate(today.getDate() -3); 
                    segundDay.setDate(today.getDate() - 2); 
                    thirdDay.setDate(today.getDate() - 1); 
                    fourDay.setDate(today.getDate() + 0 ); 
                    fifthDay.setDate(today.getDate() + 1); 
                    sixthDay.setDate(today.getDate() + 2); 
                    setCompletedDay(5)
                    
                    break

                case 'sexta-feira':
                    hoje.setDate(today.getDate() -5); 
                    hoje.value = today
                        
                    firstDay.setDate(today.getDate() -4); 
                    segundDay.setDate(today.getDate() - 3); 
                    thirdDay.setDate(today.getDate() - 2); 
                    fourDay.setDate(today.getDate() - 1 ); 
                    fifthDay.setDate(today.getDate() + 0); 
                    sixthDay.setDate(today.getDate() + 1); 
                    setCompletedDay(6)
                    
                    break  
                    
                case 'sábado':
                    hoje.setDate(today.getDate() -6); 
                    hoje.value = today
                        
                    firstDay.setDate(today.getDate() -5); 
                    segundDay.setDate(today.getDate() - 4); 
                    thirdDay.setDate(today.getDate() - 3); 
                    fourDay.setDate(today.getDate() - 2); 
                    fifthDay.setDate(today.getDate() - 1); 
                    sixthDay.setDate(today.getDate() + 0); 
                    setCompletedDay(7)
                    
                    break       
                }
                
            }

            if(nameCurrentDay === 'quinta-feira'){}

            checkingDay(nameCurrentDay)
            
            
            setMonday(firstDay.getDate());
            setTuesday(segundDay.getDate());
            setWednesday(thirdDay.getDate());
            setThursday(fourDay.getDate());
            setFriday(fifthDay.getDate());
            setSaturday(sixthDay.getDate());
    };

    
    useEffect(() => {
        // Execute countDown once before starting the weekly interval
        countDown();

        // Set up weekly interval
        const oneWeek = (24 * 60 * 60 * 1000) * 7;
        const intervalWeek = setInterval(countDown, oneWeek);

        // Clear interval on component unmount
        return () => clearInterval(intervalWeek);
    }, []);
    // returning days of the week 
    return [sunday, monday, tuesday, wednesday, thursday, friday, saturday, completedDay];
};

export default useInterval;
