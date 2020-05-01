import React,{useContext} from "react";
import {auth} from "../../config/firebase";
import {AuthContext} from "../../config/Auth";
import {css} from "emotion";
import {Redirect} from "react-router-dom";

const quotes={
    0:"Success isn't always about greatness. It's about consistency. Consistent hard work leads to success. Greatness will come",
    1:"The glory of gardening: Hands in the dirt, Head in the sun, Heart with nature. To nurture a garden is to feed not just on the body, but on the soul.",
    2:"There are no gardening mistakes, only experiments",
    3:"You can't buy happiness but you can grow plants and that's pretty much the same thing"
};

const Logout=()=>{

    function logoutUser(){
        console.log("signed out");
        auth.signOut();
    }

    const number=Math.floor(Math.random()*4);

    const {currentUser} = useContext(AuthContext);

    if(!currentUser){
      return (<><Redirect to="/PiFarm" /></>);
    }

    return(
        <div className="container-fluid colored-section">
            <h1 className="section-heading">We hope to see you again soon!</h1>
            <p> </p>
            <button className={css`
                appearance: none;
                outline: 0;
                background-color:#343A40;;
                border:0;
                padding:10px 15px;
                color: #ffdc34;
                border-radius: 3 px;
                width:250px;
                font-size:18px;
            `} onClick={logoutUser}>Logout</button>


            <div
                className={css`
                display: flex;
                flex-direction: column;
                align-items: center;
                margin: 40px auto;
                max-width: 600px;

                p {
                text-align: center;
                margin-bottom: 20px;
                color: black;
                font-size:1.5rem;
                }
          `}
        >
            <p>"{quotes[number]}"</p>
        </div>
        </div>
        
    );
}

export default Logout;