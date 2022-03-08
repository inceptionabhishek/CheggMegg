import React from 'react';
import {useState} from 'react';
import {Outlet, Navigate } from 'react-router-dom';


function Notlogin() {
    const [loggedIn, setLoggedIn] = useState(
      localStorage.getItem("login") === "true" ? true : false || false
    );
    const [notLoggedIn, setNotloggedIn] = useState(!loggedIn);
    const [curruseremail, setCurruseremail] = useState(
      localStorage.getItem("email") || ""
    );
    const [user, setUser] = useState(localStorage.getItem("user") || "");
    const [loggedInTutor, setLoggedInTutor] = useState(
      localStorage.getItem("user") === "tutor" || false
    );
    const [loggedInAdmin, setLoggedInAdmin] = useState(
      localStorage.getItem("user") === "admin" || false
    );
    const [loggedInStudent, setLoggedInStudent] = useState(
      localStorage.getItem("user") === "student" || false
    );
    console.log(loggedIn);
    console.log(loggedInTutor);
    console.log(loggedInAdmin);
    console.log(loggedInStudent);
    console.log(curruseremail);
    console.log(notLoggedIn);
    console.log(user);
    const useAuth = () => {
      return loggedIn === true ? true : false;
    };
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to ='/' />;
}

export default Notlogin