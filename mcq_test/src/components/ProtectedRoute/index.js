import Cookies from 'js-cookie'
import {Navigate} from 'react-router-dom'

const ProtectedRoute = ({element, ...rest}) =>{
    const jwtToken = Cookies.get("jwtToken")
    return jwtToken ? element : <Navigate to="/login" />
}

export default ProtectedRoute