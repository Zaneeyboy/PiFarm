import React from 'react'
import {FaFacebookF,FaGithub,FaInstagram,FaTwitter,FaRegCopyright} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
export default function Footer() {

    return(
        <footer id="footer" className="dark-section">
            <div className="container-fluid">
                <a className="social-icon" href="https://www.facebook.com/"><FaFacebookF/></a>
                <a className="social-icon" href="https://www.instagram.com/"><FaInstagram/></a>
                <a className="social-icon" href="https://twitter.com/explore"><FaTwitter/></a>
                <a className="social-icon" href="https://github.com/Zaneeyboy/PiFarm"><FaGithub/></a>
                <a className="social-icon" href="https://gmail.com"><MdEmail/></a>
                <p className="footer-copyright"><FaRegCopyright/> 2020 Big Twig Farms</p>
            </div>
        </footer>
    );
}