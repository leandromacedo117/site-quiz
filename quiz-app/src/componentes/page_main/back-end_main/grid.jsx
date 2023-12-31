import React from 'react'
import axios from 'axios'
import api from '../../../../api';

const grid = () => {

 


  return (
    <div className="Grip">
       {/* Renderizando os dados da API */}
     <div className="api-data">
     {dataFromApi.map(item => (
       <div key={item.id}>
         {/* Renderize os campos que deseja mostrar */}
         <p>{item.quizName}</p>
         {/* Adicione outros campos conforme necessário */}
       </div>
     ))}
   </div>
    </div>
  )

     }
export default grid