import React from 'react';
import { connect } from 'react-redux';
import {  fetchAbout } from '../../actions/about'


class About extends React.Component{
    componentDidMount(){
        this.props.fetchAbout()
    }
    
    render(){
        const guestLinks = (
            <div className="container">
                    {
                        this.props.about.map(ab => (
                            <div>
                                <h1>{ab.title}</h1>
                                <p>{ab.content}</p>
                            </div>
                        ))
                    }
                    </div>
        )
        const authLinks = (
            <h1>Hey</h1>
        )
        const { isAuthenticated} = this.props
        return(
            <section id="about">
                {isAuthenticated ? authLinks : guestLinks}
            </section>

        )
    }
}
const mapStateToProps = state => ({
    about:state.about.about,
    isAuthenticated:state.auth.isAuthenticated
})
export default  connect(mapStateToProps,{fetchAbout})(About);