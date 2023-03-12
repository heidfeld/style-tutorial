import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Flex from './components/Display/Flex/Flex';
import Margin from './components/Margin/Margin';
import TabIndex from './components/TabIndex/TabIndex';

import './App.css';
import Header from "./examples/Header/Header";

export default function App() {
    return (
        <Router>
            <div className={'wholeHeight'}>
                <div className={'leftMenuWrapper wholeHeight'}>
                    <nav>
                        Style Tutorial
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/display/flex">Display:Flex</Link>
                            </li>
                            <li>
                                <Link to="/margin">Margin</Link>
                            </li>
                            <li>
                                <Link to="/tabIndex">TabIndex</Link>
                            </li>
                        </ul>
                        Style Examples
                        <ul>
                            <li>
                                <Link to="/example/header">Create Header</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className={'container wholeHeight'}>
                    <Routes>
                        <Route path="/example/header" element={<Header/>}/>
                        <Route path="/display/flex" element={<Flex/>}/>
                        <Route path="/margin" element={<Margin/>}/>
                        <Route path="/tabIndex" element={<TabIndex/>}/>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}
