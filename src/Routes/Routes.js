import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home/App';
import FichaTormente from '../pages/T20/FichaTormenta';
import Menu from '../component/Menu/Menu';

export default function AppRouter(){
    return(
        <Router>
            <Menu />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/T20' element={<FichaTormente />}/>
            </Routes>
        </Router>
    );
}