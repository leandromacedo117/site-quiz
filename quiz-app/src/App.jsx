import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Day from './componentes/page_main/day';
 import Todo from './componentes/page_main/Todo.jsx';
import Options from './componentes/page_main/Options';
import api from '../api';
import axios from 'axios';
import { HiAcademicCap } from "react-icons/hi";

function App() {

  

  return (
    <div className="App">
      <header className="time-day">
        <div className="container-day">
          <Day></Day>
        </div>
      </header>
      <main>
        <div className="todo">
          <Todo></Todo>
        </div>
      </main>
      <footer className='options'>
        <Options></Options>
        
      </footer>
      
    
    </div>
  )
}



export default App;
