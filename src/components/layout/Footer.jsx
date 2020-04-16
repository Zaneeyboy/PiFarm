import React from 'react'
import {FaFacebookF,FaGithub,FaInstagram,FaTwitter} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
export default function Footer() {

    return(
        <footer id="footer">
            <div>
                <a href="https://www.facebook.com/"><FaFacebookF/></a>
                <a href="https://www.instagram.com/"><FaInstagram/></a>
                <a href="https://twitter.com/explore"><FaTwitter/></a>
                <a href="https://github.com/Zaneeyboy/PiFarm"><FaGithub/></a>
                <a href="https://gmail.com"><MdEmail/></a>
                <p>2020 Big Twig Farms</p>
            </div>
        </footer>
    );
}