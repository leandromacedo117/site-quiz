import './App.css';
import Home from "./pages/Home";
import Create from "./pages/Create";
import Graph from "./pages/Graph";
import Config from "./pages/Config";
import Options from "./componentes/Options";


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
                        path="/create"
                        element={<Create />}
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
