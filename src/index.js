import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Usernavbar from './Components/Usernavbar';
import Userslider from './Components/Userslider';
import Info1 from './Components/Info1';
import Cards from './Components/Cards';
import Vacation from './Components/Vacation';
import Nextadven from './Components/Nextadven';
import Adventure from './Components/Adventure';
import Footer from './Components/Footer';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Package from './Components/Package';
import Home from './Components/Home';
import About from './Components/About';
import Destination from './Components/Destination';
import Contact from './Components/Contact';
import Blog from './Components/Blog';
import Details from './Components/Details';
import Profile from './Components/Profile';
import Confirm from './Confirm';
import { store } from './store';
import { Provider } from 'react-redux';
import Cart from './Components/Cart';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Usernavbar/>
    <Userslider/>
    <Info1/>
    <Cards/>
    <Vacation/>
    <Nextadven/>
    <Adventure/>
    <Footer/> */}
    {/* <Signup/> */}
    {/* <Signin/> */}
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/registration" element={<Signup/>}></Route>
      <Route path="/login" element={<Signin/>}></Route>
      <Route path="/navbar" element={<Usernavbar/>}></Route>
      <Route path="/slider" element={<Info1/>}></Route>
      <Route path="/card" element={<Cards/>}></Route>
      <Route path="/vacation" element={<Vacation/>}></Route>
      <Route path="/nextadven" element={<Nextadven/>}></Route>
      <Route path="/adventure" element={<Adventure/>}></Route>
      <Route path="/footer" element={<Footer/>}></Route>
      <Route path="/next" element></Route>
      <Route path="/package" element={<Package/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/destination" element={<Destination/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path="/blog" element={<Blog/>}></Route>
      <Route path="/details/:PackageId" element={<Details/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/confirm/:id" element={<Confirm/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>

    </Routes>
    </BrowserRouter>
    </Provider>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
