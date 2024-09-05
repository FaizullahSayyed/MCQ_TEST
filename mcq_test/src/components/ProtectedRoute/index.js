import Cookies from 'js-cookie'
import {Navigate, Route} from 'react-router-dom'

const ProtectedRoute = props =>{
    const jwtToken = Cookies.get("jwtToken")
    if(jwtToken !== undefined){
        return <Navigate to="/test" />
    }else{
        console.log(props)
        return <Route {...props} />
    }
}

export default ProtectedRoute