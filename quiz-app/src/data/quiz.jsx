// DataFetchingComponent.jsx
import { useState, useEffect } from 'react';
import api from '../../api';
import axios from 'axios';

const QuizApi = ( ) => {
  const [quizFromApi, setquizFromApi] = useState([]);
  const [lastId, setLastId] = useState(0)

  useEffect(() => {

    // const locationJson = async () => {
    //     await axios.get('http://localhost:9000/quizzes')
    //     .then((res) =>
    //         setLastId(res.data)
    //         console.log(lastId)
    //         ).catch((err) => console.log(`erro ${err}`));
    // }
    // locationJson()

    // console.log(item.id)

    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:9000/quizes_json');
        const resJson = res.data.map(item => JSON.parse(item.quizes));
        setquizFromApi(resJson[1]);
        console.log(resJson[0]);
        // console.log(lastId[lastId.length - 1].id);
      } catch (error) {
        console.error("Houve um erro: " + error);
      }
    };

    fetchData();
  }, []);

  return quizFromApi
};

export default QuizApi;
