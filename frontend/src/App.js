import MainPage from "./MainPage/MainPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


const App = () => {

    return (
        <Router>
            <div>
                <Routes>
                    <Route path='/' element = {<MainPage/>}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App