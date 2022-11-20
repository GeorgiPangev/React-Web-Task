import './App.css';
import {Provider} from "react-redux";
import {persistor, store} from "./strore";
import HomePage from "./components/HomePage/HomePage";
import {PersistGate} from "redux-persist/integration/react";

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <div className="App">
                    <HomePage/>
                </div>
            </PersistGate>
        </Provider>
    );
}

export default App;
