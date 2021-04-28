import React from 'react';

import {  Button } from "reactstrap";

import { socialLinks } from "../../data/data";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import './SocialLinks.css'
const SocialLinks = () => {
    return ( 
        <div className="btn-wrapper text-lg">
                <Button
                  className="btn-icon-or ml-1"
                  href={socialLinks.facebook}
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <FaFacebookSquare/>
                  </span>
                </Button>
                <Button
                  className="btn-icon-or ml-1"
                  href={socialLinks.github}
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                   <FaGithub/>
                  </span>
                </Button>
                <Button
                 className="btn-icon-or ml-1"
                  href={socialLinks.linkedin}
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <FaLinkedin/>
                  </span>
                </Button>
        </div>
     );
}
 
export default SocialLinks;