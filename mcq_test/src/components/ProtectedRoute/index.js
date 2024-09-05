import Cookies from 'js-cookie'
import {Navigate} from 'react-router-dom'

import Login from '../Login'

const ProtectedRoute = () =>{
    const jwtToken = Cookies.get("jwtToken")
    if(jwtToken !== undefined){
        <Navigate to="/test" />
    }else{
        <Route path="/login" element={<Login />} />
    }
}