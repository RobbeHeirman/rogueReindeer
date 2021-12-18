import MainPage from "./MainPage/MainPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Minter from "./Dapp/Minter";

const App = () => {

    return (
        <Router>
            <div>
                <Routes>
                    <Route path='/' element = {<MainPage/>}/>
                    <Route path={'/dapp'} element={<Minter/>}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App