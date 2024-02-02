import './App.css';
import Home from "./pages/Home";
import Create from "./pages/Create";
import Graph from "./pages/Graph";
import Config from "./pages/Config";
import Options from "./componentes/Options";
import CreateQuiz from "./pages/CreateQuiz";
import IniciarQuiz from './pages/IniciarQuiz';
import QuestionAnswer from './pages/QuestionAnswer';
import QuizEnd from './pages/QuizEnd';


import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
        <>
            <BrowserRouter>

                <Options />

                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/IniciarQuiz"
                        element={<IniciarQuiz />}
                    />
                    <Route
                        path="/IniciarQuiz/QuestionAnswer"
                        element={<QuestionAnswer />}
                    />
                    <Route
                        path="/IniciarQuiz/QuestionAnswer/QuizEnd"
                        element={<QuizEnd/>}
                    />
                    <Route
                        path="/create"
                        element={<Create />}
                    />
                    <Route
                        path="/create/create_quiz"
                        element={<CreateQuiz/>}
                    />
                    <Route
                        path="/graph"
                        element={<Graph />}
                    />
                    <Route
                        path="/config"
                        element={<Config />}
                    />        
                    <Route
                        path="*"
                        element={<Navigate to="/" />}
                    />
                </Routes>
            
            </BrowserRouter>
        </>
    )
}



export default App;
