import './App.css';
import {NavBar} from "./componets/NavBar";
import {Footer} from "./componets/Footer";
import {Home} from "./componets/Home";

function App() {
    return (
            <div className="app-container">
                <NavBar></NavBar>
                <Home/>
                <Footer/>
            </div>
    );
}

export default App;
