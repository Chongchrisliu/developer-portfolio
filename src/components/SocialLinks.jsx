import React from 'react';

import {  Button } from "reactstrap";

import { socialLinks } from "../portfolio";

const SocialLinks = () => {
    return ( 
        <div className="btn-wrapper text-lg">
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="facebook"
                  href={socialLinks.facebook}
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i style={{'font-size':'20px'}} className="fa fa-facebook-square mt-2" />
                  </span>
                </Button>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="instagram"
                  href={socialLinks.instagram}
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i style={{'font-size':'20px'}} className="fa fa-instagram mt-2" />
                  </span>
                </Button>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="github"
                  href={socialLinks.github}
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i style={{'font-size':'23px', 'margin-top': '6px'}} className="fa fa-github" />
                  </span>
                </Button>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="twitter"
                  href={socialLinks.linkedin}
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i style={{'font-size':'20px'}} className="fa fa-linkedin mt-2 ml-1" />
                  </span>
                </Button>
        </div>
     );
}
 
export default SocialLinks;