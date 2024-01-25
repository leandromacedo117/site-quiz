import React, { useEffect, useState } from 'react'
import api from '../../api'


const useloginAntentication = () => {
  const itensUsers = [];
  const [antentication, setAntentication] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get('/users');
         setAntentication(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Houve um erro: " + error);
      }
    };


   
    
    fetchData();

    antentication.forEach(item => {
      if (item.userName === 'leo macedo') {
        itensUsers.push(item);
      }
    });

    console.log('Items filtrados:', itensUsers);
  }, []);
    
    
  return (
    <div>ds</div>
  )
  }
export default useloginAntentication