import { Route, Routes, Link} from "react-router-dom"
import Home from "./Home"
import GihubUserList from "./GihubUserList"
import GithubUser from './GithubUser'
import ShowGithubUser from "/ShowGithubUser"


const App = () => {


  return (
    <>
      <nav style={{display: 'flex', gap: '20px'}}>
        <Link to={'/'}>Home</Link>
        <Link to={'/GihubUserList'}>GihubUserList</Link>
        <Link to={'/GithubUser'}>GithubUser</Link>
        <Link to={'/ShowGithubUser/:username'}>ShowGithubUser</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/GihubUserList" element={<GihubUserList/>}></Route>
        <Route path="/GithubUser" element={<GithubUser/>}></Route>
        <Route path="/ShowGithubUser" element={<ShowGithubUser/>}></Route>
      </Routes>


    </>
  )
}

export default App;