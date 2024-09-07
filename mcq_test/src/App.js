import {Routes, Route} from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound';
import Login from './components/Login';
import Test from './components/Test';
<<<<<<< HEAD
import ProtectedRoute from './components/ProtectedRoute';
=======
import ProtectedRoute from './components/ProtectedRoute'
>>>>>>> b2a6107af56fb500f159e3c74f818699fb9bb3f4

const App = () =>(
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
<<<<<<< HEAD
      <Route path="/test" element={<ProtectedRoute element={<Test />} />} />
=======
      {/* <Route path='/test' element={<Test />} /> */}
      <Route path="/test" element={ <ProtectedRoute element={<Test />} /> } />
>>>>>>> b2a6107af56fb500f159e3c74f818699fb9bb3f4
      <Route path="*" element={<NotFound />} />
  </Routes>
)
export default App;
