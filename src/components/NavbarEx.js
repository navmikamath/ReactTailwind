import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Home';
import Login from './Login';


const TailwindEx =() =>{

  return (
    <Router>
    <div>
      <nav className="bg-purple-600 text-white flex justify-between">
        <span className="text-xl flex items-center mx-3 font-bold">
          BookStore
        </span>
        <ul className="px-28 py-4 space-x-11 flex justify-end">
            <li className=" cursor-pointer">
            <a href="/">Home</a> 
              </li>
            <li className=" cursor-pointer">About</li>
            <li className=" cursor-pointer">Phone Gallery</li>
            <li className=" cursor-pointer">Contact Us</li>
            <div className="hidden space-x-2 md:inline-block">
                    <a href="/login" className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100">
                        Sign in
                    </a>
                    
            </div>
        </ul>
    </nav>
    
    
    </div>
    <div>
        <Switch>
          
          <Route path="/login">
           <Login/>
          </Route>
          
         
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  )
}
export default TailwindEx 