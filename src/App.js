import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

import Navbar from "./components/Navbar";
import SinglePost from "./components/SinglePost";
import Home from "./Pages/home";
import Login from "./Pages/Login";
import NewPost from "./Pages/NewPost";
import Register from "./Pages/Register";
import Single from "./Pages/Single";


function App() {

  const user = false;

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/login' element={user ? <Home /> : <Login />} />
        <Route path='/Register' element={user ? <Home /> : <Register />} />
        <Route path='/posts' element={user ? <NewPost /> : <Register />} />
        <Route path='/post/:postId' element={user ? <SinglePost /> : <Register />} />
      </Routes>
     
    </Router>
  );
}

export default App;
