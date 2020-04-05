import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Flex from './components/Display/Flex/Flex';
import Margin from './components/Margin/Margin';

import './App.css';

export default function App() {
    return (
        <Router>
            <div className={'wholeHeight'}>
                <div className={'leftMenuWrapper wholeHeight'}>
                    <nav>
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
                        </ul>
                    </nav>
                </div>

                <div className={'container wholeHeight'}>
                    <Switch>
                        <Route path="/display/flex">
                            <Flex/>
                        </Route>
                        <Route path="/margin">
                            <Margin/>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}
