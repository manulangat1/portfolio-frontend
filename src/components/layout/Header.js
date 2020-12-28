import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { logout } from '../../actions/auth'

class Header extends React.Component{
    render(){
      const { isAuthenticated }= this.props
        return(
            <header>
                <div className="container">
                    <div className="grids">
                        <h1>LANGAT KIPCHIRCHIR</h1>
                        <div className="web-links">
                            <ul>
                                <li>  <NavLink to="/">Home</NavLink> </li>
                                <li> <NavLink to="/projects">Projects</NavLink> </li>
                                <li> <NavLink to="/blog">Blog</NavLink> </li>
                                { isAuthenticated ? <a><button onClick= {this.props.logout} className="primary-btn"><i class="fas fa-sign-out-alt"> Log out</i></button></a> : ''}
                            </ul>
                        </div>

                        <div className="mobile-links">

                        <div class="menu-btn">
      <div class="btn-line"></div>
      <div class="btn-line"></div>
      <div class="btn-line"></div>
    </div>

    <nav class="menu">
      <div class="menu-branding">
        <div class="portrait"></div>
      </div>
      <ul class="menu-nav">
        <li class="nav-item current">
          <a href="index.html" class="nav-link">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a href="about.html" class="nav-link">
            About Me
          </a>
        </li>
        <li class="nav-item">
          <a href="work.html" class="nav-link">
            My Work
          </a>
        </li>
        <li class="nav-item">
          <a href="contact.html" class="nav-link">
            How To Reach Me
          </a>
        </li>
      </ul>
    </nav>

                        </div>
                        
                    </div>
                </div>
            </header>

        )
    }
}
const mapStateToProps = state => ({
  isAuthenticated:state.auth.isAuthenticated
})
export default  connect(mapStateToProps,{logout})(Header)