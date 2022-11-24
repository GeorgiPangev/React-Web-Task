import './App.css';
import HomePage from "./components/HomePage/HomePage";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="" element={<HomePage/>}/>
                <Route path="/favorites"></Route>
            </Routes>
        </div>
    );
}

export default App;
