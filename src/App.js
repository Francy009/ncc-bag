import './App.css';
import {NavBar} from "./componets/NavBar";
import {Footer} from "./componets/Footer";
import {Home} from "./componets/Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {ParcoAuto} from "./componets/ParcoAuto";

function App() {
    return (
        <Router>
            <div className="app-container">
                <NavBar></NavBar>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/parco-auto" element={<ParcoAuto/>}></Route>
                </Routes>
                <Footer/>
            </div>
        </Router>

    );
}

export default App;
