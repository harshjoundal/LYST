import {Route, Routes} from 'react-router-dom'
import Home from './Home';
import SignIn from './SignIn';

function  AllRoutes(){
    return(
        <Routes>
            <Route path ='/' element = {<Home/>}/>
            <Route path='/signin' element ={<SignIn/>}/>
        </Routes>
    )
}

export default AllRoutes