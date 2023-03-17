import { BrowserRouter, Route, Routes } from "react-router-dom";
import Router from "./Router";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";
import SingleBlog from "./pages/SingleBlog";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Router/>}>
        <Route index element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/blog/:id' element={<SingleBlog/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='*' element={<Error/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

