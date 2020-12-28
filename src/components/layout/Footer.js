import React from 'react';
import { NavLink } from 'react-router-dom'


class Footer extends React.Component{
    render(){
        return(
            <footer>
                <p>Kipchirchir Langat Emmanuel</p>
                <p> <NavLink to="/login/">Admin login</NavLink> </p>
            </footer>

        )
    }
}
export default Footer;