import {Routes, Route} from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound';
import Login from './components/Login';
import Test from './components/Test';
import ProtectedRoute from './components/ProtectedRoute'

const App = () =>(
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/test" element={<ProtectedRoute element={<Test />} />} />
      <Route path="*" element={<NotFound />} />
  </Routes>
)
export default App;
