import React from "react";

const Logout=()=>{

    function logoutUser(){
        console.log("logout button clicked");
    }

    return(
        <button onClick={logoutUser}>Logout</button>
    );
}

export default Logout;