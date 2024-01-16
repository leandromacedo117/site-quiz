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
    const [completedDay, setCompletedDay] = useState(null); //funciona de acordo com o dia atual da semana
    
    // day of the week the user logged in 
    const [loginSundayCompleted, setLoginSundayCompleted] = useState(false)
    const [loginMondayCompleted, setLoginMondayCompleted] = useState(false)
    const [loginTuesdayCompleted, setLoginTuesdayCompleted] = useState(false)
    const [loginWednesdayCompleted, setLoginWednesdayCompleted] = useState(false)
    const [loginThursdayCompleted, setLoginThursdayCompleted] = useState(false)
    const [loginFridayCompleted, setLoginFridayCompleted] = useState(false)
    const [loginSaturdayCompleted, setLoginSaturdayCompleted] = useState(false)
    
    

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
    
         // next days
         const nameDayFirst = mapDate.format(firstDay);
         const nameDaySegund = mapDate.format(segundDay);
         const nameDayThird = mapDate.format(thirdDay);
         const nameDayFour = mapDate.format(fourDay);
         const nameDayFifth = mapDate.format(fifthDay);
         const nameDaySixth = mapDate.format(sixthDay);


         
            let currentHour = today.getHours();
            let initHours = 23
            let rest = initHours - currentHour
            
         

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
                    setLoginSundayCompleted(false)
                    
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
                    setLoginMondayCompleted(true)
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

                    setLoginTuesdayCompleted(true)
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

                    setLoginWednesdayCompleted(true)
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
                    
                    setLoginThursdayCompleted(true)
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
                    
                    setLoginFridayCompleted(true)
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

                    setLoginSaturdayCompleted(true)
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
    return [
        sunday, monday, tuesday, wednesday, thursday, friday, saturday,
        completedDay, loginMondayCompleted, loginSundayCompleted, loginTuesdayCompleted, loginWednesdayCompleted, loginThursdayCompleted, loginFridayCompleted, loginSaturdayCompleted
          ];
};

export default useInterval;
