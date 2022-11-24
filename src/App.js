import './App.css';
import HomePage from "./components/HomePage/HomePage";
import {Route, Routes} from "react-router-dom";
import FavoritesPage from "./components/FavoritesPage/FavoritesPage";
import Header from "./components/Header/Header";

function App() {
    return (
        <div className="App">
            <Header/>
                <Routes>
                    <Route path="" element={<HomePage/>}/>
                    <Route path="/favorites" element={<FavoritesPage/>}></Route>
                </Routes>
        </div>
    );
}

export default App;
