import { Route, Routes, Link} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Login from "./Login"
import ErrorPage from "./ErrorPage"


const App = () => {


  return (
    <>
      <nav style={{display: 'flex', gap: '20px'}}>
        <Link to={'/'}>Home</Link>
        <Link to={'/About'}>About</Link>
        <Link to={'/Login'}>Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="*" element={<ErrorPage/>}></Route>
      </Routes>


    </>
  )
}

export default App