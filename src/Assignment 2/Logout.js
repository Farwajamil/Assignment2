import React from "react";
import {useNavigate} from 'react-router-dom';
import './Logout.css'
function Logout()
{
    const navigate =useNavigate();
  async  function checkout(event)
    {
        event.preventDefault();
        let result=await fetch("https://api-nodejs-todolist.herokuapp.com/user/logout",{
            method :"POST",
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify()
        });
        result=await result.json();
        console.log("result",result);
            localStorage.removeItem("user-info")
        navigate("/login");

    }
    return(
        <div className="stylelog">
            <h1>
                Welcome
            </h1>
            <button>Creative</button>
            <button onClick={checkout}>LogOut</button>
        </div>
    );
}
export default Logout;