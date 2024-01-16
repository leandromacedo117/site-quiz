import React, { useEffect, useState } from 'react';
// Certifique-se de criar um arquivo CSS para estilização

const ProgressBar = () => {
  const [progresss, setProgresss] = useState(0);

  useEffect(() => {
    const progressDay = () =>{
     
      const currentDate = new Date();
      const currentHour = currentDate.getHours();
      const currentMinute = currentDate.getMinutes();
      const totalMinutes = currentHour * 60 + currentMinute;
      const progress = (totalMinutes/ (24 * 60)) * 100;
      setProgresss(progress);
      console.log(progress)
        
    }
    progressDay();
     // Atualizar a barra de progresso a cada minuto
     const interval = setInterval(progressDay, 1000);

     // Atualizar a barra de progresso quando o componente montar
     progressDay()
     // Limpar intervalo quando o componente for desmontado
     return () => clearInterval(interval);
   }, []);

 
   return [progresss]
};

export default ProgressBar;