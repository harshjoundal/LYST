import {Route, Routes} from 'react-router-dom'
import Home from './Home';
import Men from './Men';
import SignIn from './SignIn';
import Women from './Women';

function  AllRoutes(){
    return(
        <Routes>
            <Route path ='/' element = {<Home/>}/>
            <Route path='/signin' element={<SignIn />} />
            <Route path ='/men' element={<Men/>} />
            <Route path ='/women' element={<Women/>} />
        </Routes>
    )
}

export default AllRoutes