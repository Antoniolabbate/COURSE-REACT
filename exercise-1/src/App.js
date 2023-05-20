import { Route, Routes, Link } from "react-router-dom";
import ShowGithubUser from "/ShowGithubUser";
import Home from "./Home";
import Counter from "./Counter";
import GithubUser from "/GitHubUser";

const App = () => {
  return (
    <>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to={"/"}>Home</Link>
        <Link to={"/Counter"}>Counter</Link>
        <Link to="/ShowGithubUser/jhon">ShowGithubUser</Link>
        <Link to={"/GithubUser/Jhon"}>GithubUser</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Counter" element={<Counter />}></Route>
        <Route
          path="/ShowGithubUser/:username"
          element={<ShowGithubUser />}
        ></Route>
        <Route path="/GithubUser/:username" element={<GithubUser />}>
        </Route>
      </Routes>
    </>
  );
};

export default App;