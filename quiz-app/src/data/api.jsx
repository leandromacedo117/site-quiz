// DataFetchingComponent.jsx
import { useState, useEffect } from 'react';
import api from '../../api';

const DataFetchingComponent = () => {
  const [dataFromApi, setDataFromApi] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get('/quizzes');
        setDataFromApi(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Houve um erro: " + error);
      }
    };

    fetchData();
  }, []);

  return dataFromApi; // Retornando os dados obtidos da API
};

export default DataFetchingComponent;
