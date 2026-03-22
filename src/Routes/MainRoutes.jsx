import SignIn from "Pages/Auth/SignIn";
import SignUp from "Pages/Auth/SignUp";
import BookDescription from "Pages/BookDescription";
import Dashboard from "Pages/Dashboard";
import Home from "Pages/Home";
import NotFound from "Pages/NotFound";
import Shelves from "Pages/Shelves";
import { Route, Routes } from "react-router-dom";

export default function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/signup" element = {<SignUp/>}/>
            <Route path="/signin" element = {<SignIn/>}/>
            <Route path="/dashboard" element = {<Dashboard/>}/>
            <Route path="/shelves" element = {<Shelves/>}/>
            <Route path="/book/description" element = {<BookDescription/>}/>
            
            <Route path="*" element = {<NotFound/>}/>
        </Routes>
    );
}