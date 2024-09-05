import Cookies from 'js-cookie'
import {Navigate, Route} from 'react-router-dom'

const ProtectedRoute = props =>{
    const jwtToken = Cookies.get("jwtToken")
    if(jwtToken !== undefined){
        <Navigate to="/test" />
    }else{
        <Route {...props} />
    }
}

export default ProtectedRoute